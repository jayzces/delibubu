<template>
    <section class="app-footer">
        <div class="content">
            <header>
                <AppLogo />

                <div class="socials">
                    sdsf
                </div>
            </header>

            <div class="links">
                <ul class="link-group"
                    v-for="(group, gIndex) in siteLinks"
                    :key="`group-${gIndex}`">
                    <li class="group-header">{{ group.title }}</li>
                    <li v-for="(link, lIndex) in group.links"
                        :key="`group-${gIndex}-link-${lIndex}`">
                        <a href="">{{ link.name }}</a>
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
                            { name: 'Careers' },
                            { name: 'Mobile Apps' },
                            { name: 'Contact Us' }
                        ]
                    }, {
                        title: 'Our Services',
                        links: [
                            { name: 'Food Pickup and Delivery' },
                            { name: 'Grocery Services' },
                            { name: 'Errand Services' },
                            { name: 'Cash Delivery / Deposit' },
                            { name: 'Bills Payment' }
                        ]
                    }, {
                        title: 'Our Partners',
                        links: [
                            { name: 'Our Merchant Partners' },
                            { name: 'Become a Partner' }
                        ]
                    }
                ],
                moreLinks: [
                    { name: 'Terms and Conditions' },
                    { name: 'Privacy Policy' },
                    { name: 'Shipping Policy' }
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

    .content {
        margin: 0 auto;
        max-width: var(--max-content-width);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .app-logo {
        font-size: 36px;
    }

    .links {
        display: flex;
        margin-top: 50px;
    }

    .link-group {
        margin: 0;
        padding-left: 0;
        font-size: 24px;
        color: var(--white-a70);
    }

    .link-group:not(:first-child) {
        margin-left: 100px;
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

    .more-links {
        margin: 0;
        padding-left: 0;
        display: flex;
    }

    .more-links li:not(:first-child) {
        margin-left: 30px;
    }
</style>