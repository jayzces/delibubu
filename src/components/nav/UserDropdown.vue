<template>
    <div class="user-dropdown dropdown-container">
        <div class="icon dropdown__trigger user-profile">Valerie Boyle
            <UserIcon />
        </div>

        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <a href="">My Profile</a>
            <a href="">My Orders</a>
            <a href="/logout" @click.prevent="userLogout">Log Out</a>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'UserDropdown',
        components: {
            UserIcon: () => import('@/components/icons/UserIcon')
        },
        mixins: [ Dropdown ],
        methods: {
            ...mapMutations(['logout']),
            userLogout() {
                this.logout()
                this.$emit('logout')
            }
        },
        mounted() {
            this.initializeDropdowns(this.$el)
        }
    }
</script>

<style scoped>
    .icon {
        display: flex;
    }

    .user-icon {
        width: 20px;
        pointer-events: none;
    }

    @media all and (min-width: 651px) {
        .user-icon {
            display: none;
        }
    }

    @media all and (max-width: 650px) {
        .user-profile {
            font-size: 0;
        }
    }

    .dropdown {
        padding: 10px 0;
    }

    .dropdown > a {
        display: block;
        padding: 5px 20px;
        color: inherit;
    }

    .dropdown > a:hover {
        background-color: var(--accent1-l90);
        text-decoration: none;
        color: var(--accent1);
    }
</style>