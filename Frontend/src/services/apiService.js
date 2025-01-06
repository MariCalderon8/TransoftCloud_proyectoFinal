// services/apiService.js
import axios from 'axios';

class ApiService {
  constructor() {
    
    this.instance = axios.create({
      baseURL: import.meta.env.URL_BACKEND || 'http://localhost:3000',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Configurar interceptores para manejo de tokens, etc.
    this.setupInterceptors();
  }

  setupInterceptors() {
    // Interceptor de solicitud
    this.instance.interceptors.request.use(
      config => {
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // Interceptor de respuesta para manejo de errores
    this.instance.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          // Manejar token expirado
          this.handleUnauthorized();
        }
        return Promise.reject(error);
      }
    );
  }

  handleUnauthorized() {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }

  // Métodos genéricos
  async get(endpoint, config = {}) {
    try {
      const response = await this.instance.get(endpoint, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint, data, config = {}) {
    try {
      const response = await this.instance.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(endpoint, data, config = {}) {
    try {
      const response = await this.instance.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint, config = {}) {
    try {
      const response = await this.instance.delete(endpoint, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    const errorMessage = error.response 
      ? error.response.data.message 
      : 'Error de conexión';
    
    console.error('Error en la API:', errorMessage);
    throw error;
  }
}

export default new ApiService();