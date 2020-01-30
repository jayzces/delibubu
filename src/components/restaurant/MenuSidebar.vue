<template>
    <aside class="menu-sidebar">
        <h2>Menu</h2>

        <ul>
            <li v-for="(group, index) in menu"
                :key="group.name"
                @click="scrollTo(index)"
                :class="{ active: index == activeMenu }">{{ group.name }}</li>
            <li>Specialteas</li>
            <li>Fruitea</li>
            <li>Yakult</li>
            <li>Ice Cold (No Tea)</li>
            <li>Latte</li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: 'MenuSidebar',
        props: {
            menu: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                activeMenu: 0
            }
        },
        methods: {
            scrollTo(index) {
                let navHeight = getComputedStyle(document.body)
                    .getPropertyValue('--nav-height'),
                    offset = parseInt(navHeight),
                    id = `#menu-item-${index}`

                if (window.innerWidth <= 640) {
                    let menuHeight = this.$el.clientHeight
                    offset += menuHeight
                }

                this.$scrollTo(id, {
                    offset: -1 * offset
                })

                let promise = new Promise((resolve, reject) => {
                    this.activeMenu = index
                    resolve()
                })

                promise.then(this.handleMenuScroll)
            },
            handleMenuScroll() {
                let item = document.querySelector('li.active')
                this.$el.scrollLeft = item.offsetLeft
            }
        }
    }
</script>

<style scoped>
    @media all and (max-width: 640px) {
        .menu-sidebar h2 {
            display: none;
        }
    }

    .menu-sidebar {
        background-color: var(--white);
        position: sticky;
        top: var(--nav-height);
    }

    @media all and (min-width: 641px) {
        .menu-sidebar {
            align-self: flex-start;
            flex-shrink: 0;
            width: 180px;
            margin-right: 40px;
        }
    }

    @media all and (max-width: 640px) {
        .menu-sidebar {
            padding-top: 0;
            width: 100vw;
            border: solid var(--black-a20);
            border-width: 1px 0;
            overflow-x: auto;
        }

        .menu-sidebar::-webkit-scrollbar {
            height: 0;
        }
    }

    .menu-sidebar ul {
        margin: 0;
        padding-left: 0;
        list-style-type: none;
    }

    @media all and (min-width: 641px) {
        .menu-sidebar ul {
            margin-top: 15px;
        }
    }

    @media all and (max-width: 640px) {
        .menu-sidebar ul {
            display: flex;
            margin: 0 auto;
            width: max-content;
        }
    }

    .menu-sidebar li {
        padding: 10px 20px;
        cursor: pointer;
    }

    .menu-sidebar .active {
        font-weight: 600;
        color: var(--accent3);
    }

    @media all and (max-width: 640px) {
        .menu-sidebar li {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }
</style>