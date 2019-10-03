export const Dropdown = {
    data() {
        return {
            openDropdown: false
        }
    },
    mounted() {
        let container = document.querySelector('.dropdown-container'),
            trigger = container.querySelector('.dropdown__trigger')

        trigger.addEventListener('click', () => {
            this.openDropdown = !this.openDropdown

            let dropdown = container.querySelector('.dropdown')
            dropdown.style.left = `calc(50% - ${dropdown.clientWidth / 2}px)`
        })
    }
}