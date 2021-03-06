// stoneName div
const div_stone_name = document.querySelector(".stoneName");
const span_stone_name = document.createElement("span");
const title_header = document.querySelector("article img");

function expandTitle() {
  title_header.style.opacity = "100%";
}

expandTitle();
let stone_name = "";

div_stone_name.style.height = "30px";
div_stone_name.style.display = "flex";
div_stone_name.style.justifyContent = "center";
span_stone_name.style.textAlign = "center";
div_stone_name.appendChild(span_stone_name);

// stone별 색상
const dic_stone_color = {
  space: "rgb(11,62,211)",
  mind: "rgb(230,187,44)",
  reality: "rgb(251,1,21)",
  power: "rgb(213,39,239)",
  time: "rgb(3,214,150)",
  soul: "rgb(192,94,45)",
};
// 검색 div 지정
const order_sort_result = document.querySelector(
  ".phase:nth-child(2) .phase_movie"
);
// 검색배열 생성
const stones_sort = [
  { name_stone: "space", img: "img/stone/수정본/space.jpg" },
  { name_stone: "mind", img: "img/stone/수정본/mind.jpg" },
  { name_stone: "reality", img: "img/stone/수정본/reality.jpg" },
  { name_stone: "power", img: "img/stone/수정본/power.jpg" },
  { name_stone: "time", img: "img/stone/수정본/time.jpg" },
  { name_stone: "soul", img: "img/stone/수정본/soul.jpg" },
];
const stones_sort_movie = [];

for (let s = 0; s < stones_sort.length; s++) {
  const div_stone = document.createElement("div");
  const img_stone = document.createElement("img");

  f_div_movie(div_stone);
  f_img_movie(img_stone, s, stones_sort);
  div_stone.style.transform = "scale(75%)";
  div_stone.style.width = "100px";
  img_stone.style.borderRadius = "15px";
  img_stone.style.cursor = "pointer";
  img_stone.style.border = "3px solid rgba(105,122,135,0.6)";
  img_stone.classList.add("eachFeature");
  img_stone.id = stones_sort[s].name_stone;

  div_stone.appendChild(img_stone);
  order_sort.appendChild(div_stone);

  div_stone.addEventListener("click", selectStone);
  div_stone.addEventListener("mouseenter", addStoneName);
  div_stone.addEventListener("mouseleave", removeStoneName);
}

function addStoneName(event) {
  const src_img = event.target.childNodes[0].currentSrc;
  stone_name = src_img.substring(
    src_img.lastIndexOf("/") + 1,
    src_img.indexOf(".jpg")
  );
  span_stone_name.innerText = stone_name;
  span_stone_name.style.textDecoration = "underline";
  span_stone_name.style.textShadow = `0px 0px 15px ${dic_stone_color[stone_name]}`;
}

function removeStoneName() {
  stone_name = "";
  span_stone_name.innerText = stone_name;
}
function selectStone(event) {
  const select_stone = event.target;
  const select_stone_copy = select_stone.cloneNode(true);
  const select_stone_name = select_stone.id;
  const select_stone_div = document.createElement("div");
  const select_stone_span = document.createElement("span");

  initializeDiv(order_sort_result);
  stones_sort_movie.length = 0;

  select_stone_div.classList.add("stoneName");
  select_stone_div.style.display = "flex";
  select_stone_div.style.flexDirection = "column";
  select_stone_div.style.alignItems = "center";

  select_stone_copy.classList.remove("eachFeature");

  select_stone_span.innerText = select_stone_name;
  select_stone_span.style.textDecoration = "underline";
  select_stone_span.style.textShadow = `0px 0px 15px ${dic_stone_color[select_stone_name]}`;

  select_stone_div.appendChild(select_stone_copy);
  select_stone_div.appendChild(select_stone_span);
  order_sort_result.appendChild(select_stone_div);
  // select_stone_copy.childNodes.classList.remove("eachFeature");

  for (let s = 0; s < movies.length; s++) {
    if (movies[s].stone.includes(select_stone_name)) {
      stones_sort_movie.push(movies[s]);
    }
  }

  for (let i = 0; i < stones_sort_movie.length; i++) {
    const return_sort_movie_stone = createDivEach(stones_sort_movie, i);
    const div_movie_sort = return_sort_movie_stone[0];
    f_a_title(return_sort_movie_stone[1], i, stones_sort_movie);
    f_a_title(return_sort_movie_stone[2], i, stones_sort_movie);
    order_sort_result.appendChild(div_movie_sort);
  }
}
