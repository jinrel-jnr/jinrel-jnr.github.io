// // Rappel de la logique - if / else if / else

// let heure = 18;

// // heure == 11 ? heure <= / >= / != / < / >

// if (heure == 11) {
//   console.log("J'y suis pas! Euh.. ah si ! C'est bientôt l'apéro :)");
// } else {
//   console.log("C'est l'apm :)");
// }

// let age = 21;
// if (age >= 21) {
//   console.log("Vous êtes majeur partout, à vous le casino !");
// } else if (age < 21 && age >= 18) {
//   console.log("Vous êtes majeur en france");
// } else {
//   console.log("Pas encore majeur");
// }

// let fizzbuzz = (decompte, controle1, controle2) => {
//   for (let i = decompte; i > 0; i--) {
//     if (i % controle1 == 0 && i % controle2 == 0) {
//       console.log(i + " FizzzzzzBuzzzzz");
//     } else if (i % controle1 == 0) {
//       console.log(i + " Fizzzzzz");
//     } else if (i % controle2 == 0) {
//       console.log(i + " Buzzzzz");
//     }
//   }
// };

// // fizzbuzz(100, 5, 3);

// let categorie = "horreur";

// switch (categorie) {
//   case "aventure":
//   case "fantastique":
//   case "horreur":
//   case "science-fiction":
//     console.log(categorie + " ? Héhé.. Merci NetFlix ^^");
//     break;

//   case "romance":
//     console.log("L'angoisse ! Fuyons");
//     break;

//   default:
//     console.log(
//       "La catégorie " +
//         categorie +
//         " n'est pas prise en compte dans les cases. Au boulot :)."
//     );
// }

let gareDeDepart = "Lunel";
let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "EUNA";
let chauffeur = "Marçel";

// if (gareDArrivee && gareDeDepart) {
//   console.log("C'est parti !");
// } else {
//   console.log("Pas de destinations... ");
// }
if ((gareDArrivee || gareDeDepart) && chauffeur) {
  alert("Le train va démarrer à destination de " + gareDArrivee + ".");
} else {
  alert("Pas de destinations... Le train ne peut pas démarrer.");
}

// let nombre = 7;
// if (!nombre < 5) {
//   console.log("nombre est inférieur à 5.");
// }
// if (nombre > 5) {
//   console.log("nombre n'est pas inférieur à 5.");
// }

let nombre = 9;
// if (nombre > 3) {
//   console.log("x est supé à 3");
// } else {
//   console.log("x est inf à 3");
// }
nombre > 3
  ? console.log(`Le nombre ${nombre} est supérieur à 3`)
  : console.log(`Le nombre ${nombre} est inférieur à 3`);
