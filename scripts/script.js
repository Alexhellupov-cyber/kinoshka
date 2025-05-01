document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("news-carousel");
    const left = document.querySelector(".arrow.left");
    const right = document.querySelector(".arrow.right");
  
    left.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });
  
    right.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
  