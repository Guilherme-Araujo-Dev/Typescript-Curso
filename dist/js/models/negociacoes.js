export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Adds a negotiation to the table
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Shows the table
    list() {
        return [...this.negociacoes];
    }
}
