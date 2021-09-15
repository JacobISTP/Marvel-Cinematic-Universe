// statement 선언
let statement_sort_char = 0;

// 뒤로가기 element 지정
const go_to_back = document.querySelector(".phase_header h4");
const title_header = document.querySelector("article img");

function expandTitle() {
  title_header.style.opacity = "100%";
}

expandTitle();
// 검색배열 생성
const movies_sort_char = [];

function createDivEach_char(array, index) {
  const div_movie = document.createElement("div");
  const div_title = document.createElement("div");
  const img_movie = document.createElement("img");
  const a_img = document.createElement("a");
  const a_title = document.createElement("a");
  const returnArray = [div_movie, a_img, a_title];

  f_div_movie(div_movie);
  f_img_movie(img_movie, index, array);

  if (
    array[index].man_name === array[index].char_name ||
    array[index].char_name === ""
  ) {
    a_title.innerText = `${array[index].man_name}`;
  } else {
    a_title.innerText = `${array[index].man_name} / ${array[index].char_name}`;
  }

  a_img.appendChild(img_movie);
  div_movie.appendChild(a_img);
  div_title.appendChild(a_title);
  div_movie.appendChild(div_title);

  return returnArray;
}

function f_movies_sort_char(event, array = []) {
  const order_sort_char_new = document.querySelector(
    ".phase:nth-child(2) .phase_movie"
  );

  statement_sort_char = 0;

  initializeDiv(order_sort);
  if (order_sort_char_new !== null) {
    initializeDiv(order_sort_char_new);
  }

  if (array.length === 0) {
    event.preventDefault();
    movies_sort_char.length = 0;
    for (let s = 0; s < characters.length; s++) {
      if (
        characters[s].man_name.includes(input_sort.value) ||
        characters[s].char_name.includes(input_sort.value)
      ) {
        movies_sort_char.push(characters[s]);
      }
    }
    array = movies_sort_char;
  }

  for_createMovieDiv_char(movies_sort_char);
}

function for_createMovieDiv_char(array) {
  for (let i = 0; i < array.length; i++) {
    const div_movie_sort = createDivEach_char(array, i)[0];
    div_movie_sort.addEventListener("click", selectMovie_char);
    div_movie_sort.addEventListener("click", createCharMovieDiv);
    order_sort.appendChild(div_movie_sort);
  }
}

function f_backToTheResult_char() {
  f_movies_sort_char("", movies_sort_char);
}

function selectMovie_char(event) {
  const select_char = event.target.parentElement.parentElement;
  const select_char_a = select_char.querySelector(".eachMovie div a");
  const select_char_name = select_char_a.innerText;
  initializeDiv(order_sort);

  order_sort.appendChild(select_char);

  f_movies_sort_movie_char(select_char_name);

  if (statement_sort_char === 0) {
    event.preventDefault();
  }

  statement_sort_char = 1;
}

const movies_sort_movie_char = [];

function f_movies_sort_movie_char(selected_char_name) {
  movies_sort_movie_char.length = 0;
  let select_char_name = "";

  if (selected_char_name.indexOf("/") > 0) {
    select_char_name = selected_char_name.substring(
      0,
      selected_char_name.indexOf("/") - 1
    );
  } else {
    select_char_name = selected_char_name;
  }

  console.log(selected_char_name.indexOf("/"));

  for (let n = 0; n < movies.length; n++) {
    for (let c = 0; c < movies[n].character.length; c++) {
      if (select_char_name === movies[n].character[c].man_name) {
        movies_sort_movie_char.push(movies[n]);
      }
    }
  }
}

function createCharMovieDiv() {
  if (document.querySelector(".phase:nth-child(2) .phase_movie") === null) {
    createMovieDiv("캐릭터 출연 영화");
  }
  const order_sort_char_new = document.querySelector(
    ".phase:nth-child(2) .phase_movie"
  );
  if (order_sort_char_new !== null) {
    initializeDiv(order_sort_char_new);
  }
  for (let ni = 0; ni < movies_sort_movie_char.length; ni++) {
    const return_sort_movie_char = createDivEach(movies_sort_movie_char, ni);
    f_a_title(return_sort_movie_char[1], ni, movies_sort_movie_char);
    f_a_title(return_sort_movie_char[2], ni, movies_sort_movie_char);
    order_sort_char_new.appendChild(return_sort_movie_char[0]);
  }
}

window.addEventListener("load", f_movies_sort_char);
form_sort.addEventListener("submit", f_movies_sort_char);
go_to_back.addEventListener("click", f_backToTheResult_char);
