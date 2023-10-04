import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();

const form: HTMLFormElement | null = document.querySelector(".form");
if(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adicionar();
  });
} else {
  throw SyntaxError("Unable to start the application, check if the '.form' exists!")
}

