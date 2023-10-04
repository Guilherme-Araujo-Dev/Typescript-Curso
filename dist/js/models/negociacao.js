export class Negociacao {
    // private _date: Date;
    // private _quant: number;
    // private _value: number;
    // These properties can only be changed by constructor or methods of that class
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
