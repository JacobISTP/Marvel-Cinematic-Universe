"use strict";

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
    window.location.href.indexOf("index") === -1 &&
    window.location.href.indexOf("html") !== -1
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

const page_load_target = document.querySelector("#page_load");
const page_load_target_div = document.querySelector("#page_load > div");
const page_load_target_img = document.querySelector(".load_img");
let load_img_shadow = ((window.innerHeight + window.innerWidth) / 2) * 0.04;

page_load_target_div.style = `margin-top:${window.pageYOffset}px;`;
page_load_target_img.style = `box-shadow: 0px 0px ${load_img_shadow}px ${load_img_shadow}px black inset;`;
console.dir(load_img_shadow);
console.dir(window);

function expandLoadPage() {
  page_load_target_div.style = `margin-top:${window.pageYOffset}px; opacity: 0%; transform: scale(200%); transition: 0.5s ease-in-out`;
}

function removeLoadPage() {
  page_load_target.remove();
}

window.addEventListener("load", expandLoadPage);
page_load_target_div.addEventListener("transitionend", removeLoadPage);

for (let btn = 0; btn < btn_changeOrder.length - 1; btn++) {
  btn_changeOrder[btn].addEventListener("click", screenMoveBottom);
  btn_changeOrder[btn].addEventListener("click", titleMenuBlink);
}
page_load_target_div.addEventListener("transitionend", screenMoveWindow);
// window.addEventListener("pageshow", titleMenuBlink);
try {
  form_sort.addEventListener("submit", screenMoveBottom);
} catch {}
