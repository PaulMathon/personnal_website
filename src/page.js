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

export { newPage, initPage };
