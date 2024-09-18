const animateElements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animateElements.forEach((element) => {
    const elementTop = element.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition > elementTop) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

const boxes = document.querySelectorAll(".box1, .box2");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.transform = "scale(1.05)";
    box.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
  });

  box.addEventListener("mouseout", () => {
    box.style.transform = "";
    box.style.boxShadow = "";
  });
});
