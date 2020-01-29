<template>
    <AppPopup class="signup-popup" @close="$emit('close')">
        <template slot="title">Create Account</template>

        <form>
            <div class="field-group">
                <div class="field" :class="{ 'field--error': showErrors }">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <p class="error" v-if="showErrors">{{ emailError }}</p>
            </div>

            <div class="field-group">
                <div class="field" :class="{ 'field--error': showErrors }">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <p class="error" v-if="showErrors">{{ usernameError }}</p>
            </div>

            <div class="field-group">
                <div class="field" :class="{ 'field--error': showErrors }">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div class="field"
                    :class="{ 'field--error': showErrors }">
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
                <p class="error" v-if="showErrors">{{ passwordError }}</p>
            </div>
        </form>

        <template slot="footer">
            <button class="main button--medium" @click="event">Sign Up</button>
            <p>Already have an account
                <a href="" @click.prevent="openLoginPopup">Log in.</a></p>
        </template>
    </AppPopup>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Eventbus from '@/eventbus'

    export default {
        name: 'SignupPopup',
        components: {
            AppPopup: require('@/components/AppPopup').default
        },
        data() {
            return {
                showErrors: false,
                emailError: 'Email is already taken.',
                usernameError: 'Username is already taken.',
                passwordError: 'Password does not match.'
            }
        },
        methods: {
            ...mapMutations(['login']),
            event() {
                if (!this.showErrors) {
                    this.showErrors = true
                } else {
                    this.login()
                    this.$emit('close')
                }
            },
            openLoginPopup() {
                Eventbus.$emit('openLoginPopup')
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .error {
        margin-top: 10px;
        font-size: 12px;
        color: var(--error);
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