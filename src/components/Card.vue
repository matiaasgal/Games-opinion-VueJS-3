<script>
export default {
    props:{
        background_image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        released: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        updated: {
            type: String,
            required: true,
        },
    },
    data() {
        return{

        }
    },
    methods: {
        enviarOpinion(nombreJuego, unIndice){
            console.log('Indice enviado al padre: ', unIndice);
            return this.$emit('datosJuego', nombreJuego)
        },
        enviarLike(unIndice){
            this.$emit('esteJuego', unIndice)
        },
    }
}
</script>

<template>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="background_image" alt="Card image cap">
  <div class="card-body">
    <h6 class="card-title m-1">{{name}}</h6>
    <p class="card-text m-1">{{rating}}</p>
    <p class="card-text m-1">{{released}}</p>
    <p class="card-text m-1 mb-2">{{updated}}</p>
    <button class="text-bg-primary text-decoration-none p-2 rounded" @click="enviarOpinion(name, id)">Opinar</button>
    <button class="text-decoration-none p-1 rounded" @click="enviarLike(index)">❤</button>
  </div>
</div>
</template>

<style scoped>
button {
    border: none;
    margin-left: 3px;
}
</style>