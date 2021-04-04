/* 
Principe des Closures : fonction dans une fonction qui sauvegarde les variables. Les closures permettent d’écrire des blocs de code à la volée. Ce qui souligne son utilité pour écrire le moins de code répétitif que possible.
Incrémentation : 
monNombre = ++variable   <->  (variable = variable +1) puis  (monNombre = variable)
monNombre = variable++   <-> (monNombre = variable) puis (variable = variable +1)
*/

let go = () => {
  let unPrix = Number(prompt("Indiquez un prix ?"));
  return unPrix;
};

// Déclaration variable totalArticles en dehors de la foncion... :-/

let totalArticles = 0;

function panierOld() {
  let achat = go();
  totalArticles += achat;
  return totalArticles;
}

console.log(
  "Première version avec la déclaration hors de la fonction :\n" +
    50 +
    " + " +
    totalArticles +
    " = " +
    panierOld(50)
);
console.log(
  "Première version avec la déclaration hors de la fonction :\n" +
    60 +
    " + " +
    totalArticles +
    " = " +
    panierOld(60)
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
function monPanier(achat) {
  let totalArticles = 0;
  let closurePanier = (achat) => (totalArticles += achat);
  return closurePanier;
}

let panier = monPanier();
console.log(panier(50));
console.log(panier(40));
console.log(panier(40));
