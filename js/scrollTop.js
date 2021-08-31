const body = document.querySelector("body");
const btn_changeOrder = document.querySelectorAll(".btn_changeOrder");
let lastKnownScrollPosition = 0;
let blinkStatement = true;

function screenMoveTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}

function screenMoveBottom() {
  window.scroll({ top: body.scrollHeight, left: 0, behavior: "smooth" });
}

function screenMoveWindow(event) {
  if (
    event.target.URL.indexOf("index") === -1 &&
    event.target.URL.indexOf("html") !== -1
  ) {
    screenMoveBottom();
  } else {
    screenMoveTop();
  }
}
function titleMenuBlink() {
  for (let m = 0; m < btn_changeOrder.length; m++) {
    try {
      blinkStatement =
        btn_changeOrder[m].classList.value.indexOf("currentOrder") === -1;
    } catch {}
    if (blinkStatement === false) {
      break;
    }
  }
  for (let m = 0; m < btn_changeOrder.length; m++) {
    if (blinkStatement === false) {
      btn_changeOrder[m].classList.remove("animation_blink");
    } else {
      try {
        btn_changeOrder[m].classList.add("animation_blink");
      } catch {}
    }
  }
}

for (let btn = 0; btn < btn_changeOrder.length - 1; btn++) {
  btn_changeOrder[btn].addEventListener("click", screenMoveBottom);
  btn_changeOrder[btn].addEventListener("click", titleMenuBlink);
}
window.addEventListener("pageshow", screenMoveWindow);
window.addEventListener("pageshow", titleMenuBlink);
try {
  form_sort.addEventListener("submit", screenMoveBottom);
} catch {}
