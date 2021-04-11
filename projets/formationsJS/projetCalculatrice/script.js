let ajouter = (...nombres) => {
  let resultat = 0;
  for (let i = 0; i < nombres.length; i++) {
    nombres[i].pop();
    console.log(nombres[i]);
    for (let j = 0; j < nombres[i].length; j++) {
      resultat += nombres[i][j];
    }
  }
  return resultat;
};
let multiplier = (...nombres) => {
  let resultat = 1;
  for (let i = 0; i < nombres.length; i++) {
    nombres[i].pop();
    console.log(nombres[i]);
    for (let j = 0; j < nombres[i].length; j++) {
      if (nombres[i][j] != 0) {
        resultat *= nombres[i][j];
      }
    }
  }
  return resultat;
};
let soustraire = (...nombres) => {
  let resultat;
  for (let i = 0; i < nombres.length; i++) {
    nombres[i].pop();
    for (let j = 0; j < nombres[i].length; j++) {
      if (!resultat) {
        resultat = nombres[i][j];
        console.log(resultat);
      } else {
        resultat -= nombres[i][j];
      }
    }
  }
  return resultat;
};

let diviser = (...nombres) => {
  if (nombres == 0) {
    throw new Error(alert("Désolé... Vous ne pouvez pas diviser par 0."));
  } else {
    let resultat;
    for (let i = 0; i < nombres.length; i++) {
      nombres[i].pop();
      for (let j = 0; j < nombres[i].length; j++) {
        if (!resultat) {
          resultat = nombres[i][j];
        } else {
          resultat /= nombres[i][j];
        }
      }
    }
    return resultat;
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

  let nombres = [];
  let nombre = 0;
  do {
    nombre = Number(prompt("Indiquez un nombre"));
    nombres.push(nombre);
  } while (nombre != 0 || nombre);

  let total = 0;

  try {
    switch (step) {
      case 1:
        console.log(nombres);
        total = ajouter(nombres);
        break;
      case 2:
        total = multiplier(nombres);
        break;
      case 3:
        total = soustraire(nombres);
        break;
      case 4:
        total = diviser(nombres);
        break;
      default:
        throw new Error(
          "Vous ne pouvez pas choisir une option n'existant pas :)."
        );
    }
    alert(`Résultat : ${total}`);
  } catch (error) {
    alert(error);
  }

  restart = confirm("Souhaitez-vous refaire un nouveau calcul ?");
} while (restart);
