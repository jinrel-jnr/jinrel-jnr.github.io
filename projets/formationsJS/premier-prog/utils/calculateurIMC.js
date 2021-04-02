let poids = prompt("Quel est votre poids en kg (on triche pas :) ) ?");
let taille = prompt(
  "Quel est votre taille (on tr.. vous avez captez ^^ ) ? en cm ou en mètre"
);

let calculerIMC = (poids, taille) => {
  poids = Number(poids);
  let result = poids / Math.pow(conversionTaille(taille), 2);
  return (result = Math.round(result * 10) / 10);
};

let conversionTaille = (taille) => {
  taille = Number(taille);
  if (taille > 10) {
    let result = taille / 100;
    return result;
  }
  return taille;
};

alert(
  "Pour " +
    poids +
    "kg et " +
    conversionTaille(taille) +
    " mètre. Votre IMC est de : " +
    calculerIMC(poids, taille)
);
