// 검색 div 지정
const order_sort = document.querySelector(".phase .phase_movie");

// 검색 input 지정
const form_sort = document.querySelector("#input_sort");
const input_sort = document.querySelector("#input_sort input:first-child");

// 검색배열 생성
const movies_sort = [];

// 검색_타임라인순 정렬

function f_movies_sort(event) {
  event.preventDefault();
  movies_sort.length = 0;

  while (order_sort.hasChildNodes()) {
    order_sort.removeChild(order_sort.firstChild);
  }

  for (let s = 0; s < movies_time.length; s++) {
    if (movies_time[s].name_kr.includes(input_sort.value)) {
      movies_sort.push(movies_time[s]);
    }
  }

  for (let i = 0; i < movies_sort.length; i++) {
    const div_movie = document.createElement("div");
    const div_title = document.createElement("div");
    const img_movie = document.createElement("img");
    const a_img = document.createElement("a");
    const a_title = document.createElement("a");

    f_div_movie(div_movie);
    div_movie.addEventListener("click", selectMovie);
    f_img_movie(img_movie, i, movies_sort);

    a_title.innerText = `${i + 1}. ${movies_sort[i].name_kr}(${
      movies_sort[i].name_en
    }) - ${movies_sort[i].launch_year}`;

    a_img.appendChild(img_movie);
    div_movie.appendChild(a_img);
    div_title.appendChild(a_title);
    div_movie.appendChild(div_title);
    order_sort.appendChild(div_movie);
  }
}

function selectMovie(event) {
  const select_movie = event.target.parentElement.parentElement;
  while (order_sort.hasChildNodes()) {
    order_sort.removeChild(order_sort.firstChild);
  }
  console.log(select_movie);
  order_sort.appendChild(select_movie);
}

form_sort.addEventListener("submit", f_movies_sort);
