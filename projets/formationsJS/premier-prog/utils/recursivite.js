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

function somme(nombre) {
  if (nombre == 1) {
    return 1;
  }
  return nombre + somme(nombre - 1);
}

console.log(somme(3));

function boucle(iterations) {
  if (iterations > 10) {
    console.log("Etapes terminés");
  } else {
    console.log("Etape en cours : n°" + iterations);
    boucle(iterations + 1);
  }
}

boucle(1);

function decremente(index) {
  if (index < 0) {
    console.log("Fin de la décrémentation");
  } else {
    console.log("décompte d'un index :" + index);
    decremente(index - 1);
  }
}

decremente(10);
