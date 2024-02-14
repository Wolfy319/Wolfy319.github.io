
let direction = ""

function menuSlide() {
    let x = document.getElementById("links");
    let bars = document.getElementById("menu");
    x.classList.remove("animate");
    x.offsetHeight;
    if (direction === "up") {
      bars.style.backgroundColor = ""
      direction = "down";
      x.style.animationDirection = "reverse";

    } else {
      bars.style.backgroundColor = "#00349b"
      direction = "up";
      x.style.animationDirection = "";
    }

    x.classList.add("animate");

}
