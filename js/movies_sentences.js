"use strict";

const main_sentences = document.querySelector("#movie_sentences");
const div_content = document.querySelector("#movie_sentences > div");
const title_menu = document.querySelector(".order_title");

let current_number = 0;

const order_random = getRandomNumber(movies_launch);

const prev_random_movie_btn = document.querySelector(
  "button#prev_sentence_btn"
);
const next_random_movie_btn = document.querySelector(
  "button#next_sentence_btn"
);

function createRandomNumber(array) {
  const random_number = String(Math.floor(Math.random() * array.length));
  return random_number;
}

function getRandomNumber(array) {
  const movies_random = [];
  let rn = 0;
  for (let r = 0; r < array.length; r++) {
    while (true) {
      rn = createRandomNumber(array);
      if (!movies_random.includes(rn)) {
        movies_random.push(rn);
        break;
      }
    }
  }
  console.log(movies_random);
  return movies_random;
}

function createRandomMovieSetence(movies, order, random_index = 0) {
  while (div_content.hasChildNodes()) {
    div_content.removeChild(div_content.firstChild);
  }

  const random_result = order;
  const array = movies;
  const index = random_result[random_index];

  const prev_random_movie = document.querySelector("#prev_sentence_btn");
  const next_random_movie = document.querySelector("#next_sentence_btn");

  const div_movie = document.createElement("div");
  const div_title = document.createElement("div");
  const img_movie = document.createElement("img");
  const div_img_movie = document.createElement("div");
  const a_title = document.createElement("a");

  const div_sentence_famous = document.createElement("div");
  const div_span_sentence_famous = document.createElement("div");
  const span_sentence_famous = document.createElement("span");
  const div_sentence_famous_names = document.createElement("div");
  const span_sentence_famous_role = document.createElement("span");
  const span_sentence_famous_verticalBar = document.createElement("span");
  const span_sentence_famous_real = document.createElement("span");

  const famous_sentences = getMatchedValueByKey(
    movies_launch,
    "sentence",
    movies_launch[index].name_kr
  );

  f_div_movie(div_movie);
  f_img_movie(img_movie, index, array);

  a_title.innerText = `${array[index].name_kr}`;
  // (${array[index].name_en})
  span_sentence_famous.innerText = famous_sentences[0];
  span_sentence_famous_role.innerText = famous_sentences[1];
  span_sentence_famous_verticalBar.innerText = "|";
  span_sentence_famous_real.innerText = famous_sentences[2];

  if (pcJs.matches) {
    img_movie.style = "width: 240px; height: 360px;";
  }
  div_img_movie.style = `background : url(${img_movie.src}); background-size : cover; background-repeat : no-repeat`;

  span_sentence_famous.id = "movie_sentences_famous_span";
  div_sentence_famous.id = "movie_sentences_famous";
  div_sentence_famous_names.id = "movie_sentences_famous_names";

  div_img_movie.appendChild(img_movie);
  div_movie.appendChild(div_img_movie);

  const icon_prev = document.querySelector(".fa-caret-left");
  const icon_next = document.querySelector(".fa-caret-right");
  if (!pcJs.matches) {
    div_title.appendChild(a_title);
    icon_prev.classList.add("fa-2x");
    icon_next.classList.add("fa-2x");
  } else {
    icon_prev.classList.add("fa-4x");
    icon_next.classList.add("fa-4x");
  }
  div_movie.appendChild(div_title);

  div_sentence_famous_names.appendChild(span_sentence_famous_role);
  div_sentence_famous_names.appendChild(span_sentence_famous_verticalBar);
  div_sentence_famous_names.appendChild(span_sentence_famous_real);

  div_span_sentence_famous.appendChild(span_sentence_famous);
  div_sentence_famous.appendChild(div_span_sentence_famous);
  div_sentence_famous.appendChild(div_sentence_famous_names);

  div_content.appendChild(div_movie);
  div_content.appendChild(div_sentence_famous);

  main_sentences.appendChild(prev_random_movie);
  main_sentences.appendChild(div_content);
  main_sentences.appendChild(next_random_movie);
}

// function clearRandomNumber() {
//   clearInterval(interval_random_number);
// }

function removeRandomSentences() {
  main_sentences.remove();
}

// const interval_random_number = setInterval(createRandomMovieSetence, 10000);

prev_random_movie_btn.addEventListener("click", () => {
  console.log(current_number);

  current_number =
    (current_number - 1 + movies_launch.length) % movies_launch.length;
  createRandomMovieSetence(movies_launch, order_random, current_number);
  console.log(current_number);
});

next_random_movie_btn.addEventListener("click", () => {
  current_number = (current_number + 1) % movies_launch.length;
  createRandomMovieSetence(movies_launch, order_random, current_number);
  console.log(current_number);
});

createRandomMovieSetence(movies_launch, order_random, current_number);

// title_menu.addEventListener("click", clearRandomNumber);
title_menu.addEventListener("click", removeRandomSentences);
