"use strict";

const order_launch_slider = document.querySelector(".order>div:first-child");
const order_time_slider = document.querySelector(".order>div:nth-child(2)");
const order_schedule_slider = document.querySelector(".order>div:last-child");
const btn_time = document.querySelector("#btn_time");
const btn_launch = document.querySelector("#btn_launch");
const btn_schedule = document.querySelector("#btn_schedule");
const title_header = document.querySelector("article img");

const slider_array = [
  order_launch_slider,
  order_time_slider,
  order_schedule_slider,
];

function actionTitleRemain() {
  title_header.classList.remove("logo_transition");
  title_header.classList.add("logo_opacity_100");
}
function actionTitle() {
  title_header.classList.remove("logo_opacity_100");
  title_header.classList.add("logo_transition");
}

function reloadPage() {
  window.location.reload();
}

let mobileJs = window.matchMedia("(max-width: 420px)");
let pcJs = window.matchMedia("(min-width: 421px)");
let startX, endX, startY, endY;
let position = 0;

const move_statements = ["moveToLeft", "moveToMiddle", "moveToRight"];

function remove_move_statements() {
  order_launch_slider.style = null;
  order_time_slider.style = null;
  order_schedule_slider.style = null;
  order_launch_slider.classList.remove(...move_statements);
  order_time_slider.classList.remove(...move_statements);
  order_schedule_slider.classList.remove(...move_statements);
}

function remove_currentOrder() {
  btn_launch.classList.remove("currentOrder");
  btn_time.classList.remove("currentOrder");
  btn_schedule.classList.remove("currentOrder");
}

function move1() {
  remove_move_statements();
  order_launch_slider.classList.add("moveToMiddle");
  order_time_slider.classList.add("moveToRight");
  order_schedule_slider.classList.add("moveToRight");
  position = 0;
  remove_currentOrder();
  btn_launch.classList.add("currentOrder");
}
function move2() {
  remove_move_statements();
  order_launch_slider.classList.add("moveToLeft");
  order_time_slider.classList.add("moveToMiddle");
  order_schedule_slider.classList.add("moveToRight");
  position = 1;
  remove_currentOrder();
  btn_time.classList.add("currentOrder");
}
function move3() {
  remove_move_statements();
  order_launch_slider.classList.add("moveToLeft");
  order_time_slider.classList.add("moveToLeft");
  order_schedule_slider.classList.add("moveToMiddle");
  position = 2;
  remove_currentOrder();
  btn_schedule.classList.add("currentOrder");
}

// function move(event, array, direction = "") {
//   position_current = position;
// }

function prev() {
  if (position == 0) {
    move2();
  } else if (position == 1) {
    move3();
  }
}

function next() {
  if (position == 1) {
    move1();
  } else if (position == 2) {
    move2();
  }
}

function touchStart(event) {
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
}
function touchEnd(event) {
  endX = event.changedTouches[0].pageX;
  endY = event.changedTouches[0].pageY;
  if (startX - endX > 50 && Math.abs(startY - endY) < 25) {
    prev();
  } else if (startX - endX < -50 && Math.abs(startY - endY) < 25) {
    next();
  }
}

window.addEventListener("pageshow", actionTitle);
order_launch.addEventListener("touchstart", touchStart);
order_launch.addEventListener("touchend", touchEnd);
order_time.addEventListener("touchstart", touchStart);
order_time.addEventListener("touchend", touchEnd);
order_schedule.addEventListener("touchstart", touchStart);
order_schedule.addEventListener("touchend", touchEnd);
btn_launch.addEventListener("click", move1);
btn_time.addEventListener("click", move2);
btn_schedule.addEventListener("click", move3);
title_header.addEventListener("animationend", actionTitleRemain);
title_header.addEventListener("click", reloadPage);
