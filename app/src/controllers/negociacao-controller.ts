// Imports
import { logET } from "../decorators/logET.js";
import { Weekdays } from "../enums/weekdays.js";
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
    this.inputDate = document.querySelector("#data") as HTMLInputElement;
    this.inputQuant = document.querySelector("#quantidade") as HTMLInputElement;
    this.inputValue = document.querySelector("#valor") as HTMLInputElement;

    // Refresh empty table
    this.negociacoesView.update(this.negociacoes);
  }

  // Adds table items and reset the form
  @logET()
  public adicionar(): void {
    // Creating  a Negotiation
    const negociacao: Negociacao = Negociacao.create(
      this.inputDate.value,
      this.inputQuant.value,
      this.inputValue.value
    );

    // Checking if it is a Business Day
    if (this.isBussinesDay(negociacao.date)) {
      this.negociacoes.add(negociacao);
      this.updateAll();
      this.clearForm();
    } else {
      this.mensagensView.update(
        "Não é possível criar uma negociação nos finais de semana!"
      );
    }
  }

  // Calls all views
  private updateAll(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagensView.update("Negociação Adicionada com Sucesso");
  }

  // Cleans the form
  private clearForm(): void {
    const form: HTMLFormElement = document.querySelector("form") as HTMLFormElement;
    form.reset();
  }

  private isBussinesDay(date: Date): boolean {
    return (
      date.getDay() !== Weekdays.SATURDAY && date.getDay() !== Weekdays.SUNDAY
    );
  }
}
