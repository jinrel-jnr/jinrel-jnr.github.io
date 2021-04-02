// let fonctionAnonyme = function () {
//   console.log("Je suis une fonction anonyme");
// };

// fonctionAnonyme();

// (function () {
//   console.log("Je suis une fonction anonyme");
// })();

let abracadabra = () => {
  let prenom = prompt("Quel est votre prénom ?");
  let nom = prompt("Quel est votre nom ?");
  let age = prompt("Quel est votre age ?");

  alert(
    `Sapristi! On ne m'avait pas prévenu que c'était vous, ${prenom} ! Euh... Je veux dire... Monsieur le grand magicien ${nom} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`
  );
};

abracadabra();
