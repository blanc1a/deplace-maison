document.addEventListener("DOMContentLoaded", function () {
  const aboutWrapper = document.querySelector(".aboutWrapper");

  setInterval(() => {
    //fügt im css die animate class hinzu
    aboutWrapper.classList.add("animate");
    setTimeout(() => {
      //entfernt im css die animate class
      aboutWrapper.classList.remove("animate");
    }, 3000); //entfernt die class nach 3s = 3000ms
  }, 6000); //fügt die class nach 6s hinzu = 6000ms
});
