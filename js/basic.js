const btn_sort = document.querySelector("#btn_sort");
const sort_href = ["sort_movie.html", "sort_character.html", "sort_stone.html"];
const sort_button = ["영화", "캐릭터", "스톤"];

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

sortMenuAdd();
