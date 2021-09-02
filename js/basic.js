"use strict";

const btn_sort = document.querySelector("#btn_sort");
const sort_href = ["sort_movie.html", "sort_character.html", "sort_stone.html"];
const sort_button = ["영화", "캐릭터", "스톤"];

// 함수 생성
function f_div_movie(div_movie) {
  div_movie.classList.add("eachMovie");
  div_movie.classList.add("movie_div_size");
  div_movie.style.display = "flex";
  div_movie.style.flexDirection = "column";
  div_movie.style.alignItems = "center";
  div_movie.style.paddingBottom = "10px";
}

function f_img_movie(img_movie, i, array) {
  img_movie.src = array[i].img;
  img_movie.classList.add("movie_img_size");
  img_movie.alt = "no image";
}

function f_a_title(a_title) {
  a_title.rel = "noreferrer";
  a_title.target = "_blank";
  a_title.style.textAlign = "center";
}

function createDivEach(array, index, balloon = true) {
  const div_movie = document.createElement("div");
  const div_title = document.createElement("div");
  const img_movie = document.createElement("img");
  const a_img = document.createElement("a");
  const a_title = document.createElement("a");
  const returnArray = [div_movie, a_img, a_title];

  f_div_movie(div_movie);
  f_img_movie(img_movie, index, array);

  a_title.innerText = `${array[index].name_kr}(${array[index].name_en}) - ${array[index].launch_year}`;

  a_img.appendChild(img_movie);
  div_movie.appendChild(a_img);
  div_title.appendChild(a_title);
  div_movie.appendChild(div_title);
  if (balloon === true) {
    div_movie.addEventListener("mouseenter", balloonMenuEachMovie);
    div_movie.addEventListener("mouseleave", removeBalloonMenuEachMovie);
  }

  return returnArray;
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

sortMenuAdd();
