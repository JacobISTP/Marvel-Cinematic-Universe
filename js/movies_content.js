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
  const eachMovie_div_synopsys_div = document.createElement("div");
  const eachmovie_div_synopsys = document.createElement("p");
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

  eachmovie_div_synopsys.innerText = getMatchedValueByKey(
    content_movies_info,
    "synopsys",
    getMatchedValueByKey(movies, "search", eachmovie_title)
  );

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
  eachMovie_div_synopsys_div.classList.add("specificContentSynopsysDiv");
  eachmovie_div_synopsys.classList.add("specificContentSynopsys");
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
  eachMovie_div_synopsys_div.appendChild(eachmovie_div_synopsys);
  eachmovie_div.appendChild(eachMovie_div_synopsys_div);
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
