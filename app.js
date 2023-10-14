const app = Vue.createApp({
    data() {
        return {
            showDrinks: true,
            drinks: [
                {name: 'Mojito', Liquor: 'White Rum'},
                {name: 'Tom Collins', Liquor: 'Gin'},
                {name: 'Negroni', Liquor: 'Gin'},
            ]
        }
    },
    methods: {
        toggleShowDrinks() {
            this.showDrinks = !this.showDrinks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX,
            this.y = e.offsetY
        } 
    }
})

app.mount('#app')