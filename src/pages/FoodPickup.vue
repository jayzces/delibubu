<template>
    <main class="food-pickup">
        <header :class="{ filtering: searchValue.length > 0 }">
            <div class="max-content">
                <h1>Food Pickup and Delivery</h1>
                <p>Your favorites meals and treats delivered right to your door.</p>

                <SearchBar @changeValue="updateSearch" />
            </div>
        </header>

        <section class="restaurants">
            <div class="restaurants-list max-content">
                <div class="restaurant"
                    v-for="res in restaurants"
                    :key="res.name">
                    <div class="restaurant__image">
                        <img loading="lazy" width="268" height="150.75"
                            :src="res.image_url"
                            :alt="`${res.name}'s Image`" />
                    </div>
                    <div class="restaurant__details">{{ res.name }}
                        <div class="restaurant__favorites">
                            <FavoriteIcon v-if="!res.is_favorite" />
                            <FavoriteIconFilled v-else />
                            {{ Number(res.favorites).toLocaleString() }}
                        </div>
                    </div>
                </div>
            </div>

            <button class="load-more">Load More</button>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'FoodPickup',
        components: {
            SearchBar: require('@/components/food-pickup/SearchBar').default,
            FavoriteIcon: require('@/components/icons/FavoriteIcon').default,FavoriteIconFilled: require('@/components/icons/FavoriteIcon-Filled').default
        },
        data() {
            return {
                searchValue: '',
                restaurants: [
                    {
                        name: 'Lonesome Dove',
                        image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        favorites: 1909,
                        is_favorite: true
                    }, {
                        name: 'Bobby\'s',
                        image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        favorites: 8310,
                        is_favorite: true
                    }, {
                        name: 'Melting Pot',
                        image_url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
                        favorites: 2127,
                        is_favorite: false
                    }, {
                        name: 'Daytime Place',
                        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
                        favorites: 423,
                        is_favorite: false
                    }, {
                        name: 'Easy Eats',
                        image_url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
                        favorites: 267,
                        is_favorite: true
                    }, {
                        name: 'Macro Bites',
                        image_url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        favorites: 3889,
                        is_favorite: false
                    }, {
                        name: 'Grubber Hub',
                        image_url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        favorites: 6469,
                        is_favorite: false
                    }, {
                        name: 'Cheerful Rhino',
                        image_url: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
                        favorites: 2135,
                        is_favorite: true
                    }, {
                        name: 'Home Cooking Experience',
                        image_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
                        favorites: 1732,
                        is_favorite: true
                    }, {
                        name: 'Fare & Feed',
                        image_url: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
                        favorites: 3028,
                        is_favorite: false
                    }
                ]
            }
        },
        methods: {
            updateSearch(value) {
                this.searchValue = value
            }
        }
    }
</script>

<style scoped>
    header {
        background: url('/images/Wave.svg') no-repeat;
        background-position: bottom center;
        background-size: contain;
        padding: 40px 15px 30px;
        height: 100vh;
        max-height: 330px;
        font-size: 24px;
        transition: all 1s ease;
    }

    @media all and (max-width: 480px) {
        header {
            max-height: 240px;
            text-align: center;
            font-size: 20px;
        }
    }

    .filtering {
        padding-top: 20px;
        height: max-content;
    }

    .max-content {
        margin: 0 auto;
    }

    h1,
    p {
        max-height: 200px;
        overflow: hidden;
    }

    @media all and (max-width: 480px) {
        h1,
        p {
            transition: all 100ms ease;
        }
    }

    h1 {
        margin: 0;
        font-size: inherit;
        color: var(--accent3);

    }

    .filtering h1 {
        max-height: 0;
    }

    p {
        margin: 0;
        color: var(--black-a70);
        text-shadow:
            -1px -1px 0 var(--white),
            1px -1px 0 var(--white),
            -1px 1px 0 var(--white),
            1px 1px 0 var(--white);
    }

    .filtering p {
        max-height: 0;
    }

    .search-bar {
        margin-top: 20px;
    }

    .restaurants {
        background-color: var(--accent1);
        margin-top: -1px;
        padding: 0 15px 50px;
        color: var(--white);
    }

    @media all and (max-width: 1440px) {
        .restaurants {
            padding-top: 20px;
        }
    }

    .restaurants-list {
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 40px;
    }

    @media all and (min-width: 1441px) {
        .restaurants-list {
            grid-template-columns: repeat(5, minmax(0, 1fr));
        }
    }

    @media (min-width: 651px) and (max-width: 1440px) {
        .restaurants-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (min-width: 481px) and (max-width: 650px) {
        .restaurants-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media all and (max-width: 480px) {
        .restaurants-list {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    .restaurant {
        cursor: pointer;
    }

    .restaurant__image {
        position: relative;
    }

    .restaurant__image::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    .restaurant__image > img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .restaurant__details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 10px;
        font-weight: 600;
    }

    .restaurant__favorites {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        font-weight: 400;
    }

    .favorite-icon,
    .favorite-icon-filled {
        margin-right: 5px;
        width: 20px;
    }

    .load-more {
        display: none;
        margin: 50px auto 0;
        padding: 20px 0;
        width: 100%;
        max-width: 260px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
        border: 1px solid var(--white);
    }

    .filtering + .restaurants .load-more {
        display: block;
    }

    @media all and (max-width: 650px) {
        .load-more {
            padding-top: 15px;
            padding-bottom: 15px;
            max-width: 200px;
            font-size: 20px;
        }
    }

    @media all and (max-width: 650px) {
        .load-more {
            font-size: 18px;
        }
    }
</style>