// statement 선언
let statement_sort_stone = 0;

// 검색 div 지정
const order_sort_result = document.querySelector(
  ".phase:nth-child(2) .phase_movie"
);
// 검색배열 생성
const stones_sort = [
  { name_stone: "space", img_poster: "img/stone/space.png" },
  { name_stone: "mind", img_poster: "img/stone/mind.png" },
  { name_stone: "reality", img_poster: "img/stone/reality.png" },
  { name_stone: "power", img_poster: "img/stone/power.png" },
  { name_stone: "time", img_poster: "img/stone/time.png" },
  { name_stone: "soul", img_poster: "img/stone/soul.png" },
];
const stones_sort_movie = [];

for (let s = 0; s < stones_sort.length; s++) {
  const div_stone = document.createElement("div");
  const img_stone = document.createElement("img");

  f_div_movie(div_stone);
  f_img_movie(img_stone, s, stones_sort);
  img_stone.style.borderRadius = "15px";
  img_stone.style.border = "3px solid rgba(105,122,135,0.6)";
  img_stone.classList.add("eachFeature");
  img_stone.id = stones_sort[s].name_stone;

  div_stone.appendChild(img_stone);
  order_sort.appendChild(div_stone);

  div_stone.addEventListener("click", selectStone);
}

function selectStone(event) {
  const select_stone = event.target;
  const select_stone_copy = select_stone.cloneNode(true);
  const select_stone_name = select_stone.id;

  initializeDiv(order_sort_result);
  stones_sort_movie.length = 0;

  order_sort_result.appendChild(select_stone_copy);

  for (let s = 0; s < movies_time.length; s++) {
    if (movies_time[s].stone.includes(select_stone_name)) {
      stones_sort_movie.push(movies_time[s]);
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
