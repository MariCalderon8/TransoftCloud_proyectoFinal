<template>
    <body>
    <div class="container">
        <Header/>
        <form @submit.prevent="handleFormSubmit">
            <div  class="row border border-primary rounded p-3">

                <h1></h1>

                <h1>{{isEditing ? 'Editando viaje...' : 'Viajes'}}</h1>


                <div class="col-6">
                    <label for="fvinculacionInput" class="form-label">Fecha </label>
                    <input v-model="form.fecha" type="date" class="form-control" id="fvinculacionInput" placeholder="DD MM AAAA" required>
 
                </div>

                <div class="col-6">
                    <label for="clienteInput" class="form-label">Cliente</label>
                    <input v-model="form.cliente" type="text" class="form-control" id="clienteInput" placeholder="C.C" required>
                    <div class="invalid-feedback">Example invalid feedback text</div>

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

            <div class="row border border-primary rounded p-3 justify-content-md-center">

                <div class="col-2">
                    <button class="btn btn-primary btn-viajes" type="submit">{{ isEditing ? 'Guardar cambios' : 'Registrar' }}</button>
                </div>

                <div class="col-2">
                    <button class="btn btn-secondary btn-viajes" @click="resetForm" type="button">Cancelar</button>
                </div>

            </div> 

        </form>

        <h2 class="register-viajes-title">Viajes Registrados</h2>

        <table class="table">

            <thead class="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Origen</th>
                <th scope="col">Destino</th>
                <th scope="col">Placa</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Hora Cargue</th>
                <th scope="col">Hora Descargue</th>
                <th scope="col">Acciones</th>

                </tr>
            </thead>
            <tbody v-for="viaje in viajeStore.viajes" :viaje="viaje">
                <tr>
                <th scope="row">{{ viaje.idviaje }}</th>
                <td>{{ convertDate(viaje.fecha) }}</td>
                <td>{{ cityStore.getCityName(viaje.origen) }}</td>
                <td>{{ cityStore.getCityName(viaje.destino) }}</td>
                <td>{{ viaje.placa }}</td>
                <td>{{ viaje.producto }}</td>
                <td>{{ viaje.cantidad }}</td>
                <td>{{ viaje.horaCargue }}</td>
                <td>{{ viaje.horaDescargue }}</td>
                <td class="td-acciones">
                    <button class="btn btn-danger btn-sm" @click="deleteViaje(viaje.idviaje)">Eliminar</button>
                    <button class="btn btn-primary btn-sm" @click="loadViajeForEditting(viaje.idviaje)">Editar</button>
                    <button class="btn btn-secondary btn-sm" >Info</button>
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
                idviaje: 0,
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
                viajeStore.fetchAllViajes();
                cityStore.fetchAllCities();
            })

            const handleFormSubmit = async () =>{
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

                if(isEditing.value){
                    viaje.idviaje = form.value.idviaje;
                    
                    await viajeStore.updateViaje(viaje);
                    
                } else {
                    await viajeStore.createViaje(viaje);
                }
                console.log(viaje);
                await viajeStore.fetchAllViajes();
                resetForm();
            }

            const deleteViaje = async (idviaje) => {
                await viajeStore.deleteViaje(idviaje)
                await viajeStore.fetchAllViajes();
            }

            const convertDate = (mysqlDate) => {
                const date = new Date(mysqlDate);
                return `${(''+(date.getDate() + 1)).padStart(2, '0')} / ${(''+(date.getMonth() + 1)).padStart(2, '0')} / ${ date.getFullYear() }`;
            }

            const loadViajeForEditting = async (idviaje) => {
                console.log(form.value.usuario);
                isEditing.value = true;
                const viaje = await viajeStore.fetchViajeById(idviaje);
                console.log(viaje);
                window.scrollTo({ top: 28, behavior: 'smooth' });
                form.value = {
                    idviaje: viaje.idviaje,
                    fecha: new Date(viaje.fecha).toISOString().split('T')[0],
                    cliente: viaje.cliente,
                    origen: viaje.origen,
                    destino: viaje.destino,
                    producto: viaje.producto,
                    cantidad: viaje.cantidad,
                    horaCargue: viaje.horaCargue,
                    horaDescargue: viaje.horaDescargue,
                    valorTotal: viaje.valortotal,
                    valorPagar: viaje.valorpagar,
                    placa: viaje.placa,
                    conductor: viaje.conductor,
                    usuario: viaje.usuario_creador
                };

            }

            const resetForm = () => {
                form.value = {
                    idviaje: 0,
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
                    usuario: 10000
                }
                isEditing.value = false;
            }

            return {
                form,
                isEditing,
                viajeStore,
                cityStore,
                handleFormSubmit,
                convertDate,
                deleteViaje,
                loadViajeForEditting,
                resetForm   
            }
        }
    })

</script>

<style scoped>
    .register-viajes-title{
        margin-top: 20px;
        padding: 20px;
        text-align: center;
    }

    .btn-viajes {
        padding: 8px 20px;
    }

    .td-acciones{
        display: flex;
        justify-content: center;
        gap: 5px;
    }
</style>