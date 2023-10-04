// E.T. = Execution Time
export function logET(inSeconds: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const t1 = performance.now();
      metodoOriginal.apply(this, args);
      const t2 = performance.now();
      if(inSeconds) console.log(`Tempo de Execução do "${propertyKey}": ${(t2-t1)/1000} segundos`);
      else console.log(`Tempo de Execução do "${propertyKey}": ${(t2-t1)} milisegundos`);
    }
    return descriptor;
  }
}