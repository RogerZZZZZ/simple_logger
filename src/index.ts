import {Logger} from './components/Logger'
let PV = Logger.PV
PV.init({
    serverAddress: 'http://localhost:3000'
})

export default class Main {

    constructor() {
        this.attack(10)
    }

    @PV.hello
    @PV.saySomething('xixixi')
    attack(attackValue: number) {
        console.log(attackValue)
    }
}

let start = new Main();