export class Negociacao {
    constructor(_date, quant, value) {
        this._date = _date;
        this.quant = quant;
        this.value = value;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    ;
    get volume() {
        return this.quant * this.value;
    }
    static formatDate(date) {
        const exp = /-/g;
        return new Date(date.replace(exp, ","));
    }
    static create(_date, _quant, _value) {
        const date = this.formatDate(_date);
        const quant = parseInt(_quant);
        const value = parseFloat(_value);
        return new Negociacao(date, quant, value);
    }
}
