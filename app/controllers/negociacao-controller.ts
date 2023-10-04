// Imports
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagensView } from "../views/mensagens-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

  // Variables
  private inputDate: HTMLInputElement;
  private inputQuant: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagensView = new MensagensView("#mensagemView");

  constructor() {
    // Assigns the corresponding HTML elements to the inputs
    this.inputDate = document.querySelector("#data");
    this.inputQuant = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    
    // Refresh empty table
    this.negociacoesView.update(this.negociacoes);
  }
  

  // Adds table items and reset the form
  public adicionar(): void {
    const negociacao: Negociacao = this.createNegotiation();
    this.negociacoes.add(negociacao);
    this.updateAll();
    this.clearForm();
  }

  // Creates a new Negotiation with the input values
  public createNegotiation(): Negociacao {
    const date = this.formatDate(this.inputDate.value); 
    const quant = parseInt(this.inputQuant.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociacao(date, quant, value);
  }

  // Calls all views
  private updateAll():void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagensView.update("Negociação Adicionada com Sucesso")
  }

  // Formats Strings to Dates
  private formatDate(date: string): Date {
    const exp = /-/g;
    return new Date(date.replace(exp, ","));
  }

  // Cleans the form
  private clearForm(): void {
    document.querySelector('form').reset()
  }

}