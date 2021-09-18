"use strict";

function getMatchedValueByKey(array, key, name_kr) {
  for (let index = 0; index < array.length; index++) {
    const nameNFC = name_kr.normalize("NFC");
    const nameNFD = name_kr.normalize("NFD");

    if (
      nameNFC === array[index]["name_kr"] ||
      nameNFD === array[index]["name_kr"]
    ) {
      let value_by_key_name_kr = array[index][key];
      // if (Array.isArray(value_by_key_name_kr)) {
      //   for (let v = 0; v < value_by_key_name_kr.length; v++) {
      //     value_by_key_name_kr[v] = value_by_key_name_kr[v].normalize("NFC");
      //   }
      // } else {
      //   value_by_key_name_kr = value_by_key_name_kr.normalize("NFC");
      // }
      return value_by_key_name_kr;
    } else if (
      nameNFC === array[index]["search"] ||
      nameNFD === array[index]["search"]
    ) {
      let value_by_key_search = array[index][key];
      // if (Array.isArray(value_by_key_search)) {
      //   for (let v = 0; v < value_by_key_search.length; v++) {
      //     value_by_key_search[v] = value_by_key_search[v].normalize("NFC");
      //   }
      // } else {
      //   value_by_key_search = value_by_key_search.normalize("NFC");
      // }
      return value_by_key_search;
    } else if (
      nameNFC === array[index]["man_name"] ||
      nameNFD === array[index]["man_name"]
    ) {
      let value_by_key_man = array[index][key];
      return value_by_key_man;
    }
  }

  return;
}

// 풍선메뉴
function balloonMenuEachMovie(event, target_element = "", name_kr = "") {
  const balloonMenu_div = document.createElement("div");
  const balloonMenu_div_div = document.createElement("div");
  const balloonMenu_div_specific = document.createElement("button");
  const balloonMenu_a_youtube = document.createElement("a");
  const balloonMenu_a_youtube_img = document.createElement("img");

  balloonMenu_div.classList.add("balloonMenu");
  balloonMenu_div_specific.classList.add("balloonMenuBtn");
  balloonMenu_div_specific.classList.add("font_basic");
  balloonMenu_a_youtube.classList.add("balloonMenuAnchor");
  balloonMenu_a_youtube_img.classList.add("balloonMenuLogo");
  let balloon_a_title;
  try {
    balloon_a_title = event.target.innerText.substring(
      0,
      event.target.innerText.indexOf("(")
    );
  } catch {
    balloon_a_title = name_kr;
  }

  balloonMenu_div_specific.innerText = "상세정보";
  f_a_title(balloonMenu_a_youtube);
  balloonMenu_a_youtube.href = getMatchedValueByKey(
    movies,
    "url",
    balloon_a_title
  );
  balloonMenu_a_youtube_img.src = "./img/logo/youtube.png";

  balloonMenu_a_youtube.appendChild(balloonMenu_a_youtube_img);
  balloonMenu_div_div.appendChild(balloonMenu_div_specific);
  balloonMenu_div_div.appendChild(balloonMenu_a_youtube);
  balloonMenu_div.appendChild(balloonMenu_div_div);
  if (target_element === "") {
    event.target.appendChild(balloonMenu_div);
  } else {
    target_element.appendChild(balloonMenu_div);
  }

  balloonMenu_div_specific.addEventListener("click", specificContents);
}

function removeBalloonMenuEachMovie() {
  let mouseout_movie = document.querySelectorAll(".balloonMenu");
  mouseout_movie = mouseout_movie[mouseout_movie.length - 1];
  try {
    mouseout_movie.remove();
  } catch {}
}

