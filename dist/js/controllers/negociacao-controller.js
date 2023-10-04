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
        const negociacao = this.createNegociation();
        this.negociacoes.add(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagensView.update("Negociação Adicionada com Sucesso");
        console.log(this.negociacoes.list());
        this.clearForm();
    }
    createNegociation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quant = parseInt(this.inputQuant.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, quant, value);
    }
    clearForm() {
        document.querySelector('form').reset();
    }
}
