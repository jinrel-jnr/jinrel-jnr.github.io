const cardTitle = document.querySelector(".card-header-title");
const cardContent = document.querySelector(".display");
let bool = false;
console.log(bool);

cardTitle.addEventListener("click", () => {
  bool ? false : true;

  if (bool) {
    cardTitle.style.color = "white";
    cardTitle.style.backgroundColor = "hsl(217, 71%, 45%)";

    cardContent.classList = "blockOpen";
    bool = false;
  } else {
    cardContent.classList = "blockClose";
    bool = true;
  }
});
