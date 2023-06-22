const burgerCloserer = document.querySelector("#burgerclose");
const burgerOpener = document.querySelector("#burger");
const menu = document.querySelector(".menu");

burgerOpener.addEventListener("click", () => {
  menu.setAttribute("data-active", "true");
});
burgerCloserer.addEventListener("click", () => {
  menu.setAttribute("data-active", "false");
});
