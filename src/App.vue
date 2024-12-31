<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      arrayOP: []
    }
  },
  methods: {
    agregarOPI(opinion){
      console.log('Se ha registrado la opinion: ', opinion);
      this.arrayOP.push(opinion)
    },
  }
}
</script>

<template>
  <nav class="text-bg-dark p-2 d-flex">
    <h5 class="title">Games Opinion</h5>
    <RouterLink to="/opiniones" class="ms-auto">Opiniones</RouterLink>
    <RouterLink to="/" class="ms-auto">Home</RouterLink>
  </nav>
  <RouterView class="mt-5" @agregarOpinion="agregarOPI"></RouterView>
</template>

<style scoped>
.ms-auto {
  text-decoration: none;
  color: azure;
  font-weight: 500;
}
.ms-auto:hover, .title:hover{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.39);
}
</style>
