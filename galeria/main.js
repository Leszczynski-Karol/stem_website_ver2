let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      openModal(index);
    });
  });
});

function openModal(index) {
  const images = document.querySelectorAll(".image-container img");
  currentImageIndex = index;
  updateModalImage();
  document.getElementById("imageModal").style.display = "flex";
  document.querySelector(".navBar").style.opacity = "0%";
  document.querySelector(".topnav").style.opacity = "0%";
  document.querySelector(".navBar").style.zIndex = "-100";
  document.querySelector(".topnav").style.zIndex = "-100";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
  document.querySelector(".navBar").style.opacity = "100%";
  document.querySelector(".topnav").style.opacity = "1000";
  document.querySelector(".navBar").style.zIndex = "1000";
  document.querySelector(".topnav").style.zIndex = "1000";
}

function changeImage(direction) {
  const images = document.querySelectorAll(".image-container img");
  currentImageIndex =
    (currentImageIndex + direction + images.length) % images.length;
  updateModalImage();
}

function updateModalImage() {
  const images = document.querySelectorAll(".image-container img");
  if (images[currentImageIndex]) {
    document.getElementById("modalImage").src = images[currentImageIndex].src;
  }
}
