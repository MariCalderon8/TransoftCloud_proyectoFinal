<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
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
                        <input type="number" v-model="form.tipo" class="form-control" id="tipo" placeholder="Tipo de vehiculo" required>
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

                <!-- <div class="col-6">
                <label for="tecno" class="form-label">Fecha de tecnicomecanica</label>
                <input type="date" v-model="" class="form-control" id="tecno" placeholder="DD-MM-AAAA" required>
                </div> -->

                <!-- <div class="col-6">
                <label for="vinculacion" class="form-label">Fecha de vinculacion</label>
                <input type="date" class="form-control" id="vinculacion" placeholder="DD-MM-AAAA" required>
                </div> -->

            <div class="col-6">
                <div class="col-6">
                    <label for="usuario" class="form-label">Cedula del usuario</label>
                    <input type="number" v-model="form.usuario" class="form-control" id="motor" placeholder="CC usuario" required>
                </div>
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
                
        </div>
        <Footer/>
    </body>
    
</template>


<script lang="js">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { useVehicleSotre } from '@/stores/vehicleStore';
import { defineComponent, ref } from 'vue';

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

</style>
