<template>
    <div class="app" :class="{ loggedIn: loggedIn }">
        <!-- <router-link :to="{ name: 'Home' }">Home</router-link> &nbsp;
        <router-link :to="{ name: 'Search' }">Search</router-link>

        Am I Logged In ? {{ loggedIn }}

        <button @click="userActions">
            <template v-if="!loggedIn">Log In</template>
            <template v-else>Log Out</template>
        </button> -->

        <AppNav />
        <router-view />
        <!-- <AppFooter /> -->
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'App',
        components: {
            AppNav: require('@/components/AppNav').default,
            AppFooter: require('@/components/AppFooter').default
        },
        computed: {
            ...mapState(['loggedIn']),
        },
        methods: {
            ...mapMutations(['login', 'logout']),
            userActions() {
                if (!this.loggedIn) this.login()
                else this.logout()
            }
        }
    }
</script>

<style>
    @import 'styles.css';
</style>