<template>
    <div class="app">
        <!-- <router-link :to="{ name: 'Home' }">Home</router-link> &nbsp;
        <router-link :to="{ name: 'Search' }">Search</router-link>

        Am I Logged In ? {{ loggedIn }}

        <button @click="userActions">
            <template v-if="!loggedIn">Log In</template>
            <template v-else>Log Out</template>
        </button> -->

        <AppHeader />
        <router-view />
        <AppFooter />
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'App',
        components: {
            AppHeader: require('@/components/AppHeader').default,
            AppFooter: require('@/components/AppFooter').default
        },
        methods: {
            ...mapMutations(['login', 'logout']),
            userActions() {
                if (!this.loggedIn) this.login()
                else this.logout()
            }
        },
        computed: {
            ...mapState(['loggedIn']),
        }
    }
</script>

<style>
    @import 'styles.css';

    .app {
        /* padding-top: var(--nav-height); */
    }
</style>