<script>
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute();
        const gameName = route.params.gameName;

        return {
            gameName,
        };
    },
    data(){
        return{
            titulo: 'Escribe tu opinion para el juego: ',
            mensaje: 'A continuacion podras ver tu opinion',
            nombre: '',
            opinion: '',
            opiniones: [],
            validOp: true,
        }
    },
    methods: {
        agregarOpinion() {
            if (this.nombre.trim() && this.opinion.trim()) {
                const opiJuego = {
                    nombre: this.nombre,
                    opinion: this.opinion,
                    juego: this.gameName,
                }
                this.opiniones.push(opiJuego)
                console.log("opinion guardada")
                this.$emit('agregarOpinion', opiJuego);
                console.log("enviando opinion a opiniones")
                this.nombre = '';
                this.opinion = '';
                console.log("limpiando campos")
                this.validOp = false;
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        eliminarOpinion(index) {
            this.opiniones.splice(index, 1)
        },
        editarOpinion(index) {
            console.log(this.opiniones)
            let opinionEditada = this.opiniones[index];
            let nuevoNombre = prompt("Edita el nombre:", opinionEditada.nombre);
            let nuevaOpinion = prompt("Edita la opinión:", opinionEditada.opinion);
            if (nuevoNombre && nuevaOpinion) {
                this.opiniones[index] = {
                    ...opinionEditada,
                    nombre: nuevoNombre,
                    opinion: nuevaOpinion
                };
                console.log("Opinión editada:", this.opiniones[index]);
            } else {
                alert("Por favor, ingresa un nombre y una opinión válidos.");
            }
        },
    },
}
</script>
<template>
    <div class="container">
        <h2>{{ titulo }} <span>{{ gameName }}</span></h2>
        <form action="" @submit.prevent="agregarOpinion">
            <h3 class="mt-5">Nombre:</h3>
            <input class="w-100 mt-2" type="text" placeholder="Ingrese su nombre" v-model="nombre">
            <h3 class="mt-3">Opinion:</h3>
            <textarea class="w-100 mt-2" type="text" placeholder="Ingrese su opinion" v-model="opinion"></textarea>
            <input class="btn btn-primary mt-5" type="submit" value="Agregar">
        </form>
        <hr>
        <h3>{{ mensaje }}</h3>
        <div class="alerta" v-if="validOp">
            <div class="alert alert-danger mt-4" role="alert">
                No existen opiniones para mostrar
            </div>
        </div>
        <div v-else>
            <ul>
                <li v-for="(op, index) in opiniones" :key="index" class="mt-2">
                    <strong>{{ op.nombre }}</strong>: {{ op.opinion }}
                    <button type="button" class="btn btn-danger" id="btnEliminar" @click.prevent="eliminarOpinion(index)">Eliminar</button>
                    <button type="button" class="btn btn-warning" id="btnEditar" @click.prevent="editarOpinion(index)">Editar</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
ul li {
    width: 100%;
}
#btnEliminar, #btnEditar {
    margin-left: 5px;
    padding: 2px;
}
</style>