<template>
    <body>
        <div class="container">
            <Header/>
            <form class="row border border-primary rounded p-3">
                <h1></h1>

                <h1>Viajes</h1>


                <div class="col-6">
                    <label for="fvinculacionInput" class="form-label">Fecha </label>
                    <input type="date" class="form-control" id="fvinculacionInput" placeholder="DD MM AAAA">
                </div>

                <div class="col-6">
                    <label for="clienteInput" class="form-label">Cliente</label>
                    <input type="text" class="form-control" id="clienteInput" placeholder="Nombres y apellidos">
                </div>

                <div class="col-6">
                    <label for="origenInput" class="form-label">Origen</label>
                    <select class="form-select" id="origenInput">
            
                        <option selected disabled>Seleccione el origen</option>
                            
                        <option value="t1">Origen 1</option>     
                            
                        <option value="t2">Origen 2</option>
                                    
                        <option value="t3">Origen 3</option>                              
                            
                        <option value="t4">Origen 4</option>                 
                                            
                    </select>

                </div>

                <div class="col-6">
                    <label for="productoInput" class="form-label">Producto</label>
                    <select class="form-select" id="productoInput">
            
                        <option selected disabled>Seleccione el producto</option>
                            
                        <option value="t1">Producto 1</option>     
                            
                        <option value="t2">Producto 2</option>
                                    
                        <option value="t3">Producto 3</option>                              
                            
                        <option value="t4">Producto 4</option>                 
                                            
                    </select>
                </div>


                <div class="col-6">
                    <label for="destinoInput" class="form-label">Destino</label>
                    <select class="form-select" id="destinoInput">
            
                        <option selected disabled>Seleccione el destino</option>
                            
                        <option value="t1">Destino 1</option>     
                            
                        <option value="t2">Destino 2</option>
                                    
                        <option value="t3">Destino 3</option>                              
                            
                        <option value="t4">Destino 4</option>                 
                                            
                    </select>
                </div>

                
                        
                <div class="col-6">
                    <label for="CantidadInput" class="form-label">Cantidad</label>
                    <input type="text" class="form-control" id="Cantidad" placeholder="">
                </div>


                <div class="col-6">
                    <label for="kilometroInput" class="form-label">Kilometros</label>
                    <input type="text" class="form-control" id="kilometroInput" placeholder="km">
                </div>

                <div class="col-6">
                    <label for="hcargueInput" class="form-label">Hora de cargue</label>
                    <input type="text" class="form-control" id="hcargueInput" placeholder="hh:mm">
                </div>

            
                <div class="col-6">
                    <label for="hdescargueInput" class="form-label">Hora de descargue</label>
                    <input type="text" class="form-control" id="hdescargueInput" placeholder="hh:mm">
                </div>

                <h2>Valores</h2>

                <div class="col-6">
                    <label for="vpagarInput" class="form-label">Valor a pagar</label>
                    <input type="text" class="form-control" id="vpagarInput" placeholder="$">
                </div>

                <div class="col-6">
                    <label for="tarifaInput" class="form-label">Tarifa cliente</label>
                    <input type="text" class="form-control" id="tarifaInput" placeholder="$">
                </div>

        </form>

        <h1></h1>
        
        <form class="row border border-primary rounded p-3">


            <h2 class="col-6">Vehiculo</h2>
            
            <h2 class="col-6">Conductor</h2>

                <div class="col-6">
                    <label for="placaInput" class="form-label">Placa</label>
                    <input type="text" class="form-control" id="placaInput" placeholder="ABC123">
                </div>

                <div class="col-6">
                    <label for="DocumentoInput" class="form-label">Documento</label>
                    <input type="text" class="form-control" id="DocumentoInput" placeholder="Documento">
                </div>


                <div class="col-6">
                    <button class="btn btn-primary me-md-2" type="button">Ver detalles</button>
                </div>

                    <div class="col-6">
                    <button class="btn btn-primary me-md-2" type="button">Ver detalles</button>
                    </div>

                
        </form>

        <h1></h1>

        <form class="row border border-primary rounded p-3">

        <div class="col-4">
            <button class="btn btn-primary me-md-2" type="button">Guardar</button>
        </div>

            <div class="col-4">
            <button class="btn btn-primary me-md-2" type="button">Cancelar</button>
            </div>

            <div class="col-4">
            <button class="btn btn-primary me-md-2" type="button">Nuevo registro</button>
            </div>

        </form>  
        </div>
        <Footer/>
    </body>

</template>

<script lang="js">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';


    export default defineComponent({
        name: 'GestorRutas',
        components: { Header, Footer }
    })

</script>