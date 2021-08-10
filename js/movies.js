// 개봉순배열 생성
const movies_launch = [
  {
    name_kr: "아이언맨",
    name_en: "Ironman 1",
    launch_year: "2008",
    url: "https://www.youtube.com/watch?v=Q9OT3kEClMw",
    img_poster: "img/아이언맨.jpg",
    phase: "1",
    timeline: "3",
    next_movie: ["아이언맨2"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "제임스 로드", char_name: "" },
      { man_name: "오베디아 스탠", char_name: "" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "해피", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "인크레더블 헐크",
    name_en: "Incredible Hulk",
    launch_year: "2008",
    url: "https://www.youtube.com/watch?v=J87E6fDlWBw",
    img_poster: "img/인크레더블 헐크.jpg",
    phase: "1",
    timeline: "4",
    next_movie: ["어벤져스"],
    character: [
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "썬더볼트 장군", char_name: "" },
      { man_name: "토니 스타크", char_name: "" },
      { man_name: "에밀 브론스키", char_name: "어보미네이터" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "아이언맨2",
    name_en: "Ironman2",
    launch_year: "2010",
    url: "https://www.youtube.com/watch?v=9tf_YrfHItM&t=4s",
    img_poster: "img/아이언맨2.jpg",
    phase: "1",
    timeline: "5",
    next_movie: ["토르 : 천둥의 신", "어벤져스", "아이언맨3"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "제임스 로드", char_name: "워 머신" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "이안 반코", char_name: "위플래시" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "해피", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "토르 : 천둥의 신",
    name_en: "Thor : God of Thunder",
    launch_year: "2011",
    url: "https://www.youtube.com/watch?v=CnHmAKvZEd4",
    img_poster: "img/토르1.jpg",
    phase: "1",
    timeline: "6",
    next_movie: ["어벤져스", "토르 : 다크월드"],
    character: [
      { man_name: "토르", char_name: "토르" },
      { man_name: "제인 포스터", char_name: "" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "오딘", char_name: "오딘" },
      { man_name: "셀빅 박사", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "클린트 바턴", char_name: "호크아이" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["space"],
  },
  {
    name_kr: "캡틴 아메리카 : 퍼스트어벤져",
    name_en: "Captain America : The First Avenger",
    launch_year: "2011",
    url: "https://www.youtube.com/watch?v=iQP2ZG6bxvo&t=1491s",
    img_poster: "img/캡틴아메리카1.jpg",
    phase: "1",
    timeline: "1",
    next_movie: ["토르 : 천둥의 신", "어벤져스", "캡틴 아메리카 : 윈터솔저"],
    character: [
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "요한 슈미트", char_name: "레드 스컬" },
      { man_name: "페기 카터", char_name: "" },
      { man_name: "버키 반즈", char_name: "" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
      { man_name: "졸라 박사", char_name: "" },
    ],
    stone: ["space"],
  },
  {
    name_kr: "어벤져스",
    name_en: "Avengers",
    launch_year: "2012",
    url: "https://www.youtube.com/watch?v=xjq5NDum_W0",
    img_poster: "img/어벤져스1.jpg",
    phase: "1",
    timeline: "7",
    next_movie: ["아이언맨3", "토르 : 다크월드", "캡틴 아메리카 : 윈터솔저"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "토르", char_name: "토르" },
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "클린트 바튼", char_name: "호크 아이" },
      { man_name: "닉퓨리", char_name: "" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "셀빅 박사", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["space", "mind"],
  },
  {
    name_kr: "아이언맨3",
    name_en: "Ironman3",
    launch_year: "2013",
    url: "https://www.youtube.com/watch?v=zrfxAYXoigs",
    img_poster: "img/아이언맨3.jpg",
    phase: "2",
    timeline: "9",
    next_movie: ["어벤져스 : 에이지 오브 울트론"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "제임스 로드", char_name: "워 머신" },
      { man_name: "알드리치 킬리언", char_name: "" },
      { man_name: "해피", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "토르 : 다크월드",
    name_en: "Thor : The Dark World",
    launch_year: "2013",
    url: "https://www.youtube.com/watch?v=w6uO3IHQ5f4",
    img_poster: "img/토르2.jpg",
    phase: "2",
    timeline: "8",
    next_movie: [
      "가디언즈 오브 갤럭시",
      "어벤져스 : 에이지 오브 울트론",
      "토르 : 라그나로크",
    ],
    character: [
      { man_name: "토르", char_name: "토르" },
      { man_name: "제인 포스터", char_name: "" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "오딘", char_name: "오딘" },
      { man_name: "말레키스", char_name: "말레키스" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "셀빅 박사", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["reality"],
  },
  {
    name_kr: "캡틴 아메리카 : 윈터솔저",
    name_en: "Captain America : The Winter Soldier",
    launch_year: "2014",
    url: "https://www.youtube.com/watch?v=p3LzFlAIbUk",
    img_poster: "img/캡틴아메리카2.jpg",
    phase: "2",
    timeline: "10",
    next_movie: ["어벤져스 : 에이지 오브 울트론", "캡틴 아메리카 : 시빌 워"],
    character: [
      { man_name: "스티븐 로저스", char_name: "캡틴 아메리카" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "버키 반즈", char_name: "윈터 솔져" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
      { man_name: "페기 카터", char_name: "" },
      { man_name: "졸라 박사", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
      { man_name: "완다 막시모프", char_name: "스칼렛 위치" },
      { man_name: "피에트로 막시모프", char_name: "퀵 실버" },
    ],
    stone: ["mind"],
  },
  {
    name_kr: "가디언즈 오브 갤럭시",
    name_en: "Guardians of the Galaxy",
    launch_year: "2014",
    url: "https://www.youtube.com/watch?v=oKkHGFMJ148",
    img_poster: "img/가오갤1.jpg",
    phase: "2",
    timeline: "11",
    next_movie: ["가디언즈 오브 갤럭시 VOL.2"],
    character: [
      { man_name: "피터 제이슨", char_name: "스타로드" },
      { man_name: "가모라", char_name: "가모라" },
      { man_name: "아서더글라스", char_name: "드랙스" },
      { man_name: "그루트", char_name: "그루트" },
      { man_name: "로켓", char_name: "로켓" },
      { man_name: "로난", char_name: "로난" },
      { man_name: "욘두", char_name: "욘두" },
      { man_name: "네뷸라", char_name: "네뷸라" },
      { man_name: "콜렉터", char_name: "콜렉터" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["reality", "power"],
  },
  {
    name_kr: "어벤져스 : 에이지 오브 울트론",
    name_en: "Avengers : Age of Ultron",
    launch_year: "2015",
    url: "https://www.youtube.com/watch?v=cslYu_VgDpM",
    img_poster: "img/어벤져스2.jpg",
    phase: "2",
    timeline: "13",
    next_movie: ["캡틴 아메리카 : 시빌 워", "토르 : 라그나로크"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "토르", char_name: "토르" },
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "클린트 바튼", char_name: "호크 아이" },
      { man_name: "제임스 로드", char_name: "워 머신" },
      { man_name: "닉퓨리", char_name: "" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "셀빅 박사", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
      { man_name: "울트론", char_name: "울트론" },
      { man_name: "완다 막시모프", char_name: "스칼렛 위치" },
      { man_name: "피에트로 막시모프", char_name: "퀵 실버" },
      { man_name: "셀빅 박사", char_name: "" },
      { man_name: "비젼", char_name: "비젼" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
    ],
    stone: ["mind"],
  },
  {
    name_kr: "앤트맨",
    name_en: "Ant-man",
    launch_year: "2015",
    url: "https://www.youtube.com/watch?v=FtT0s2eAwf0",
    img_poster: "img/앤트맨.jpg",
    phase: "2",
    timeline: "14",
    next_movie: ["캡틴 아메리카 : 시빌 워", "앤트맨과 와스프"],
    character: [
      { man_name: "스캇 랭", char_name: "앤트맨" },
      { man_name: "행크 핌 박사", char_name: "" },
      { man_name: "호프 반 다인", char_name: "" },
      { man_name: "대런 크로스", char_name: "옐로우 자켓" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
      { man_name: "페기 카터", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "캡틴 아메리카 : 시빌 워",
    name_en: "Captain America : Civil War",
    launch_year: "2016",
    url: "https://www.youtube.com/watch?v=WihKgBdcKh8",
    img_poster: "img/캡틴아메리카3.jpg",
    phase: "3",
    timeline: "15",
    next_movie: [
      "어벤져스 : 인피니티 워",
      "블랙위도우",
      "스파이더맨 : 홈커밍",
      "앤트맨과 와스프",
      "블랙 팬서",
    ],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "클린트 바튼", char_name: "호크 아이" },
      { man_name: "스탠 리", char_name: "" },
      { man_name: "썬더볼트 장군", char_name: "" },
      { man_name: "완다 막시모프", char_name: "스칼렛 위치" },
      { man_name: "버키 반즈", char_name: "윈터 솔져" },
      { man_name: "제임스 로드", char_name: "워 머신" },
      { man_name: "비젼", char_name: "비젼" },
      { man_name: "제모 남작", char_name: "제모 남작" },
      { man_name: "스캇 랭", char_name: "앤트맨" },
      { man_name: "티 찰라", char_name: "블랙 팬서" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
      { man_name: "피터 파커", char_name: "스파이더맨" },
    ],
    stone: ["mind"],
  },
  {
    name_kr: "닥터 스트레인지",
    name_en: "Doctor Strange",
    launch_year: "2016",
    url: "https://www.youtube.com/watch?v=2ojyCukJOjw",
    img_poster: "img/닥터스트레인지.jpg",
    phase: "3",
    timeline: "18",
    next_movie: ["토르 : 라그나로크", "어벤져스 : 인피니티 워"],
    character: [
      { man_name: "닥터 스트레인지", char_name: "닥터 스트레인지" },
      { man_name: "에인션트 원", char_name: "에인션트 원" },
      { man_name: "케실리우스", char_name: "케실리우스" },
      { man_name: "모르도 남작", char_name: "모르도 남작" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["time"],
  },
  {
    name_kr: "가디언즈 오브 갤럭시 VOL.2",
    name_en: "Guardians of the Galaxy Vol. 2",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=oKkHGFMJ148",
    img_poster: "img/가오갤2.jpg",
    phase: "3",
    timeline: "12",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "피터 제이슨", char_name: "스타로드" },
      { man_name: "가모라", char_name: "가모라" },
      { man_name: "아서더글라스", char_name: "드랙스" },
      { man_name: "그루트", char_name: "그루트" },
      { man_name: "로켓", char_name: "로켓" },
      { man_name: "맨티스", char_name: "맨티스" },
      { man_name: "에고", char_name: "에고" },
      { man_name: "욘두", char_name: "욘두" },
      { man_name: "네뷸라", char_name: "네뷸라" },
      { man_name: "콜렉터", char_name: "콜렉터" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "스파이더맨 : 홈커밍",
    name_en: "Spider-Man : Homecoming",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=mO168Yp2IF0",
    img_poster: "img/스파이더맨_홈커밍.jpg",
    phase: "3",
    timeline: "19",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "피터 파커", char_name: "스파이더맨" },
      { man_name: "아드리안 툼즈", char_name: "벌쳐" },
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "해피", char_name: "" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "미쉘 존스", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "토르 : 라그나로크",
    name_en: "Thor : Ragnarok",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=18Ns_yUlkb4",
    img_poster: "img/토르3.png",
    phase: "3",
    timeline: "20",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "토르", char_name: "토르" },
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "오딘", char_name: "오딘" },
      { man_name: "헬라", char_name: "헬라" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "발키리", char_name: "발키리" },
      { man_name: "닥터 스트레인지", char_name: "닥터 스트레인지" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "블랙 팬서",
    name_en: "Black Panther",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=Kxi3AE7Nf5A",
    img_poster: "img/블랙팬서.jpg",
    phase: "3",
    timeline: "17",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "티 찰라", char_name: "블랙 팬서" },
      { man_name: "에릭 몽거", char_name: "" },
      { man_name: "슈리", char_name: "" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "어벤져스 : 인피니티 워",
    name_en: "Avengers : Infinity War",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=ksZR8xjGuBA",
    img_poster: "img/어벤져스3.jpg",
    phase: "3",
    timeline: "22",
    next_movie: ["어벤져스 : 엔드게임"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "토르", char_name: "토르" },
      { man_name: "타노스", char_name: "타노스" },
      { man_name: "닥터 스트레인지", char_name: "닥터 스트레인지" },
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "클린트 바튼", char_name: "호크 아이" },
      { man_name: "피터 파커", char_name: "스파이더맨" },
      { man_name: "닉퓨리", char_name: "" },
      { man_name: "티 찰라", char_name: "블랙 팬서" },
      { man_name: "버키 반즈", char_name: "윈터 솔져" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "슈리", char_name: "" },
      { man_name: "완다 막시모프", char_name: "스칼렛 위치" },
      { man_name: "비젼", char_name: "비젼" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
      { man_name: "제임스 로드", char_name: "워 머신" },

      { man_name: "피터 제이슨", char_name: "스타로드" },
      { man_name: "가모라", char_name: "가모라" },
      { man_name: "아서더글라스", char_name: "드랙스" },
      { man_name: "그루트", char_name: "그루트" },
      { man_name: "로켓", char_name: "로켓" },
      { man_name: "맨티스", char_name: "맨티스" },
      { man_name: "네뷸라", char_name: "네뷸라" },
      { man_name: "콜렉터", char_name: "콜렉터" },
      { man_name: "에이트리", char_name: "에이트리" },

      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["space", "mind", "power", "time", "soul", "reality"],
  },
  {
    name_kr: "앤트맨과 와스프",
    name_en: "Ant-Man and the Wasp",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=DuwQio1nXwY",
    img_poster: "img/앤트맨과 와스프.jpg",
    phase: "3",
    timeline: "21",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "스캇 랭", char_name: "앤트맨" },
      { man_name: "호프 반 다인", char_name: "와스프" },
      { man_name: "행크 핌 박사", char_name: "" },
      { man_name: "재닛 반 다인", char_name: "" },
      { man_name: "에이바", char_name: "고스트" },
      { man_name: "스탠 리", char_name: "" },
    ],
    stone: [],
  },
  {
    name_kr: "캡틴 마블",
    name_en: "Captain Marvel",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=VXZmea13-V0",
    img_poster: "img/캡틴마블.jpg",
    phase: "3",
    timeline: "2",
    next_movie: ["어벤져스 : 엔드게임"],
    character: [
      { man_name: "캐럴 댄버스", char_name: "캡틴 마블" },
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "필 콜슨 요원", char_name: "" },
      { man_name: "로난", char_name: "로난" },
    ],
    stone: ["space"],
  },
  {
    name_kr: "어벤져스 : 엔드게임",
    name_en: "Avengers : Endgame",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=dNB_QMbwFWE",
    img_poster: "img/어벤져스4.jpg",
    phase: "3",
    timeline: "23",
    next_movie: ["스파이더맨 : 파 프롬 홈"],
    character: [
      { man_name: "토니 스타크", char_name: "아이언맨" },
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "토르", char_name: "토르" },
      { man_name: "타노스", char_name: "타노스" },
      { man_name: "닥터 스트레인지", char_name: "닥터 스트레인지" },
      { man_name: "스티브 로저스", char_name: "캡틴 아메리카" },
      { man_name: "브루스 배너", char_name: "헐크" },
      { man_name: "클린트 바튼", char_name: "호크 아이" },
      { man_name: "피터 파커", char_name: "스파이더맨" },
      { man_name: "닉퓨리", char_name: "" },
      { man_name: "티 찰라", char_name: "블랙 팬서" },
      { man_name: "로키", char_name: "로키" },
      { man_name: "페퍼 포츠", char_name: "" },
      { man_name: "슈리", char_name: "" },
      { man_name: "완다 막시모프", char_name: "스칼렛 위치" },
      { man_name: "비젼", char_name: "비젼" },
      { man_name: "헤임달", char_name: "헤임달" },
      { man_name: "샘 윌슨", char_name: "팔콘" },
      { man_name: "제임스 로드", char_name: "워 머신" },
      { man_name: "버키 반즈", char_name: "윈터 솔져" },

      { man_name: "피터 제이슨", char_name: "스타로드" },
      { man_name: "가모라", char_name: "가모라" },
      { man_name: "아서더글라스", char_name: "드랙스" },
      { man_name: "그루트", char_name: "그루트" },
      { man_name: "로켓", char_name: "로켓" },
      { man_name: "맨티스", char_name: "맨티스" },
      { man_name: "네뷸라", char_name: "네뷸라" },
      { man_name: "콜렉터", char_name: "콜렉터" },
      { man_name: "에이트리", char_name: "에이트리" },

      { man_name: "캐럴 댄버스", char_name: "캡틴 마블" },
      { man_name: "발키리", char_name: "발키리" },
      { man_name: "호프 반 다인", char_name: "와스프" },
      { man_name: "에인션트 원", char_name: "에인션트 원" },
      { man_name: "페기카터", char_name: "" },
      { man_name: "행크 핌 박사", char_name: "" },
      { man_name: "해피", char_name: "" },
      { man_name: "제인 포스터", char_name: "" },

      { man_name: "스탠 리", char_name: "" },
    ],
    stone: ["space", "mind", "power", "time", "soul", "reality"],
  },
  {
    name_kr: "스파이더맨 : 파 프롬 홈",
    name_en: "Spider-Man : Far From Home",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=zsehQ83TtjI",
    img_poster: "img/스파이더맨_파프롬홈.jpg",
    phase: "3",
    timeline: "24",
    next_movie: [],
    character: [
      { man_name: "닉 퓨리", char_name: "" },
      { man_name: "피터 파커", char_name: "스파이더맨" },
      { man_name: "해피", char_name: "" },
      { man_name: "미쉘 존스", char_name: "" },
      { man_name: "퀜틴 벡", char_name: "미스테리오" },
      { man_name: "J. 조너 제임슨", char_name: "편집장" },
    ],
    stone: [],
  },
  {
    name_kr: "블랙위도우",
    name_en: "Black Widow",
    launch_year: "2021",
    url: "",
    img_poster: "img/블랙위도우.jpg",
    phase: "4",
    timeline: "16",
    next_movie: ["어벤져스 : 인피니티 워"],
    character: [
      { man_name: "나타샤 로마노프", char_name: "블랙 위도우" },
      { man_name: "옐레나 벨로바", char_name: "" },
      { man_name: "멜리나 보스토코프", char_name: "" },
      { man_name: "알렉세이 쇼스타코프", char_name: "레드 가디언" },
    ],
    stone: [],
  },
];

// 페이즈 div 지정
const order_launch_p = [
  document.querySelector("#order_launch .phase:first-child .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(2) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(3) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(4) .phase_movie"),
];

// 시간순 div 지정
const order_time = document.querySelector(
  "#order_time .phase:first-child .phase_movie"
);

// 시간순배열 생성
const movies_time = [];

for (let t = 0; t < movies_launch.length; t++) {
  for (let l = 0; l < movies_launch.length; l++) {
    if (String(t + 1) === movies_launch[l].timeline) {
      movies_time.push(movies_launch[l]);
    }
  }
}
// 함수 생성
function f_div_movie(div_movie) {
  div_movie.classList.add("eachMovie");
  div_movie.style.width = "150px";
  div_movie.style.display = "flex";
  div_movie.style.flexDirection = "column";
  div_movie.style.alignItems = "center";
  div_movie.style.paddingBottom = "10px";
}

function f_img_movie(img_movie, i, array) {
  img_movie.src = array[i].img_poster;
  img_movie.style.width = "100px";
  img_movie.style.height = "150px";
}

function f_a_title(a_title, i, array) {
  a_title.href = array[i].url;
  a_title.rel = "noreferrer";
  a_title.target = "_blank";
  a_title.style.textAlign = "center";
}

function createDivEach(array, index) {
  const div_movie = document.createElement("div");
  const div_title = document.createElement("div");
  const img_movie = document.createElement("img");
  const a_img = document.createElement("a");
  const a_title = document.createElement("a");
  const returnArray = [div_movie, a_img, a_title];

  f_div_movie(div_movie);
  f_img_movie(img_movie, index, array);

  a_title.innerText = `${array[index].name_kr}(${array[index].name_en}) - ${array[index].launch_year}`;

  a_img.appendChild(img_movie);
  div_movie.appendChild(a_img);
  div_title.appendChild(a_title);
  div_movie.appendChild(div_title);

  return returnArray;
}

// 개봉순 정렬
for (let p = 0; p < 4; p++) {
  for (let i = 0; i < movies_launch.length; i++) {
    const return_launch = createDivEach(movies_launch, i);
    f_a_title(return_launch[1], i, movies_launch);
    f_a_title(return_launch[2], i, movies_launch);
    if (String(p + 1) === movies_launch[i].phase) {
      order_launch_p[p].appendChild(return_launch[0]);
    }
  }
}

// 타임라인순 정렬
for (let il = 0; il < movies_time.length; il++) {
  const return_time = createDivEach(movies_time, il);
  f_a_title(return_time[1], il, movies_time);
  f_a_title(return_time[2], il, movies_time);
  order_time.appendChild(return_time[0]);
}
