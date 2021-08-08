// menu div 지정
const maindiv_sort = document.querySelector("#order_sort");

// 검색 div 지정
const order_sort = document.querySelector(".phase:first-child .phase_movie");

// 검색 input 지정
const form_sort = document.querySelector("#input_sort");
const input_sort = document.querySelector("#input_sort input:first-child");

// 검색_타임라인순 정렬
function initializeDiv(div) {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
}

function createMovieDiv(title) {
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
