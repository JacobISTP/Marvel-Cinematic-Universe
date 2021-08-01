const btn_time = document.querySelector("#order_launch button");
const btn_launch = document.querySelector("#order_time button");
const panel_main = document.querySelector("body>div.order");

function screenMoveToRight() {
  panel_main.classList.add("moveToRight");
  panel_main.classList.remove("moveToLeft");
}
function screenMoveToLeft() {
  panel_main.classList.remove("moveToRight");
  panel_main.classList.add("moveToLeft");
}

btn_time.addEventListener("click", screenMoveToRight);
btn_launch.addEventListener("click", screenMoveToLeft);
