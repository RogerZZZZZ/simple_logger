import Logger from './components/Logger'
const logger = Logger.instance({
    serverAddress: 'http://118.184.218.23:3000',
})
let visitor = logger.Visitor

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
