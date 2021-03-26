let nombre1;
let nombre2;
let operateur;
let resultat;

nombre1 = prompt("Choisissez le premier nombre.");
operateur = prompt("Que souhaitez vous faire ? choisissez : x + - /");
nombre2 = prompt("Choisissez le nombre à " + operateur);

switch (operateur) {
  case "*":
    resultat = nombre1;
    resultat *= nombre2;
    break;
  case "/":
    resultat = nombre1;
    resultat /= nombre2;
    break;
  case "+":
    nombre1 = parseInt(nombre1);
    nombre2 = parseInt(nombre2);
    resultat = nombre1 + nombre2;
    break;
  case "-":
    resultat = nombre1;

    resultat -= nombre2;
    break;
  default:
    console.log("Merci ^^");
    break;
}
console.log(resultat);
