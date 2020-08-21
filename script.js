var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      list: ["unal","sener"],
      girdi:'unal',
    },
    methods: {
        ekle(){
            this.list = this.list.push('this.girdi')

        },
    }
  })