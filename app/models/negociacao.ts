export class Negociacao {

  // private _date: Date;
  // private _quant: number;
  // private _value: number;

  // Essas propriedades só podem ser alteradas por construtor ou métodos dessa classe
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
