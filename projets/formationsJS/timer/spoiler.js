let bouton2 = document.querySelector("#spoil");
let texteSecret = document.querySelector(".contentHide");

let startg = () => {
  if (texteSecret.hidden) {
    bouton2.textContent = "Cacher";
    texteSecret.hidden = false;
    texteSecret.style.padding = "20px";
    texteSecret.style.marginTop = "10px";
    texteSecret.style.backgroundColor = "gray";
    texteSecret.style.color = "white";
  } else {
    bouton2.textContent = "Afficher";
    texteSecret.hidden = true;
  }
};
bouton2.addEventListener("click", startg);
