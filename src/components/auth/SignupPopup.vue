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
            <button class="main" @click="event">Sign Up</button>
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
    .field {
        display: flex;
        align-items: center;
        padding-left: 20px;
        border: 1px solid var(--black-a20);
        border-radius: 10px;
    }

    .field-group:not(:first-child),
    .field:not(:first-child) {
        margin-top: 20px;
    }

    .field:not(.field--error):focus-within {
        border-color: var(--accent1);
    }

    .field--error {
        border-color: var(--error);
    }

    label {
        flex-shrink: 0;
        color: var(--black-a70);
    }

    .field:not(.field--error):focus-within label {
        color: var(--accent1);
    }

    .field--error label {
        color: var(--error);
    }

    [type="email"],
    [type="text"],
    [type="password"] {
        width: 100%;
        text-align: right;
        border: 0;
        outline: 0;
    }

    .error {
        margin-top: 10px;
        font-size: 12px;
        color: var(--error);
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