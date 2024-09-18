const boxes = document.querySelectorAll(".box1, .box2");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "#dd9d1e";
    box.style.transform = "scale(1.05)";
    box.style.color = "#333";
    box.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
    box.style.transform = "";
    box.style.color = "";
    box.style.boxShadow = "";
  });
});
