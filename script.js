const cardTitleUnique = document.querySelectorAll(".card-header-title");

cardTitleUnique.forEach((title) => {
  title.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "1":
        title.classList.toggle("card-header-title-active");
        document.querySelector("#d1").classList.toggle("blockOpen");
        break;
      case "2":
        title.classList.toggle("card-header-title-active");
        document.querySelector("#d2").classList.toggle("blockOpen");
        break;
      case "3":
        title.classList.toggle("card-header-title-active");
        document.querySelector("#d3").classList.toggle("blockOpen");
        break;

      default:
        null;
    }
  });
});
