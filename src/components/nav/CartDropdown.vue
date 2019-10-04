<template>
    <div class="cart dropdown-container">
        <div class="icon dropdown__trigger">
            <CartIcon /> <div class="count">6</div>
        </div>

        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <div class="row">Cart Total
                <span class="value">PHP 150.00</span>
            </div>
            <div class="row">Service Charge
                <span class="value">15.00</span>
            </div>

            <hr />

            <div class="row order-total">Order Total
                <span class="value">PHP 165.00</span>
            </div>

            <button class="main">Check Out</button>
        </div>
    </div>
</template>

<script>
    import  { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'CartDropdown',
        components: {
            CartIcon: () => import('@/components/icons/CartIcon')
        },
        mixins: [ Dropdown ],
        mounted() {
            this.initializeDropdowns(this.$el)
        }
    }
</script>

<style scoped>
    .icon {
        position: relative;
    }

    .dropdown__trigger {
        padding-right: 10px;
    }

    .cart-icon {
        width: 20px;
        pointer-events: none;
    }

    .count {
        background-color: var(--white);
        position: absolute;
        top: -6px;
        left: calc(100% - 16px);
        padding: 0 5px;
        font-weight: 700;
        font-size: 12px;
        color: var(--accent1);
        border: 1px solid var(--white);
        border-radius: 12px;
        pointer-events: none;
    }

    .app-nav:not(.nav-blend) .count {
        background-color: var(--accent1);
        color: var(--white);
    }

    .dropdown {
        padding: 15px 20px;
        width: 100vw;
        max-width: 220px;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        font-size: 14px;
        color: var(--black-a70);
    }

    hr {
        margin: 5px 0;
        border: 0.5px solid var(--black-a10);
    }

    .value {
        color: var(--black);
    }

    .order-total .value {
        font-weight: 600;
    }

    .main {
        margin-top: 10px;
        width: 100%;
        font-weight: 600;
    }
</style>