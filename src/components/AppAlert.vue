<template>
    <div class="app-alert"
        :class="`app-alert--${type}`"
        v-html="message"></div>
</template>

<script>
    export default {
        name: 'AppAlert',
        props: {
            // info, error, success
            type: {
                type: String,
                default: 'info'
            },
            message: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .app-alert {
        position: relative;
        padding: 15px;
        text-align: center;
        animation: 1s hide 10s ease forwards;
        z-index: 2;
    }

    .app-alert--info {
        background-color: var(--accent1-l90);
        color: var(--accent1);
    }

    .app-alert--error {
        background-color: var(--error-l95);
        color: var(--error);
    }

    .app-alert--success {
        background-color: var(--success-l90);
        color: var(--success);
    }

    @media all and (max-width: 480px) {
        .app-alert {
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 14px;
        }
    }

    @keyframes hide {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(-100%);
        }
    }
</style>