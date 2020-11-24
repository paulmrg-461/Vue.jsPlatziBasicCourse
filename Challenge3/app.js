Vue.component('modal', {
    props: ['title'],

    methods: {
        close(){
            this.$emit('show-modal', false)
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }}</h3>
            <div>
                <slot name="body"/>
            </div>
            <footer>
              <button v-on:click="close">Close</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',

    data() {
        return {
            title: 'Modal Title',
            showModal: false,
        }
    },

    methods: {
        toggleModal(show){
            this.showModal = show
        }
    },
  })