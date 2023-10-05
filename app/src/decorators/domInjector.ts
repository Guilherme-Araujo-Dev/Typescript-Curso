export function domInjector(selector: string) {
  return function(
    target: any,
    propertyKey: string,
  ) {
    const getter = function() {
      return document.querySelector(selector)
    }

    Object.defineProperty(
      target,
      propertyKey,
      {get: getter}
    )
  }
}