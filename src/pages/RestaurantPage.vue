<template>
    <main class="restaurant-page">
        <section class="banner">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Restaurant's Banner" />
        </section>

        <header>
            <div class="max-content">
                <div class="image-and-details">
                    <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Restaurant's Image" />
                    <div class="restaurant__details">
                        <h1>Restaurant Name</h1>
                        <p class="restaurant__address">RM 123, Building A, Street B, Barangay C, City D, Province E</p>
                    </div>
                </div>

                <div class="open-times-and-favorites">
                    <OpenTimesDropdown />

                    <div class="favorites"
                        :class="{ 'is-favorite': is_favorite }"
                        @click="updateFavorites">
                        <FavoriteIcon v-if="!is_favorite" />
                        <FavoriteIconFilled v-else />
                        {{ favorites | shorten }} Favorites
                    </div>
                </div>
            </div>
        </header>

        <section class="max-content restaurant__content">
            <MenuSidebar :menu="menu" />

            <section class="menu-list">
                <section class="menu-group"
                    v-for="(group, index) in menu"
                    :key="group.name"
                    :id="`menu-item-${index}`">
                    <h2>{{ group.name }}</h2>

                    <div class="items-list">
                        <div class="item"
                            v-for="item in group.items"
                            :key="item.name">
                            <img :src="item.image_url"
                                :alt="`${item.name}'s Image`" />

                            <div class="item__details">
                                <strong>{{ item.name }}</strong>
                                <p class="ellipsis">{{ item.desc }}</p>

                                <div class="item__price">
                                    {{ item.price | currency }}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>

    </main>
</template>

