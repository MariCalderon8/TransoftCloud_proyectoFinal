<template>
    <div class="principal-container">
        <div class="login-container">
        <img src="../images/logo.jpeg" alt="Logo" class="header-image">
        <h2>Inicio de Sesión</h2>
            <form action="/login" method="post">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>

                <!-- Apartado para pruebas -->
                <router-link  to="/gestor-rutas">
                    <button>Ir a rutas</button>
                </router-link>
                
                <input type="submit" value="Iniciar Sesión">
            </form>
        </div>
    </div>
</template>

<style scoped>
    @import '../style/styles_login.css';
</style>

<script lang="js">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Login',
})
</script>