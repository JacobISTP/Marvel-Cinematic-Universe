const header_article = document.querySelector("header article");
const opening = document.querySelector("header article > div");
const opening_gif_div = document.querySelector("#opening_marvel");
const opening_gif = document.querySelector("#opening_marvel img");

const article_width = header_article.clientWidth;
const article_height = header_article.clientHeight;
const opening_gif_width = opening_gif.clientWidth;
const opening_gif_height = opening_gif.clientHeight;

opening_gif.style = `width: ${article_width}px;`;
if (pcJs.matches) {
  console.log(opening_gif_height);
  console.log(article_height);

  if (opening_gif_height > article_height || opening_gif_height === 0) {
    opening_gif.style = `height: ${article_height}px;`;
  }
}
opening.style = `width: ${article_width}px; height: ${article_height}px; background-color: black; padding:${
  (header_article.clientHeight - opening_gif_div.clientHeight) / 2
}px 0px;`;

function fadeOutOpening() {
  opening.style = "opacity:0%; transition: 1s ease-in-out;";
}
function removeOpening() {
  opening.remove();
}

window.setTimeout(fadeOutOpening, 34000);
opening.addEventListener("transitionend", removeOpening);
// console.log(opening_gif_width);
// console.log(article_height);
for (let btn = 0; btn < btn_changeOrder.length - 1; btn++) {
  btn_changeOrder[btn].addEventListener("click", removeOpening);
}
