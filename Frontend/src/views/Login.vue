
<template>

<body class="text-center">  
<main class="form-signin">
  <form>
    
        <h1 class="d-grid mt-3 mb-3 col-4 mx-auto">Transoftcloud</h1>

        <div class="text-center">
     
</div>


     <div class="d-grid mt-3 mb-3 col-4 mx-auto">
      <label for="floatingInput">Usuario</label>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      

    </div>

    <div class="d-grid mt-3 mb-3 col-4 mx-auto">
      <label for="floatingPassword">Contraseña</label>
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      
    </div>


    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Ingresar</button>

</div>
  
        <p class="mt-5 mb-3 text-muted">&copy; 2025-2026</p>
  </form>

  <!-- Apartado para pruebas -->
  <router-link  to="/gestor-rutas">
                    <button>Ir a rutas</button>
                </router-link>
</main>

   </body>
  </template>
  
  
  <script lang="js">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Login',
  })
  </script>
  