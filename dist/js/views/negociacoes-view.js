import { View } from "./view.js";
export class NegociacoesView extends View {
    // Negotiation HTML
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Volume</th>
          </tr>
        </thead>
        
        <tbody>
        ${model
            .list()
            .map((negociacao) => {
            return `
            <tr>
              <td>${this.formater(negociacao.date)}</td>
              <td>${negociacao.quant}</td>
              <td>${negociacao.value}</td>
              <td>${negociacao.volume}</td>
            </tr>
            `;
        })
            .join("")}
          </tbody>
      </table>
    `;
    }
}
