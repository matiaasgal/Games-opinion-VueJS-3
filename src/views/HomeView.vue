<script>
 import Card from '../components/Card.vue'
 import Cuenta from '@/components/Cuenta.vue';
  export default {
    data() {
      return {
        titulo: 'Lista de Juegos Disponibles',
        arrayObjs: [],
      }
    },
    components: {
      Card
    },
    methods: {
      consumirApi() {
        var api = 'https://api.rawg.io/api/games?key=f3366d8e871f47799c7b49ecba23f79a'
        fetch(api)
        .then((response) => {
          response.json()
            .then((responseJson) => {
              //console.log(responseJson)
              this.arrayObjs = responseJson.results;
              console.log(this.arrayObjs)
            })
            .catch((errJson) => {
              console.log('ERROR AL TRANSFORMAR A JSON: ', errJson)
            })
        })
        .catch((err) => {
          console.log('ERROR AL CONSUMIR LA API: ', err)
        });
      },
      recibirNombreJuego(nombreJuego){
        console.log('nombre del juego recibido en el padre:  ', nombreJuego)
        this.$router.push(`/opiniones/${encodeURIComponent(nombreJuego)}`);
      },
      likeJuego(nombreJuego){
        console.log('nombre del juego recibido en el padre:  ', nombreJuego)
        this.$emit('datoJuego', nombreJuego)
        this.$router.push(`/administracion/`);
      },
    },
    mounted(){
      this.consumirApi();
    }
  }
</script>

<template>
  <div class="container">
    <h2> {{ titulo }}</h2>
    <div class="cards d-flex flex-wrap justify-content-start">
      <Card class="m-3" v-for="(juego, index) in arrayObjs" :key="index" :="juego" @datosJuego="recibirNombreJuego" @esteJuego="likeJuego"/>
    </div>
  </div>
</template>

<style scoped>

</style>
