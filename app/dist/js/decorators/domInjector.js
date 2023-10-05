export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            return document.querySelector(selector);
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
