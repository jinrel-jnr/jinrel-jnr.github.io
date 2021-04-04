/* 
Principe des Closures : fonction dans une fonction qui sauvegarde les variables. Les closures permettent d’écrire des blocs de code à la volée. Ce qui souligne son utilité pour écrire le moins de code répétitif que possible.
Incrémentation : 
monNombre = ++variable   <->  (variable = variable +1) puis  (monNombre = variable)
monNombre = variable++   <-> (monNombre = variable) puis (variable = variable +1)
*/

let go = () => {
  let unPrix = Number(
    prompt(
      "Combien souhaitez vous ajouter à votre panier ?\nIndiquez un montant :"
    )
  );
  return unPrix;
};

// Déclaration variable totalArticles en dehors de la foncion... :-/

let totalArticles = 0;
let achat = 0;

function panierOld() {
  achat = go();
  totalArticles += achat;
  return totalArticles, achat;
}
let resultatPanier = 0;
console.log(
  "Première version avec la déclaration hors de la fonction :\n" +
    "Encours panier : " +
    totalArticles +
    "€ + " +
    panierOld() +
    totalArticles +
    "€ achat. \nMontant total : " +
    (totalArticles + panierOld())
);
console.log(
  "Première version avec la déclaration hors de la fonction :\nEncours panier : " +
    totalArticles +
    "€ + " +
    panierOld() +
    "€ achat."
);

// Sans la closure : en voulant déclarer dans la fonction, se réinialise à chaque fois
function panierBis(achat) {
  let totalArticles = 0;
  totalArticles += achat;
  return totalArticles;
}

console.log(
  "Version avec la déclaration dans la fonction :\n" +
    panierBis(50) +
    "\n" +
    panierBis(60) +
    "\n"
);

// Avec la closure : variable locale accessible en dehors de la fonction
function monPanier() {
  let totalArticles = 0;
  let achat = go();
  let closurePanier = () => (totalArticles += achat);
  return closurePanier;
}

let panier = monPanier();
console.log(panier());
console.log(panier());
console.log(panier());

function constructionMessageLog(uneFonction) {
  console.log(
    "Première version avec la déclaration hors de la fonction :\nEncours panier : " +
      uneFonction
  );
}
