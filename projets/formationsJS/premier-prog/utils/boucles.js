let index = 0;
// do {
//   index > 0 ? alert("Saisir en chiffre svp...") : "";
//   var saisie = prompt("donne un chiffre");
//   saisie = Number(saisie);
//   index++;
// } while (!saisie);

// console.log("Bonjour " + saisie);

// for (let i = 1; i < 5; i++) {
//   console.log("Ligne : " + i);
// }

let j = 0;

while (j < 5) {
  if (j == 3) {
    j++;
    //break;
    continue;
  }

  console.log("Ligne : " + j);
  j++;
}
