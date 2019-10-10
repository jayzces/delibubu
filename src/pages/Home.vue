<template>
    <main class="home">
        <Banner v-if="!loggedIn" />
        <ServicesSlides />
    </main>
</template>

<script>
    import { mapState } from 'vuex'
    import Eventbus from '@/eventbus'

    export default {
        name: 'Home',
        components: {
            Banner: () => import('@/components/home/Banner'),
            ServicesSlides: require('@/components/home/ServicesSlides').default
        },
        computed: {
            ...mapState(['loggedIn']),
        },
        mounted() {
            Eventbus.$emit('blendNav', true)
        },
        destroyed() {
            Eventbus.$emit('blendNav', false)
        }
    }
</script>

<style scoped>
    .home {
        margin-top: calc(-1 * var(--nav-height));
    }
</style>