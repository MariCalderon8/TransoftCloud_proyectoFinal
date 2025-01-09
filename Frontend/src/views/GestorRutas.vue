<template>
    <body>
    <div class="container">
        <Header/>
        <form @submit.prevent="handleFormSubmit">
            <div  class="row border border-primary rounded p-3">

                <h1></h1>

                <h1>Viajes</h1>


                <div class="col-6">
                    <label for="fvinculacionInput" class="form-label">Fecha </label>
                    <input v-model="form.fecha" type="date" class="form-control" id="fvinculacionInput" placeholder="DD MM AAAA" required>
                </div>

                <div class="col-6">
                    <label for="clienteInput" class="form-label">Cliente</label>
                    <input v-model="form.cliente" type="text" class="form-control" id="clienteInput" placeholder="C.C" required>
                </div>

                <div class="col-6">
                    <label for="origenInput" class="form-label">Origen</label>
                    <select v-model="form.origen" class="form-select" id="origenInput" required>
            
                        <option selected disabled>Seleccione el origen</option>
                        <option v-for="city in cityStore.cities" :value="city.id">{{ city.nombre }}</option>     
                                               
                    </select>

                </div>

                <div class="col-6">
                    <label for="productoInput" class="form-label">Producto</label>
                    <select v-model="form.producto" class="form-select" id="productoInput" required>
            
                        <option selected disabled>Seleccione el producto</option>
                            
                        <option value="1">Producto 1</option>     
                            
                        <option value="2">Producto 2</option>
                                    
                        <option value="3">Producto 3</option>                              
                            
                        <option value="4">Producto 4</option>                 
                                            
                    </select>
                </div>


                <div class="col-6">
                    <label for="destinoInput" class="form-label">Destino</label>
                    <select v-model="form.destino" class="form-select" id="destinoInput" required>
            
                        <option selected disabled>Seleccione el destino</option>
                        <option v-for="city in cityStore.cities" :value="city.id">{{ city.nombre }}</option>     
                                        
                    </select>
                </div>

                
                        
                <div class="col-6">
                    <label for="CantidadInput" class="form-label">Cantidad</label>
                    <input  v-model="form.cantidad" type="number" class="form-control" id="Cantidad" placeholder="" required>
                </div>


                <div class="col-6">
                    <label for="hcargueInput" class="form-label">Hora de cargue</label>
                    <input v-model="form.horaCargue" type="text" class="form-control" id="hcargueInput" placeholder="hh:mm" required>
                </div>

            
                <div class="col-6">
                    <label for="hdescargueInput" class="form-label">Hora de descargue</label>
                    <input v-model="form.horaDescargue" type="text" class="form-control" id="hdescargueInput" placeholder="hh:mm" required>
                </div>

                <h2>Valores</h2>

                <div class="col-6">
                    <label for="vpagarInput" class="form-label">Valor a pagar</label>
                    <input v-model="form.valorTotal" type="text" class="form-control" id="vpagarInput" placeholder="$" required>
                </div>

                <div class="col-6">
                    <label for="tarifaInput" class="form-label">Tarifa cliente</label>
                    <input v-model="form.valorPagar" type="text" class="form-control" id="tarifaInput" placeholder="$" required>
                </div>
            </div>
            
            <h1></h1>
        
        <div class="row border border-primary rounded p-3">


            <h2 class="col-6">Vehiculo</h2>
            
            <h2 class="col-6">Conductor</h2>

                <div class="col-6">
                    <label for="placaInput" class="form-label">Placa</label>
                    <input v-model="form.placa" type="text" class="form-control" id="placaInput" placeholder="ABC123" required>
                </div>

                <div class="col-6">
                    <label for="DocumentoInput" class="form-label">Documento</label>
                    <input v-model="form.conductor" type="text" class="form-control" id="DocumentoInput" placeholder="Documento" required>
                </div>


                <div class="col-6">
                    <button class="btn btn-primary me-md-2" type="button">Ver detalles</button>
                </div>

                <div class="col-6">
                    <button class="btn btn-primary me-md-2" type="button">Ver detalles</button>
                </div>

                
                </div>

                <h1></h1>

            <div class="row border border-primary rounded p-3">

                <div class="col-4">
                    <button class="btn btn-primary me-md-2" type="submit">Guardar</button>
                </div>

                <div class="col-4">
                    <button class="btn btn-primary me-md-2" type="button">Cancelar</button>
                </div>

                <div class="col-4">
                    <button class="btn btn-primary me-md-2" type="button">Nuevo registro</button>
                </div>

            </div> 

        </form>

         
        </div>
        <Footer/>
    </body>

</template>

<script lang="js">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Viaje from '@/models/viajeModel';
import { useCityStore } from '@/stores/cityStore';
import { useViajeStore } from '@/stores/viajeStore';
import { defineComponent, onMounted, ref } from 'vue';


    export default defineComponent({
        name: 'GestorRutas',
        components: { Header, Footer },

        setup(){
            const viajeStore = useViajeStore();
            const cityStore = useCityStore();
            const isEditing = ref(false);
            const form = ref({
                fecha: "",
                cliente: "",
                origen: 0,
                destino: 0,
                producto: "",
                cantidad: 0,
                horaCargue: "",
                horaDescargue: "",
                valorTotal: "",
                valorPagar: "",
                placa: "",
                conductor: "",
                usuario: 10000
            })

            onMounted(() => {
                cityStore.fetchAllCities();
            })

            const handleFormSubmit = async () =>{
                console.log(isEditing.value);
                const viaje = new Viaje(
                    form.value.fecha,
                    form.value.origen,
                    form.value.destino,
                    form.value.cliente,
                    form.value.valorTotal,
                    form.value.valorPagar,
                    form.value.conductor,
                    form.value.placa,
                    form.value.usuario,
                    form.value.producto,
                    form.value.cantidad,
                    form.value.horaCargue,
                    form.value.horaDescargue
                )
                console.log(viaje);

                if(isEditing.value){
                    await viajeStore.updateViaje(viaje);
                } else {
                    await viajeStore.createViaje(viaje);
                }
                resetForm();
            }

            const deleteViaje = async (idviaje) => {
                await viajeStore.deleteViaje(idviaje)
            }

            const resetForm = () => {
                form.value = {
                    fecha: "",
                    cliente: 0,
                    origen: 0,
                    destino: 0,
                    producto: "",
                    cantidad: 0,
                    horaCargue: "",
                    horaDescargue: "",
                    valorTotal: 0,
                    valorPagar: 0,
                    placa: "",
                    conductor: 0,
                }
                isEditing.value = false;
            }

            return {
                form,
                isEditing,
                viajeStore,
                cityStore,
                handleFormSubmit,
                deleteViaje,
                resetForm   
            }
        }
    })

</script>