// services/apiService.js
import axios from 'axios';
import { getEnvironmentConfig } from '@/config/environments';

class ApiService {
  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const config = getEnvironmentConfig(env);
    
    this.instance = axios.create({
      baseURL: config.apiBaseUrl,
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
    // Lógica para manejar token expirado
    localStorage.removeItem('authToken');
    // Redirigir al login
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

  // Métodos similares para put, delete, etc.

  handleError(error) {
    const errorMessage = error.response 
      ? error.response.data.message 
      : 'Error de conexión';
    
    console.error('Error en la API:', errorMessage);
    throw error;
  }
}

export default new ApiService();