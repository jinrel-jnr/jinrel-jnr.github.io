let bouton = document.querySelector("button");
let counter = document.querySelector("div");
let valeur = document.querySelector("h3");
let depart = 5;
let compte;
let valueUser;

valeur.addEventListener("click", () => {
  valueUser = Number(prompt("Combien ?"));
  if (!valueUser || valueUser == 0) {
    document.querySelector(".valeur").textContent =
      "Vous avez indiquez une valeur null. Le décompte par défaut est appliqué.";
    document.querySelector(".valeur").style.marginBottom = "10px";
  } else {
    document.querySelector(".valeur").textContent =
      "Vous avez indiquez : " + valueUser + " secondes.";
    document.querySelector(".valeur").style.marginBottom = "10px";
  }
});

function start() {
  if (!valueUser && depart == 0) {
    depart = 5;
  } else if (valueUser) {
    depart = valueUser;
  }
  document.querySelector(".counter").remove();
  counter = document.createElement("div");
  counter.setAttribute("class", "counter");
  document.body.append(counter);
  bouton.textContent =
    "Attendez la fin du décompte pour en relancer un nouveau.";
  compte = setInterval(() => {
    decompte();
  }, 1000);

  return compte;
}

let decompte = () => {
  --depart;
  if (depart > 0) {
    let texteHtml = document.createElement("div");
    texteHtml.textContent = depart;
    counter.append(texteHtml);
  } else {
    stop();
  }
  return depart;
};

function stop() {
  bouton.disabled = false;
  let texteHtml = document.createElement("div");
  texteHtml.textContent = "Stop !";
  counter.append(texteHtml);
  bouton.textContent = "Lancer le décompte :)";
  clearInterval(compte);
}

bouton.addEventListener("click", () => {
  bouton.disabled = true;
  start();
});
