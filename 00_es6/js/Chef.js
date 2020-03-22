class Chef {
    constructor(food) {
        this.food = food
        this.dish = []
    }

    cook() {
        console.log(this.food)
    }

    set menu(dish) {
        this.dish.push(dish)
    }

    get menu() {
        return this.dish
    }

    static help(news) {
        console.log(news)
    }


}
