import Citation from "./citations.js";

const theme = document.getElementById("theme"); // Selection du choix du theme
const select = document.getElementById("nbSelect"); // Selection du choix du nombre
const validate = document.getElementById("run"); // Selection le  button Valité

validate.addEventListener("click", () => {
  let run = new Citation(select.value, theme.value);
});

// script qui permet de selectionné mes elements dans le html
