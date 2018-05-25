import {Logger} from './components/Logger'

export default class Main {
    constructor() {
        this.attack(10)
    }

    @Logger.hello
    attack(attackValue: number) {
        console.log(attackValue)
    }
}

let start = new Main();