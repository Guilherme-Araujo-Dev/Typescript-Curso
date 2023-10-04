import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public add(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public list(): readonly Negociacao[] {
    return [...this.negociacoes];
  }
}
