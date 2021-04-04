let ajouter = (nombreA, nombreB) => {
  return nombreA + nombreB;
};
let multiplier = (nombreA, nombreB) => {
  //  let resultat = nombreA * nombreB;
  return nombreA * nombreB;
};
let soustraire = (nombreA, nombreB) => {
  return nombreA - nombreB;
};

let diviser = (nombreA, nombreB) => {
  if (nombreDeux == 0) {
    throw new Error(alert("Désolé... Vous ne pouvez pas diviser par 0."));
  } else {
    return nombreA / nombreB;
  }
};

let restart = false;

do {
  do {
    var step = Number(
      prompt(
        "Choisir votre opération : \n\n1- Addition\n2- Multiplication\n3- Soustraction\n4- Division"
      )
    );
  } while (step < 0 || step > 4 || !step);

  do {
    var nombreUn = Number(prompt("Indiquez le premier nombre"));
  } while (isNaN(nombreUn));

  do {
    var nombreDeux = Number(prompt("Indiquez le deuxième nombre"));
  } while (!nombreDeux && nombreDeux != 0);

  let resultat;

  try {
    switch (step) {
      case 1:
        resultat = ajouter(nombreUn, nombreDeux);
        break;
      case 2:
        resultat = multiplier(nombreUn, nombreDeux);
        break;
      case 3:
        resultat = soustraire(nombreUn, nombreDeux);
        break;
      case 4:
        resultat = diviser(nombreUn, nombreDeux);
        break;
      default:
        throw new Error(
          "Vous ne pouvez pas choisir une option n'existant pas :)."
        );
    }
    alert(`Résultat : ${resultat}`);
  } catch (error) {
    alert(error);
  }

  restart = confirm("Souhaitez-vous refaire un nouveau calcul ?");
} while (restart);
