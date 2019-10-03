export const Dropdown = {
    data() {
        return {
            openDropdown: false,
            container: null,
            trigger: null
        }
    },
    methods: {
        initializeDropdowns(containerElement) {
            this.container = containerElement
            this.trigger = this.container.querySelector('.dropdown__trigger')

            this.trigger.addEventListener('click', () => {
                let dropdown = this.container.querySelector('.dropdown')
                dropdown.style.left = `calc(50% -
                    ${dropdown.clientWidth / 2}px)`
                this.openDropdown = !this.openDropdown
            })
        },
        handleOutsideClicks(e) {
            if (this.trigger != e.target ||
                !e.target.classList.contains('dropdown__trigger')) {
                this.openDropdown = false
            }
        },
        handleInsideClicks(e) {
            e.stopPropagation()
        },
        isOpen() {
            return !!this.openDropdown
        }
    },
    watch: {
        openDropdown: function(newValue, oldValue) {
            let dropdown = this.container.querySelector('.dropdown')

            if (newValue) {
                window.addEventListener('click', this.handleOutsideClicks)
                dropdown.addEventListener('click', this.handleInsideClicks)
            } else {
                window.removeEventListener('click', this.handleOutsideClicks)
                dropdown.removeEventListener('click', this.handleInsideClicks)
            }
        }
    }
}