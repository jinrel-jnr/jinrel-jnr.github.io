let bouton = document.querySelector("button");
let counter = document.querySelector("div");
let valeur = document.querySelector("h3");
let depart = 5;

valeur.addEventListener("click", () => {
  depart = Number(prompt("Combien ?"));
  document.querySelector(".valeur").textContent =
    "Vous avez indiquez : " + depart + " secondes.";
  document.querySelector(".valeur").style.marginBottom = "10px";
});

function start() {
  document.querySelector("div").remove();
  counter = document.createElement("div");
  counter.setAttribute("class", "counter");
  document.body.append(counter);
  compte = setInterval(() => {
    bouton.disabled = true;
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
  console.log(bouton.disabled);
  let texteHtml = document.createElement("div");
  texteHtml.textContent = "Stop !";
  counter.append(texteHtml);
  clearInterval(compte);
}

bouton.addEventListener("click", () => {
  bouton.disabled = true;
  start();
});
