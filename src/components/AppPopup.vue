<template>
    <div class="app-popup" @click.self="$emit('close')">
        <div class="popup">
            <button class="popup__close" @click="$emit('close')">
                <CloseIcon />
            </button>

            <template v-if="hasHeaderSlot">
                <header v-if="hasTextHeader" class="popup__text-header">
                    <slot name="title">Popup Title</slot>
                </header>
                <header v-else>
                    <slot name="header" />
                </header>
            </template>

            <section class="popup__main">
                <slot>Popup content</slot>
            </section>

            <footer v-if="hasFooterSlot">
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppPopup',
        components: {
            CloseIcon: require('@/components/icons/CloseIcon').default
        },
        computed: {
            hasHeaderSlot() {
                return !!this.$slots.header || !!this.$slots.title
            },
            hasTextHeader() {
                return !!this.$slots.title
            },
            hasFooterSlot() {
                return !!this.$slots.footer
            }
        },
        mounted() {
            let body = document.querySelector('body')
            body.classList.add('open-popup')
        },
        destroyed() {
            let body = document.querySelector('body')
            body.classList.remove('open-popup')
        }
    }
</script>

<style>
    body.open-popup {
        padding-right: 8px;
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
    }
</style>

<style scoped>
    .app-popup {
        background-color: var(--black-a50);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        overflow-y: auto;
    }

    .popup {
        background-color: var(--white);
        position: relative;
        width: 100vw;
        max-width: 400px;
        margin: 20px auto;
    }

    .popup__close {
        background-color: transparent;
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        height: 20px;
        color: inherit;
        z-index: 1;
    }

    .popup__text-header {
        padding: 30px 30px 0;
        font-weight: 600;
        font-size: 20px;
    }

    .popup__main {
        padding: 30px;
    }

    .popup__text-header + .popup__main {
        padding: 20px 30px;
    }

    footer {
        padding: 0 30px 30px;
    }
</style>