const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (event) => {
  const posX = event.clientX;
  const posY = event.clientY;
  //to keep track of the position of the mouse

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  //   cursorOutline.style.left = `${posX}px`;
  //   cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
