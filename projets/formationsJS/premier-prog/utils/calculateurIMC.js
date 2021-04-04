let conversion = (taille) => {
  if (taille > 10) {
    taille /= 100;
  }
  return taille;
};

let calculerIMC = (poids, taille) => {
  let resultat =
    Math.round((poids / Math.pow(conversion(taille), 2)) * 100) / 100;
  alert(
    `Pour ${poids}kg, et ${conversion(
      taille
    )}mètre, votre IMC est de ${resultat}`
  );
  console.log(resultat);
};

let calculateur = () => {
  let poids;
  let taille;
  do {
    poids = Number(prompt("Quel est votre poid en kg ?"));
  } while (!poids || poids > 400);

  do {
    taille = Number(prompt("Quel est votre taille ? (en cm ou en mètre"));
  } while (!taille || taille > 250);
  calculerIMC(poids, taille);
};
