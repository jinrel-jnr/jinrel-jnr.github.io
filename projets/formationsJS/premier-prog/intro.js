let linkDom = document.querySelector("#linkDom");

// ETAPE 1 : LES BASES
// var / let / const
// Rappel des types de variables :
//  var -> globale
//  let -> locale
// const -> constante

const prenom = "Anthony"; // equivalent à 'Anthony' ou `Anthony`
const nom = "Monteil";
// Chaînes de caractères (string)

let age = 18;
// Nombre (number)

let majorite;
age > 18 ? (majorite = true) : (majorite = false);
// Booleen (boolean)
// console.log(
//   "Salut " + prenom + "\n" + "Age : " + age + "\n" + "Majeur : " + majorite
// );
console.log(`Salut ${prenom} ${nom} !\nAge : ${age} \nMajeur : ${majorite}`);

const variableConstante =
  "Déclaration d'une variable constante : const variableConstante. Exemple : Prénom";
console.log(variableConstante);

let nombreUn = 8,
  nombreDeux = 4,
  result;

result = (nombreUn + nombreDeux) * 9; // 108
result += 2;
result++;
result--;
console.log(result);
// pop-up d'affichage de texte :

// confirm("Souhaitez-vous confirmer ?");
/*
if (confirm("Souhaitez-vous confirmer ?")) {
  alert(`Salut ${prenom} ${nom} !\nAge : ${age} \nMajeur : ${majorite}`);
} else {
  alert("Ben c'est annulé ^^");
}

*/

linkDom.addEventListener("click", () => {
  window.open("../le-Dom/index.html", "_blank");
});
linkCalc.addEventListener("click", () => {
  window.open("../projetCalculatrice/index.html", "_blank");
});
