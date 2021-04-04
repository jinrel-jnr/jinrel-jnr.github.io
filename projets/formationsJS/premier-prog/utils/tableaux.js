let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.splice(1, 0, "random", "lol");
// console.log(monTableau);
// console.log(monTableau.indexOf("trois"));

let recupChain = monTableau.join(" / ");
// console.log(monTableau[monTableau.length - 1]);

let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
monTableau2D.splice(0, 0);
monTableau2D.splice(2, 0, ["coucou", "bisous", "poutoux"]);
monTableau2D.splice(3, 0, ["30", "60", "80"]);
monTableau2D.splice(2, 1);
// console.log(monTableau2D);
// monTableau2D[1].push("test");
// monTableau2D[1].unshift("test2");
recupChain = monTableau2D.join(" / ");
// console.log(recupChain);
let monTableauAssociatif = {
  prenom: "mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
console.log(monTableauAssociatif["poste"]);
monTableauAssociatif["nationalite"] = "americaine";
console.log(monTableauAssociatif);
monTableauAssociatif[0].unshift("valeur");
console.log(monTableauAssociatif);

monTableau2D[0].shift();
// delete monTableauAssociatif.poste;
// console.log(monTableauAssociatif);

let panier = ["fraise", "banane", "poire"];

for (const fruit in panier) {
  if (panier[fruit] == "poire") {
    panier[fruit] = "kiwi";
  }
  //   console.log(panier[fruit]);
  //   console.log(fruit);
}

for (const fruit of panier) {
  //   console.log(panier.indexOf(fruit) + " : " + fruit);
}
// console.log(panier);

let listeDePays = ["France", "Belgique", "Japon", "Maroc"];
// for (const pays of listeDePays) {
//   console.log(listeDePays.indexOf(pays) + " : " + pays);
// }

// listeDePays.forEach((pays) =>
//   console.log(listeDePays.indexOf(pays) + " : " + pays)
// );

// let chaine = "";
// for (const valeur in monTableauAssociatif) {
//   chaine += valeur + " : " + monTableauAssociatif[valeur] + "\n";
// }
// console.log(chaine);

const affiche = (unTableau) => {
  let chaine = "";
  for (const valeur in unTableau) {
    chaine += valeur + " : " + unTableau[valeur] + "\n";
  }
  console.log(chaine);
};

affiche(monTableau2D);
