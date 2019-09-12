<template>
    <nav class="app-nav">
        <div class="content">
            <AppLogo />

            <div v-if="!loggedIn" class="login-actions">
                <button>Log In</button>
                <button class="outlined">
                    <span>Become a Member</span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'AppNav',
        components: {
            AppLogo: require('@/components/AppLogo').default
        },
        computed: {
            ...mapState(['loggedIn']),
        }
    }
</script>

<style scoped>
    .app-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 15px;
        height: 60px;
        z-index: 1;
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
        font-size: 28px;
        color: var(--white);
    }

    .login-actions button {
        background-color: transparent;
        text-transform: uppercase;
        font-weight: 700;
    }

    .login-actions button:not(:first-child) {
        margin-left: 10px;
    }

    .outlined {
        position: relative;
        padding-top: 8px;
        padding-bottom: 8px;
        border: 2px solid var(--accent3);
    }
</style>