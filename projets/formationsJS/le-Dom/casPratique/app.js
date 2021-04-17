document.querySelector("#a-supprimer").remove();

let header = document.createElement("header");
// header.setAttribute("id", "headerId");
header.textContent = "Bienvenue";
// header.innerHTML = `<div class="header"><h1>${header.textContent}</h1></div>`;

header.style.color = "white";
header.style.backgroundColor = "#e3b04b";
header.style.fontSize = "3em";
header.style.fontFamily = "sans-serif";
header.style.textAlign = "center";
header.style.padding = "30px";
// header.style.lineHeight = "150px";
// document.body.append(header);
// document.write(header.innerHTML);

let sousHeader = document.createElement("div");
sousHeader.innerHTML = `<div class="sousHeader"><a href="#">Accueil</a> / <a href="#">Une autre page</a></div>`;
sousHeader.style.marginTop = "32px";

// document.write(sousHeader.innerHTML);

sousHeader.style.backgroundColor = "#f1d6ab";
sousHeader.style.padding = "20px";
sousHeader.style.marginTop = "0px";
let tab = document.querySelectorAll("a");
console.log(tab);
for (let i = 0; i < tab.length; i++) {
  tab[i].style.color = "#358dff";
  tab[i].style.textDecorationLine = "none";
}

let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe créé avec JavaScript !";

paragraphe.style.margin = "20px";

document.body.append(header, sousHeader, paragraphe);
