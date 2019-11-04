<template>
    <AppPopup class="food-popup" @close="$emit('close')">
        <template slot="header">
            <section class="banner">
                <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Food Item's Banner" />
            </section>
        </template>

        <template>
            <h2>Plain Milk Tea 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ipsum nulla vitae dolor, consequatur eum, modi animi laboriosam ut temporibus totam. Corrupti tempore architecto repellendus! Molestiae accusamus doloremque deleniti voluptatum!</p>

            <form>
                <section class="category"
                    v-for="(cat, cIndex) in categories"
                    :key="cat.name">
                    <header>
                        <h3>{{ cat.name }}
                            <span v-if="cat.required"
                                class="tag tag--accent1">Required</span>
                            <span v-else class="tag">Optional</span>
                        </h3>

                        <small>Pick
                            <template v-if="cat.maxPick > 1">at most</template>
                            {{ cat.maxPick }}
                        </small>
                    </header>

                    <div class="options">
                        <div class="option"
                            v-for="(opt, oIndex) in cat.options"
                            :key="opt.name">
                            <input type="radio"
                                v-if="cat.maxPick == 1"
                                :name="`cat-${cIndex}-opt`"
                                :id="`cat-${cIndex}-opt-${oIndex}`"
                                v-model="cat.selected"
                                :value="opt.name" />
                            <input type="checkbox"
                                v-else
                                :name="`cat-${cIndex}-opt`"
                                :id="`cat-${cIndex}-opt-${oIndex}`"
                                v-model="cat.selected"
                                :value="opt.name"
                                :disabled="isDisabled(cat, opt.name)" />

                            <template v-if="opt.additionalPrice > 0">
                                <label :for="`cat-${cIndex}-opt-${oIndex}`"
                                    @click="updateSubtotal(cat, opt)">{{ opt.name }}
                                    <span class="additional-price"> +
                                        {{ opt.additionalPrice | currency }}</span>
                                </label>
                            </template>
                            <template v-else>
                                <label :for="`cat-${cIndex}-opt-${oIndex}`">
                                    {{ opt.name }}</label>
                            </template>
                        </div>
                    </div>
                </section>

                <section class="special-notes">
                    <header>
                        <h3>Special Notes</h3>
                    </header>

                    <textarea placeholder="Do you have any special preferences?"></textarea>
                </section>

                <section class="preparation-time">
                    <header>
                        <h3>Preparation Time</h3>

                        <div>50 minute/s</div>
                    </header>
                </section>

                <section class="quantity-and-subtotal">
                    <div class="quantity">
                        <h3>Quantity</h3>
                        <div class="counter">
                            <button
                                @click.prevent="minusQuantity">&minus;</button>
                            <input type="text" v-model="quantity" />
                            <button
                                @click.prevent="plusQuantity">&plus;</button>
                        </div>
                    </div>
                    <div class="subtotal">
                        <h3>Subtotal</h3>
                        <div class="value">
                            {{ quantity * subtotal | currency }}</div>
                    </div>
                </section>
            </form>

        </template>

        <template slot="footer">
            <button class="main" @click="$emit('close')">
                <CartIcon /> Add to Cart
            </button>
        </template>
    </AppPopup>
</template>

<script>
    export default {
        name: 'FoodPopup',
        components: {
            AppPopup: require('@/components/AppPopup').default,
            CartIcon: require('@/components/icons/CartIcon').default
        },
        data() {
            return {
                categories: [
                    {
                        name: 'Sugar Level',
                        required: true,
                        maxPick: 1,
                        options: [
                            {
                                name: '100%',
                                additionalPrice: 0.00
                            }, {
                                name: '75%',
                                additionalPrice: 0.00
                            }, {
                                name: '50%',
                                additionalPrice: 0.00
                            }, {
                                name: '25%',
                                additionalPrice: 0.00
                            }, {
                                name: 'No Sugar',
                                additionalPrice: 0.00
                            }
                        ],
                        selected: null
                    }, {
                        name: 'Free Add On',
                        required: true,
                        maxPick: 2,
                        options: [
                            {
                                name: 'Egg Pudding',
                                additionalPrice: 0.00
                            }, {
                                name: 'Mango Pudding',
                                additionalPrice: 0.00
                            }, {
                                name: 'Milk Pudding',
                                additionalPrice: 0.00
                            }, {
                                name: 'Rainbow Jelly',
                                additionalPrice: 0.00
                            }, {
                                name: 'Grass Jelly',
                                additionalPrice: 0.00
                            }, {
                                name: 'Oreo',
                                additionalPrice: 0.00
                            }, {
                                name: 'Green Apple Popballs',
                                additionalPrice: 0.00
                            }, {
                                name: 'Pearls',
                                additionalPrice: 0.00
                            }
                        ],
                        selected: []
                    }, {
                        name: 'Extra Add On',
                        required: false,
                        maxPick: 5,
                        options: [
                            {
                                name: 'Egg Pudding',
                                additionalPrice: 20.00
                            }, {
                                name: 'Mango Pudding',
                                additionalPrice: 20.00
                            }, {
                                name: 'Milk Pudding',
                                additionalPrice: 20.00
                            }, {
                                name: 'Rainbow Jelly',
                                additionalPrice: 20.00
                            }, {
                                name: 'Grass Jelly',
                                additionalPrice: 20.00
                            }, {
                                name: 'Oreo',
                                additionalPrice: 20.00
                            }, {
                                name: 'Green Apple Popballs',
                                additionalPrice: 20.00
                            }, {
                                name: 'Pearls',
                                additionalPrice: 20.00
                            }
                        ],
                        selected: []
                    }
                ],
                subtotal: 140.00,
                quantity: 1
            }
        },
        methods: {
            isDisabled(category, optionName) {
                return category.selected.length >= category.maxPick && category.selected.indexOf(optionName) === -1
            },
            updateSubtotal(category, optionName) {
                if (!category.selected.includes(optionName.name)) {
                    this.subtotal += optionName.additionalPrice
                } else {
                    this.subtotal -= optionName.additionalPrice
                }
            },
            minusQuantity() {
                if (this.quantity > 1) this.quantity--
            },
            plusQuantity() {
                if (this.quantity < 20) this.quantity++
            }
        }
    }
