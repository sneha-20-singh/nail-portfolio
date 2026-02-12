//NAVBAR JS
const menuBtn = document.querySelector(".nav_menu_btn");
const leftLinks = document.querySelector(".left_links");
const rightLinks = document.querySelector(".right_links");

menuBtn.addEventListener("click", () => {
  leftLinks.classList.toggle("show");
  rightLinks.classList.toggle("show");
});
//GALLERY JS
const buttons = document.querySelectorAll(".gallery-buttons button");
const items = document.querySelectorAll(".gallery-item");
const showMoreBtn = document.querySelector(".show-more");
const showMoreButton = document.querySelector(".show-more button");

let currentFilter = "all";
let showAllImages = false;

function updateGallery() {
  let visibleCount = 0;

  items.forEach((item) => {
    const category = item.dataset.category;

    if (currentFilter === "all") {
      if (!showAllImages && visibleCount < 4) {
        item.style.display = "block";
        visibleCount++;
      } else if (showAllImages) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      if (category === currentFilter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });

  /*Show More button logic */
  if (currentFilter === "all" && !showAllImages) {
    showMoreBtn.style.display = "block";
  } else {
    showMoreBtn.style.display = "none";
  }
}

/* FILTER BUTTON CLICK */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    currentFilter = button.dataset.filter;
    showAllImages = false;

    updateGallery();
  });
});

/* SHOW MORE CLICK */
showMoreButton.addEventListener("click", () => {
  showAllImages = true;
  updateGallery();
});


updateGallery();
