const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.src.replace("-thumbnail", "");
    lightbox.style.display = "flex";
  })
})

closeBtn.addEventListener("click", () => lightbox.style.display = "none");
lightbox.addEventListener("click", () => lightbox.style.display = "none");
