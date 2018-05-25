export module Logger {
  export namespace PV {
    export function hello (target: object, key: string, descriptor: any) {
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
  }
}