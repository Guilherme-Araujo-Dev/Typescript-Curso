// Imports
import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { logET } from "../decorators/logET.js";
import { Weekdays } from "../enums/weekdays.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagensView } from "../views/mensagens-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  // Variables
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagensView = new MensagensView("#mensagemView");

  // Assigns the corresponding HTML elements to the inputs
  @domInjector('#data')
  private inputDate: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuant: HTMLInputElement;
  @domInjector('#valor')
  private inputValue: HTMLInputElement;

  constructor() {
    // Refresh empty table
    this.negociacoesView.update(this.negociacoes);
  }

  // Adds table items and reset the form
  @inspect
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
