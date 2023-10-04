var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logET } from "../decorators/logET.js";
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
        const form = document.querySelector("form");
        form.reset();
    }
    isBussinesDay(date) {
        return (date.getDay() !== Weekdays.SATURDAY && date.getDay() !== Weekdays.SUNDAY);
    }
}
__decorate([
    logET()
], NegociacaoController.prototype, "adicionar", null);
