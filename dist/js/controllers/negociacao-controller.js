import { Weekdays } from "../enums/weekdays.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagensView } from "../views/mensagens-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagensView = new MensagensView("#mensagemView");
        this.inputDate = document.querySelector("#data");
        this.inputQuant = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.create(this.inputDate.value, this.inputQuant.value, this.inputValue.value);
        if (this.isBussinesDay(negociacao.date)) {
            this.negociacoes.add(negociacao);
            this.updateAll();
            this.clearForm();
        }
        else {
            this.mensagensView.update("Não é possível criar uma negociação nos finais de semana!");
        }
    }
    updateAll() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagensView.update("Negociação Adicionada com Sucesso");
    }
    clearForm() {
        document.querySelector("form").reset();
    }
    isBussinesDay(date) {
        return (date.getDay() !== Weekdays.SATURDAY && date.getDay() !== Weekdays.SUNDAY);
    }
}
