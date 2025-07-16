const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle the class to show the menu
  document.body.classList.toggle("show-menu");
});

menuCloseButton.addEventListener("click", () => {
  // Toggle the class to hide the menu
  document.body.classList.toggle("close-menu");
});
