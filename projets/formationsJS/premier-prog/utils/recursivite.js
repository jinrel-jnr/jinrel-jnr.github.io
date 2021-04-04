// function timer(secondes) {
//   if (secondes > 0) {
//     console.log(secondes + " s");
//     timer(secondes - 1);
//   } else {
//     console.log(secondes);
//   }
// }

// timer(10);

// faire afficher 10 9 8 7...0
// let res = 0;
// function somme(nombre) {
//   if (nombre == 1) {
//     return 1;
//   }
//   if (nombre > 0) {
//     console.log(res + " + " + nombre);
//     res += nombre;
//     somme(nombre - 1);
//   }
//   return res;
// }

let construc = () => {
  let choix;
  do {
    choix = Number(
      prompt(
        "Que souhaitez-vous faire ?\n 1. Tester l'itération en récursif\n 5. Quitter"
      )
    );
  } while (!choix || choix > 5 || choix < 0);

  switch (choix) {
    case 1:
      console.log("coucou");
      lancerIteration();
      break;

    default:
      console.log("Au plaisir :)");
      break;
  }
};

let lancerIteration = () => {
  let fin = Number(prompt("Indiquez une valeur de fin"));
  let iterations = 0;
  function boucle() {
    if (iterations > fin) {
      console.log("Etapes terminés");
    } else {
      console.log("Etape en cours : n°" + iterations);
      boucle((iterations += 1));
    }
  }
  boucle();
};

function somme(nombre) {
  if (nombre == 1) {
    return 1;
  }
  return nombre + somme(nombre - 1);
}

// console.log(somme(3));

function decremente(index) {
  if (index < 0) {
    console.log("Fin de la décrémentation");
  } else {
    console.log("décompte d'un index :" + index);
    decremente(index - 1);
  }
}

// decremente(10);
