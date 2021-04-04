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

let informations = ["superSayen", "34", "homme"];

// Sans décomposition
// let pseudo = informations[0];
// let age = informations[1];
// let sexe = informations[2];

// avec décomposition
let [pseudo, age, sexe] = informations;
// console.log(pseudo);

let nombres = [5, 15, 25, 12, 44, 15];
// let monSet = new Set(nombres);
let monSet = new Set();

monSet.add("70");
monSet.add("87");
monSet.add("2");
monSet.delete("70");
monSet.add(["70", "tableau", "test"]);
console.log(monSet);
console.log(monSet.size);