const cardTitle = document.querySelector(".card-header-title");
const cardTitle2 = document.getElementById("card2");
const cardTitle3 = document.getElementById("card3");
const cardContent = document.getElementById("display1");
const cardContent2 = document.getElementById("display2");
const cardContent3 = document.getElementById("display3");

cardTitle.addEventListener("click", () => {
  console.log("ok ok ok");
  cardContent.classList.toggle("blockOpen");
});

cardTitle2.addEventListener("click", () => {
  console.log("ok ok ok");
  cardContent2.classList.toggle("blockOpen");
});

cardTitle3.addEventListener("click", () => {
  console.log("ok ok ok");
  cardContent3.classList.toggle("blockOpen");
});
