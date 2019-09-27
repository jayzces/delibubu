<template>
    <AppPopup @close="$emit('close')">
        <template slot="title">Login to Delibaba</template>

        <form>
            <div class="field">
                <label>Username</label>
                <input type="text" />
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" />
            </div>
        </form>

        <template slot="footer">
            <p class="error" v-if="showError">Unable to log in. Please check your login details, and try again.</p>
            <button class="main" @click="event">Login</button>
            <p>Don't have an account yet? <a href="">Sign Up.</a></p>
        </template>
    </AppPopup>
</template>

<script>
    import { mapMutations } from 'vuex'

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
            }
        }
    }
</script>

<style scoped>
    .field {
        display: flex;
        align-items: center;
        padding-left: 20px;
        border: 1px solid var(--black-a20);
        border-radius: 10px;
    }

    .field:not(:first-child) {
        margin-top: 20px;
    }

    .field:focus-within {
        border-color: var(--accent1);
    }

    label {
        color: var(--black-a70);
    }

    .field:focus-within label {
        color: var(--accent1);
    }

    [type="text"],
    [type="password"] {
        width: 100%;
        text-align: right;
        border: 0;
        outline: 0;
    }

    .error {
        text-align: center;
        font-size: 12px;
        color: var(--error);
    }

    .error + .main {
        margin-top: 10px;
    }

    .main {
        display: block;
        padding: 15px 0;
        width: 100%;
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