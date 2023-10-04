export class Negociacao {
    // private _date: Date;
    // private _quant: number;
    // private _value: number;
    // Essas propriedades só podem ser alteradas por construtor ou métodos dessa classe
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
}
