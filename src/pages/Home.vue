<template>
    <main class="home">
        <Banner v-if="!loggedIn" />
        <ServicesSlides />
    </main>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        components: {
            Banner: () => import('@/components/home/Banner'),
            ServicesSlides: require('@/components/home/ServicesSlides').default
        },
        computed: {
            ...mapState(['loggedIn']),
        },
    }
</script>