let isHeaderToggled = false;

function toggleHeader() {
  if (window.scrollY > 0 && !isHeaderToggled) {
    document.getElementById("header").classList.add("header-toggled");
    isHeaderToggled = true;
  } else if (window.scrollY === 0 && isHeaderToggled) {
    document.getElementById("header").classList.remove("header-toggled");
    isHeaderToggled = false;
  }
}
export { toggleHeader };
