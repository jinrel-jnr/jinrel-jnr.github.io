document.querySelector("div").remove();

let header = document.createElement("div");
// header.setAttribute("id", "headerId");
header.textContent = "Bienvenue";
header.innerHTML = `<div class="header"><h1>${header.textContent}</h1></div>`;

document.write(header.innerHTML);
document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.backgroundColor = "#e3b04b";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.fontFamily = "sans-serif";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.lineHeight = "180px";

let sousHeader = document.createElement("div");
sousHeader.innerHTML = `<div class="sousHeader"><a href="#">Accueil</a> / <a href="#">Une autre page</a></div>`;

// document.write(sousHeader.innerHTML);
document.body.append(sousHeader);

document.querySelector(".sousHeader").style.backgroundColor = "#f1d6ab";
document.querySelector(".sousHeader").style.padding = "20px";
document.querySelector(".sousHeader").style.marginTop = "-33px";

let tab = document.querySelectorAll("a");

for (let i = 0; i < tab.length; i++) {
  tab[i].style.color = "#358dff";
  tab[i].style.textDecorationLine = "none";
}

let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe créé avec JavaScript !";

document.body.append(paragraphe);
document.querySelector("p").style.marginLeft = "20px";
