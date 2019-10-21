<template>
    <div class="open-times-dropdown dropdown-container">
        <div class="dropdown__trigger open-times">See Open Times</div>
        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <div class="row">Sunday
                <span class="schedule">Closed</span>
            </div>
            <div class="row">Monday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
            <div class="row">Tuesday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
            <div class="row">Wednesday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
            <div class="row">Thursday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
            <div class="row">Friday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
            <div class="row">Saturday
                <span class="schedule">8:00 AM - 5:00 PM</span>
            </div>
        </div>
    </div>
</template>

<script>
    import  { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'OpenTimesDropdown',
        mixins: [ Dropdown ],
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