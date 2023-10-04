import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagensView } from "../views/mensagens-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputDate: HTMLInputElement;
  private inputQuant: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagensView = new MensagensView("#mensagemView");

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuant = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }
  
  public adicionar(): void {
    const negociacao: Negociacao = this.createNegociation();
    this.negociacoes.add(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.mensagensView.update("Negociação Adicionada com Sucesso")
    console.log(this.negociacoes.list());
    this.clearForm();
  }

  public createNegociation(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ","));
    const quant = parseInt(this.inputQuant.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociacao(date, quant, value);
  }

  private clearForm(): void {
    document.querySelector('form').reset()
  }

}
