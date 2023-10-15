const app = Vue.createApp({
    data() {
        return {
            url: 'https://madeleinesj.github.io/MyPortfolioWebsite/',
            showDrinks: true,
            drinks: [
                {name: 'Mojito', Liquor: 'White Rum', img: 'IMG/image3.jpg', Location: 'Amaro\'s Table', Place: 'Vancouver, WA', Price: '$9.99', isFav: true },
                {name: 'Tom Collins', Liquor: 'Gin', img: 'IMG/image1.jpg', Location: 'Amaro\' Table', Place: 'Vancouver, WA', Price: '$10.00', isFav: false},
                {name: 'Negroni', Liquor: 'Gin', img: 'IMG/image2.jpg', Location: 'Amaro\' Table', Place: 'Vancouver, WA', Price: '$10.00', isFav: false},
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