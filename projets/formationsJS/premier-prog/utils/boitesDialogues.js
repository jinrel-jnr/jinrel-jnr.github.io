// Afficher une alerte
//alert("Une alerte sous forme de pop-up ! Clique sur ok et basta");

// Demander une confirmation
//confirm("Confirmer une action ? Annuler ou Valider");

// Demander des infos
let reset;
let age = prompt("Entrer votre age :");

let verifAge = (age) => {
  let temp = parseInt(age);
  console.log("test " + temp);
  if (!temp) {
    alert("Coquinou :), un age s'est mieux avec des nombres. Hihi");
  } else {
    return age;
  }
};

verifAge(age);
if (!age) {
  reset = confirm("Vous voulez vraiment annuler ?");
  if (reset) {
    alert(`Okkk ! Et bien au plaisir :). Oh et des poutoux !`);
  } else {
    age = prompt("Entrer votre age :");
    alert(`Bonjour, vous avez ${age} ans !`);
  }
} else {
  alert(`Bonjour, vous avez ${age} ans !`);
}

// const button = document.getElementById("unBouton1");
// let contenu = document.getElementById("display");
// button.addEventListener("click", () => {
//   contenu.innerHTML = "Voilà du contenu";
//   contenu.classList.toggle("#display");
// });
