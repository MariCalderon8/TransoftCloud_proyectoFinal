<template>
    <body>
        <div class="container">
            <Header/>

                <div class="header-wrapper">
                    <h1>Registro de Vehiculos</h1>
                    <div class="profile-image-wrapper">
                        <img src="../images/default-profile-image.jpg" alt="foto de perfil" class="profile-image" id="profileImage">
                        <input type="file" accept="image/*" id="profileImageInput" class="profile-image-input">
                        <label for="profileImageInput" class="btn btn-primary btn-sm mt-2">Adjuntar Imagen</label>
                    </div>
                </div>

                <form @submit.prevent="handleFormSubmit" class="row border border-primary rounded p-3 g-3 mt-5">
                    <h2>{{ isEditing ? 'Editando...' : 'Agregar vehículo' }}</h2>
                    <div class="col-6">
                        <label for="propietario" class="form-label">Cedula propietario</label>
                        <input type="text" v-model="form.propietario" class="form-control" id="propietario" placeholder="CC" required>
                    </div>


                    <div class="col-6">
                    <label for="placa" class="form-label">Placa</label>
                    <input type="text" v-model="form.placa" class="form-control" id="placa" placeholder="ABC123" required :disabled="isEditing">
                </div>

                    <div class="col-6">
                        <label for="marca" class="form-label">Marca</label>
                        <input type="text" v-model="form.marca" class="form-control" id="marca" placeholder="marca" required>
                    </div>

                    <div class="col-6">
                        <label for="modelo" class="form-label">Modelo</label>
                        <input type="number" v-model="form.modelo" class="form-control" id="modelo" placeholder="Modelo" required>
                    </div>

                    <div class="col-6">
                        <label for="tipo" class="form-label">Tipo</label>
                        <input type="text" v-model="form.tipo" class="form-control" id="tipo" placeholder="Tipo de vehiculo" required>
                    </div>

                    <div class="col-6">
                    <label for="capacidad" class="form-label">Cap/Carga</label>
                    <input type="number" v-model="form.capacidadCarga" class="form-control" id="capacidad" placeholder="Cap. en kg." required>
                </div>

                <div class="col-6">
                    <label for="chasis" class="form-label">Numero de Chasis</label>
                    <input type="text" v-model="form.chasis" class="form-control" id="chasis" placeholder="Num. chasis" required>
                </div>

                <div class="col-6">
                    <label for="motor" class="form-label">Numero de Motor</label>
                    <input type="text" v-model="form.motor" class="form-control" id="motor" placeholder="Num. Motor" required>
                </div>
                <div class="col-6">
                    <label for="usuario" class="form-label">Cedula del usuario</label>
                    <input type="number" v-model="form.usuario" class="form-control" id="motor" placeholder="CC usuario" required>
                </div>


            <div class="col-6">

                    <div class="col-12 -mb-3">
                        <div class="form-check">
                            <input class="form-check-input" v-model="form.estaActivo" type="checkbox" id="estadoChecked" checked>
                            <label class="form-check-label" for="estadoChecked">Estado Activo</label>
                        </div>
                    </div>

                
                    </div>
                    <h1> </h1>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="submit" class="btn btn-primary me-md-2">{{ isEditing ? 'Guardar cambios' : 'Crear vehiculo' }}</button>
                        <button class="btn btn-secondary" @click="resetForm" type="button">Cancelar</button>
                    </div>
                </form>
                
                <h2 class="register-vehicles-title">Vehiculos Registrados</h2>

                <table class="table">
                
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Placa</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">CC Propietario</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Chasis</th>
                        <th scope="col">Motor</th>
                        <th scope="col">Cap / Carga</th>
                        <th scope="col">¿Está activo?</th>
                        <th scope="col">CC Usuario</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-for="vehicle in vehicleStore.vehicles" :vehicle="vehicle">
                        <tr>
                        <th scope="row">{{ vehicle.placa }}</th>
                        <td>{{ vehicle.marca }}</td>
                        <td>{{ vehicle.modelo }}</td>
                        <td>{{ vehicle.propietario }}</td>
                        <td>{{ vehicle.tipo }}</td>
                        <td>{{ vehicle.chasis }}</td>
                        <td>{{ vehicle.motor }}</td>
                        <td>{{ vehicle.capacidadCarga }}</td>
                        <td>{{ vehicle.estaActivo === 1 ? 'SI' : 'NO' }}</td>
                        <td>{{ vehicle.usuario }}</td>
                        <td class="td-acciones">
                            <button class="btn btn-danger btn-sm" @click="deleteVehicle(vehicle.placa)">Eliminar</button>
                            <button class="btn btn-primary btn-sm" @click="loadVehicleForEditting(vehicle.placa)">Editar</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <Footer/>
    </body>
    
