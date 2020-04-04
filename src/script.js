const HEADER_TOGGLING_SIZE = 45;

const toggleHeaderTitle = (scrollState) => {
  document.getElementsByClassName('header-background-title-label')[0].style.marginRight = `${scrollState * 2.22}%`;
  document.getElementsByClassName('header-background-title-label')[1].style.marginLeft = `${scrollState * 2.22}%`;
};

const toggleHeaderMenu = (scrollState) => {
  console.log('exe', scrollState, 20 - scrollState);
  document.getElementById('header-menu-wrapper').style.paddingTop = `${20 - (scrollState / 2.25)}ch`;
  document.getElementsByClassName('header-menu-item')[1].style.paddingRight = `${scrollState / 4.5}%`;
  document.getElementsByClassName('header-menu-item')[2].style.marginLeft = `${scrollState / 4.5}%`;
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
  if (slowScrollY <= HEADER_TOGGLING_SIZE) {
    isToggleHeaderEnd = false;
    document.getElementsByTagName('header')[0].style.height = `${75 - slowScrollY}ch`;
    toggleHeaderTitle(slowScrollY);
    toggleHeaderMenu(slowScrollY);
  } else if (isToggleHeaderEnd === false) {
    isToggleHeaderEnd = true;
    document.getElementsByTagName('header')[0].style.height = '30ch';
    document.getElementsByClassName('header-background-title-label')[0].style.marginRight = '100%';
    document.getElementsByClassName('header-background-title-label')[1].style.marginLeft = '100%';
    document.getElementById('header-menu-wrapper').style.paddingTop = '0';
    document.getElementById('header-menu-wrapper').style.height = '10ch';
    // document.getElementById('header-menu-wrapper').style.background = 'linear-gradient(rgb(219, 219, 219), rgb(250, 250, 250))';

    document.getElementsByClassName('header-menu-item')[1].style.paddingRight = '10%';
    document.getElementsByClassName('header-menu-item')[2].style.marginLeft = '10%';
  }
};

const scrollHeaderAnim = () => {
  window.onscroll = toggleHeader;
};

window.onload = () => {
  toggleHeader();
  scrollHeaderAnim();
};
