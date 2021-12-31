Vue.component('modal', {

    props: ['title'],

    template: `
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <h3>{{ title }}</h3>
                    <div>
                        <slot></slot>
                    </div>
                    <footer>
                        <button v-on:click="closeModal">Cerrar</button>
                    </footer>
                </div>
            </div>
        </div>`,

    methods: {
        closeModal() {
            this.$emit('toggle-modal');
        }
    }
})

new Vue({
    el: '#app',

    data() {
        return {
            title: 'Welcome, I am a modal',
            showModal: false
        }
    },
    methods: {
        toggleModal() {
            console.log('toggleModal');
            this.showModal = !this.showModal;
        }
    }
})