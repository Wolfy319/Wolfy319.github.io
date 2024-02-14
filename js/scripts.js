
let direction = ""

function menuSlide() {
    let x = document.getElementById("links");
    let bars = document.getElementById("menu");
    x.classList.remove("animate");
    x.offsetHeight;
    if (direction === "up") {
      direction = "down";
      x.style.animationDirection = "reverse";

    } else {
      direction = "up";
      x.style.animationDirection = "";
    }

    x.classList.add("animate");

}

function switchImg() {
  let main = document.getElementById("main-grad")
  let hidden = document.getElementById("hidden-grad")

  if(main.style.display === "flex") {
    main.style.display = "none"
    hidden.style.display = "flex"
  } else {
    main.style.display = "flex"
    hidden.style.display = "none"
  }
}

function submitForm() {
  let confirm = document.getElementById("confirmation")
  let button = document.getElementById("submitbutton")
  confirm.style.display = "flex"
  button.style.display = "none"
}
