"use strict";

const main_sentences = document.querySelector("#movie_sentences");
const title_menu = document.querySelector(".order_title");

function getRandomNumber() {
  const movies = movies_launch;
  const random_number = String(Math.floor(Math.random() * movies.length));
  console.log(random_number);
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

  f_div_movie(div_movie);
  f_img_movie(img_movie, index, array);

  a_title.innerText = `${array[index].name_kr}(${array[index].name_en})`;
  div_img_movie.style = `background : url(${img_movie.src}); background-size : cover; background-repeat : no-repeat`;

  div_img_movie.appendChild(img_movie);
  div_movie.appendChild(div_img_movie);
  div_title.appendChild(a_title);
  div_movie.appendChild(div_title);
  main_sentences.appendChild(div_movie);
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
