// let chien = {
//   race: "Shiba",
//   poil: "Court",
//   aboyer: (crie) => {
//     console.log("Ouaf ouaf " + crie);
//   },
// };

// chien.aboyer("ahouuu");

let magicien = {
  attaquer: () => {
    console.log("Le magicien lance un sort");
  },
};
let guerrier = {
  attaquer: () => {
    console.log("Le guerrier prend sa hache");
  },
};

// Affectation par décomposition

let informations = ["superSayen", "34", "femme"];

// Sans décomposition
// let pseudo = informations[0];
// let age = informations[1];
// let sexe = informations[2];

// Avec décomposition
let [pseudo, age, sexe] = informations;
// console.log(pseudo);

// Utilisation de Set : stock uniquement des valeurs uniques de tout type
let nombres = [5, 15, 25, 12, 44, 15];
// let monSet = new Set(nombres);
let monSet = new Set();

monSet.add("70");
monSet.add("87");
monSet.add("2");
monSet.add("2");
monSet.delete("70");
monSet.add(["70", "tableau", "test"]);
// console.log(monSet);
// console.log(monSet.size);

// Map : objet permet de stocker des données avec clef/valeur
// let monMap = new Map([
//   ["prenom", "Bob"],
//   ["nom", "Morane"],
// ]);
// monMap.set("poste", "L'aventurier");
// monMap.delete("poste");
// console.log(monMap);

let utilisateurs = new Map();

utilisateurs.set("Bob Morane", {
  email: "bob.morane@aventurier.fr",
  poste: "L'aventurier",
});

utilisateurs.set("Linus Torvalds", {
  email: "linu.x@org.git",
  poste: "Explorateur incroyable",
});

console.log(utilisateurs.get("Linus Torvalds"));
let profilUtilisateurUnique = utilisateurs.get("Linus Torvalds");
profilUtilisateurUnique.email = "nouveau.linux@git.org";
console.log(profilUtilisateurUnique);

console.log(utilisateurs.has("Linus Torvalds"));
let unBckUtilisateur = utilisateurs.entries();
console.log(unBckUtilisateur);

console.log(typeof utilisateurs + " :  MAP");
console.log(typeof profilUtilisateurUnique + " : Extrait de MAP");

// Stock collectoin d'objet
// let voitures = new WeakSet();

let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

let voitureB = {
  constructeur: "Renault",
  modele: "Clio",
};

// alternative au add.
let voitures = new WeakSet([voitureA, voitureB]);
//collection d'objets
voitures.add(voitureA);
voitures.add(voitureB);

console.log(voitures);

voitures.delete(voitureA);
console.log(voitures);
console.log(voitures.voitureA);

// WeakMap : prend une clé + valeur Objet
let livres = new WeakMap();

let index = {
  id: 1,
};

let livreA = {
  titre: "L'alchimie expliquée par son langage",
  auteur: "Léon Gineste",
};

livres.set(index, livreA);
console.log(livres);