//상세정보창
function specificContents(event) {
  //요소 선언
  const eachmovie_div_outer = document.createElement("div");
  const eachmovie_div = document.createElement("div");
  const eachMovie_div_div = document.createElement("div");
  const eachmovie_div_poster = document.createElement("img");
  const eachMovie_div_a_div = document.createElement("div");
  const eachmovie_div_a_youtube = document.createElement("a");
  const eachmovie_div_a_youtube_img = document.createElement("img");
  const eachmovie_div_title = document.createElement("span");
  const eachmovie_div_summary = document.createElement("span");
  const eachmovie_div_star_div = document.createElement("div");
  const eachmovie_div_star_span = document.createElement("span");
  const eachmovie_div_audience = document.createElement("span");
  const eachMovie_div_maincontent_div = document.createElement("div");
  const eachMovie_div_maintitle_div = document.createElement("div");
  const eachMovie_div_main_div = document.createElement("div");
  const removeBtn = document.createElement("button");

  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const eachmovie = event.target.parentElement.parentElement.parentElement;

  let pcJs = window.matchMedia("(min-width: 421px)");

  //요소 내용 지정
  const eachmovie_titleName = eachmovie.innerText.replace("상세정보", "");
  const eachmovie_title = eachmovie_titleName.substring(
    0,
    eachmovie_titleName.indexOf("(")
  );

  eachmovie_div_title.innerText = getMatchedValueByKey(
    movies,
    "launch_year",
    eachmovie_title
  );

  eachmovie_div_poster.src = getMatchedValueByKey(
    movies,
    "img",
    eachmovie_title
  );

  eachmovie_div_summary.innerText = getMatchedValueByKey(
    content_movies_info,
    "summary",
    getMatchedValueByKey(movies, "search", eachmovie_title)
  );
  const starPoint = getMatchedValueByKey(
    content_movies_info,
    "starPoint",
    getMatchedValueByKey(movies, "search", eachmovie_title)
  );
  eachmovie_div_star_span.innerText = `/${starPoint}`;
  const starPointFloat = Math.round(parseFloat(starPoint) * 2) / 2;
  for (let s = 0; s < 5; s++) {
    const star_i = document.createElement("i");
    if (starPointFloat >= s * 2 + 2) {
      star_i.classList.add("fas");
      star_i.classList.add("fa-star");
      if (!pcJs.matches) {
        star_i.classList.add("fa-xs");
      }
    } else if (starPointFloat >= s * 2 + 1.5) {
      star_i.classList.add("fas");
      star_i.classList.add("fa-star-half-alt");
      if (!pcJs.matches) {
        star_i.classList.add("fa-xs");
      }
    } else if (starPointFloat >= s * 2 + 1) {
      star_i.classList.add("fas");
      star_i.classList.add("fa-star-half");
      if (!pcJs.matches) {
        star_i.classList.add("fa-xs");
      }
    } else if (starPointFloat >= s * 2 + 0.5) {
      star_i.classList.add("far");
      star_i.classList.add("fa-star-half");
      if (!pcJs.matches) {
        star_i.classList.add("fa-xs");
      }
    } else {
      star_i.classList.add("far");
      star_i.classList.add("fa-star");
      star_i.style.opacity = "30%";
      if (!pcJs.matches) {
        star_i.classList.add("fa-xs");
      }
    }
    star_i.style.color = "tomato";
    eachmovie_div_star_div.appendChild(star_i);
  }

  eachmovie_div_audience.innerText =
    "관객 : " +
    getMatchedValueByKey(
      content_movies_info,
      "audienceCount",
      getMatchedValueByKey(movies, "search", eachmovie_title)
    );

  f_a_title(eachmovie_div_a_youtube);
  eachmovie_div_a_youtube.href = getMatchedValueByKey(
    movies,
    "url",
    eachmovie_title
  );
  eachmovie_div_a_youtube_img.src = "./img/logo/youtube.png";

  //main
  //title

  const maintitle_a = [
    document.createElement("a"),
    document.createElement("a"),
    document.createElement("a"),
    document.createElement("a"),
  ];
  const maintitle_b = [
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
  ];

  const maintitle_button = ["줄거리", "캐릭터", "관련영화", "명장면(명대사)"];
  const maintitle_handle = [
    mainContentSynopsys,
    mainContentCharacter,
    mainContentMovie,
    mainContentSetence,
  ];

  for (let i = 0; i < maintitle_a.length; i++) {
    maintitle_b[i].classList.add("btn_changeOrder_sm");
    maintitle_b[i].innerText = maintitle_button[i];
    maintitle_b[i].classList.add("font_basic_sm");
    maintitle_b[i].addEventListener("click", maintitle_handle[i]);

    maintitle_a[i].appendChild(maintitle_b[i]);
    eachMovie_div_maintitle_div.appendChild(maintitle_a[i]);
  }

  //content
  function mainContentSynopsys() {
    console.log("click! synop");
    while (eachMovie_div_maincontent_div.hasChildNodes()) {
      eachMovie_div_maincontent_div.removeChild(
        eachMovie_div_maincontent_div.firstChild
      );
    }
    const eachmovie_div_synopsys = document.createElement("p");

    eachmovie_div_synopsys.innerText = getMatchedValueByKey(
      content_movies_info,
      "synopsys",
      getMatchedValueByKey(movies, "search", eachmovie_title)
    );

    eachmovie_div_synopsys.classList.add("specificContentSynopsys");

    eachMovie_div_maincontent_div.appendChild(eachmovie_div_synopsys);
  }

  function mainContentCharacter() {
    console.log("click! char");
    while (eachMovie_div_maincontent_div.hasChildNodes()) {
      eachMovie_div_maincontent_div.removeChild(
        eachMovie_div_maincontent_div.firstChild
      );
    }
    const eachmovie_div_char = document.createElement("div");

    const eachmovie_div_charaters_raw = getMatchedValueByKey(
      movies,
      "character",
      eachmovie_title
    );
    let eachMovie_characters = [];
    for (let c = 0; c < eachmovie_div_charaters_raw.length; c++) {
      eachMovie_characters.push(eachmovie_div_charaters_raw[c]["man_name"]);
    }
    eachMovie_characters.sort();

    const eachmovie_div_charaters = [];
    for (let cs = 0; cs < eachMovie_characters.length; cs++) {
      for (let cr = 0; cr < eachmovie_div_charaters_raw.length; cr++) {
        if (
          eachMovie_characters[cs] ===
          eachmovie_div_charaters_raw[cr]["man_name"]
        ) {
          eachmovie_div_charaters.push(eachmovie_div_charaters_raw[cr]);
        }
      }
    }
    let eachmovie_div_charaters_img = [];
    for (let i = 0; i < eachmovie_div_charaters.length; i++) {
      let eachmovie_div_div_charater = document.createElement("div");
      let eachmovie_div_charater = document.createElement("img");
      let eachmovie_div_charater_name = document.createElement("span");

      eachmovie_div_charater.src = getMatchedValueByKey(
        characters,
        "img",
        eachmovie_div_charaters[i]["man_name"]
      );
      eachmovie_div_charater_name.innerText =
        eachmovie_div_charaters[i]["man_name"];
      if (eachmovie_div_charaters[i]["char_name"] !== "") {
        eachmovie_div_charater_name.innerText += `/\n${eachmovie_div_charaters[i]["char_name"]}`;
      }

      eachmovie_div_div_charater.appendChild(eachmovie_div_charater);
      eachmovie_div_div_charater.appendChild(eachmovie_div_charater_name);
      eachmovie_div_char.appendChild(eachmovie_div_div_charater);
    }

    eachmovie_div_char.classList.add("specificContentElement");

    eachMovie_div_maincontent_div.appendChild(eachmovie_div_char);
  }

  const movies_sort_movie_prev = [];
  const movies_sort_movie_next = [];

  function mainContentMovie() {
    console.log("click! mov");
    while (eachMovie_div_maincontent_div.hasChildNodes()) {
      eachMovie_div_maincontent_div.removeChild(
        eachMovie_div_maincontent_div.firstChild
      );
    }

    const eachmovie_div_movie = document.createElement("div");
    const eachmovie_div_movie_prev = document.createElement("div");
    const eachmovie_div_movie_next = document.createElement("div");
    const eachmovie_div_movie_prev_title = document.createElement("h3");
    const eachmovie_div_movie_next_title = document.createElement("h3");
    const eachmovie_div_movie_prev_elements = document.createElement("div");
    const eachmovie_div_movie_next_elements = document.createElement("div");

    eachmovie_div_movie_prev_title.innerText = "이전 영화";
    eachmovie_div_movie_next_title.innerText = "다음 영화";

    f_movies_sort_movie_prev(eachmovie_title);
    f_movies_sort_movie_next(eachmovie_title);

    console.log(movies_sort_movie_prev);
    console.log(movies_sort_movie_next);
    for (let p = 0; p < movies_sort_movie_prev.length; p++) {
      let prev_div = document.createElement("div");
      let prev_img = document.createElement("img");
      let prev_name = document.createElement("span");

      prev_img.src = getMatchedValueByKey(
        movies,
        "img",
        movies_sort_movie_prev[p]["name_kr"]
      );
      prev_name.innerText = `${getMatchedValueByKey(
        movies,
        "name_kr",
        movies_sort_movie_prev[p]["name_kr"]
      )}(${getMatchedValueByKey(
        movies,
        "name_en",
        movies_sort_movie_prev[p]["name_kr"]
      )})`;

      prev_name.classList.add("specificMovieName");

      prev_div.appendChild(prev_img);
      prev_div.appendChild(prev_name);
      eachmovie_div_movie_prev_elements.appendChild(prev_div);
    }
    for (let p = 0; p < movies_sort_movie_next.length; p++) {
      let next_div = document.createElement("div");
      let next_img = document.createElement("img");
      let next_name = document.createElement("span");

      next_img.src = getMatchedValueByKey(
        movies,
        "img",
        movies_sort_movie_next[p]["name_kr"]
      );
      next_name.innerText = `${getMatchedValueByKey(
        movies,
        "name_kr",
        movies_sort_movie_next[p]["name_kr"]
      )}`;
      // (${getMatchedValueByKey(
      //   movies,
      //   "name_en",
      //   movies_sort_movie_next[p]["name_kr"]
      // )})

      next_name.classList.add("specificMovieName");

      next_div.appendChild(next_img);
      next_div.appendChild(next_name);
      eachmovie_div_movie_next_elements.appendChild(next_div);
    }

    eachmovie_div_movie_prev_elements.classList.add("specificContentElement");
    eachmovie_div_movie_next_elements.classList.add("specificContentElement");

    eachmovie_div_movie_prev.appendChild(eachmovie_div_movie_prev_title);
    eachmovie_div_movie_prev.appendChild(eachmovie_div_movie_prev_elements);
    eachmovie_div_movie_next.appendChild(eachmovie_div_movie_next_title);
    eachmovie_div_movie_next.appendChild(eachmovie_div_movie_next_elements);
    eachmovie_div_movie.appendChild(eachmovie_div_movie_prev);
    eachmovie_div_movie.appendChild(eachmovie_div_movie_next);

    eachmovie_div_movie.classList.add("specificContentMovie");

    eachMovie_div_maincontent_div.appendChild(eachmovie_div_movie);
  }

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
        if (
          movies_sort_movie_next_name[0].next_movie[n] === movies[t].name_kr
        ) {
          movies_sort_movie_next.push(movies[t]);
        }
      }
    }
  }
  function mainContentSetence() {
    console.log("click! setence");
    while (eachMovie_div_maincontent_div.hasChildNodes()) {
      eachMovie_div_maincontent_div.removeChild(
        eachMovie_div_maincontent_div.firstChild
      );
    }
    const eachmovie_div_sentence = document.createElement("div");
    const famous_sentences_array = getMatchedValueByKey(
      movies,
      "sentence",
      eachmovie_title
    );
    if (famous_sentences_array[0].length !== 0) {
      for (let s = 0; s < famous_sentences_array.length; s++) {
        let div_sentence_famous = document.createElement("div");
        let div_span_sentence_famous = document.createElement("div");
        let span_sentence_famous = document.createElement("span");
        let div_sentence_famous_names_outer = document.createElement("div");
        let div_sentence_famous_names = document.createElement("div");
        let span_sentence_famous_role = document.createElement("div");
        let span_sentence_famous_real = document.createElement("div");

        let famous_sentences = famous_sentences_array[s];

        span_sentence_famous.innerText = famous_sentences[0];
        span_sentence_famous_role.innerText = famous_sentences[1];
        span_sentence_famous_real.innerText = famous_sentences[2];

        span_sentence_famous.id = "movie_sentences_famous_span";
        div_sentence_famous.id = "movie_sentences_famous";
        div_sentence_famous_names.id = "movie_sentences_famous_names";
        div_sentence_famous_names_outer.style =
          "background-color: rgb(228, 228, 228); margin-top: 10px; width: fit-content;";

        div_sentence_famous_names.appendChild(span_sentence_famous_role);
        div_sentence_famous_names.appendChild(span_sentence_famous_real);
        div_sentence_famous_names_outer.appendChild(div_sentence_famous_names);

        div_span_sentence_famous.appendChild(span_sentence_famous);
        div_sentence_famous.appendChild(div_span_sentence_famous);
        div_sentence_famous.appendChild(div_sentence_famous_names_outer);
        div_sentence_famous.style = "height: fit-content;";

        eachmovie_div_sentence.appendChild(div_sentence_famous);
      }
      eachmovie_div_sentence.classList.add("specificContentElement");
      eachmovie_div_sentence.style = "align-content: start;";
    } else {
      eachmovie_div_sentence.innerText = "Coming Soon.";
      eachmovie_div_sentence.style = "color: rgb(228, 228, 228);";
    }
    eachMovie_div_maincontent_div.appendChild(eachmovie_div_sentence);
  }

  // const eachmovie_div_synopsys = document.createElement("p");

  // eachmovie_div_synopsys.innerText = getMatchedValueByKey(
  //   content_movies_info,
  //   "synopsys",
  //   getMatchedValueByKey(movies, "search", eachmovie_title)
  // );

  const xicon = document.createElement("i");

  xicon.classList.add("fas");
  xicon.classList.add("fa-times");
  if (pcJs.matches) {
    xicon.classList.add("fa-2x");
  }
  removeBtn.appendChild(xicon);

  //스타일 추가
  eachmovie_div.style = `width: ${main.offsetWidth * 0.9}px; height: ${
    main.offsetHeight * 0.97
  }px; border: 2px solid white;`;
  if (pcJs.matches) {
    eachmovie_div_a_youtube_img.style = `width:${
      eachmovie_div_poster.height * 0.1
    }px; height: ${eachmovie_div_poster.width * 0.1}px;`;
  } else {
    eachmovie_div_a_youtube_img.style = `width:${
      eachmovie_div_poster.height * 0.05
    }px; height: ${eachmovie_div_poster.width * 0.05}px;`;
  }
  eachmovie_div_outer.style = `height: ${body.offsetHeight}px;`;
  // console.dir(eachmovie_div_poster);

  //클래스 추가
  eachmovie_div.classList.add("specificContent");
  eachmovie_div_poster.classList.add("specificContent_img_size");
  eachmovie_div_title.classList.add("specificContentTitle");
  eachmovie_div_summary.classList.add("specificContentText");
  eachmovie_div_star_div.classList.add("specificContentStar");
  eachmovie_div_star_span.classList.add("specificContentText");
  eachmovie_div_audience.classList.add("specificContentText");
  eachMovie_div_a_div.classList.add("specificContentAnchorDiv");
  eachMovie_div_maincontent_div.classList.add("specificMainContentDiv");
  eachMovie_div_maintitle_div.classList.add("specificMainTitleDiv");
  eachMovie_div_main_div.classList.add("specificMainDiv");
  removeBtn.classList.add("removeBtn");
  removeBtn.classList.add("font_basic");
  eachMovie_div_div.classList.add("specificContentImgDiv");
  eachmovie_div_outer.classList.add("specificContentOuter");

  //요소 추가
  eachmovie_div_a_youtube.appendChild(eachmovie_div_a_youtube_img);
  eachMovie_div_a_div.appendChild(eachmovie_div_a_youtube);

  eachMovie_div_div.appendChild(eachmovie_div_poster);
  eachMovie_div_div.appendChild(eachmovie_div_summary);
  eachMovie_div_div.appendChild(eachmovie_div_title);
  eachmovie_div_star_div.appendChild(eachmovie_div_star_span);
  eachMovie_div_div.appendChild(eachmovie_div_star_div);
  eachMovie_div_div.appendChild(eachmovie_div_audience);

  eachMovie_div_div.appendChild(eachMovie_div_a_div);
  eachmovie_div.appendChild(eachMovie_div_div);

  mainContentSynopsys();

  if (pcJs.matches) {
    eachMovie_div_main_div.appendChild(eachMovie_div_maintitle_div);
  } else {
    eachMovie_div_div.appendChild(eachMovie_div_maintitle_div);
  }
  eachMovie_div_main_div.appendChild(eachMovie_div_maincontent_div);
  eachmovie_div.appendChild(eachMovie_div_main_div);
  eachmovie_div.appendChild(removeBtn);
  main.appendChild(eachmovie_div);
  body.appendChild(eachmovie_div_outer);

  removeBtn.addEventListener("click", removeSpecificContents);
  eachmovie_div_outer.addEventListener("click", removeSpecificContents, true);
}

function removeSpecificContents() {
  let cancelSpecific = document.querySelector(".specificContent");
  let cancelSpecificOuter = document.querySelector(".specificContentOuter");
  cancelSpecific.remove();
  cancelSpecificOuter.remove();
}
