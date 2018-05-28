import ModuleStandard from './ModuleStandard'
import RequestModule from './common/RequestModule'

let requestModule = new RequestModule(false);

export module Logger {
  export class PV extends ModuleStandard {

    static count (word: string) {
      return (target: object, key: string, descriptor: any) => {
        requestModule.getMethod('http://localhost:4040/test', (data: object) => {
          console.log(data)
        }, {
          label: 'abc',
          value: word
        })
      }
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
      
    }
  }
}
