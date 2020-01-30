<template>
    <div class="app-select">
        <div class="selected"
            :class="{ placeholder: selected == placeholder }"
            @click="openOptions = !openOptions">{{ selected }}</div>

        <ul class="options" v-if="openOptions">
            <li class="placeholder"
                v-if="options.length == 0">{{ placeholder }}</li>
            <li v-for="(op, index) in options"
                :key="`option-${index}`"
                @click="select(op)">{{ formatter(op) }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AppSelect',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            defaultOption: {
                type: [Object, String],
                default() {
                    return {}
                }
            },
            placeholder: {
                type: String,
                default: 'Select an option'
            },
            formatter: {
                type: Function,
                default(e) {
                    return e
                }
            }
        },
        data() {
            return {
                selected: this.placeholder,
                openOptions: false
            }
        },
        methods: {
            select(op) {
                this.selected = this.formatter(op)
                this.openOptions = false
                this.$emit('onSelection', op)
            }
        },
        mounted() {
            this.options.forEach(op => {
                if (op == this.defaultOption)
                    this.selected = this.formatter(this.defaultOption)
            })
        }
    }
</script>

<style scoped>
    .app-select {
        position: relative;
        display: inline-block;
        text-transform: capitalize;
    }

    .selected {
        background-color: var(--white);
        padding: 0 30px 0 20px;
        max-width: 240px;
        width: 100vw;
        height: 50px;
        line-height: 50px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        border: 1px solid var(--black-a20);
        cursor: pointer;
        border-radius: 10px;
        user-select: none;
    }

    .selected::after {
        content: "";
        display: block;
        position: absolute;
        top: 7px;
        right: 15px;
        bottom: 0;
        margin: auto 0;
        width: 0;
        height: 0;
        border: solid transparent;
        border-width: 7px 5px;
        border-top-color: var(--black-a70);
    }

    .placeholder {
        color: var(--black-a40);
    }

    .options {
        background-color: var(--white);
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        right: 0;
        margin: 0;
        padding: 5px 0;
        z-index: 2;
        border: 1px solid var(--black-a20);
        border-radius: 5px;
        box-shadow: 0 0 10px var(--black-a20);
    }

    .options li {
        padding: 7px 15px;
        user-select: none;
        list-style-type: none;
    }

    .options li:hover {
        background-color: var(--accent1-l90);
    }
</style>