</script>

<style scoped>
    /deep/ .popup {
        max-width: 600px;
    }

    /deep/ .popup__close {
        top: 10px;
        right: 10px;
        color: var(--white);
    }

    .banner {
        position: relative;
    }

    .banner::before {
        content: "";
        display: block;
        padding-top: 180px;
    }

    @media all and (max-width: 480px) {
        .banner::before {
            padding-top: 100px;
        }
    }

    .banner::after {
        content: "";
        background-image: linear-gradient(var(--black-a50), transparent);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .banner img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    h2 {
        text-transform: capitalize;
        font-size: 24px;
    }

    @media all and (max-width: 600px) {
        h2 {
            font-size: 18px;
        }
    }

    h2 + p {
        font-size: 20px;
    }

    @media all and (max-width: 600px) {
        h2 + p {
            font-size: inherit;
        }
    }

    @media all and (max-width: 480px) {
        /deep/ .popup__main {
            padding: 20px 15px;
        }

        /deep/ footer {
            padding: 0 15px 15px;
        }
    }

    form section:first-child {
        margin-top: 30px;
    }

    form section:not(:first-child):not(:last-child) {
        margin-top: 20px;
    }

    form section:last-child {
        margin-top: 40px;
    }

    @media all and (max-width: 480px) {
        form section:first-child {
            margin-top: 20px;
        }

        form section:not(:first-child):not(:last-child) {
            margin-top: 15px;
        }

        form section:last-child {
            margin-top: 20px;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--black-a70);
    }

    @media all and (max-width: 600px) {
        h3 {
            font-size: inherit;
        }
    }

    .tag {
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        padding: 2px 4px;
        font-weight: 400;
        font-size: 10px;
        border-radius: 2px;
    }

    .tag:not(.tag--accent1) {
        background-color: var(--black-a10);
        color: var(--black-a50);
    }

    .tag--accent1 {
        background-color: var(--accent1);
        color: var(--white);
    }

    header small {
        font-size: inherit;
        color: var(--black-a40);
    }

    @media all and (max-width: 480px) {
        header small {
            font-size: 14px;
        }
    }

    header div {
        font-size: 20px;
    }

    @media all and (max-width: 480px) {
        header div {
            font-size: inherit;
        }
    }

    .popup__main section:not(.quantity-and-subtotal) > :not(header) {
        margin-top: 10px;
    }

    @media all and (max-width: 480px) {
        .popup__main section:not(.quantity-and-subtotal) > :not(header) {
            margin-top: 5px;
        }
    }

    .option {
        position: relative;
    }

    .option:not(:first-child) {
        margin-top: 3px;
    }

    .option input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
    }

    .option label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    @media all and (max-width: 480px) {
        .option label {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .option :checked + label {
        background-color: var(--accent1-l90);
        font-weight: 600;
        color: var(--accent3);
    }

    .option :disabled + label {
        color: var(--black-a40);
        cursor: not-allowed;
        pointer-events: none;
    }

    .option span {
        color: var(--black-a40);
    }

    .option :checked + label span {
        color: var(--black-a70);
        font-weight: 400;
    }

    @media all and (max-width: 480px) {
        textarea {
            padding: 10px;
            height: 65px;
        }
    }

    @media all and (min-width: 481px) {
        .quantity-and-subtotal {
            background-color: var(--black-a20); /* border */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1px;
        }
    }

    .quantity-and-subtotal > * {
        background-color: var(--white);
        margin-top: 0;
    }

    @media all and (max-width: 480px) {
        .subtotal {
            margin-top: 20px;
        }
    }

    .quantity-and-subtotal h3 {
        text-align: center;
    }

    .counter {
        display: flex;
        margin: 10px auto 0;
        width: max-content;
    }

    .counter button {
        background-color: var(--white);
        position: relative;
        padding: 0 15px;
        font-size: 20.31px; /* 10px in width */
        color: var(--black-a70);
        border: 1px solid var(--black-a20);
        z-index: 1;
    }

    .counter button:first-of-type {
        border-radius: 5px 0 0 5px;
    }

    .counter button:last-of-type {
        border-radius: 0 5px 5px 0;
    }

    .counter [type="text"] {
        padding: 0;
        width: 60px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        pointer-events: none;
    }

    .value {
        text-align: center;
        font-weight: 600;
        font-size: 24px;
        color: var(--success);
    }

    @media all and (min-width: 481px) {
        .value {
            margin-top: 10px;
        }
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 72px;
        font-size: 24px;
    }

    @media all and (max-width: 480px) {
        .main {
            height: 56px;
            font-size: 20px;
        }
    }

    .main svg {
        margin-right: 15px;
        width: 24px;
    }

    @media all and (max-width: 480px) {
        .main svg {
            width: 20px;
        }
    }
</style>
