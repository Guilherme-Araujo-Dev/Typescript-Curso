export class View {
    constructor(selector, skip = false) {
        this.skip = skip;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Selector ${selector} doesn't  exist`);
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.skip) {
            const exp = /<script>[\s\S]*<\/script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
    formater(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
