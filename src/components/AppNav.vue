<template>
    <nav class="app-nav" :class="{ 'nav-blend': blend && !insertedAlert }">
        <div class="nav__content max-content">
            <div class="left">
                <button class="user-dropdowns-toggle"
                    v-if="loggedIn"
                    @click="showUserDropdowns = !showUserDropdowns">
                    <MenuIcon />
                </button>

                <router-link class="logo-link" :to="{ name: 'home' }">
                    <AppLogo v-if="!showUserDropdowns" />
                </router-link>
            </div>

            <div class="login-actions" v-if="!loggedIn" >
                <button @click="openLoginPopup = true">Log In</button>
                <button class="outlined">
                    <span>Become a Partner</span>
                </button>
            </div>

            <div class="user-dropdowns" v-else
                :class="{ 'show-dropdown': showUserDropdowns }">
                <LocationDropdown />
                <UserDropdown @logout="showUserDropdowns = false" />
                <NotificationDropdown />
                <CartDropdown />
            </div>
        </div>

        <LoginPopup v-if="openLoginPopup" @close="openLoginPopup = false" />
        <SignupPopup v-if="openSignupPopup" @close="openSignupPopup = false" />
    </nav>
</template>

<script>
    import { mapState } from 'vuex'
    import Eventbus from '@/eventbus'

    export default {
        name: 'AppNav',
        components: {
            AppLogo: require('@/components/AppLogo').default,
            MenuIcon: () => import('@/components/icons/MenuIcon'),

            LoginPopup: () => import('@/components/auth/LoginPopup'),
            SignupPopup: () => import('@/components/auth/SignupPopup'),

            LocationDropdown: () => import('@/components/nav/LocationDropdown'),
            UserDropdown: () => import('@/components/nav/UserDropdown'),
            NotificationDropdown: () => import('@/components/nav/NotificationDropdown'),
            CartDropdown: () => import('@/components/nav/CartDropdown')
        },
        data() {
            return {
                blend: false,
                openLoginPopup: false,
                openSignupPopup: false,
                showUserDropdowns: false,
                insertedAlert: false
            }
        },
        methods: {
            scrollFunction() {
                let body = document.querySelector('html')
                if (body.scrollTop > 0) this.blend = false
                else this.blend = true
            }
        },
        computed: {
            ...mapState(['loggedIn']),
        },
        mounted() {
            Eventbus.$on('blendNav', value => {
                this.blend = value

                if (value)
                    window.addEventListener('scroll', this.scrollFunction)
                else
                    window.removeEventListener('scroll', this.scrollFunction)
            })

            Eventbus.$on('openSignupPopup', () => {
                this.openSignupPopup = true
            })

            Eventbus.$on('openLoginPopup', () => {
                this.openLoginPopup = true
            })

            Eventbus.$on('insertedAlert', value => {
                this.insertedAlert = value
            })
        }
    }
</script>

<style>
    :root {
        --nav-height: 60px;
    }

    @media all and (max-width: 480px) {
        :root {
            --nav-height: 50px;
        }
    }
</style>

<style scoped>
    .app-nav {
        background-color: var(--white);
        position: relative;
        padding: 0 15px;
        height: var(--nav-height);
        transition: background 500ms ease-in-out;
        z-index: 3;
    }

    .nav-blend {
        background-color: transparent;
    }

    @media all and (min-width: 961px) {
        .open-popup .app-nav {
            right: var(--scrollbar-offset);
        }
    }

    .nav__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .logo-link {
        display: flex;
    }

    .app-logo {
        transition: all 500ms ease-in-out;
        height: unset;
        flex-shrink: 0;
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

    .user-dropdowns {
        display: flex;
        align-items: center;
        color: var(--white);
    }

    @media all and (max-width: 650px) {
        .user-dropdowns:not(.show-dropdown) {
            display: none;
        }
    }

    .app-nav:not(.nav-blend) .user-dropdowns {
        color: var(--accent1);
    }

    /deep/ .dropdown__trigger {
        padding: 0 20px;
    }

    @media all and (max-width: 650px) {
        /deep/ .dropdown__trigger {
            padding: 0 15px;
        }
    }

    .user-dropdowns > :not(:first-child)::before {
        content: "";
        background-color: var(--black-a10);
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto 0;
        width: 1px;
        height: 25px;
    }


    .user-dropdowns-toggle {
        background-color: transparent;
        display: flex;
        margin-right: 15px;
        padding: 5px;
        color: var(--white);
    }

    .app-nav:not(.nav-blend) .user-dropdowns-toggle {
        color: var(--accent1);
    }

    @media all and (min-width: 651px) {
        .user-dropdowns-toggle {
            display: none;
        }
    }

    .menu-icon {
        width: 20px;
    }

    /deep/ .dropdown {
        left: unset;
        right: 0;
    }

    .dropdown--full-width /deep/ .dropdown,
    .dropdown--right-overflow /deep/ .dropdown,
    .dropdown--left-overflow /deep/ .dropdown {
        top: var(--nav-height);
    }
</style>