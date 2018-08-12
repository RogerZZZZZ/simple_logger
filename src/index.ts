import Logger from './components/Logger'
const logger = Logger.instance({
    serverAddress: 'http://118.184.218.23:3005',
    page: 'attack',
})
let Visitor = logger.Visitor
let EventTag = logger.EventLogger

export default class Main {

    constructor() {
        this.attack(10)
        this.eventTest()
    }

    @Visitor.count({
        tag: 'attack.function',
    })
    public attack(attackValue: number): void {
        console.log(attackValue)
    }

    @EventTag.trigger({
        tag: 'eventTest',
    })
    public eventTest() {
        console.log('event test trigger')
    }
}

let start = new Main();
