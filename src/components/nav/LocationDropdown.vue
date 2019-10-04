<template>
    <div class="location-dropdown dropdown-container">
        <div class="dropdown__trigger location">
            <LocationIcon /> {{ selectedLocation }}
        </div>

        <div class="dropdown" :class="{ hidden: !openDropdown }">
            <div class="field">
                <label>Current Location</label>
                <AppSelect
                    :defaultOption="selectedLocation"
                    :options="locationOptions"
                    @onSelection="selectLocation" />
            </div>

            <button class="save-btn" @click="updateLocation">Save Location</button>
        </div>
    </div>
</template>

<script>
    import  { Dropdown } from '@/mixins/dropdowns'

    export default {
        name: 'LocationDropdown',
        components: {
            LocationIcon: require('@/components/icons/LocationIcon').default,
            AppSelect: require('@/components/AppSelect').default
        },
        mixins: [ Dropdown ],
        data() {
            return {
                locationOptions: [
                    'Zamboanga',
                    'Metro Manila',
                    'Cebu City'
                ],
                selectedLocation: '',
                selecting: ''
            }
        },
        methods: {
            selectLocation(e) {
                this.selecting = e
            },
            updateLocation() {
                this.selectedLocation = this.selecting
                this.openDropdown = false
            }
        },
        created() {
            this.selecting = this.locationOptions[0]
            this.selectedLocation = this.selecting
        },
        mounted() {
            this.initializeDropdowns(this.$el)
        }
    }
</script>

<style scoped>
    .dropdown {
        padding: 20px;
        width: 100vw;
        max-width: 400px;
    }

    .location {
        display: flex;
        align-items: center;
    }

    .location-icon {
        margin-right: 10px;
        width: 20px;
    }

    .app-select {
        width: 100%;
    }

    .app-select /deep/ .selected {
        padding-left: 0;
        padding-right: 40px;
        text-align: right;
        border: 0;
        width: inherit;
        max-width: none;
    }

    .save-btn {
        background-color: var(--accent1);
        display: block;
        margin-top: 10px;
        width: 100%;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--white);
    }
</style>