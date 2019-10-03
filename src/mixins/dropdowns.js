export const Dropdown = {
    data() {
        return {
            openDropdown: false
        }
    },
    methods: {
        handleOutsideClicks(e) {
            if (!e.target.classList.contains('dropdown__trigger'))
                this.openDropdown = false
        },
        handleInsideDropdownClicks(e) {
            e.stopPropagation()
        }
    },
    mounted() {
        let container = document.querySelector('.dropdown-container'),
            trigger = container.querySelector('.dropdown__trigger')

        trigger.addEventListener('click', () => {
            let dropdown = container.querySelector('.dropdown')
            dropdown.style.left = `calc(50% - ${dropdown.clientWidth / 2}px)`
            this.openDropdown = !this.openDropdown
        })
    },
    watch: {
        openDropdown: function(newValue, oldValue) {
            let dropdown = document.querySelector('.dropdown')

            if (newValue) {
                window.addEventListener('click', this.handleOutsideClicks)
                dropdown.addEventListener('click',
                    this.handleInsideDropdownClicks)
            } else {
                window.removeEventListener('click', this.handleOutsideClicks)
                dropdown.removeEventListener('click',
                    this.handleInsideDropdownClicks)
            }
        }
    }
}