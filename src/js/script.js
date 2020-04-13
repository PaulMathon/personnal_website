import { initPage, newPage, onClickMenuBar } from "./page.js";
import { toggleHeader } from "./header.js";

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = onScrollEvents;
}

const onScrollEvents = (scrollEvent) => {
  const isNewPage = newPage();
  toggleHeader();

  if (isNewPage) {
    disableScrolling();
    setTimeout(() => enableScrolling(), 500);
  }
};

const scrollHeaderAnim = () => {
  toggleHeader();
  initPage();
  window.onscroll = onScrollEvents;
};

window.onload = () => {
  scrollHeaderAnim();
  onClickMenuBar();
};
