import Vehicle from "@/models/vehicleModel";
import vehicleService from "@/services/vehicleService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useVehicleSotre = defineStore(
    'vehicleStore', () =>{
        const vehicles = ref([]);
        const error = ref(null);

        const fetchAllVehicles = async () =>{
            //Pendiente
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

        return{
            createVehicle,
            vehicles,
            error
        }
    }
)