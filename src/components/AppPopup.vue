<template>
    <div class="app-popup"
        @click.self="$emit('close')"
        :class="{ 'popup-overflow': yOverflow }">
        <div class="popup">
            <button class="popup__close" @click="$emit('close')">
                <CloseIcon />
            </button>

            <template v-if="hasHeaderSlot">
                <header class="popup__text-header" v-if="hasTextHeader">
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
        data() {
            return {
                yOverflow: false
            }
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
            let body = document.querySelector('body'),
                popup = this.$el.querySelector('.popup')

            body.classList.add('open-popup')

            if (popup.clientHeight > this.$el.clientHeight)
                this.yOverflow = true

            window.addEventListener('keyup', e => {
                if (e.key == 'Escape') this.$emit('close')
            })
        },
        destroyed() {
            let body = document.querySelector('body')
            body.classList.remove('open-popup')
        }
    }
</script>

<style>
    body.open-popup {
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
    }

    @media all and (min-width: 961px) {
        body.open-popup {
            width: calc(100vw - var(--scrollbar-offset));
        }
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
    }

    .popup-overflow {
        align-items: flex-start;
        overflow-y: auto;
    }

    @media all and (max-width: 960px) {
        .popup-overflow::-webkit-scrollbar {
            width: 0;
        }
    }

    @media all and (min-width: 481px) {
        .popup-overflow {
            padding: 20px 0;
        }
    }

    .popup {
        background-color: var(--white);
        position: relative;
        margin: 0 auto;
        width: 100vw;
        max-width: 400px;
    }

    .popup__close {
        background-color: transparent;
        display: flex;
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