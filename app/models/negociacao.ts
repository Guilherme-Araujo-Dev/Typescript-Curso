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
  
  // Formats Strings to Dates
  private static formatDate(date: string): Date {
    const exp = /-/g;
    return new Date(date.replace(exp, ","));
  }

  // Creates a new Negotiation with the input values
  public static create(_date: string, _quant: string, _value: string): Negociacao {
    const date = this.formatDate(_date); 
    const quant = parseInt(_quant);
    const value = parseFloat(_value);
    return new Negociacao(date, quant, value);
  }

}
