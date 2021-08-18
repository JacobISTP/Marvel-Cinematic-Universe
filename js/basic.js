const btn_time = document.querySelector("#btn_time");
const btn_launch = document.querySelector("#btn_launch");
const btn_sort = document.querySelector("#btn_sort");
const panel_main = document.querySelector("body>div.order");
const sort_href = ["sort_movie.html", "sort_character.html", "sort_stone.html"];
const sort_button = ["영화", "캐릭터", "스톤"];

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

function phaseWidthResize() {
  const panel_phase = document.querySelectorAll(".phase");
  let pcWidth = window.matchMedia("(min-width: 421px)");
  if (pcWidth.matches === true) {
    panel_phase.forEach(function (item) {
      item.style.width = `500px`;
    });
  }
}

function titleAnchorHref(a, i) {
  a.href = sort_href[i];
}

function titleButtonClass(button, i) {
  button.classList.add("btn_changeOrder_sm");
  button.innerText = sort_button[i];
  button.classList.add("font_basic_sm");
}

function sortMenuAdd() {
  const sort_a = [
    document.createElement("a"),
    document.createElement("a"),
    document.createElement("a"),
  ];
  const sort_b = [
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
  ];
  const div_sort = document.createElement("div");
  div_sort.id = "sortMenuId";
  div_sort.style.display = "flex";

  for (let i = 0; i < sort_a.length; i++) {
    titleAnchorHref(sort_a[i], i);
    titleButtonClass(sort_b[i], i);

    sort_a[i].appendChild(sort_b[i]);
    div_sort.appendChild(sort_a[i]);
    btn_sort.appendChild(div_sort);
  }
}

phaseWidthResize();
sortMenuAdd();
window.addEventListener("resize", phaseWidthResize);
window.addEventListener("click", phaseWidthResize);
btn_time.addEventListener("click", screenMoveToRight);
btn_launch.addEventListener("click", screenMoveToLeft);
