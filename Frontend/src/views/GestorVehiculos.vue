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
                    
                    <div class="col-6">
                        <label for="propietario" class="form-label">Cedula propietario</label>
                        <input type="text" v-model="form.propietario" class="form-control" id="propietario" placeholder="CC" required>
                    </div>


                    <div class="col-6">
                    <label for="placa" class="form-label">Placa</label>
                    <input type="text" v-model="form.placa" class="form-control" id="placa" placeholder="ABC123" required>
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

                <!-- <div class="col-6">
                <label for="tecno" class="form-label">Fecha de tecnicomecanica</label>
                <input type="date" v-model="" class="form-control" id="tecno" placeholder="DD-MM-AAAA" required>
                </div> -->

                <!-- <div class="col-6">
                <label for="vinculacion" class="form-label">Fecha de vinculacion</label>
                <input type="date" class="form-control" id="vinculacion" placeholder="DD-MM-AAAA" required>
                </div> -->

            <div class="col-6">
                
                        <!-- <label for="tenedor" class="form-label">Tenedor</label>
                        <select class="form-select" id="tenedor" placeholder="Tenedor">
            
                            <option selected disabled>Seleccione el tenedor</option>
                            
                            <option value="t1">Tenedor 1</option>     
                            
                            <option value="t2">Tenedor 2</option>
                                        
                            <option value="t3">Tenedor 3</option>                              
                                
                            <option value="t4">Tenedor 4</option>                 
                                            
                        </select> -->

                    <div class="col-12 -mb-3">
                        <div class="form-check">
                            <input class="form-check-input" v-model="form.estaActivo" type="checkbox" id="estadoChecked" checked>
                            <label class="form-check-label" for="estadoChecked">Estado Activo</label>
                        </div>
                    </div>

                
                    </div>
                    <h1> </h1>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="submit" class="btn btn-primary me-md-2">Crear</button>
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
                            <button class="btn btn-primary btn-sm" @click="editVehicle(vehicle.placa)">Editar</button>
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
import { useVehicleSotre } from '@/stores/vehicleStore';
import { defineComponent, onMounted, ref } from 'vue';

    export default defineComponent({
        name: 'GestorVehiculos',
        components: { Header, Footer },
        setup() {
            const vehicleStore = useVehicleSotre();
            const form = ref({
                placa : "", 
                tipo : "", 
                propietario : "", 
                marca : "", 
                modelo : "", 
                chasis : "", 
                motor : "", 
                capacidadCarga : 0, 
                foto : "", 
                estaActivo : 0, 
                usuario : ""
            })

            onMounted(() => {
                vehicleStore.fetchAllVehicles();
            });

            const handleFormSubmit = async () =>{
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
                resetForm();
                await vehicleStore.fetchAllVehicles();
            }

            const deleteVehicle = async (placa) => {
                await vehicleStore.deleteVehicle(placa);
                await vehicleStore.fetchAllVehicles();
            }

            const editVehicle = async (placa) => {
                alert('FUNCIÓN PENDIENTE')
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
                    estaActivo : "", 
                    usuario : ""
                }
            }

            return{
                vehicleStore,
                form,
                handleFormSubmit,
                deleteVehicle,
                editVehicle,
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
