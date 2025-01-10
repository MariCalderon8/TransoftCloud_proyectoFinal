import cityService from "@/services/cityService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCityStore = defineStore(
    'cityStore', () => {
        const cities = ref([]);
        const citiesMap = ref(new Map());
        const error = ref();

        const fetchAllCities = async () => {
            try {
                cities.value = await cityService.fetchAllCities();

                citiesMap.value = new Map(
                    cities.value.map(city => [city.id, city])
                );
            } catch(error){
                error.value = "Error al cargar las ciudades";
                console.error(error);
            }
        }

        const getCityName = (idciudad) => {
            return citiesMap.value.get(idciudad)?.nombre || 'N/A';
        }

        return {
            cities,
            error,
            fetchAllCities,
            getCityName
        }
    }
)