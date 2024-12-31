<script>
export default {
    data() {
        return {
            title: 'Page not found...',
            message: 'Revisa que el link del sitio web que deseas ver este bien escrito'
        }
    },
    methods: {

    }
}
</script>
<template>
    <div class="container d-flex">
        <h1 class="error-num">404</h1>
        <h2 class="ml-2 mt-auto"> {{ title }}</h2>
    </div>
    <h5 class="mt-3 container"> {{ message }}</h5>
</template>
<style scoped>
.error-num {
    font-size: 150px;
    font-weight: 500;
    color: rgb(0, 255, 128);
}
</style>