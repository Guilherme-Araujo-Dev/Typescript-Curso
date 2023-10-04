export class View {
    constructor(selector, skip = false) {
        this.skip = skip;
        this.elemento = document.querySelector(selector);
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
