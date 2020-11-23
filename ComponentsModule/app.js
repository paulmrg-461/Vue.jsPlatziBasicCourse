Vue.component('counter', {
   data(){
       return{
           counter: 0
       }
   },
   methods: {
       press() {this.counter++}
   },
   template: `
    <div>
        <button v-on:click="press"> Click me! </button>
        <span>{{ counter }}</span>
    </div>
   `
})

new Vue({
    el: '#app',
    data() {
        return {
            title: 'Hola Vítor'
        }
    },
})