<template>
    <div class="app-header"
        :class="{ 'at-home': atHome, 'nav-shrink': shrink }">
        <AppNav />
        <AppAlert
            v-if="alert.show"
            :type="alert.type"
            :message="alert.message" />
    </div>
</template>

<script>
    import Eventbus from '@/eventbus'

    export default {
        name: 'AppHeader',
        components: {
            AppNav: require('@/components/AppNav').default,
            AppAlert: require('@/components/AppAlert').default,
        },
        data() {
            return {
                atHome: false,
                alert: {
                    show: false,
                    initialRoute: null
                },
                shrink: false,
            }
        },
        methods: {
            resetContainer() {
                this.alert = Object.assign({}, this.alert, {
                    show: false,
                    initialRoute: null
                })
                this.shrink = false
            }
        },
        mounted() {
            Eventbus.$on('blendNav', value => {
                this.atHome = value
            })

            Eventbus.$on('addAlert', options => {
                this.alert.show = true
                this.alert.type = options.type
                this.alert.message = options.message
                this.alert.initialRoute = this.$route.name

                setTimeout(() => { // shrinking
                    this.shrink = true

                    setTimeout(() => { // delay before resetting
                        this.resetContainer()
                    }, 2000) // 2s
                }, 10000) // 10s
            })
        },
        watch: {
            '$route.name': {
                handler(value) {
                    this.resetContainer()
                }
            }
        }
    }
</script>

<style scoped>
    .app-header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        max-height: 50vh;
        transition: 1s max-height ease;
    }

    @media all and (min-width: 961px) {
        .open-popup .app-header {
            right: var(--scrollbar-offset);
        }
    }

    .at-home {
        position: fixed;
    }

    .nav-shrink {
        max-height: var(--nav-height);
    }
</style>