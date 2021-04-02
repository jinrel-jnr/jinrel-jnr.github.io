// let crie = "Whoufwhuf? Whouaaouuuuuuuuuuuuuuuuaouauouaouaouuuuuuuf !"; // variable globale

// function crieDeGuerre() {
//   let crie = "Graaaouuuuuuuuuuaaaaaaaaaaaaaaaaaaaaouuuuuuuuuuh ! "; // variable à portée locale
//   console.log(crie);
//   // return crie;
// }

// let crieDeMaFonction = crieDeGuerre();
// console.log(crieDeMaFonction);
// console.log(crie);
// console.log((crieDeMaFonction = "Miaouuuuuuu"));
// console.log(crie);
// crieDeGuerre();

// Portée des variables

let variableLet = "globale";
var variableVar = "globale";

console.log("let à la déclaration : " + variableLet);
console.log("var à la déclaration : " + variableVar);

if (true) {
  let variableLet = "locale";
  var variableVar = "locale";

  console.log("let dans le 'IF' : " + variableLet);
  console.log("var dans le 'IF' : " + variableVar);
}

console.log("let après le 'IF' : " + variableLet);
console.log("var après le 'IF' : " + variableVar);