</template>


<script lang="js">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Vehicle from '@/models/vehicleModel';
import { useVehicleSotre } from '@/stores/vehicleStore';
import { defineComponent, onMounted, ref } from 'vue';

    export default defineComponent({
        name: 'GestorVehiculos',
        components: { Header, Footer },
        setup() {
            const vehicleStore = useVehicleSotre();
            const isEditing = ref(false);
            const form = ref({
                placa : "", 
                tipo : "", 
                propietario : "", 
                marca : "", 
                modelo : 0, 
                chasis : "", 
                motor : "", 
                capacidadCarga : 0, 
                foto : "", 
                estaActivo : true, 
                usuario : 0
            })

            onMounted(() => {
                vehicleStore.fetchAllVehicles();
            });

            const handleFormSubmit = async () =>{
                if(isEditing.value){
                    const vehicle = new Vehicle(
                        form.value.placa,
                        form.value.tipo,
                        form.value.propietario,
                        form.value.marca,
                        form.value.modelo,
                        form.value.chasis,
                        form.value.motor,
                        form.value.capacidadCarga,
                        form.value.foto,
                        form.value.estaActivo,
                        form.value.usuario
                    )
                    await vehicleStore.updateVehicle(vehicle);
                } else {
                    await vehicleStore.createVehicle(
                        form.value.placa,
                        form.value.tipo,
                        form.value.propietario,
                        form.value.marca,
                        form.value.modelo,
                        form.value.chasis,
                        form.value.motor,
                        form.value.capacidadCarga,
                        form.value.foto,
                        form.value.estaActivo,
                        form.value.usuario
                    )
                }
                
                resetForm();
                await vehicleStore.fetchAllVehicles();
            }

            const deleteVehicle = async (placa) => {
                await vehicleStore.deleteVehicle(placa);
                await vehicleStore.fetchAllVehicles();
            }

            const loadVehicleForEditting = async (placa) => {
                isEditing.value = true;
                const vehicle = await vehicleStore.fetchVehicleByPlaca(placa);
                window.scrollTo({ top: 200, behavior: 'smooth' });
                form.value = {
                    placa: vehicle.placa,
                    tipo: vehicle.tipo_vehiculo,
                    propietario: vehicle.propietario,
                    marca: vehicle.marca,
                    modelo: vehicle.modelo,
                    chasis: vehicle.chasis,
                    motor: vehicle.motor,
                    capacidadCarga: vehicle.capacidad_carga,
                    foto: vehicle.foto,
                    estaActivo: Boolean(vehicle.activo),
                    usuario: vehicle.usuario
                };
            }

            const resetForm = () =>{
                form.value = {
                    placa : "", 
                    tipo : "", 
                    propietario : "", 
                    marca : "", 
                    modelo : "", 
                    chasis : "", 
                    motor : "", 
                    capacidadCarga : "", 
                    foto : "", 
                    estaActivo : true, 
                    usuario : ""
                }
                isEditing.value = false;
            }

            return{
                vehicleStore,
                form,
                isEditing,
                handleFormSubmit,
                deleteVehicle,
                loadVehicleForEditting,
                resetForm
            }
        }
    })
</script>


<style scoped>
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    
    .profile-image-wrapper {
        text-align: center;
    }

    .profile-image {
        width: 100px; 
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ddd;
    }
    
    .profile-image-input {
        display: none;
    }

    .register-vehicles-title{
        padding: 20px;
        text-align: center;
    }

    .td-acciones{
        display: flex;
        justify-content: center;
        gap: 5px;
    }

</style>
