export class Negociacao {

  // private _date: Date;
  // private _quant: number;
  // private _value: number;

  // These properties can only be changed by constructor or methods of that class
  constructor(
    private readonly _date: Date,
    public readonly quant: number,
    public readonly value: number
  ) {}

  get date(): Date {
    return new Date(this._date.getTime());
  };

  get volume(): number {
    return this.quant * this.value;
  }
}
