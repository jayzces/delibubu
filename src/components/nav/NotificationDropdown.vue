<template>
    <div class="notification-dropdown dropdown-container">
        <div class="icon dropdown__trigger">
            <NotificationIcon /> <div class="count">3</div>
        </div>

        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <div class="notification-list">
                <div class="notif"
                    v-for="(notif, index) in notifications"
                    :key="`notification-${index}`"
                    :class="{ 'notif--unread': !notif.read }">
                    <img class="notif__avatar"
                        :src="notif.avatar_url"
                        :alt="`${notif.sender}'s Avatar`" />
                    <div class="notif__content">
                        <p>{{ notif.message }}</p>
                        <time class="notif__time">{{ notif.time }}</time>
                    </div>
                </div>
            </div>

            <button>View All Notifications</button>
        </div>
    </div>
</template>

<script>
    import  { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'NotificationDropdown',
        components: {
            NotificationIcon: () => import('@/components/icons/NotificationIcon')
        },
        mixins: [ Dropdown ],
        data() {
            return {
                notifications: [
                    {
                        avatar_url: 'https://images.unsplash.com/flagged/photo-1570054500258-ac677805d6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        sender: 'Henrietta Cole',
                        message: 'Cupidatat ullamco sint Lorem duis cupidatat aliqua officia aliquip velit duis incididunt excepteur excepteur do.',
                        time: '13 minutes ago',
                        read: false
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1570097482939-0af870ad7914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
                        sender: 'Rosalie Roy',
                        message: 'Deserunt laboris amet culpa cillum qui mollit ea.',
                        time: '30 minutes ago',
                        read: false
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1570095378080-c1bb312bb7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        sender: 'Fannie Ramirez',
                        message: 'Ipsum elit occaecat enim sint proident proident esse.',
                        time: '48 minutes ago',
                        read: false
                    }
                ]
            }
        },
        mounted() {
            this.initializeDropdowns(this.$el)
        }
    }
</script>

<style scoped>
    .icon {
        position: relative;
        display: flex;
    }

    .notification-icon {
        width: 20px;
        pointer-events: none;
    }

    .count {
        background-color: var(--white);
        position: absolute;
        top: -6px;
        left: calc(100% - 30px);
        padding: 0 5px;
        font-weight: 700;
        font-size: 12px;
        color: var(--accent1);
        border: 1px solid var(--white);
        border-radius: 12px;
        pointer-events: none;
    }

    .app-nav:not(.nav-blend) .count {
        background-color: var(--accent1);
        color: var(--white);
    }

    @media all and (max-width: 650px) {
        .count {
            left: calc(100% - 25px);
        }
    }

    .dropdown {
        padding: 5px 0 10px 0;
        width: 100vw;
        max-width: 400px;
    }

    .notification-list {
        padding: 5px 0;
        max-height: 260px;
        overflow: auto;
    }


    .notif {
        display: flex;
        align-items: flex-start;
        padding: 5px 20px;
        cursor: pointer;
    }

    .notif--unread {
        background-color: var(--accent1-l95);
    }

    .notif--unread:hover {
        background-color: var(--accent1-l90);
    }

    .notif__avatar {
        display: block;
        width: 30px;
        height: 30px;
        object-fit: cover;
        object-position: center;
        flex-shrink: 0;
    }

    .notif__content {
        margin-left: 10px;
    }

    .notif__time {
        font-size: 14px;
        color: var(--black-a70);
    }

    button {
        background-color: transparent;
        display: block;
        padding: 5px 0;
        width: 100%;
        color: var(--accent1);
    }

    button:hover {
        text-decoration: underline;
    }
</style>