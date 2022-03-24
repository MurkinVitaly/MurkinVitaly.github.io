const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveclasses();
    slide.classList.add("active");
  });
}

function clearActiveclasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
