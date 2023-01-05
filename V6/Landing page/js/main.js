const OPEN_CLASSNAME = "open";

const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  if (navMenu.classList.contains(OPEN_CLASSNAME)) {
    navMenu.classList.remove(OPEN_CLASSNAME);
  } else {
    navMenu.classList.add(OPEN_CLASSNAME);
  }
}