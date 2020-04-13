const PAGE_HEIGHT = 80; // %
const pageIds = [
  "education",
  "experience",
  "skills",
  "languages",
  "miscellaneous",
];

function showPage(pageId) {
  document.getElementById(pageId).classList.remove("hide-to-bottom");
  document.getElementById(pageId).classList.remove("hide-to-top");
  document.getElementById(pageId).classList.add("show-page");
}

function hidePage(pageId, directionClass) {
  document.getElementById(pageId).classList.remove("show-page");
  document.getElementById(pageId).classList.add(directionClass);
}

function getPageIndex() {
  const scrollYPercent = (window.scrollY / window.innerHeight) * 100;
  const pageIndex = Math.floor((scrollYPercent - 50) / 80);
  return pageIndex;
}

let currentPageIndex = getPageIndex();

function newPage() {
  const nextPageIndex = getPageIndex();
  console.log("nextPageIndex", nextPageIndex);
  let isNewPage = false;
  if (nextPageIndex > currentPageIndex) {
    const nextPageId = pageIds[nextPageIndex];
    if (nextPageId) {
      isNewPage = true;
      showPage(nextPageId);
    }
    const currentPageId = pageIds[currentPageIndex];
    if (currentPageId) {
      hidePage(currentPageId, "hide-to-top");
    }
    currentPageIndex = nextPageIndex;
  } else if (nextPageIndex < currentPageIndex) {
    const nextPageId = pageIds[nextPageIndex];
    if (nextPageId) {
      isNewPage = true;
      showPage(nextPageId);
    }
    const currentPageId = pageIds[currentPageIndex];
    if (currentPageId) {
      hidePage(currentPageId, "hide-to-bottom");
    }
    currentPageIndex = nextPageIndex;
  }
  return isNewPage;
}

function initPage() {
  const currentPage = pageIds[currentPageIndex];
  if (currentPage) {
    document.getElementById(currentPage).classList.add("show-page");
  }
  for (let i = 0; i < pageIds.length; i++) {
    if (i < currentPageIndex) {
      document.getElementById(pageIds[i]).classList.add("hide-to-top");
    } else if (i > currentPageIndex) {
      document.getElementById(pageIds[i]).classList.add("hide-to-bottom");
    }
  }
}

function navigateFromMenu(pageIndex) {
  currentPageIndex = pageIndex;
  return (event) => {
    console.log("actual", currentPageIndex);
    console.log("next", pageIndex);
    event.preventDefault;
    console.log(
      "SCROLLY",
      0.2 * window.innerHeight + pageIndex * 0.8 * window.innerHeight
    );
    window.scrollTo(0, pageIndex * 0.8 * window.innerHeight);
    newPage();
    /* if (currentPageIndex < pageIndex) {
      document
        .getElementById(pageIds[currentPageIndex])
        .classList.add("hide-to-top");
      document
        .getElementById(pageIds[currentPageIndex])
        .classList.remove("show-page");
      document
        .getElementById(pageIds[pageIndex])
        .classList.remove("hide-to-bottom");
      document.getElementById(pageIds[pageIndex]).classList.add("show-page");
    } else if (currentPageIndex < pageIndex) {
      document
        .getElementById(pageIds[currentPageIndex])
        .classList.add("hide-to-bottom");
      document
        .getElementById(pageIds[currentPageIndex])
        .classList.remove("show-page");
      document
        .getElementById(pageIds[pageIndex])
        .classList.remove("hide-to-top");
      document.getElementById(pageIds[pageIndex]).classList.add("show-page");
    } */
  };
}

function onClickMenuBar() {
  document.getElementById("education-menu").onclick = navigateFromMenu(0);
  document.getElementById("experience-menu").onclick = navigateFromMenu(1);
  document.getElementById("skills-menu").onclick = navigateFromMenu(2);
  document.getElementById("miscellaneous-menu").onclick = navigateFromMenu(4);
}

export { newPage, initPage, onClickMenuBar };
