<template>
    <main class="home">
        <Banner />
        <ServicesSlides />
    </main>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            Banner: require('@/components/home/Banner').default,
            ServicesSlides: require('@/components/home/ServicesSlides').default
        },
    }
</script>

<style>

</style>