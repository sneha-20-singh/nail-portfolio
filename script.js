const menuBtn = document.querySelector(".nav_menu_btn");
const leftLinks = document.querySelector(".left_links");
const rightLinks = document.querySelector(".right_links");

menuBtn.addEventListener("click", () => {
  leftLinks.classList.toggle("show");
  rightLinks.classList.toggle("show");
});
