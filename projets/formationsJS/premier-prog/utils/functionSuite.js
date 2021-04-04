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
