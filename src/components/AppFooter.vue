<template>
    <section class="app-footer">
        <div class="max-content">
            <header>
                <AppLogo />

                <div class="socials">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook-square"></i>
                </div>
            </header>

            <div class="links">
                <ul class="link-group"
                    v-for="(group, gIndex) in siteLinks"
                    :key="`group-${gIndex}`">
                    <li class="group-header">{{ group.title }}</li>
                    <li v-for="(link, lIndex) in group.links"
                        :key="`group-${gIndex}-link-${lIndex}`">
                        <router-link :to="{ name: link.route }">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>

            <footer>
                <div>© Delibaba 2019. All rights reserved.</div>
                <ul class="more-links">
                    <li v-for="(link, index) in moreLinks"
                        :key="`more-links-${index}`">
                        <a href="">{{ link.name }}</a>
                    </li>
                </ul>
            </footer>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AppFooter',
        components: {
            AppLogo: require('@/components/AppLogo').default
        },
        data() {
            return {
                siteLinks: [
                    {
                        title: 'About Us',
                        links: [
                            {
                                name: 'Careers',
                                route: ''
                            }, {
                                name: 'Mobile Apps',
                                route: ''
                            }, {
                                name: 'Contact Us',
                                route: ''
                            }
                        ]
                    }, {
                        title: 'Our Services',
                        links: [
                            {
                                name: 'Food Pickup and Delivery',
                                route: 'food-pickup'
                            }, {
                                name: 'Grocery Services',
                                route: ''
                            }, {
                                name: 'Errand Services',
                                route: ''
                            }, {
                                name: 'Cash Delivery / Deposit',
                                route: ''
                            }, {
                                name: 'Bills Payment',
                                route: ''
                            }
                        ]
                    }, {
                        title: 'Our Partners',
                        links: [
                            {
                                name: 'Our Merchant Partners',
                                route: ''
                            }, {
                                name: 'Become a Partner',
                                route: ''
                            }
                        ]
                    }
                ],
                moreLinks: [
                    {
                        name: 'Terms and Conditions',
                        route: ''
                    }, {
                        name: 'Privacy Policy',
                        route: ''
                    }, {
                        name: 'Shipping Policy',
                        route: ''
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .app-footer {
        background-color: var(--black);
        padding: 40px 15px 0;
        color: var(--white);
    }

    @media all and (max-width: 480px) {
        .app-footer {
            padding-top: 30px;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .app-logo {
        --main: var(--white);
        --sub: var(--white);
        width: 165px;
    }

    @media all and (max-width: 480px) {
        .app-logo {
            width: 120px;
        }
    }

    .socials {
        display: flex;
        align-items: center;
    }

    .socials svg {
        width: 30px;
        height: 100%;
    }

    .socials svg:not(:first-child) {
        margin-left: 30px;
    }

    @media all and (max-width: 480px) {
        .socials svg {
            width: 20px;
        }

        .socials svg:not(:first-child) {
            margin-left: 20px;
        }
    }

    .links {
        display: flex;
        margin-top: 50px;
    }

    @media all and (max-width: 840px) {
        .links {
            margin-top: 30px;
        }
    }

    @media all and (max-width: 480px) {
        .links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 20px;
        }
    }

    .link-group {
        margin: 0;
        padding-left: 0;
        font-size: 20px;
        color: var(--white-a70);
    }

    .link-group:not(:first-child) {
        margin-left: 100px;
    }

    @media all and (max-width: 840px) {
        .link-group {
            font-size: 16px;
        }
    }

    @media (min-width: 641px) and (max-width: 840px) {
        .link-group:not(:first-child) {
            margin-left: 50px;
        }
    }

    @media all and (max-width: 840px) {
        .link-group {
            font-size: 16px;
        }
    }

    @media (min-width: 481px) and (max-width: 640px) {
        .link-group:not(:first-child) {
            margin-left: 25px;
        }
    }

    @media all and (max-width: 480px) {
        .link-group {
            font-size: 14px;
        }

        .link-group:not(:first-child) {
            margin-left: 0;
        }
    }

    li {
        list-style-type: none;
    }

    .group-header {
        font-weight: 600;
        color: var(--white);
    }

    .link-group li:nth-child(2) {
        margin-top: 15px;
    }

    .link-group li:not(.group-header):not(:nth-child(2)) {
        margin-top: 10px;
    }

    li a {
        color: inherit;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
        padding: 20px 0;
        font-size: 14px;
        color: var(--white-a70);
        border-top: 1px solid var(--white-a40);
    }

    @media all and (max-width: 480px) {
        footer {
            display: block;
            margin-top: 30px;
            padding: 10px 0 10px;
            text-align: center;
            color: var(--white-a40);
        }
    }

    .more-links {
        margin: 0;
        padding-left: 0;
        display: flex;
    }

    .more-links li:not(:first-child) {
        margin-left: 30px;
    }

    @media all and (max-width: 480px) {
        .more-links {
            margin-top: 5px;
            display: block;
        }

        .more-links li {
            display: inline-block;
        }

        .more-links li:not(:first-child) {
            margin-left: 10px;
        }
    }
</style>