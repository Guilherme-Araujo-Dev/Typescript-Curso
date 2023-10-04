export abstract class View<T> {
  private elemento: HTMLElement; // Referência ao elemento HTML que será atualizado

  constructor(private selector: string) {
    this.elemento = document.querySelector(selector); // Encontra o elemento HTML correspondente ao seletor
  }

  protected abstract template(model: T): string // Método abstrato que deve ser implementado pelas subclasses para gerar o HTML

  public update(model: T): void {
    this.elemento.innerHTML = this.template(model); // Atualiza o conteúdo do elemento HTML com o HTML gerado pelo método template
  }

  protected formater(date: Date): string {
    return new Intl.DateTimeFormat().format(date)
  }
}