let nouvellePortéeVariable; // globale

function crieDeGuerre() {
  let crie = "Graaaouuuuuuuuuuaaaaaaaaaaaaaaaaaaaaouuuuuuuuuuh ! "; // locale
  nouvellePortéeVariable = "youhiuhihohjpioujijjp!";
  console.log(crie + nouvellePortéeVariable);
}

crieDeGuerre();
console.log(nouvellePortéeVariable);
console.log(crie);
// variable crie hors de portée, non accessible. Faut la transformer en variable globale
