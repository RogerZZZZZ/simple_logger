import {Logger} from './components/Logger'
Logger.config({
    serverAddress: 'http://localhost:3000'
})
let pv = Logger.PV

export default class Main {

    constructor() {
        this.attack(10)
    }

    @pv.hello
    // @pv.count()
    @pv.test
    public attack(attackValue: number): void {
        console.log(attackValue)
    }

}

let start = new Main();
