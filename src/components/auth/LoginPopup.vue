<template>
    <AppPopup @close="$emit('close')">
        <template slot="title">Login to Delibubu</template>

        <form>
            <div class="field" :class="{ 'field--error': showError }">
                <label>Username</label>
                <input type="text" />
            </div>
            <div class="field" :class="{ 'field--error': showError }">
                <label>Password</label>
                <input type="password" />
            </div>
        </form>

        <template slot="footer">
            <p class="error" v-if="showError">Unable to log in. Please check your login details, and try again.</p>
            <button class="main button--medium" @click="event">Log In</button>
            <p>Don't have an account yet?
                <a href="" @click.prevent="openSignupPopup">Sign Up.</a>
            </p>
        </template>
    </AppPopup>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Eventbus from '@/eventbus'

    export default {
        name: 'LoginPopup',
        components: {
            AppPopup: require('@/components/AppPopup').default
        },
        data() {
            return {
                showError: false
            }
        },
        methods: {
            ...mapMutations(['login']),
            event() {
                if (!this.showError) {
                    this.showError = true
                } else {
                    this.login()
                    this.$emit('close')
                }
            },
            openSignupPopup() {
                Eventbus.$emit('openSignupPopup')
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .error {
        text-align: center;
        font-size: 12px;
        color: var(--error);
    }

    .error + .main {
        margin-top: 10px;
    }

    p:not(.error) {
        margin-top: 10px;
        text-align: center;
        font-size: 14px;
    }

    p > a {
        font-weight: 600;
    }
</style>