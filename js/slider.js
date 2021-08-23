const order_launch_slider = document.querySelector(".order>div:first-child");
const order_time_slider = document.querySelector(".order>div:last-child");
const btn_time = document.querySelector("#btn_time");
const btn_launch = document.querySelector("#btn_launch");

let startX, endX;
let position = 0;

function prev() {
  if (position == 0) {
    order_launch_slider.style.transform = `translateX(-100vw)`;
    order_time_slider.style.transform = `translateX(0)`;
    position = 1;
  }
}
function next() {
  if (position == 1) {
    order_launch_slider.style.transform = `translateX(0)`;
    order_time_slider.style.transform = `translateX(100vw)`;
    position = 0;
  }
}

function touchStart(event) {
  startX = event.touches[0].pageX;
}
function touchEnd(event) {
  endX = event.changedTouches[0].pageX;
  if (startX - endX > 50) {
    prev();
  } else if (startX - endX < -50) {
    next();
  }
}

function resizeWidth() {
  order_launch_slider.style.transform = `translateX(0)`;
  order_time_slider.style.transform = `translateX(100vw)`;
  position = 0;
}

window.addEventListener("resize", resizeWidth);
order_launch.addEventListener("touchstart", touchStart);
order_launch.addEventListener("touchend", touchEnd);
order_time.addEventListener("touchstart", touchStart);
order_time.addEventListener("touchend", touchEnd);
btn_time.addEventListener("click", prev);
btn_launch.addEventListener("click", next);
