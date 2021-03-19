export default class Citation {
  constructor(nb, theme) {
    this.citDiv = document.getElementById("citations");

    //Création de la donnée

    this.data = {
      philosophie: {
        start: [
          "« La seule façon",
          "« La meilleure des façons",
          "« Le meilleur moyen",
          "« La meilleure des manières",
          "« L'hacharnement",
          "« La pire des façon",
          "« Le pire moyen",
          "« La pire des manières",
          "« L'unique méthode",
          "« L'unique moyen",
        ],
        middle: [
          " pour réussir,",
          " d'être heureux,",
          " de vivre,",
          " d'y arriver,",
          " d'aller au bout de ses rêves,",
        ],
        end: [
          " c'est d'aimer ce que vous faites. »",
          " ne dépend que de vous. »",
          " c'est de s'obstiner. »",
          " c'est simple, il n'y en a pas. »",
          " n'apporte rien. »",
        ],
      },
      kaamelot: {
        start: [
          "Au printemps,",
          "Dans le Languedoc, ils m'appellent Provençal ",
          "Dans la vie, j'avais deux ennemis : ",
          "J'voudrais pas faire ma raclette, ",
          "Si on faisait le coup du bouclier humain... ",
          "Si Joseph d'Arimathie a pas été trop con, ",
          "Putain, ",
          "C’est pour ça ",
          "Faut arrêter ces conneries de nord et de sud, ",
          "Une fois, à une exécution, ",
        ],
        middle: [
          "j’aime bien pisser du haut des remparts au lever du soleil..., ",
          "le vocabulaire et les épinards, ",
          "par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage ",
          "vous pouvez être sûr que le Graal, ",
          "c’est un vrai piège à cons c’t’histoire-là, ",
          "une fois pour toute, le nord, suivant comment on est tourné, ",
        ],
        end: [
          "c'est pas faux !",
          "y’a une belle vue !",
          "mais c'est moi qui m'suis gouré en disant mon nom.",
          "enfin tous les chiffres impairs jusqu'à 22.",
          "on vous met une dague sous le cou et on traverse le camp adverse en gueulant : Bougez pas, bougez pas ou on bute le roi!",
          "c'est un bocal à anchois.",
          "en plein dans sa mouille !",
          "j’lis jamais rien.",
          "en plus j’sais pas lire.",
          "je m'approche d'une fille. Pour rigoler, je lui fais : « Vous êtes de la famille du pendu ? »",
        ],
      },
    };

    this._citationGenerator(nb, theme);
  }

  //Math Round arrondi au chiffre le plus proche plus proche de 0 ou 1//
  //Method Ramdom me renvoie un chiffre fraction //
  //Function qui permet de recupere la longeur de mes array (start , middle , end) et de me renvoyé un entier qui servira d'index//
  _numGenerator(length) {
    return Math.round(Math.random() * length);
  }

  //Function qui permet de recuperer le nombre selection et le choix du theme,
  //Variable qui permet de récuperer l'objet theme(phli || kamlot)//
  //Création d'une array vide//
  //je construie mon array qui va s'afficher dans la balise citation//
  // Nb le nombre de citation que je generer et je boucle sur la citation pour m'afficher 1 à 5 le texte assemblé avec le start , middle , end pour le mettre en une seul string que je push dans mon array
  //Je join pour afficher sous form de string parce que le innerHtml accepte des String//
  //Iteration sur le nb qui va me generer les phrases dans mon array//

  _citationGenerator(nb, theme) {
    const d = this.data[theme];
    let cit = [];
    for (let i = 0; i < nb; i++) {
      cit.push(
        `<p>${d.start[this._numGenerator(d.start.length)]} ${
          d.middle[this._numGenerator(d.middle.length)]
        } ${d.end[this._numGenerator(d.end.length)]}</p>`
      );
    }
    this.citDiv.innerHTML = cit.join("");
  }
}
