import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  // Adds a negotiation to the table
  public add(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // Shows the table
  public list(): readonly Negociacao[] {
    return [...this.negociacoes];
  }
}
