function direBonjour(prenom) {
  console.log("Bonjour " + prenom + " !");
}

direBonjour("Wahouuu !");

const direBonjourEncore = () => {
  let prenom = prompt("Quel est votre nom ?");
  console.log("Bonjour cher " + prenom + " :) !");
};

//direBonjourEncore();

function addition(nombre1, nombre2) {
  let result = nombre1 + nombre2;
  return result;
}

function soustraire(nombre1, nombre2) {
  let result = nombre1 - nombre2;
  return result; // retourne un resultat -> pour traiter des valeurs
}

let resultatAddition = addition(5, 15); // 20
let resultatSoustraction = soustraire(10, 5); // 5
console.log(resultatAddition + resultatSoustraction); // 25

function cuisiner(
  nombreDeGateaux,
  minutesDePreparation = 10,
  minutesDeCuisson = 15
) {
  let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
  return resultat;
}
let tempsPourGateauChocolat = cuisiner(1, 20);
let tempsGateauFraisier = cuisiner(4);
console.log(tempsPourGateauChocolat + tempsGateauFraisier);
