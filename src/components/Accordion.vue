<script>
export default {
    props:{
        juego:{
            type: String,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        opinion:{
            type: String,
            required: true
        },
        index:{
            type: Number,
            required: true
        },
    },
    data() {
        return{
        }
    },
    methods: {
        eliminarOpinion() {
            this.$emit('eliminar', this.index);
        }
    }
}
</script>
<template>
<div class="accordion">
    <div class="accordion-item">
        <h2 class="accordion-header" :id="'heading-' + index"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-' + index" aria-expanded="false" :aria-controls="'collapse-' + index"><strong>{{ juego }}</strong></button></h2>
        <div :id="'collapse-' + index" class="accordion-collapse collapse" :aria-labelledby="'heading-' + index">
            <div class="accordion-body">
                <strong>Opinion creada por: </strong> {{ nombre }}
            </div>
            <div class="accordion-body">
                <strong>Opinion: </strong> {{ opinion }}
                <hr>
                <button type="button" class="btn btn-danger" @click.prevent="eliminarOpinion">Eliminar</button>
            </div>
        </div>
    </div>
</div>
</template>
<style></style>