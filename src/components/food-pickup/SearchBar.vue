<template>
    <div class="search-bar" :class="{ 'with-input': value.length > 0 }">
        <input type="text"
            v-model="value"
            :placeholder="placeholder"
            @input="$emit('changeValue', value)" />
        <SearchIcon />
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        props: {
            placeholder: {
                type: String,
                default: 'Search'
            }
        },
        components: {
            SearchIcon: () => import('@/components/icons/SearchIcon')
        },
        data() {
            return {
                value: ''
            }
        },
        methods: {
            changeHandler() {
                console.log('hey bitch')
            }
        }
    }
</script>

<style scoped>
    .search-bar {
        background-color: var(--white);
        display: flex;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        max-width: 816px;
        font-size: 1.125rem;
        border: 1px solid var(--black-a20);
        border-radius: 10px;
    }

    .search-bar:focus-within,
    .with-input {
        border-color: var(--accent1);
    }

    [type="text"] {
        padding: 0;
        width: 100%;
        border: 0;
        border-radius: 0;
        outline: 0;
    }

    .search-icon {
        width: 20px;
        flex-shrink: 0;
        color: var(--black-a40);
    }

    .search-bar:focus-within .search-icon,
    .with-input .search-icon {
        color: var(--accent1);
    }
</style>