import Vehicle from "@/models/vehicleModel";
import vehicleService from "@/services/vehicleService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useVehicleSotre = defineStore(
    'vehicleStore', () =>{
        const vehicles = ref([]);
        const error = ref(null);

        const fetchAllVehicles = async () =>{
            try{
                vehicles.value = await vehicleService.fetchAllVehicles();
            } catch(err){
                error.value = 'Error al cargar todos los vehiculos';
                console.error(error);
            }
        }

        const fetchVehicleByPlaca = async (placa) =>{
            try{
                const vehicle = await vehicleService.fetchVehicleByPlaca(placa);
                return vehicle[0];
            } catch(err){
                error.value = 'Error al buscar vehiculo';
                console.error(error);
            }
        }

        const createVehicle = async(placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario) =>{
            const newVehicle = new Vehicle(placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario);
            try{
                await vehicleService.createVehicle(newVehicle);
                alert('Vehículo registrado correctamente');
            }catch(error){
                error.value = 'No se pudo crear el vehículo';
                console.error(error);

                alert('No se pudo crear el vehiculo');
            }
        }

        const deleteVehicle = async(placa) =>{
            try{
                await vehicleService.deleteVehicle(placa);
                alert('Vehículo eliminado con éxito');
            }catch(error){
                error.value = 'No se pudo eliminar el vehiculo';
                console.error(error);
                alert('No se pudo eliminar el vehículo');
            }
        }

        const updateVehicle = async(vehiculoEditado) => {
            try{
                await vehicleService.updateVehicle(vehiculoEditado);
                alert('Vehiculo editado con éxito');
            } catch(error) {
                error.value = 'No se pudo editar el vehiculo';
                console.error(error);
                alert('No se pudo editar el vehículo');
            }
        }

        return{
            fetchAllVehicles,
            fetchVehicleByPlaca,
            createVehicle,
            deleteVehicle,
            updateVehicle,
            vehicles,
            error
        }
    }
)