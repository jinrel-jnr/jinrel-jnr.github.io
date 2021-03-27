function direBonjour(prenom) {
  alert("Bonjour " + prenom + " !");
}

direBonjour("bbefz");

const direBonjourEncore = () => {
  let prenom = prompt("Quel est votre nom ?");
  alert("Bonjour cher " + prenom + " :) !");
};

//direBonjourEncore();

function addition(nombre1, nombre2) {
  let result = nombre1 + nombre2;
  return result;
}

alert(addition(5, 15));
