/*
      Mettre du style aux éléments du DOM
*/

// Méthode : décomposée
let header = document.querySelector("header");

header.style.backgroundColor = "#ffbd69";
let h1 = document.querySelector("h1");
h1.style.textShadow = "#0007e6 0px 0 1px";

// Méthode directe

document.querySelector("h1").style.color = "#111d5e";
document.querySelector("h1").style.textAlign = "center";

// Méthode : avec une classe

document.querySelector("header").className = "ma_class";
