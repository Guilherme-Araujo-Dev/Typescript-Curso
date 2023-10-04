export function logET(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            metodoOriginal.apply(this, args);
            const t2 = performance.now();
            if (inSeconds)
                console.log(`Tempo de Execução do "${propertyKey}": ${(t2 - t1) / 1000} segundos`);
            else
                console.log(`Tempo de Execução do "${propertyKey}": ${(t2 - t1)} milisegundos`);
        };
        return descriptor;
    };
}
