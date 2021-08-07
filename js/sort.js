// menu div 지정
const maindiv_sort = document.querySelector("#order_sort");

// 검색 div 지정
const order_sort = document.querySelector(".phase:first-child .phase_movie");
const order_sort_prev = document.querySelector(".phase:nth-child(2) .phase_movie");
const order_sort_next = document.querySelector(".phase:nth-child(3) .phase_movie");

// 검색 input 지정
const form_sort = document.querySelector("#input_sort");
const input_sort = document.querySelector("#input_sort input:first-child");

// 검색배열 생성
const movies_sort_movie = [];

// 검색_타임라인순 정렬
function initializeDiv(div) {

  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
}

function f_movies_sort_movie(event) {
  const order_sort_prev_new = document.querySelector(".phase:nth-child(2) .phase_movie");
  const order_sort_next_new = document.querySelector(".phase:nth-child(3) .phase_movie");
  event.preventDefault();
  movies_sort_movie.length = 0;

  initializeDiv(order_sort);
  if(order_sort_prev_new !== null){
    initializeDiv(order_sort_prev_new);
  }
  if(order_sort_next_new !== null){
    initializeDiv(order_sort_next_new);
  }

  for (let s = 0; s < movies_time.length; s++) {
    if (movies_time[s].name_kr.includes(input_sort.value)) {
      movies_sort_movie.push(movies_time[s]);
    }
  }
  
  for (let i = 0; i < movies_sort_movie.length; i++) {
    const div_movie_sort = createDivEach(movies_sort_movie, i)[0];
    div_movie_sort.addEventListener("click", selectMovie);
    div_movie_sort.addEventListener("click", createPrevMovieDiv);
    div_movie_sort.addEventListener("click", createNextMovieDiv);
   order_sort.appendChild(div_movie_sort);
  }
}

function selectMovie(event) {
  const select_movie = event.target.parentElement.parentElement;
  const select_movie_text = select_movie.querySelector(".eachMovie div a").innerText;
  const select_movie_name = select_movie_text.substring(0,select_movie_text.indexOf("("));
  initializeDiv(order_sort);

  order_sort.appendChild(select_movie);
  console.log(select_movie_name);
  f_movies_sort_movie_next(select_movie_name);
}

form_sort.addEventListener("submit", f_movies_sort_movie);

const movies_sort_movie_prev = [];
const movies_sort_movie_next = [];

function f_movies_sort_movie_next(select_movie_name){
  movies_sort_movie_next.length = 0;

  const movies_sort_movie_next_name = [];
  for(let n =0; n < movies_time.length; n++){
    if(select_movie_name === movies_time[n].name_kr){
      movies_sort_movie_next_name.push(movies_time[n]);
    }
  }
  console.log(movies_sort_movie_next_name);
  for (let n = 0; n < movies_sort_movie_next_name[0].next_movie.length; n++) {
    for (let t = 0; t < movies_time.length; t++) {
      if (movies_sort_movie_next_name[0].next_movie[n] === movies_time[t].name_kr) {
        movies_sort_movie_next.push(movies_time[t]);
      }
    }
  }
  console.log(movies_sort_movie_next);

}

function createMovieDiv(title){
  const div_phase = document.createElement("div");
  div_phase.classList.add("phase");
  const h3_title = document.createElement("h3");
  h3_title.innerText = title;
  const div_phase_movie = document.createElement("div");
  div_phase_movie.classList.add("phase_movie");

  div_phase.appendChild(h3_title);
  div_phase.appendChild(div_phase_movie);
  maindiv_sort.appendChild(div_phase);
}

function createPrevMovieDiv(){
  if(document.querySelector(".phase:nth-child(2) .phase_movie")===null){
    createMovieDiv("이전 관련 영화");
  }
  const order_sort_prev_new = document.querySelector(".phase:nth-child(2) .phase_movie");
}

function createNextMovieDiv(){
  if(document.querySelector(".phase:nth-child(3) .phase_movie")===null){
    createMovieDiv("다음 관련 영화");
  }
  const order_sort_next_new = document.querySelector(".phase:nth-child(3) .phase_movie");
  if(order_sort_next_new !== null){
    initializeDiv(order_sort_next_new);
  }
  for (let ni = 0; ni < movies_sort_movie_next.length; ni++) {
    const return_sort_movie_next = createDivEach(movies_sort_movie_next, ni);
    f_a_title(return_sort_movie_next[1], ni, movies_sort_movie_next);
    f_a_title(return_sort_movie_next[2], ni, movies_sort_movie_next);
    order_sort_next_new.appendChild(return_sort_movie_next[0]);
  }
}