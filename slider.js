//bei der Nutzung von Koordinaten sind % Angaben nicht gut => px nutzen
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".innerSlider");

let pressed = false;
let startx;
let x,
  dx = 0;

slider.addEventListener("mousedown", (event) => {
  pressed = true;
  startx = event.clientX + slider.offsetLeft - dx;
  console.log("mousedown: " + startx);
  event.preventDefault();
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
  //when we enter the slider we get the hand cursor
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (event) => {
  if (pressed) {
    let ex = event.clientX;
    x = ex + slider.offsetLeft;
    dx = x - startx;
    console.log("mousemove: ex: " + ex + ", dx: " + (x - startx));
    innerSlider.style.left = `${dx}px`;
    checkBoundary();
  }
  event.preventDefault();
});

slider.addEventListener("mouseup", (event) => {
  onMouseUp(event);
});
window.addEventListener("mouseup", (event) => {
  onMouseUp(event);
});
function onMouseUp(event) {
  pressed = false;
  x = event.clientX + slider.offsetLeft;
  console.log("mouseup  : " + x);
  event.preventDefault();
  slider.style.cursor = "grab";
}

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();
  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
