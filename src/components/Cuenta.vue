<script>
export default {
    data() {
        return {
            titulo: 'Este es el resumen de tu cuenta',
            texto: 'Deseas comprar coins para este juego?',
            texto2: 'Cantidad de coins compradas: ',
            claseColorBarra:'',
            claseCoins:'',
            cantidadCoins:0,
        }
    },
    methods: {
        nombreJuego (nombreJuego) {
            console.log("nombre recibido en administracion: ", nombreJuego )
        },
        incrementarCoins(){
            if(this.cantidadCoins<100){
                        this.cantidadCoins= (this.cantidadCoins + 2);
                        console.log(this.cantidadCoins);
                        this.claseCoins = `width: ${this.cantidadCoins}%`;
                        console.log(this.claseCoins);
                        if(this.cantidadCoins<=20){
                            this.claseColorBarra='progress-bar bg-success';
                        }
                        else if(this.cantidadCoins>20 && this.cantidadCoins<=30){
                            this.claseColorBarra='progress-bar bg-warning';
                        }
                        else{
                            this.claseColorBarra='progress-bar bg-danger'; 
                        }
            }

        }
    },
    props: {
    },
}
</script>
<template>
    <div class="container text-center">
        <h2>{{ titulo }}</h2>
        <h4 @datoJuego="nombreJuego" class="mb-5">Le diste me gusta al juego</h4>
        <h6 class="mb-3">{{ texto }}</h6>
        <button type="button" class="btn btn-warning" @click="incrementarCoins">COINS</button>
        <hr>
        <h5>{{ texto2 }}</h5>
        <div class="progress" role="progressbar" aria-label="Basic example" v-bind:aria-valuenow="cantidadCoins" aria-valuemin="0" aria-valuemax="100">
            <div v-bind:class="claseColorBarra" v-bind:style="claseCoins"></div>
        </div>

    </div>

</template>
<style scooped></style>