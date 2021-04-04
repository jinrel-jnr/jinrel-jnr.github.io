/* 
Principe des Closures : fonction dans une fonction qui sauvegarde les variables. Les closures permettent d’écrire des blocs de code à la volée. Ce qui souligne son utilité pour écrire le moins de code répétitif que possible.
Incrémentation : 
monNombre = ++variable   <->  (variable = variable +1) puis  (monNombre = variable)
monNombre = variable++   <-> (monNombre = variable) puis (variable = variable +1)

*/
// closure = fermeture

let go = () => {
  let unPrix = Number(
    prompt(
      "Combien souhaitez vous ajouter à votre panier ?\nIndiquez un montant :"
    )
  );
  console.log("Montant de votre article : " + unPrix + "€.");
  return unPrix;
};

function start() {
  // Déclaration variable totalArticles en dehors de la foncion... :-/

  let totalArticles = 0;

  function panierOld() {
    console.log("Première version avec la déclaration hors de la fonction :\n");
    totalArticles += go();
    return totalArticles;
  }
  console.log("Encours panier : " + panierOld() + "€");
  console.log("Encours panier : " + panierOld() + "€");

  // Sans la closure : en voulant déclarer dans la fonction, se réinialise à chaque fois
  function panierBis() {
    console.log(
      "Version avec la déclaration dans la fonction :\n Le montant se réinitialise à chaque appel de la fonction."
    );
    let totalArticles = 0;
    totalArticles += go();
    return totalArticles;
  }

  console.log(
    "Valeur1 : " +
      panierBis() +
      "€\n" +
      "ValeurRemplacé2 : " +
      panierBis() +
      "€\n"
  );

  // Avec la closure : variable locale accessible en dehors de la fonction
  function monPanier() {
    let totalArticles = 0;
    let achat = 0;
    let closureAchat = () => (achat = go());
    let closurePanier = () => (totalArticles += closureAchat());
    return closurePanier;
  }

  let panier = monPanier();

  console.log("Montant de votre panier : " + panier() + "€.");
  console.log("Montant de votre panier : " + panier() + "€.");
  console.log("Montant de votre panier : " + panier() + "€.");

  function constructionMessageLog(uneFonction) {
    console.log(
      "Première version avec la déclaration hors de la fonction :\nEncours panier : " +
        uneFonction
    );
  }
}

function startTimer() {
  function timer() {
    let max = Number(prompt("Quelle limite souhaitez-vous pour le timer ?"));
    let secondes = 0;
    let closure = () => {
      return ++secondes;
    };

    return closure;
  }

  let monTimer = timer();
  console.log(monTimer());
  console.log(monTimer());
  console.log(monTimer());

  timer();
}
