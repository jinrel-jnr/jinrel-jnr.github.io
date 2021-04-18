let article = document.querySelector("article");
let h1 = document.querySelector("#propagation");
let boutonStopPropagation = document.querySelector("#stopPopUp");

article.addEventListener("click", () => {
  alert("Article cliqué"); // Alerte du Parent
});

h1.addEventListener("click", (e) => {
  alert("h1 cliqué"); // Alerte de l'Enfant
  e.stopPropagation(); // Empêche la propagation de l'évènement au parent
});

function stopPopUpAuto() {
  setTimeout(() => {
    clearInterval();
  }, 11000);
}
function stopPopUpManuel() {
  clearInterval();
}

// setTimeout
// let timer = setTimeout("alert('Bonjour')", 3000);
// clearTimeout(timer);

// setInterval : répétition de l'action ou la fonction anonyme toutes les X mms
// let interval = setInterval(`alert("Bonjour :)")`, 5000);

let etat = false;
let interval;
function lancezPopUp() {
  if (etat) {
    etat = false;
    interval = setInterval(`alert("Bonjour :)")`, 2500);
  } else {
    etat = true;
    clearInterval(interval);
  }
  return etat;
}

function start() {
  (etat = true), lancezPopUp();
}

start();
boutonStopPropagation.addEventListener("click", () => {
  if (etat) {
    boutonStopPropagation.className = "popUp";
    boutonStopPropagation.textContent = "Ok on relance les pop-Up :) !";
    boutonStopPropagation.style.backgroundColor = "#050505";
    boutonStopPropagation.style.color = "white";
    lancezPopUp();
  } else {
    boutonStopPropagation.className = "popUp annulé";
    boutonStopPropagation.textContent =
      "Fini le Pop-up, vous l'avez bien annulé :).\nRelancer ?";
    boutonStopPropagation.style.backgroundColor = "green";
    boutonStopPropagation.style.color = "white";
    lancezPopUp();
  }
});
