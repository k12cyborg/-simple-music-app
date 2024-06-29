import playerPage from "./src/pages/playerPage.js";
import mediaControlPage from "./src/pages/mediaControlPage.js";

const routes = {
  "/": player,
  "/mediacontrol": mediacontrol,
};

function router() {
  const path = window.location.pathname;
  const routeHandler = routes[path];
  if (routeHandler) {
    routeHandler();
  } else {
    window.location.replace("/");
  }
}

function loading() {
  document.getElementById("app").innerHTML = `<h1>Loading</h1>`;
}

function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

async function player() {
  loadCSS("./src/styles/playerPage.css")
  loading();
  await playerPage();
}
async function mediacontrol() {
  loadCSS("./src/styles/mediaControlPage.css")
  loading();
  await mediaControlPage();
}

function handleGoToMediaControl(e) {
  if (e.shiftKey && e.key === "°") {
    window.location.pathname == "/mediacontrol"
      ? window.location.replace("/")
      : window.location.replace("/mediacontrol");
  }
}



window.addEventListener("hashchange", router);

document.addEventListener("keypress", handleGoToMediaControl);
router();
