import { View } from "./view.js";
export class MensagensView extends View {
    // Message HTML
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
