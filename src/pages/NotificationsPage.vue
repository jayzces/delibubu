<template>
    <main class="notifications-page">
        <div class="max-content">
            <h1 class="page-title">Notifications</h1>

            <section class="notifications-list">
                <div class="notif"
                    v-for="(notif, index) in notifications"
                    :key="`notification-${index}`"
                    :class="{ 'notif--unread': !notif.read }">
                    <img class="notif__avatar" :src="notif.avatar_url" :alt="`${notif.sender}'s Avatar`" />
                    <div class="notif__content">
                        <p>{{ notif.message }}</p>
                        <time class="notif__time">{{ notif.time }}</time>
                    </div>
                </div>
            </section>

            <button class="load-more">Load More</button>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'NotificationsPage',
        data() {
            return {
                notifications: [
                    {
                        avatar_url: 'https://images.unsplash.com/flagged/photo-1570054500258-ac677805d6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=50',
                        sender: 'The Waterfront Lobster',
                        message: 'Cupidatat ullamco sint Lorem duis cupidatat aliqua officia aliquip velit duis incididunt excepteur excepteur do.',
                        time: '13 minutes ago',
                        read: false
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1570097482939-0af870ad7914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50',
                        sender: 'The Oval Deer',
                        message: 'Deserunt laboris amet culpa cillum qui mollit ea.',
                        time: '30 minutes ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1570095378080-c1bb312bb7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=50',
                        sender: 'The Fire Gate',
                        message: 'Ipsum elit occaecat enim sint proident proident esse.',
                        time: '48 minutes ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1580205315099-9cc89613d10b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50',
                        sender: 'Ivory',
                        message: 'Officia mollit veniam dolor officia ea duis amet veniam.',
                        time: '1 hour ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1580200488673-0482715b603a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50',
                        sender: 'The Boiling Place',
                        message: 'Laboris deserunt adipisicing sunt aute enim nisi aliqua eiusmod in pariatur laboris exercitation reprehenderit.',
                        time: '5 hours ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50',
                        sender: 'Harley-Davidson',
                        message: 'Proident voluptate eu duis exercitation non in.',
                        time: '8 hours ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1580199247732-59c4ab646567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50',
                        sender: 'Blossoms',
                        message: 'Enim aliquip ea ad magna pariatur eiusmod non amet reprehenderit ea anim officia id minim.',
                        time: '14 hours ago',
                        read: true
                    }, {
                        avatar_url: 'https://images.unsplash.com/photo-1580229460160-1f95ade0d29e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=50',
                        sender: 'The Mellow Lobster',
                        message: 'Laboris Lorem consequat deserunt sit anim quis.',
                        time: '16 hours ago',
                        read: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    @media all and (min-width: 481px) {
        .notifications-page {
            padding: 40px 15px 50px;
        }
    }

    @media all and (max-width: 480px) {
        .notifications-page {
            padding: 20px 0;
        }
    }

    .notifications-list {
        margin-top: 20px;
    }

    @media all and (max-width: 480px) {
        h1 {
            padding: 0 15px;
        }
    }

    .notif {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        cursor: pointer;
    }

    @media all and (min-width: 481px) {
        .notif {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .notif:hover {
        background-color: var(--accent1-l90);
    }

    .notif--unread {
        background-color: var(--accent1-l95);
    }

    .notif__avatar {
        display: block;
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
        flex-shrink: 0;
        align-self: flex-start;
    }

    @media all and (max-width: 480px) {
        .notif__avatar {
            width: 30px;
            height: 30px;
        }
    }

    .notif__content {
        margin-left: 10px;
    }

    .notif__time {
        font-size: 14px;
        color: var(--black-a70);
    }

    .load-more {
        background-color: transparent;
        display: block;
        margin: 50px auto 0;
        padding: 20px 0;
        width: 100%;
        max-width: 260px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 22px;
        color: var(--accent1);
        border: 2px solid var(--accent1);
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

    @media all and (max-width: 480px) {
        .load-more {
            margin-top: 20px;
        }
    }
</style>