<template>
    <section class="banner">
        <div class="content">
            <AppLogo />
            <p>Delivering convenience to you wherever you may be. <br /> Food, Grocery and Errand Services available for your comfort.</p>
            <button>Sign Up Now</button>
        </div>

        <div class="arrow"></div>
    </section>
</template>

<script>
    export default {
        name: 'Banner',
        components: {
            AppLogo: require('@/components/AppLogo').default
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
        height: 100vh;
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
        z-index: 1;
        text-align: center;
        color: var(--white);
    }

    .app-logo {
        width: 324px;
        height: calc(100% * 0.27);
        --main: var(--white);
        --sub: var(--white);
    }

    p {
        margin: 28px 0 0;
        line-height: 57px;
        font-size: 36px;
    }

    button {
        background-image: linear-gradient(to right, var(--accent3), var(--accent1));
        display: block;
        margin: 60px auto 0;
        padding-top: 20px;
        padding-bottom: 20px;
        max-width: 340px;
        width: 100%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
    }

    .arrow {
        position: absolute;
        margin: 0 auto;
        width: 56px;
        height: 36px;
        bottom: 30px;
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
</style>