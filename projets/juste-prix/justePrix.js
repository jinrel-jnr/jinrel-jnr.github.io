// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let coups = 0;
let nombreChoisi;

// Etape 2 - Cacher l'erreur
// error.hidden = true;
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});

// Etape 6 - Créer la fonction vérifier
let verifier = (nombre) => {
  let instruction = document.createElement("div");

  if (nombre < nombreAleatoire) {
    instruction.textContent = `#${coups} - ${nombre} : ç'est plus !`;
    instruction.className = "plus instruction";
    instruction.id = "instructions";
  } else if (nombre > nombreAleatoire) {
    instruction.textContent = `#${coups} - ${nombre} : ç'est moins !`;
    instruction.className = "moins instruction";
    instruction.id = "instructions";
  } else {
    instruction.textContent = `#${coups} - ${nombre} : Wahou ! gagné ! Félicitations !`;
    instruction.className = "fini instruction";
    instruction.id = "instructions";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
};
