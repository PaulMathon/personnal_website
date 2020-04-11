const HEADER_MIN_SIZE = 24;
const HEADER_MAX_SIZE = 75;
const HEADER_TOGGLING_SIZE = 47;

const TOGGLE_TITLE_LIMIT = 100;
const TOGGLE_TITLE_RATE = TOGGLE_TITLE_LIMIT / HEADER_TOGGLING_SIZE;

const TOGGLE_MENU_LIMIT = 20;
const TOGGLE_MENU_RATE = HEADER_TOGGLING_SIZE / TOGGLE_MENU_LIMIT;

const TOGGLE_MENU_ITEM_LIMIT = 7;
const TOGGLE_MENU_ITEM_RATE = HEADER_TOGGLING_SIZE / TOGGLE_MENU_ITEM_LIMIT;

const toggleHeaderBackground = (scrollState) => {
  document.getElementById("header-background").style.height = `${
    47 - scrollState
  }ch`;
};

const toggleHeaderTitle = (scrollState) => {
  document.getElementsByClassName(
    "header-background-title-label"
  )[0].style.marginRight = `${scrollState * TOGGLE_TITLE_RATE}%`;
  document.getElementsByClassName(
    "header-background-title-label"
  )[1].style.marginLeft = `${scrollState * TOGGLE_TITLE_RATE}%`;
};

const toggleHeaderMenu = (scrollState) => {
  document.getElementById("header-menu-wrapper").style.paddingTop = `${
    TOGGLE_MENU_LIMIT - scrollState / TOGGLE_MENU_RATE
  }ch`;
  document.getElementsByClassName(
    "header-menu-item"
  )[1].style.paddingRight = `${scrollState / TOGGLE_MENU_ITEM_RATE}%`;
  document.getElementsByClassName("header-menu-item")[2].style.paddingLeft = `${
    scrollState / TOGGLE_MENU_ITEM_RATE
  }%`;
};

const getScrollState = () => {
  if (window.pageYOffset <= window.innerHeight) {
    return Math.floor((window.pageYOffset / window.innerHeight) * 100);
  } else {
    return HEADER_TOGGLING_SIZE + 1;
  }
};

let isToggleHeaderEnd = false;
const toggleHeader = () => {
  const slowScrollY = getScrollState();
  if (slowScrollY <= HEADER_TOGGLING_SIZE) {
    isToggleHeaderEnd = false;
    document.getElementsByTagName("header")[0].style.height = `${
      75 - slowScrollY
    }ch`;
    toggleHeaderBackground(slowScrollY);
    toggleHeaderTitle(slowScrollY);
    toggleHeaderMenu(slowScrollY);
  } else if (isToggleHeaderEnd === false) {
    isToggleHeaderEnd = true;
    document.getElementsByTagName("header")[0].style.height = "24ch";
    document.getElementById("header-background").style.height = "16ch";
    document.getElementsByClassName(
      "header-background-title-label"
    )[0].style.marginRight = `${TOGGLE_TITLE_LIMIT}%`;
    document.getElementsByClassName(
      "header-background-title-label"
    )[1].style.marginLeft = `${TOGGLE_TITLE_LIMIT}%`;
    document.getElementById("header-menu-wrapper").style.paddingTop = "0";
    document.getElementsByClassName(
      "header-menu-item"
    )[1].style.paddingRight = `${TOGGLE_MENU_ITEM_LIMIT}%`;
    document.getElementsByClassName(
      "header-menu-item"
    )[2].style.paddingLeft = `${TOGGLE_MENU_ITEM_LIMIT}%`;
  }
};

const scrollHeaderAnim = () => {
  toggleHeader();
  window.onscroll = toggleHeader;
};

window.onload = () => {
  scrollHeaderAnim();
};
