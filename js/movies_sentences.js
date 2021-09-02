"use strict";

const main_sentences = document.querySelector("#movie_sentences");
const title_menu = document.querySelector(".order_title");

function getRandomNumber() {
  const movies = movies_launch;
  const random_number = String(Math.floor(Math.random() * movies.length));
  return [movies, random_number];
}

function createRandomMovieSetence() {
  while (main_sentences.hasChildNodes()) {
    main_sentences.removeChild(main_sentences.firstChild);
  }

  const random_result = getRandomNumber();
  const array = random_result[0];
  const index = random_result[1];

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

  a_title.innerText = `${array[index].name_kr}(${array[index].name_en})`;
  span_sentence_famous.innerText = famous_sentences[0];
  span_sentence_famous_role.innerText = famous_sentences[1];
  span_sentence_famous_verticalBar.innerText = "|";
  span_sentence_famous_real.innerText = famous_sentences[2];

  div_img_movie.style = `background : url(${img_movie.src}); background-size : cover; background-repeat : no-repeat`;
  span_sentence_famous.id = "movie_sentences_famous_span";
  div_sentence_famous.id = "movie_sentences_famous";
  div_sentence_famous_names.id = "movie_sentences_famous_names";

  div_img_movie.appendChild(img_movie);
  div_movie.appendChild(div_img_movie);
  div_title.appendChild(a_title);
  div_movie.appendChild(div_title);

  div_sentence_famous_names.appendChild(span_sentence_famous_role);
  div_sentence_famous_names.appendChild(span_sentence_famous_verticalBar);
  div_sentence_famous_names.appendChild(span_sentence_famous_real);

  div_span_sentence_famous.appendChild(span_sentence_famous);
  div_sentence_famous.appendChild(div_span_sentence_famous);
  div_sentence_famous.appendChild(div_sentence_famous_names);

  main_sentences.appendChild(div_movie);
  main_sentences.appendChild(div_sentence_famous);
}

function clearRandomNumber() {
  clearInterval(interval_random_number);
}

function removeRandomSentences() {
  main_sentences.remove();
}

const interval_random_number = setInterval(createRandomMovieSetence, 10000);

window.addEventListener("pageshow", createRandomMovieSetence);
title_menu.addEventListener("click", clearRandomNumber);
title_menu.addEventListener("click", removeRandomSentences);
