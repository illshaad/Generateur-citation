import Citation from "./citations.js";

const theme = document.getElementById("theme"); // kam || philo
const select = document.getElementById("nbSelect"); //number
const validate = document.getElementById("run"); // valider//

validate.addEventListener("click", () => {
  let run = new Citation(select.value, theme.value);
});

// script qui gere le l'affiche front//
