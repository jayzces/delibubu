<template>
    <nav class="app-nav" :class="{ 'nav-blend': blend }">
        <div class="content">
            <AppLogo />

            <div v-if="!loggedIn" class="login-actions">
                <button @click="openLoginPopup = true">Log In</button>
                <button class="outlined">
                    <span>Become a Partner</span>
                </button>
            </div>

            <div v-else class="user-dropdowns">
                <LocationDropdown />
                <UserDropdown />

                <NotificationDropdown />

                <div class="cart">
                    <div class="icon">
                        <CartIcon /> <div class="count">3</div>
                    </div>
                </div>
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
            LoginPopup: () => import('@/components/auth/LoginPopup'),
            SignupPopup: () => import('@/components/auth/SignupPopup'),
            CartIcon: () => import('@/components/icons/CartIcon'),

            LocationDropdown: () => import('@/components/nav/LocationDropdown'),
            UserDropdown: () => import('@/components/nav/UserDropdown'),
            NotificationDropdown: () => import('@/components/nav/NotificationDropdown')
        },
        data() {
            return {
                blend: true,
                openLoginPopup: false,
                openSignupPopup: false
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

            Eventbus.$on('openSignupPopup', () => {
                this.openSignupPopup = true
            })

            Eventbus.$on('openLoginPopup', () => {
                this.openLoginPopup = true
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
        transition: background 500ms ease-in-out;
    }

    .open-popup .app-nav {
        right: 8px;
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
        height: unset;
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

    .app-nav:not(.nav-blend) .user-dropdowns {
        color: var(--accent1);
    }

    .user-dropdowns > :last-child {
        margin-right: 0;
    }

    /deep/ .dropdown__trigger {
        padding: 0 20px;
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

    .notifications {
        display: flex;
        align-items: center;
    }

    .icon {
        position: relative;
    }

    .count {
        background-color: var(--white);
        position: absolute;
        top: -6px;
        left: 100%;
        padding: 0 5px;
        font-weight: 700;
        font-size: 12px;
        color: var(--accent1);
        border: 1px solid var(--white);
        border-radius: 12px;
    }

    .app-nav:not(.nav-blend) .count {
        background-color: var(--accent1);
        color: var(--white);
    }

    .cart .count {
        left: calc(100% - 6px);
    }

    .user-dropdowns svg {
        width: 20px;
    }
</style>