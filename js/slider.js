const order_launch_slider = document.querySelector(".order>div:first-child");
const order_time_slider = document.querySelector(".order>div:nth-child(2)");
const order_schedule_slider = document.querySelector(".order>div:last-child");
const btn_time = document.querySelector("#btn_time");
const btn_launch = document.querySelector("#btn_launch");
const btn_schedule = document.querySelector("#btn_schedule");
const title_header = document.querySelector("article img");

function expandTitle() {
  title_header.style.opacity = "100%";
}

let mobileJs = window.matchMedia("(max-width: 420px)");
let pcJs = window.matchMedia("(min-width: 421px)");
let startX, endX, startY, endY;
let position = 0;
let goalPosition = 0;

function move1() {
  order_launch_slider.style.transform = `translateX(0)`;
  order_time_slider.style.transform = `translateX(100vw)`;
  order_schedule_slider.style.transform = `translateX(100vw)`;
  position = 0;
}
function move2() {
  order_launch_slider.style.transform = `translateX(-100vw)`;
  order_time_slider.style.transform = `translateX(0)`;
  order_schedule_slider.style.transform = `translateX(100vw)`;
  position = 1;
}
function move3() {
  order_launch_slider.style.transform = `translateX(-100vw)`;
  order_time_slider.style.transform = `translateX(-100vw)`;
  order_schedule_slider.style.transform = `translateX(0vw)`;
  position = 2;
}

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

function resizeWidth() {
  order_launch_slider.style.transform = `translateX(0)`;
  order_time_slider.style.transform = `translateX(100vw)`;
  order_schedule_slider.style.transform = `translateX(100vw)`;
  position = 0;
}

window.addEventListener("pageshow", expandTitle);
window.addEventListener("resize", resizeWidth);
order_launch.addEventListener("touchstart", touchStart);
order_launch.addEventListener("touchend", touchEnd);
order_time.addEventListener("touchstart", touchStart);
order_time.addEventListener("touchend", touchEnd);
order_schedule.addEventListener("touchstart", touchStart);
order_schedule.addEventListener("touchend", touchEnd);
btn_launch.addEventListener("click", move1);
btn_time.addEventListener("click", move2);
btn_schedule.addEventListener("click", move3);
