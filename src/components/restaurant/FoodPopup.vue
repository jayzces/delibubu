<template>
    <AppPopup class="food-popup" @close="$emit('close')">
        <template slot="header">
            <section class="banner">
                <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Food Item's Banner" />
            </section>
        </template>

        <section>
            <h2>hello</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ipsum nulla vitae dolor, consequatur eum, modi animi laboriosam ut temporibus totam. Corrupti tempore architecto repellendus! Molestiae accusamus doloremque deleniti voluptatum!</p>

            <section class="category"
                v-for="(cat, cIndex) in categories"
                :key="cat.name">
                <header>
                    <h3>{{ cat.name }}
                        <span v-if="cat.required" class="tag">Required</span>
                        <span v-else class="tag">Optional</span>
                    </h3>

                    <small>Pick
                        <template v-if="cat.maxPick > 1">at most</template>
                        {{ cat.maxPick }}
                    </small>
                </header>

                <div class="options"
                    v-for="(opt, oIndex) in cat.options"
                    :key="opt.name">
                        <div class="option">
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

                        <label :for="`cat-${cIndex}-opt-${oIndex}`">
                            {{ opt.name }}</label>
                    </div>
                </div>
            </section>

            <section></section>
        </section>
    </AppPopup>
</template>

<script>
    export default {
        name: 'FoodPopup',
        components: {
            AppPopup: require('@/components/AppPopup').default
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
                                additionPrice: 0.00
                            }, {
                                name: '75%',
                                additionPrice: 0.00
                            }, {
                                name: '50%',
                                additionPrice: 0.00
                            }, {
                                name: '25%',
                                additionPrice: 0.00
                            }, {
                                name: 'No Sugar',
                                additionPrice: 0.00
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
                                additionPrice: 0.00
                            }, {
                                name: 'Mango Pudding',
                                additionPrice: 0.00
                            }, {
                                name: 'Milk Pudding',
                                additionPrice: 0.00
                            }, {
                                name: 'Rainbow Jelly',
                                additionPrice: 0.00
                            }, {
                                name: 'Grass Jelly',
                                additionPrice: 0.00
                            }, {
                                name: 'Oreo',
                                additionPrice: 0.00
                            }, {
                                name: 'Green Apple Popballs',
                                additionPrice: 0.00
                            }, {
                                name: 'Pearl',
                                additionPrice: 0.00
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
                                additionPrice: 20.00
                            }, {
                                name: 'Mango Pudding',
                                additionPrice: 20.00
                            }, {
                                name: 'Milk Pudding',
                                additionPrice: 20.00
                            }, {
                                name: 'Rainbow Jelly',
                                additionPrice: 20.00
                            }, {
                                name: 'Grass Jelly',
                                additionPrice: 20.00
                            }, {
                                name: 'Oreo',
                                additionPrice: 20.00
                            }, {
                                name: 'Green Apple Popballs',
                                additionPrice: 20.00
                            }, {
                                name: 'Pearl',
                                additionPrice: 20.00
                            }
                        ],
                        selected: []
                    }
                ],
            }
        },
        methods: {
            isDisabled(category, optionName) {
                return category.selected.length >= category.maxPick && category.selected.indexOf(optionName) === -1
            }
        }
    }
</script>

<style scoped>

</style>