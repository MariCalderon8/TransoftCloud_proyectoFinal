import cityService from "@/services/cityService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCityStore = defineStore(
    'cityStore', () => {
        const cities = ref([]);
        const error = ref();

        const fetchAllCities = async () => {
            try {
                cities.value = await cityService.fetchAllCities();
            } catch(error){
                error.value = "Error al cargar las ciudades";
                console.error(error);
            }
        }

        const fetchCityById = async (idciudad) => {
            try{
                const city = await cityService.fetchCityById(idciudad);
                return city[0];
            } catch (error) {
                error.value = "Error al cargar la ciudad";
                console.error(error);
            }
        }

        return {
            cities,
            error,
            fetchAllCities,
            fetchCityById
        }
    }
)