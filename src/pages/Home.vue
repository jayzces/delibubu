<template>
    <main class="home">
        <Banner />
        <ServicesSlide />
    </main>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            Banner: require('@/components/home/Banner').default,
            ServicesSlide: require('@/components/home/ServicesSlide').default
        },
    }
</script>

<style>

</style>