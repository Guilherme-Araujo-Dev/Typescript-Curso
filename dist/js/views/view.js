export class View {
    constructor(selector) {
        this.selector = selector;
        this.elemento = document.querySelector(selector); // Encontra o elemento HTML correspondente ao seletor
    }
    update(model) {
        this.elemento.innerHTML = this.template(model); // Atualiza o conteúdo do elemento HTML com o HTML gerado pelo método template
    }
    formater(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
