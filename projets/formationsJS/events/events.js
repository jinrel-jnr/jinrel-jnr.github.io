let a = document.querySelector("a");
let button = document.querySelector("button");
let ball = document.querySelector(".ball");
let around = document.querySelector(".around");
let body = document.querySelector("body");

// a.onclick = () => {
//   if (confirm("Êtes-vous sûr ?")) {
//     location.href = "https://google.fr";
//   }
// };

// button.onmouseover = () => {
//   document.body.style.backgroundColor = "orange";
// };

// button.onmouseout = () => {
//   document.body.style.backgroundColor = "white";
// };

// console.log(typeof button.onmouseout);

a.addEventListener("click", (event) => {
  //   console.log(event);
  if (confirm("Êtes-vous sûr ?")) {
    window.open("http://google.fr", "_blank");
    // location.href = "http://google.fr";
    target = "_blank";
  }
});

button.addEventListener("mouseover", (event) => {
  body.style.backgroundColor = "orange";
});

function backgroundWhite() {
  if (ball.className == "ball") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
}

button.addEventListener("mouseout", backgroundWhite);
button.addEventListener("mouseout", (event) => {
  document.body.style.fontFamily = "arial";
});

// button.removeEventListener("mouseout", backgroundWhite);

ball.addEventListener("click", switchButton);

function switchButton() {
  if (ball.className == "ball activé") {
    modeLight();
  } else {
    modeDark();
  }
}

function modeDark() {
  body.className = "dark";
  body.style.backgroundColor = "black";
  ball.className = "ball activé";
  around.style.backgroundColor = "white";
  ball.style.backgroundColor = "gray";
  ball.style.marginLeft = "50px";
  document.querySelector("a").style.color = "pink";
  document.querySelector("h1").style.color = "white";
}

function modeLight() {
  body.className = "light";
  body.style.backgroundColor = "white";
  ball.className = "ball";
  around.style.backgroundColor = "black";
  ball.style.backgroundColor = "white";
  ball.style.marginLeft = "0px";
  document.querySelector("a").style.color = "blue";
  document.querySelector("h1").style.color = "black";
}

a.addEventListener("click", () => {
  if (body.className == "dark") {
    modeLight();
  } else {
    modeDark();
  }
});
