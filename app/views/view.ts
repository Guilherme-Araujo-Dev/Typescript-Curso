export abstract class View<T> {

  // Reference to the HTML element that will be updated
  private elemento: HTMLElement; 

  constructor(selector: string, private skip: boolean = false) {
    this.elemento = document.querySelector(selector); // Finds the HTML element corresponding to the selector
  }

  // Abstract method that must be implemented by subclasses to generate the HTML
  protected abstract template(model: T): string; 

  // Updates the content of the HTML element with the HTML generated by the template method
  public update(model: T): void {
    let template = this.template(model);
    if(this.skip) {
      const exp = /<script>[\s\S]*<\/script>/;
      template = template.replace(exp, '');
    }
    this.elemento.innerHTML = template; 
  }

  // Formats Date to String
  protected formater(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}