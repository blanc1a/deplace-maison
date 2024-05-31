let slider = document.querySelector(".slider");
let slideCard = document.querySelectorAll(".slide-card");

let pressed = false;
let startx;
let x;

//NICHT FERTIG
document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(".aboutWrapper").classList.add("animate");
  }, 2000);
});

//when the user holds down the mouse
slider.addEventListener("mousedown", (event) => {
  //when pushed down => true
  pressed = true;
  //offsetX is a property of the MouseEvent interface in Web Dev
  //is used to determine the horizontal position of the mouse cursor within an element
  //can be useful for various interactive web elements, such as drawing applications, custom sliders, and other UI components that require precise cursor position tracking
  startx = event.offsetX - slideCard.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

const handleMouseUp = () => {
  pressed = false;
  slider.style.cursor = "grab";
};

window.addEventListener("mouseup", handleMouseUp);
slider.addEventListener("mouseup", handleMouseUp);

slider.addEventListener("mousemove", (event) => {
  //if pressed is not true we're gonna return the function bc we don't want it to do anything
  if (!pressed) return;
  event.preventDefault();
  //gives coordinates relative to the parent div
  x = event.offsetX;
  slideCard.style.left = `${x - startx}px`;
  console.log("Mouse move:", { x, left: slideCard.style.left });
});
