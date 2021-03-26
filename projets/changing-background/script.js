window.addEventListener("scroll", () => {
  let activeClass = document.activeElement.classList[0];
  console.log(activeClass);

  // document.body.classList.add("bg-color1");
  if (window.scrollY > window.innerHeight / 2) {
    document.body.classList.add("bg-color1");
  } else {
    document.body.classList.remove("bg-color1");
    if (window.scrollY > window.innerHeight / 2) {
      document.body.classList.add("bg-color2");
    } else {
      document.body.classList.remove("bg-color2");
    }
  }
});
