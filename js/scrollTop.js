const body = document.querySelector("body");
const btn_changeOrder = document.querySelectorAll(".btn_changeOrder");
let lastKnownScrollPosition = 0;

function screenMoveTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}

function screenMoveBottom() {
  window.scroll({ top: body.scrollHeight, left: 0, behavior: "smooth" });
}

function screenMoveWindow(event) {
  if (event.target.URL.indexOf("index") === -1) {
    screenMoveBottom();
  }
}

for (let btn = 0; btn < btn_changeOrder.length - 1; btn++) {
  btn_changeOrder[btn].addEventListener("click", screenMoveBottom);
}
window.addEventListener("pageshow", screenMoveWindow);
