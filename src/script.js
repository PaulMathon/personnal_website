const HEADER_TOGGLING_SIZE = 47;

const toggleHeaderBackground = (scrollState) => {
  document.getElementById("header-background").style.height = `${
    47 - scrollState
  }ch`;
};

const toggleHeaderTitle = (scrollState) => {
  document.getElementsByClassName(
    "header-background-title-label"
  )[0].style.marginRight = `${scrollState * 2.13}%`;
  document.getElementsByClassName(
    "header-background-title-label"
  )[1].style.marginLeft = `${scrollState * 2.13}%`;
};

const toggleHeaderMenu = (scrollState) => {
  console.log("exe", scrollState, 20 - scrollState);
  document.getElementById("header-menu-wrapper").style.paddingTop = `${
    20 - scrollState / 2.25
  }ch`;
  document.getElementsByClassName(
    "header-menu-item"
  )[1].style.paddingRight = `${scrollState / 6.71}%`;
  document.getElementsByClassName("header-menu-item")[2].style.paddingLeft = `${
    scrollState / 6.71
  }%`;
};

const convertToCh = () => {
  if (window.pageYOffset <= window.innerHeight) {
    return Math.floor((window.pageYOffset / window.innerHeight) * 100);
  } else {
    return HEADER_TOGGLING_SIZE + 1;
  }
};

let isToggleHeaderEnd = false;
const toggleHeader = () => {
  const slowScrollY = convertToCh();
  console.log("state", slowScrollY);
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
    )[0].style.marginRight = "100%";
    document.getElementsByClassName(
      "header-background-title-label"
    )[1].style.marginLeft = "100%";
    document.getElementById("header-menu-wrapper").style.paddingTop = "0";
    document.getElementsByClassName("header-menu-item")[1].style.paddingRight =
      "7%";
    document.getElementsByClassName("header-menu-item")[2].style.paddingLeft =
      "7%";
  }
};

const scrollHeaderAnim = () => {
  window.onscroll = toggleHeader;
};

window.onload = () => {
  toggleHeader();
  scrollHeaderAnim();
};
