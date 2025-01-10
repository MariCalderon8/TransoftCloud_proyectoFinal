<template>
    <div class="modal-viaje">
        <div class="modal-viaje-inner">
            <div class="modal-viaje-close" @click="close()">
                &times;
            </div>
            <h1>
                Información del viaje
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro laudantium provident debitis perferendis aut aliquid repudiandae, natus adipisci numquam in veniam excepturi molestias sed quam eaque obcaecati enim vero?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatum? Numquam, facilis explicabo molestiae magnam veniam dolorum, temporibus modi saepe enim dolor labore repellat vel iusto laudantium mollitia. Facilis, accusamus?
            </p>
            <button class="btn" @click="close()">
                Close pop up
            </button>
        </div>
    </div>
</template>

<script lang="js">
import Viaje from '@/models/viajeModel';
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ViajeModal',
        props: {
            viaje: {
                type: Viaje,
                required: true
            }
        }
    });
</script>