<template>
    <nav class="app-nav" :class="{ 'nav-blend': blend }">
        <div class="content">
            <AppLogo />

            <div v-if="!loggedIn" class="login-actions">
                <button @click="openLoginPopup = true">Log In</button>
                <button class="outlined">
                    <span>Become a Member</span>
                </button>
            </div>
        </div>

        <LoginPopup v-if="openLoginPopup" @close="openLoginPopup = false" />
    </nav>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'AppNav',
        components: {
            AppLogo: require('@/components/AppLogo').default,
            LoginPopup: require('@/components/auth/LoginPopup').default
        },
        data() {
            return {
                blend: true,
                openLoginPopup: false
            }
        },
        computed: {
            ...mapState(['loggedIn']),
        },
        mounted() {
            window.addEventListener('scroll', e => {
                let body = document.querySelector('html')
                if (body.scrollTop > 0) this.blend = false
                else this.blend = true
            })
        }
    }
</script>

<style scoped>
    .app-nav {
        background-color: var(--white);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 15px;
        height: 60px;
        z-index: 2;
        transition: all 500ms ease-in-out;
    }

    @media all and (max-width: 480px) {
        .app-nav {
            height: 50px;
        }
    }

    .nav-blend {
        background-color: transparent;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: var(--max-content-width);
        height: 100%;
    }

    .app-logo {
        transition: all 500ms ease-in-out;
    }

    .nav-blend .app-logo {
        --main: var(--white);
        --sub: var(--white);
    }

    .app-nav:not(.nav-blend) .app-logo {
        --main: var(--accent3);
        --sub: var(--accent1);
    }

    @media all and (max-width: 480px) {
        .app-logo {
            width: 95px;
            height: calc(95px * 0.27);
        }
    }

    .login-actions button {
        background-color: transparent;
        text-transform: uppercase;
        font-weight: 700;
        transition: all 500ms ease-in-out;
    }

    .login-actions button:first-child {
        color: var(--accent1);
    }

    .nav-blend .login-actions button:first-child {
        color: var(--white);
    }

    .login-actions button:not(:first-child) {
        margin-left: 10px;
    }

    .outlined {
        background-image: linear-gradient(to right, var(--accent3), var(--accent1));
        border: 2px solid;
        position: relative;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .nav-blend .outlined {
        background-image: none;
        border-color: var(--accent3);
    }


    @media all and (max-width: 480px) {
        .outlined {
            display: none;
        }
    }
</style>