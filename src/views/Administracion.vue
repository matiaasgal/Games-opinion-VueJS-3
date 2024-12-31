<script>
import Cuenta from '@/components/Cuenta.vue';
export default {
    data() {
        return {
            titulo: "Para ver la informacion ingresa tus datos",
            nombre: "",
            apellido: "",
            acceso: false,
            mostrar: true
        }
    },
    methods: {
        login() {
            let NOMBRE = prompt('Ingrese su nombre: ')
            let APELLIDO = prompt('Ingrese su apellido: ')
            if (NOMBRE.length > 2 && APELLIDO.length > 2) {
                this.nombre = NOMBRE
                this.apellido = APELLIDO
                this.acceso = true
                this.mostrar = false
                console.log(`su nombre es ${this.nombre} y su apellido ${this.apellido}`)
            } else {
                alert("Por favor, ingresa un nombre y un apellido válidos.");
            }
        }
    },
    components: {
        Cuenta
    }
}
</script>
<template>
    <div class="container">
        <h3 v-if="mostrar">{{ titulo }}</h3>
        <button type="button" class="btn btn-success" @click.prevent="login" v-if="mostrar">Ingresar Datos</button>
        <h2 v-if="acceso">Bienvenido {{ nombre.toUpperCase() }} {{ apellido.toUpperCase()  }}</h2>
        <hr v-if="acceso">
        <Cuenta v-if="acceso"/>
    </div>
</template>
<style scooped></style>