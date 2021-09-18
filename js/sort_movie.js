// statement 선언
let statement_sort_movie = 0;

// 검색 div 지정
const order_sort_prev = document.querySelector(
  ".phase:nth-child(2) .phase_movie"
);
const order_sort_next = document.querySelector(
  ".phase:nth-child(3) .phase_movie"
);
// 뒤로가기 element 지정
const go_to_back = document.querySelector(".phase_header h4");
const title_header = document.querySelector("article img");

function expandTitle() {
  title_header.style.opacity = "100%";
}

expandTitle();
// 검색배열 생성
const movies_sort_movie = [];

function f_movies_sort_movie(event = "", array = []) {
  const order_sort_prev_new = document.querySelector(
    ".phase:nth-child(2) .phase_movie"
  );
  const order_sort_next_new = document.querySelector(
    ".phase:nth-child(3) .phase_movie"
  );

  statement_sort_movie = 0;
  if (array.length === 0) {
    console.log(typeof event);
    typeof event === "string" ? (event = event) : event.preventDefault();
    movies_sort_movie.length = 0;
    for (let s = 0; s < movies.length; s++) {
      if (movies[s].name_kr.includes(input_sort.value)) {
        movies_sort_movie.push(movies[s]);
      }
    }
    array = movies_sort_movie;
  }

  initializeDiv(order_sort);

  if (order_sort_prev_new !== null) {
    initializeDiv(order_sort_prev_new);
  }
  if (order_sort_next_new !== null) {
    initializeDiv(order_sort_next_new);
  }
  for_createMovieDiv_movie(array);
}

function for_createMovieDiv_movie(array) {
  for (let i = 0; i < array.length; i++) {
    const div_movie_sort = createDivEach(array, i, false)[0];
    div_movie_sort.addEventListener("click", selectMovie);
    div_movie_sort.addEventListener("click", createPrevMovieDiv);
    div_movie_sort.addEventListener("click", createNextMovieDiv);
    order_sort.appendChild(div_movie_sort);
  }
}

function f_backToTheResult_movie() {
  f_movies_sort_movie("", movies_sort_movie);
}

function selectMovie(event) {
  let select_movie = event.target.parentElement.parentElement;
  for (let q = 0; q < 5; q++) {
    if (select_movie.classList["value"].indexOf("eachMovie") !== -1) {
      break;
    }
    select_movie = select_movie.parentElement;
  }
  if (select_movie.className === "") {
    return;
  }

  const select_movie_a = select_movie.querySelector(".eachMovie div a");
  const select_movie_a_img = select_movie.querySelector(".eachMovie a");
  const select_movie_text = select_movie_a.innerText;
  const select_movie_name = select_movie_text.substring(
    0,
    select_movie_text.indexOf("(")
  );

  initializeDiv(order_sort);

  order_sort.appendChild(select_movie);
  f_movies_sort_movie_prev(select_movie_name);
  f_movies_sort_movie_next(select_movie_name);

  for (let a = 0; a < movies.length; a++) {
    if (select_movie_name === movies[a].name_kr) {
      f_a_title(select_movie_a, a, movies);
      f_a_title(select_movie_a_img, a, movies);
    }
  }

  if (statement_sort_movie === 0) {
    event.preventDefault();
  }

  balloonMenuEachMovie("", order_sort, select_movie_name);
  const selected_balloonMenu = document.querySelector(
    ".phase_movie .balloonMenu"
  );
  selected_balloonMenu.style = `position: static; margin-bottom: 20px;`;

  statement_sort_movie = 1;
}

const movies_sort_movie_prev = [];
const movies_sort_movie_next = [];

function f_movies_sort_movie_prev(select_movie_name) {
  movies_sort_movie_prev.length = 0;

  for (let p = 0; p < movies.length; p++) {
    if (movies[p].next_movie.includes(select_movie_name)) {
      if (!movies_sort_movie_prev.includes(movies[p])) {
        movies_sort_movie_prev.push(movies[p]);
      }
    }
  }
}

function f_movies_sort_movie_next(select_movie_name) {
  movies_sort_movie_next.length = 0;

  const movies_sort_movie_next_name = [];
  for (let n = 0; n < movies.length; n++) {
    if (select_movie_name === movies[n].name_kr) {
      movies_sort_movie_next_name.push(movies[n]);
    }
  }
  for (let n = 0; n < movies_sort_movie_next_name[0].next_movie.length; n++) {
    for (let t = 0; t < movies.length; t++) {
      if (movies_sort_movie_next_name[0].next_movie[n] === movies[t].name_kr) {
        movies_sort_movie_next.push(movies[t]);
      }
    }
  }
}

function createPrevMovieDiv() {
  if (document.querySelector(".phase:nth-child(2) .phase_movie") === null) {
    createMovieDiv("이전 영화");
  }
  const order_sort_prev_new = document.querySelector(
    ".phase:nth-child(2) .phase_movie"
  );
  if (order_sort_prev_new !== null) {
    initializeDiv(order_sort_prev_new);
  }
  for (let pi = 0; pi < movies_sort_movie_prev.length; pi++) {
    const return_sort_movie_prev = createDivEach(movies_sort_movie_prev, pi);
    f_a_title(return_sort_movie_prev[1], pi, movies_sort_movie_prev);
    f_a_title(return_sort_movie_prev[2], pi, movies_sort_movie_prev);
    order_sort_prev_new.appendChild(return_sort_movie_prev[0]);
  }

  if (movies_sort_movie_prev.length === 0) {
    const null_span = document.createElement("span");
    null_span.innerText = "- 이전 영화가 없습니다 -";
    null_span.style.marginBottom = "35px";
    order_sort_prev_new.appendChild(null_span);
  }
}

function createNextMovieDiv() {
  if (document.querySelector(".phase:nth-child(3) .phase_movie") === null) {
    createMovieDiv("다음 영화");
  }
  const order_sort_next_new = document.querySelector(
    ".phase:nth-child(3) .phase_movie"
  );
  if (order_sort_next_new !== null) {
    initializeDiv(order_sort_next_new);
  }
  for (let ni = 0; ni < movies_sort_movie_next.length; ni++) {
    const return_sort_movie_next = createDivEach(movies_sort_movie_next, ni);
    f_a_title(return_sort_movie_next[1], ni, movies_sort_movie_next);
    f_a_title(return_sort_movie_next[2], ni, movies_sort_movie_next);
    order_sort_next_new.appendChild(return_sort_movie_next[0]);
  }

  if (movies_sort_movie_next.length === 0) {
    const null_span = document.createElement("span");
    null_span.innerText = "- Coming soon -";
    null_span.style.color = "tomato";
    null_span.style.marginBottom = "35px";
    order_sort_next_new.appendChild(null_span);
  }
}

window.addEventListener("pageshow", f_movies_sort_movie);
form_sort.addEventListener("submit", f_movies_sort_movie);
go_to_back.addEventListener("click", f_backToTheResult_movie);
