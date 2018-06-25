import {Logger} from './components/Logger'
Logger.config({
    serverAddress: 'http://localhost:3000'
})
let visitor = Logger.Visitor

export default class Main {

    constructor() {
        this.attack(10)
    }

    @visitor.count({
        tag: 'attack.function'
    })
    public attack(attackValue: number): void {
        console.log(attackValue)
    }

}

let start = new Main();
