import {Logger} from './components/Logger'
let pv = Logger.PV
pv.init({
    serverAddress: 'http://localhost:3000'
})

export default class Main {

    constructor() {
        this.attack(10)
    }

    @pv.hello
    @pv.count('test12')
    attack(attackValue: number) {
        console.log(attackValue)
    }
}

let start = new Main();
