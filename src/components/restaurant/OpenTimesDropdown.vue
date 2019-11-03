<template>
    <div class="open-times-dropdown dropdown-container">
        <div class="dropdown__trigger open-times">See Open Times</div>
        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <div class="row"
                v-for="day in schedule"
                :key="day.name">{{ day.name }}
                <span class="schedule">
                    <template v-if="!day.open">Closed</template>
                    <template v-else>{{ day.time.open | time }} - {{ day.time.close | time }}</template>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import  { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'OpenTimesDropdown',
        mixins: [ Dropdown ],
        data() {
            return {
                schedule: [
                    {
                        name: 'Sunday',
                        open: false,
                        time: {}
                    }, {
                        name: 'Monday',
                        open: true,
                        time: {
                            open: '8:00',
                            close: '17:00'
                        }
                    }, {
                        name: 'Tuesday',
                        open: true,
                        time: {
                            open: '8:00',
                            close: '17:00'
                        }
                    }, {
                        name: 'Wednesday',
                        open: true,
                        time: {
                            open: '8:00',
                            close: '17:00'
                        }
                    }, {
                        name: 'Thursday',
                        open: true,
                        time: {
                            open: '8:00',
                            close: '17:00'
                        }
                    }, {
                        name: 'Friday',
                        open: true,
                        time: {
                            open: '8:00',
                            close: '17:00'
                        }
                    }, {
                        name: 'Saturday',
                        open: false,
                        time: {}
                    }
                ]
            }
        },
        filters: {
            time(value) {
                let time = value.split(':'),
                    hour = parseInt(time[0]),
                    minute = time[1]

                if (hour > 12)      return `${hour - 12}:${minute} PM`
                else if (hour > 11) return `${time.join(':')} PM`
                else if (hour > 0)  return `${time.join(':')} AM`
                return `12:${minute} AM`
            }
        },
        mounted() {
            this.initializeDropdowns(this.$el)
        }
    }
</script>

<style scoped>
    .open-times {
        font-weight: 600;
        color: var(--accent1);
    }

    .dropdown {
        padding: 10px 0;
        width: 100vw;
        max-width: 280px;
    }

    .row {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;
        color: var(--black-a70);
    }

    .row span {
        color: var(--black);
    }

    .dropdown--left-overflow .dropdown {
        position: absolute;
    }
</style>