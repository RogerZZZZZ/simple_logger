import ModuleStandard from './ModuleStandard'

export module Logger {
  export class PV extends ModuleStandard {

    static count () {

    }


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

    static saySomething (word: string) {
      return (target: object, key: string, descriptor: any) => {
        console.log('oooo' + word)
        console.log('server address:', this._opt.serverAddress)
      }
    }
  }
}
