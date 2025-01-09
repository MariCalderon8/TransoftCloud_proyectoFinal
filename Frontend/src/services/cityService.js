import apiService from './apiService';

class CityService {

    async fetchAllCities() {
        return await apiService.get('/cities')
    }

    async fetchCityById(idciudad){
        return await apiService.get(`cities/${idciudad}`)
    }
}

export default new CityService();