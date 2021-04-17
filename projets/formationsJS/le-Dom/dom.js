/*
          RECUPERER DES ELEMENTS DU DOM
*/

//let header = document.querySelector("header");
// let header = document.getElementsByTagName("header");
let logo = document.getElementById("logo");

// let h1 = document.querySelector("h1");
let p = document.querySelectorAll("p");

// let h1bis = document.getElementsByTagName("h1")[0];
// h1bis.textContent = "Modif du titre par getElements";

// h1.textContent = "Modif js, propriété : textContent";
// h1.innerHTML = `<div style='font-weight: normal'>${h1} | Titre : <br><strong>${h1.textContent}</strong></div>`;

/*
          AJOUTER DES ELEMENTS AU DOM
*/

// 1er méthode : Ecrire juste un texte - à la suite du contenu
// document.write("test");

// 2me méthode : Ajouter un élément brut
// h1.append("test");
p[0].append(" Test");

// 3me méthode pour les objets:

// Créer un élement
let bonjour = document.createElement("div");

// Le personnaliser
bonjour.textContent = "Coucou les gens ";

// L'ajouter à notre page
/*

- .insertBefore insert avant la balise selectionné

    <baliseAjoutée></baliseAjoutée>
    <baliseCiblée>
        <enfant></enfant>
    </baliseCiblée>

- .prepend insert en tant que premier enfant de la balise selectionné

    <baliseAjoutée></baliseAjoutée>
    <baliseCiblée>
        <baliseAjoutée></baliseAjoutée>
        <enfant></enfant>
    </baliseCiblée>

*/
// document.body.append(bonjour); (après)
// document.body.appendChild(bonjour);  <-- appendChild pas de texte possible dans cette fonction (après)
// document.body.insertBefore(bonjour, container);
let container = document.getElementsByClassName("container")[0];
// document.querySelector(".container").prepend(bonjour);
container.prepend(bonjour);

/*
          SUPPRIMER DES ELEMENTS DU DOM
*/

// let h142 = document.querySelector("h1");
// h142.remove();

// document.querySelector("h1").remove();

/***************************************************************************/

let element = (document.createElement("div").textContent = "Le texte du Div");
element.innerHTML = `<div class="test"><strong>${element.textContent}<strong></div>`;

let element2 = document.createElement("div");
element2.setAttribute("id", "unNouvelId");
element2.setAttribute("title", "Un Titre avec setAttribute");
element2.innerHTML = `<h2>${element2}</h2>`;
element2.textContent = "Je teste un autre createElement";
// p[1].prepend(element.innerHTML);
p[0].append(element2);

function chargementJS() {
  let js = document.createElement("script");
  js.src = "src/sources.js";
  js.onload = function () {
    console.log(message);
  };
  document.body.append(js);
}
