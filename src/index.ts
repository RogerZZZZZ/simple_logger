import {Logger} from './components/Logger'
let PV = Logger.PV

export default class Main {

    constructor() {
        this.attack(10)
    }

    @PV.hello
    @PV.satSomething('xixixi')
    attack(attackValue: number) {
        console.log(attackValue)
    }
}

let start = new Main();