<script>
    export default {
        name: 'RestaurantPage',
        components: {
            FavoriteIcon: () => import('@/components/icons/FavoriteIcon'),
            FavoriteIconFilled: () => import('@/components/icons/FavoriteIcon-Filled'),
            OpenTimesDropdown: () => import('@/components/restaurant/OpenTimesDropdown'),

            MenuSidebar: require('@/components/restaurant/MenuSidebar').default
        },
        data() {
            return {
                is_favorite: false,
                favorites: 123456789,
                menu: [
                    {
                        name: 'Plain Milk Tea',
                        items: [
                            {
                                name: 'Plain Milk Tea 1',
                                image_url: 'https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                price: 124.25
                            }, {
                                name: 'Plain Milk Tea 2',
                                image_url: 'https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 180.50
                            }, {
                                name: 'Plain Milk Tea 3',
                                image_url: 'https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Illo corporis assumenda rerum deserunt, quisquam totam sapiente suscipit laudantium commodi magni debitis autem possimus labore unde cumque doloremque eius et accusamus.',
                                price: 160.00
                            }, {
                                name: 'Plain Milk Tea 4',
                                image_url: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 105.25
                            }, {
                                name: 'Plain Milk Tea 5',
                                image_url: 'https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Molestias sed a libero id voluptatibus numquam aliquam at sit, doloremque officiis animi magnam hic, beatae itaque repellendus molestiae omnis doloribus laboriosam.',
                                price: 194.25
                            }, {
                                name: 'Plain Milk Tea 6',
                                image_url: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 124.50
                            }
                        ]
                    }, {
                        name: 'Flavored Milk Tea',
                        items: [
                            {
                                name: 'Flavored Milk Tea 1',
                                image_url: 'https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                price: 124.25
                            }, {
                                name: 'Flavored Milk Tea 2',
                                image_url: 'https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 180.50
                            }, {
                                name: 'Flavored Milk Tea 3',
                                image_url: 'https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Illo corporis assumenda rerum deserunt, quisquam totam sapiente suscipit laudantium commodi magni debitis autem possimus labore unde cumque doloremque eius et accusamus.',
                                price: 160.00
                            }, {
                                name: 'Flavored Milk Tea 4',
                                image_url: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 105.25
                            }, {
                                name: 'Flavored Milk Tea 5',
                                image_url: 'https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Molestias sed a libero id voluptatibus numquam aliquam at sit, doloremque officiis animi magnam hic, beatae itaque repellendus molestiae omnis doloribus laboriosam.',
                                price: 194.25
                            }, {
                                name: 'Flavored Milk Tea 6',
                                image_url: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 124.50
                            }
                        ]
                    }, {
                        name: 'Wintermelon Series',
                        items: [
                            {
                                name: 'Wintermelon Series 1',
                                image_url: 'https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                price: 124.25
                            }, {
                                name: 'Wintermelon Series 2',
                                image_url: 'https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 180.50
                            }, {
                                name: 'Wintermelon Series 3',
                                image_url: 'https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Illo corporis assumenda rerum deserunt, quisquam totam sapiente suscipit laudantium commodi magni debitis autem possimus labore unde cumque doloremque eius et accusamus.',
                                price: 160.00
                            }, {
                                name: 'Wintermelon Series 4',
                                image_url: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 105.25
                            }, {
                                name: 'Wintermelon Series 5',
                                image_url: 'https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: 'Molestias sed a libero id voluptatibus numquam aliquam at sit, doloremque officiis animi magnam hic, beatae itaque repellendus molestiae omnis doloribus laboriosam.',
                                price: 194.25
                            }, {
                                name: 'Wintermelon Series 6',
                                image_url: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                desc: '',
                                price: 124.50
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            updateFavorites() {
                if (!this.is_favorite) this.favorites++
                else this.favorites --
                this.is_favorite = !this.is_favorite
            }
        },
        filters: {
            currency(value) {
                return `PHP ${parseFloat(value).toFixed(2)}`
            },
            shorten(value) {
                let valueLength = String(value).length
                if (valueLength > 9) {
                    let newValue = value / 1000000000
                    return `${parseFloat(newValue).toFixed(1)}B`
                } else if (valueLength > 6) {
                    let newValue = value / 1000000
                    return `${parseFloat(newValue).toFixed(1)}M`
                } else if (valueLength > 3) {
                    let newValue = value / 1000
                    return `${parseFloat(newValue).toFixed(1)}K`
                } else {
                    return value
                }
            }
        }
    }
</script>

<style scoped>
    .banner {
        position: relative;
        height: 180px;
    }

    .banner > img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    header {
        padding: 15px;
    }

    @media all and (min-width: 641px) {
        header {
            background-color: var(--white);
            border: solid var(--black-a20);
            border-width: 1px 0;
        }
    }

    @media all and (max-width: 480px) {
        header {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }

    header .max-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media all and (max-width: 840px) {
        header .max-content {
            display: block;
        }
    }

    .image-and-details {
        display: flex;
        align-items: center;
    }

    @media all and (max-width: 840px) {
        .image-and-details {
            margin: 0 auto;
            width: max-content;
            max-width: calc(100vw - (15px * 2));
        }
    }

    .image-and-details img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
    }

    .restaurant__details {
        margin-left: 15px;
    }

    @media all and (max-width: 480px) {
        .restaurant__details {
            margin-left: 10px;
        }
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
    }

    @media (min-width: 481px) and (max-width: 840px) {
        h1 {
            font-size: 20px;
        }
    }

    @media all and (max-width: 480px) {
        h1 {
            font-size: inherit;
        }
    }

    .restaurant__details p {
        font-size: 20px;
    }

    @media (min-width: 481px) and (max-width: 840px) {
        .restaurant__details p {
            font-size: inherit;
        }
    }

    @media all and (max-width: 480px) {
        .restaurant__details p {
            font-size: 14px;
        }
    }

    .open-times-and-favorites {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        margin-left: 20px;
    }

    @media all and (max-width: 840px) {
        .open-times-and-favorites {
            width: max-content;
            max-width: 100vw;
            margin: 20px auto 0;
        }
    }

    .open-times-and-favorites > * {
        position: relative;
    }

    .open-times-and-favorites > :not(:first-child) {
        margin-left: 40px;
    }

    .open-times-and-favorites > :not(:first-child)::before {
        content: "";
        background-color: var(--black-a10);
        display: block;
        position: absolute;
        top: 0;
        left: -20px;
        margin: auto 0;
        width: 1px;
        height: 25px;
    }

    .favorites {
        display: flex;
        font-weight: 600;
        color: var(--black-a70);
        cursor: pointer;
    }

    .is-favorite {
        color: var(--accent1);
    }

    .favorite-icon,
    .favorite-icon-filled {
        margin-right: 10px;
        width: 20px;
    }

    h2,
    /deep/ h2 {
        font-weight: 600;
        font-size: 20px;
        color: var(--black-a70);
    }

    @media all and (max-width: 480px) {
        h2 {
            font-size: inherit;
        }
    }

    @media all and (min-width: 641px) {
        .restaurant__content {
            display: flex;
            padding: 0 15px 50px;
        }
    }

    @media all and (min-width: 641px) {
        .menu-sidebar,
        .menu-list {
            padding-top: 20px;
        }
    }

    @media all and (max-width: 640px) {
        .menu-list {
            padding: 0 15px 50px;
        }
    }

    .menu-group:not(:first-child) {
        margin-top: 40px;
    }

    @media all and (max-width: 640px) {
        .menu-group {
            padding-top: 15px;
        }

        .menu-group:not(:first-child) {
            margin-top: 25px;
        }
    }

    .items-list {
        display: grid;
        margin-top: 15px;
    }

    @media all and (min-width: 941px) {
        .items-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-gap: 30px;
        }
    }

    @media (min-width: 841px) and (max-width: 940px) {
        .items-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-gap: 20px;
        }
    }

    @media all and (max-width: 840px) {
        .items-list {
            grid-template-columns: minmax(0, 1fr);
            grid-gap: 20px;
        }
    }

    .item {
        display: flex;
        align-items: center;
    }

    .item img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center;
        flex-shrink: 0;
    }

    .item__details {
        margin-left: 15px;
        width: calc(100% - (100px + 15px));
    }

    .item__details p {
        color: var(--black-a70);
    }

    .item__price {
        margin-top: 10px;
        text-align: right;
        color: var(--black-a40);
    }
</style>