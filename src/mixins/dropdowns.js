export const Dropdown = {
    data() {
        return {
            openDropdown: false,
            container: null,
            trigger: null,
            dropdown: null
        }
    },
    methods: {
        initializeDropdowns(containerElement) {
            this.container = containerElement
            this.trigger = this.container.querySelector('.dropdown__trigger')
            this.dropdown = this.container.querySelector('.dropdown')

            this.trigger.addEventListener('click', () => {
                let bounds = this.dropdown.getBoundingClientRect(),
                    navHeight = document.querySelector('.app-nav').clientHeight

                this.openDropdown = !this.openDropdown

                if (this.container.matches('.dropdown--right-overflow') ||
                    this.container.matches('.dropdown--left-overflow')) {
                    return
                }

                if (bounds.width == window.innerWidth) {
                    this.container.classList.add('dropdown--full-width')

                    let triggerBounds = this.trigger.getBoundingClientRect(),
                        arrowPosition = `${(triggerBounds.width / 2 +
                            triggerBounds.left) - 7}px`
                    this.dropdown.style.setProperty('--dropdown-arrow-position',
                        arrowPosition)

                } else if (bounds.right > window.innerWidth) {
                    this.container.classList.add('dropdown--right-overflow')

                    let triggerBounds = this.trigger.getBoundingClientRect(),
                        triggerCenter = (triggerBounds.width / 2 +
                            triggerBounds.left),
                        updatedBounds = this.dropdown.getBoundingClientRect(),
                        arrowPosition = `${triggerCenter - updatedBounds.left
                            - 7}px`
                    this.dropdown.style.setProperty('--dropdown-arrow-position',
                        arrowPosition)

                } else if (bounds.left < 0) {
                    this.container.classList.add('dropdown--left-overflow')

                    /**
                     * Arrow position not computed
                     * There is currently no use-case in the project
                     * I'm lazy
                     */

                } else {
                    this.dropdown.style.left = `calc(50% -
                        ${this.dropdown.clientWidth / 2}px)`
                }
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
        }
    },
    watch: {
        openDropdown: function(newValue, oldValue) {
            if (newValue) {
                window.addEventListener('click', this.handleOutsideClicks)
                this.dropdown.addEventListener('click', this.handleInsideClicks)
            } else {
                window.removeEventListener('click', this.handleOutsideClicks)
                this.dropdown.removeEventListener('click',
                    this.handleInsideClicks)
            }
        }
    }
}