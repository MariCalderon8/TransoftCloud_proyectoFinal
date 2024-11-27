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
                        <img src="../images/default-profile-image.jpg" alt="Imagen de Perfil" class="profile-image" id="profileImage">
                        <input type="file" accept="image/*" id="profileImageInput" class="profile-image-input">
                        <label for="profileImageInput" class="btn btn-primary btn-sm mt-2">Adjuntar Imagen</label>
                    </div>
                </div>

                <form class="row border border-primary rounded p-3 g-3 mt-5">
                    
                    <div class="col-6">
                        <label for="propietario" class="form-label">Propietario</label>
                        <input type="text" class="form-control" id="propietario" placeholder="Apellidos Nombres" required>
                    </div>

                    <div class="col-6">
                        <label for="cedula" class="form-label">Número de Cédula</label>
                        <input type="text" class="form-control" id="cedula" placeholder="Número de Cédula" required>
                    </div>

                    <div class="col-6">
                    <label for="placa" class="form-label">Placa</label>
                    <input type="text" class="form-control" id="placa" placeholder="ABC123" required>
                </div>

                    <div class="col-6">
                        <label for="marca" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="marca" placeholder="marca" required>
                    </div>

                    <div class="col-6">
                        <label for="modelo" class="form-label">Modelo</label>
                        <input type="text" class="form-control" id="modelo" placeholder="Modelo" required>
                    </div>

                    <div class="col-6">
                        <label for="tipo" class="form-label">Tipo</label>
                        <input type="text" class="form-control" id="tipo" placeholder="Tipo de vehiculo" required>
                    </div>

                    <div class="col-6">
                    <label for="capacidad" class="form-label">Cap/Carga</label>
                    <input type="text" class="form-control" id="capacidad" placeholder="Cap. en kg." required>
                </div>

                <div class="col-6">
                    <label for="chasis" class="form-label">Numero de Chasis</label>
                    <input type="text" class="form-control" id="chasis" placeholder="Num. chasis" required>
                </div>

                <div class="col-6">
                    <label for="motor" class="form-label">Numero de Motor</label>
                    <input type="text" class="form-control" id="motor" placeholder="Num. Motor" required>
                </div>

                <div class="col-6">
                <label for="tecno" class="form-label">Fecha de tecnicomecanica</label>
                <input type="date" class="form-control" id="tecno" placeholder="DD-MM-AAAA" required>
                </div>

                <div class="col-6">
                <label for="vinculacion" class="form-label">Fecha de vinculacion</label>
                <input type="date" class="form-control" id="vinculacion" placeholder="DD-MM-AAAA" required>
                </div>

            <div class="col-6">
                        <label for="tenedor" class="form-label">Tenedor</label>
                        <select class="form-select" id="tenedor" placeholder="Tenedor">
            
                            <option selected disabled>Seleccione el tenedor</option>
                            
                            <option value="t1">Tenedor 1</option>     
                            
                            <option value="t2">Tenedor 2</option>
                                        
                            <option value="t3">Tenedor 3</option>                              
                                
                            <option value="t4">Tenedor 4</option>                 
                                            
                        </select>

                    <div class="col-12 -mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="estadoChecked" checked>
                            <label class="form-check-label" for="estadoChecked">Estado Activo</label>
                        </div>
                    </div>

                
                    </div>
                </form>
                <h1></h1>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button class="btn btn-primary me-md-2" type="button">Crear</button>
                    <button class="btn btn-secondary" type="button">Cancelar</button>
                </div>
        </div>
        <Footer/>
    </body>
    
</template>

<script lang="js">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'GestorVehiculos',
        components: { Header, Footer }
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