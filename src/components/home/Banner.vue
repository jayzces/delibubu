<template>
    <section class="banner">
        <div class="content">
            <AppLogo />
            <p>Delivering convenience to you wherever you may be. <br /> Food, Grocery and Errand Services available for your comfort.</p>
            <button class="main button--large" @click="openSignupPopup">Sign Up Now</button>
        </div>

        <a href="#services-slides" class="arrow">arrow</a>
    </section>
</template>

<script>
    import Eventbus from '@/eventbus'

    export default {
        name: 'Banner',
        components: {
            AppLogo: require('@/components/AppLogo').default
        },
        methods: {
            openSignupPopup() {
                Eventbus.$emit('openSignupPopup')
            }
        }
    }
</script>

<style scoped>
    .banner {
        background-image: url('https://images.pexels.com/photos/5957/gift-brown-shopping-market.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(780 / 900 * 100vh);
    }

    .banner::after {
        content: "";
        background-color: var(--black-a50);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .content {
        margin: auto;
        position: relative;
        padding: 0 15px;
        z-index: 1;
        text-align: center;
        color: var(--white);
    }

    .app-logo {
        width: 324px;
        --main: var(--white);
        --sub: var(--white);
    }

    @media (min-width: 481px) and (max-width: 850px) {
        .app-logo {
            width: 240px;
        }
    }

    @media all and (max-width: 480px) {
        .app-logo {
            width: 160px;
        }
    }

    p {
        margin: 28px 0 0;
        line-height: calc(36px * 1.57);
        font-weight: 600;
        font-size: 36px;
    }

    @media (min-width: 481px) and (max-width: 850px) {
        p {
            margin-top: 10px;
            line-height: calc(24px * 1.4);
            font-size: 24px;
        }
    }

    @media all and (max-width: 480px) {
        p {
            margin-top: 10px;
            line-height: calc(18px * 1.4);
            font-size: 18px;
        }
    }

    @media all and (min-width: 851px) {
        button {
            margin-top: 60px;
        }
    }

    @media (min-width: 481px) and (max-width: 850px) {
        button {
            margin-top: 30px;
        }
    }

    @media all and (max-width: 480px) {
        button {
            margin-top: 15px;
        }
    }

    .arrow {
        position: absolute;
        display: block;
        margin: 0 auto;
        width: 56px;
        height: 36px;
        bottom: 30px;
        font-size: 0;
        z-index: 1;
        animation: breathe 2s ease-in-out infinite;
        cursor: pointer;
    }

    @keyframes breathe {
        0%,
        100% {
            bottom: 50px;
        }

        50% {
            bottom: 30px;
        }
    }

    .arrow::before,
    .arrow::after {
        content: "";
        background-color: var(--accent3);
        position: absolute;
        display: block;
        width: 6px;
        height: 36px;
        top: 0;
    }

    .arrow::before {
        left: 1px;
        transform: rotate(-45deg);
        transform-origin: top right;
    }

    .arrow::after {
        right: 1px;
        transform: rotate(45deg);
        transform-origin: top left;
    }

    @media (min-width: 481px) and (max-width: 650px) {
        .arrow {
            transform: scale(0.7);
        }
    }

    @media all and (max-width: 481px) {
        .arrow {
            transform: scale(0.5);
        }
    }
</style>