import apiService from './apiService';

class VehicleService {
  async fetchAllVehicles() {
    return await apiService.get('/vehicles');
  }

  async fetchVehicleByPlaca(placa) {
    return await apiService.get(`/vehicles/${placa}`);
  }

  async createVehicle(vehicle) {
    return await apiService.post('/vehicles', vehicle);
  }

  async updateVehicle(vehicle) {
    return await apiService.put(`/vehicles/${vehicle.placa}`, vehicle);
  }

  async deleteVehicle(placa) {
    return await apiService.delete(`/vehicles/${placa}`);
  }
}

export default new VehicleService();
