const galleyBtns = document.querySelectorAll(".gallery__handler-tab");
const galleryItems = document.querySelectorAll("[data-index]");

galleyBtns.forEach((galleryBtn) => {
  galleryBtn.addEventListener("click", (e) => {
    galleyBtns.forEach((btn) => btn.setAttribute("data-active", "false"));

    e.target.setAttribute("data-active", "true");
    galleryItemHandler(e.target);
  });
});

function galleryItemHandler(galleryBtn) {
  galleryItems.forEach((galleryItem) => {
    galleryItem.setAttribute("data-active", "false");
    if (
      galleryBtn.getAttribute("data-gallerybtn") ===
      galleryItem.getAttribute("data-index")
    ) {
      galleryItem.setAttribute("data-active", "true");
      return;
    }
  });
}
