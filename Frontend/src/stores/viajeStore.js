
import viajesService from "@/services/viajesService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useViajeStore = defineStore(
    'viajeStore', () =>{
        const viajes = ref([]);
        const error = ref(null);

        const fetchAllViajes = async () =>{
            try{
                viajes.value = await viajesService.fetchAllViajes();
            } catch(err){
                error.value = 'Error al cargar todos los viajes';
                console.error(error);
            }
        }

        const fetchViajeById = async (idviaje) =>{
            try{
                const viaje = await viajesService.fetchViajeById(idviaje);
                return viaje[0];
            } catch(err){
                error.value = 'Error al buscar el viaje';
                console.error(error);
            }
        }

        const createViaje = async(newViaje) =>{
            try{
                await viajesService.createViaje(newViaje);
                alert('Viaje registrado correctamente');
            }catch(error){
                error.value = 'No se pudo crear el viaje';
                console.error(error);

                alert('No se pudo crear el viaje');
            }
        }

        const deleteViaje = async(idviaje) =>{
            try{
                await viajesService.deleteViaje(idviaje);
                alert('Viaje eliminado con éxito');
            }catch(error){
                error.value = 'No se pudo eliminar el viaje';
                console.error(error);
                alert('No se pudo eliminar el viaje');
            }
        }

        const updateViaje = async(viajeEditado) => {
            try{
                await viajesService.updateViaje(viajeEditado);
                alert('Viaje editado con éxito');
            } catch(error) {
                error.value = 'No se pudo editar el viaje';
                console.error(error);
                alert('No se pudo editar el viaje');
            }
        }

        return{
            fetchAllViajes,
            fetchViajeById,
            createViaje,
            deleteViaje,
            updateViaje,
            viajes,
            error
        }
    }
)