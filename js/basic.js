const btn_time = document.querySelector("#btn_time");
const btn_launch = document.querySelector("#btn_launch");
const panel_main = document.querySelector("body>div.order");

function screenMoveToRight() {
  panel_main.classList.add("moveToRight");
  panel_main.classList.remove("moveToLeft");
  btn_time.classList.add("currentOrder");
  btn_launch.classList.remove("currentOrder");
}
function screenMoveToLeft() {
  panel_main.classList.remove("moveToRight");
  panel_main.classList.add("moveToLeft");
  btn_time.classList.remove("currentOrder");
  btn_launch.classList.add("currentOrder");
}

btn_time.addEventListener("click", screenMoveToRight);
btn_launch.addEventListener("click", screenMoveToLeft);
