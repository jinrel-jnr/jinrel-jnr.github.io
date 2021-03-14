const cardTitleUnique = document.querySelectorAll(".card-header-title");

cardTitleUnique.forEach((title) => {
  console.log(title);
  title.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "1":
        document.querySelector("#d1").classList.toggle("blockOpen");
        break;
      case "2":
        document.querySelector("#d2").classList.toggle("blockOpen");
        break;
      case "3":
        document.querySelector("#d3").classList.toggle("blockOpen");
        break;

      default:
        null;
    }
  });
});
