<template>
    <div class="services-slides" id="services-slides">
        <div class="slides">
            <div class="slide"
                v-for="(svc, index) in services"
                :key="`service-slide-${index}`"
                :style="`background-image: url(${ svc.bg })`"
                :class="{ visible: svc.visible }">
                <div class="slide__content">
                    <h3>{{ svc.title }}</h3>
                    <p v-html="svc.subtitle">{{ svc.subtitle }}</p>
                    <button class="main">{{ svc.button }}</button>
                </div>
            </div>
        </div>
        <nav class="slides__nav">
            <ul>
                <li v-for="(svc, index) in services"
                    :key="`service-nav-${index}`"
                    :class="{ selected: svc.visible }"
                    @click="select(svc)">{{ svc.title }}</li>
                <div class="bar main"></div>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'ServicesSlides',
        data() {
            return {
                services: [
                    {
                        title: 'Food Pickup and Delivery',
                        subtitle: 'Your favorites meals and treats <br /> delivered right to your door.',
                        bg: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        button: 'Order Now',
                        redirect_url: '',
                        visible: true
                    }, {
                        title: 'Grocery Services',
                        subtitle: 'Get your groceries delivered fast and easy. <br /> No more waiting in long lines.',
                        bg: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        button: 'Order Now',
                        redirect_url: '',
                        visible: false
                    }, {
                        title: 'Errands Services',
                        subtitle: 'Whatever you need, <br /> we’ll get it done.',
                        bg: 'https://images.pexels.com/photos/1325755/pexels-photo-1325755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                        button: 'Inquire Now',
                        redirect_url: '',
                        visible: false
                    }, {
                        title: 'Cash Delivery / Deposit',
                        subtitle: 'Fast, easy and secure way to <br /> send money to your loved ones.',
                        bg: 'https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        button: 'Padala Now',
                        redirect_url: '',
                        visible: false
                    }, {
                        title: 'Bills Payment',
                        subtitle: 'Easy and convenient way to settle <br /> and pay your bills.',
                        bg: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                        button: 'Pay Now',
                        redirect_url: '',
                        visible: false
                    },
                ]
            }
        },
        methods: {
            select(service) {
                let promise = new Promise((resolve, reject) => {
                    this.services.forEach(svc => {
                        if (svc == service) svc.visible = true
                        else svc.visible = false
                    })
                    resolve()
                })
                promise.then(this.moveSelectedBar)
            },
            moveSelectedBar() {
                let item = document.querySelector('li.selected'),
                    container = item.parentElement.parentElement,
                    bar = document.querySelector('.bar')
                bar.style.cssText = `max-width: ${item.clientWidth}px;
                    left: ${item.offsetLeft}px`
                container.scrollLeft = item.offsetLeft
            }
        },
        mounted() {
            // initialize selectedBar
            setTimeout(() => {
                this.moveSelectedBar()
            }, 100)
        }
    }
</script>

<style scoped>
    .services-slides {
        background-color: var(--black);
        position: relative;
        height: calc(780 / 900 * 100vh);
        color: var(--white);
    }

    .slide {
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: right;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .slide.visible {
        opacity: 1;
    }

    .slide,
    .slide::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .slide::before {
        content: "";
        background-color: var(--accent1-a40);
        display: block;
    }

    @media all and (max-width: 480px) {
        .slide {
            text-align: center;
        }

        .slide::before {
            background-color: var(--accent1-a70);
        }
    }

    .slide__content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 80%;
        max-width: var(--max-content-width);
    }

    @media all and (max-width: 480px) {
        .slide__content {
            align-items: center;
        }
    }

    h3 {
        font-weight: 700;
    }

    h3,
    p {
        margin: 0;
        font-size: 36px;
    }

    @media (min-width: 481px) and (max-width: 860px) {
        h3,
        p {
            font-size: 24px;
        }
    }

    @media all and (max-width: 480px) {
        h3,
        p {
            font-size: 20px;
        }
    }

    button.main {
        display: block;
        margin: 30px 0 0;
        padding-top: 20px;
        padding-bottom: 20px;
        max-width: 260px;
        width: 100%;
        font-size: 24px;
    }

    @media all and (max-width: 860px) {
        button.main {
            margin-top: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
            max-width: 160px;
            font-size: 16px;
        }
    }

    .slides__nav {
        position: absolute;
        background-color: var(--white-a40);
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    @media all and (max-width: 480px) {
        .slides__nav {
            overflow-y: auto;
        }

       .slides__nav::-webkit-scrollbar {
            height: 0;
        }
    }

    ul {
        position: relative;
        display: flex;
        margin: 0 auto;
        padding-left: 0;
        width: max-content;
        max-width: 100vw;
    }

    @media all and (max-width: 480px) {
        ul {
            max-width: none;
        }
    }

    li {
        list-style-type: none;
        padding: 30px 40px;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
    }

    li:not(.selected) {
        font-weight: 600;
    }

    li.selected {
        font-weight: 700;
    }

    @media (min-width: 1215px) and (max-width: 1400px) {
        li {
            padding: 30px 20px;
        }
    }

    @media all and (max-width: 1214px) {
        li {
            padding: 15px 10px;
            font-size: 14px;
        }
    }

    @media all and (min-width: 481px) {
        li.selected {
            text-transform: uppercase;
        }
    }

    .bar {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 500px;
        max-width: 0;
        height: 6px;
        transition: all 500ms ease-in-out;
        border-radius: 6px;
    }
</style>