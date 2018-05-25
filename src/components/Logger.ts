export namespace Logger {
  export function hello (target: object, key: string, descriptor: any) {
    const method= descriptor.value;
    let moreAtk = 50;
    let ret;
    descriptor.value = (...args: Array<string>) => {
      args[0] += moreAtk;
      ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}