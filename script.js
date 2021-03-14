const cardTitleUnique = document.querySelectorAll(".card-header-title");

cardTitleUnique.forEach((title) => {
  title.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "1":
        title.classList.toggle("card-header-title-active");
        setTimeout(() => {
          document.querySelector("#d1").classList.toggle("blockOpen");
        }, 200);

        break;
      case "2":
        title.classList.toggle("card-header-title-active");
        setTimeout(() => {
          document.querySelector("#d2").classList.toggle("blockOpen");
        }, 200);
        break;
      case "3":
        title.classList.toggle("card-header-title-active");
        setTimeout(() => {
          document.querySelector("#d3").classList.toggle("blockOpen");
        }, 200);
        break;

      default:
        null;
    }
  });
});
