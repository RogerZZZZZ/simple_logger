import ModuleStandard from './ModuleStandard'

export module Logger {
  export class PV implements ModuleStandard {
    __SERVER_ADDRESS: string

    static hello (target: object, key: string, descriptor: any) {
      const method= descriptor.value;
      let moreAtk = 50;
      let ret;
      descriptor.value = (...args: Array<any>) => {
        args[0] += moreAtk;
        ret = method.apply(target, args);
        return ret;
      }
      return descriptor;
    }

    static satSomething (word: string) {
      return (target: object, key: string, descriptor: any) => {
        console.log('oooo' + word)
      }
    }

    public init () {

    }
  }
}