import apiService from './apiService';

class ViajesService {
  async fetchAllViajes() {
    return await apiService.get('/viajes');
  }

  async fetchViajeById(idviaje) {
    return await apiService.get(`/viajes/${idviaje}`);
  }

  async createViaje(viaje) {
    return await apiService.post('/viajes', viaje);
  }

  async updateViaje(viaje) {
    return await apiService.put(`/viajes/${viaje.idviaje}`, viaje);
  }

  async deleteViaje(idviaje) {
    return await apiService.delete(`/viajes/${idviaje}`);
  }
}

export default new ViajesService();
