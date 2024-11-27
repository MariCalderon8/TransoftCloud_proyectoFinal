<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/gestor-vehiculos">
            Gestor de vehículos
        </router-link>
        </li>

        <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/gestor-rutas">
            Gestor de rutas
        </router-link>
        </li>

        <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/gestor-clientes">
            Gestor de clientes
        </router-link>
        </li>

        <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/">
            <i class="fas fa-sign-out-alt"></i> Salir
        </router-link>
        </li>
    </ul>
</template>

<script lang="js">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Header'
    })
</script>