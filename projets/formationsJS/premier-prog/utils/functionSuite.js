function demanderAge() {
  let age = prompt("T'as quel âge ?");
  alert("Vous avez " + age + " ans.");
}

function prevoirAge() {
  let age = prompt("T'as quel âge ?"); // recupère valeur en string
  age = parseInt(age); // converti en entier
  age2 = parseFloat(age); // Recupère les chiffres après la virgule
  //age = Number(age);

  // nombre = 45;
  // nombreEnString = nombre.toString(); <- conversion en string
  alert("Vous aurez bientôt " + (age + 1) + " ans.");
}

// Le REST parameter : nombre illimité de paramètres avec les fameux ...
function addition(...nombres) {
  let resultat = 0;
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length) {
      for (let j = 0; j < nombres[i].length; j++) {
        resultat += parseInt(nombres[i][j]);
      }
    } else {
      resultat += Number(nombres[i]);
    }
  }
  // alert("Le résultat est de : " + resultat);
  return resultat;
}

let string = "";
let numbers = [];
function demanderNombre() {
  let number = Number(prompt("Indiquez un nombre?"));
  if (number == 0 || !number) {
    // faire un truc
    faireUnChoix();
  } else {
    numbers.push(number);
    demanderNombre();
  }
  return numbers;
}

let test = demanderNombre();
let ret = addition(test);

// addition(5, 2, 6, 85, 456, 7, 1);

function faireUnChoix() {
  let choix = prompt("Que faire ?");
  switch (choix) {
    case "1":
      alert(
        `Le résultat pour l'addition de : | ${afficherNombre(numbers)} est = ` +
          addition(numbers)
      );
      break;

    default:
      break;
  }
}

function afficherNombre(numbers) {
  numbers.forEach((nombre) => {
    string += nombre + " | ";
  });
  return string;
}
