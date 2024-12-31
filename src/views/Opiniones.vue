<script>
import Accordion from '@/components/Accordion.vue';
import Crear from './Crear.vue';
export default {
    data() {
        return {
            titulo: 'Estas son tus opiniones',
            mensaje: 'No existen opiniones en este momento',
            mensaje2: 'Si creaste una opinion y no la ves reflejada, refresca la pagina',
            arrayOpinones: [],
        }
    },
    methods: {
        eliminarOpinion(index) {
            this.arrayOpinones.splice(index, 1);
        },
        escucharOpinion() {
            this.arrayOpinones.push(this.arrayOP[1]);
        }
    },
    components: {
        Crear,
        Accordion
    },
    props: {
        arrayOP: {
            type: Array,
            required: true
        }
    },
    computed: {
        validOp() {
            return this.arrayOpinones.length === 0;
        },
    },
    mounted(){
        console.log(this.arrayOpinones)
    }
}
</script>
<template @load="escucharOpinion">
    <div class="container" >
        <h2 class="mb-5"> {{ titulo }}</h2>
        <div class="noHay" v-if="validOp">
            <h4 class="mensajeNH">{{ mensaje }}</h4>
            <h6>{{ mensaje2 }}</h6>
        </div>
        <Accordion v-for="(obj, index) in arrayOpinones" :key="index" :juego="obj.juego" :nombre="obj.nombre" :opinion="obj.opinion" :index="index" @eliminar="eliminarOpinion"/>
    </div>
</template>
<style scoped>
.mensajeNH {
    color: rgb(0, 255, 128);
}
</style>