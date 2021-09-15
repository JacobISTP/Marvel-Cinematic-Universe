const characters_raw = [
  {
    man_name: "토니 스타크",
    char_name: "아이언맨",
    img: "img/character/수정본/아이언맨.jpg",
  },
  {
    man_name: "제임스 로드",
    char_name: "워 머신",
    img: "img/character/수정본/워 머신.jpg",
  },
  {
    man_name: "오베디아 스탠",
    char_name: "",
    img: "img/character/수정본/오베디아 스탠.jpg",
  },
  {
    man_name: "페퍼 포츠",
    char_name: "",
    img: "img/character/수정본/페퍼 포츠.jpg",
  },
  {
    man_name: "필 콜슨 요원",
    char_name: "",
    img: "img/character/수정본/필 콜슨 요원.jpg",
  },
  {
    man_name: "닉 퓨리",
    char_name: "",
    img: "img/character/수정본/닉 퓨리.jpg",
  },
  { man_name: "해피", char_name: "", img: "img/character/수정본/해피.jpg" },
  {
    man_name: "스탠 리",
    char_name: "",
    img: "img/character/수정본/스탠 리.jpg",
  },
  {
    man_name: "브루스 배너",
    char_name: "헐크",
    img: "img/character/수정본/헐크.jpg",
  },
  {
    man_name: "로스 장군",
    char_name: "",
    img: "img/character/수정본/로스 장군.jpg",
  },
  {
    man_name: "에밀 브론스키",
    char_name: "어보미네이션",
    img: "img/character/수정본/어보미네이션.jpg",
  },
  {
    man_name: "나타샤 로마노프",
    char_name: "블랙 위도우",
    img: "img/character/수정본/나타샤 로마노프.jpg",
  },
  {
    man_name: "이안 반코",
    char_name: "위플래시",
    img: "img/character/수정본/이안 반코.jpg",
  },
  {
    man_name: "토르",
    char_name: "토르",
    img: "img/character/수정본/토르.jpg",
  },
  {
    man_name: "제인 포스터",
    char_name: "",
    img: "img/character/수정본/제인 포스터.jpg",
  },
  {
    man_name: "로키",
    char_name: "로키",
    img: "img/character/수정본/로키.jpg",
  },
  {
    man_name: "오딘",
    char_name: "오딘",
    img: "img/character/수정본/오딘.jpg",
  },
  {
    man_name: "셀빅 박사",
    char_name: "",
    img: "img/character/수정본/셀빅 박사.jpg",
  },
  {
    man_name: "헤임달",
    char_name: "헤임달",
    img: "img/character/수정본/헤임달.jpg",
  },
  {
    man_name: "클린트 바튼",
    char_name: "호크아이",
    img: "img/character/수정본/클린트 바튼.jpg",
  },
  {
    man_name: "스티브 로저스",
    char_name: "캡틴 아메리카",
    img: "img/character/수정본/캡틴아메리카.jpg",
  },
  {
    man_name: "요한 슈미트",
    char_name: "레드 스컬",
    img: "img/character/수정본/레드 스컬.jpg",
  },
  {
    man_name: "페기 카터",
    char_name: "",
    img: "img/character/수정본/페기 카터.jpg",
  },
  {
    man_name: "버키 반즈",
    char_name: "윈터 솔져",
    img: "img/character/수정본/윈터 솔져.jpg",
  },
  {
    man_name: "졸라 박사",
    char_name: "",
    img: "img/character/수정본/졸라 박사.jpg",
  },
  {
    man_name: "알드리치 킬리언",
    char_name: "",
    img: "img/character/수정본/킬리언.jpg",
  },
  {
    man_name: "말레키스",
    char_name: "말레키스",
    img: "img/character/수정본/말레키스.jpg",
  },
  {
    man_name: "샘 윌슨",
    char_name: "팔콘",
    img: "img/character/수정본/팔콘.jpg",
  },
  {
    man_name: "완다 막시모프",
    char_name: "스칼렛 위치",
    img: "img/character/수정본/스칼렛 위치.jpg",
  },
  {
    man_name: "피에트로 막시모프",
    char_name: "퀵 실버",
    img: "img/character/수정본/퀵 실버.jpg",
  },
  {
    man_name: "샤론 카터",
    char_name: "",
    img: "img/character/수정본/샤론 카터.jpg",
  },
  {
    man_name: "피터 제이슨",
    char_name: "스타로드",
    img: "img/character/수정본/스타로드.jpg",
  },
  {
    man_name: "가모라",
    char_name: "가모라",
    img: "img/character/수정본/가모라.jpg",
  },
  {
    man_name: "아서더글라스",
    char_name: "드랙스",
    img: "img/character/수정본/드랙스.jpg",
  },
  {
    man_name: "그루트",
    char_name: "그루트",
    img: "img/character/수정본/그루트.jpg",
  },
  {
    man_name: "로켓",
    char_name: "로켓",
    img: "img/character/수정본/로켓.jpg",
  },
  {
    man_name: "로난",
    char_name: "로난",
    img: "img/character/수정본/로난.jpg",
  },
  {
    man_name: "욘두",
    char_name: "욘두",
    img: "img/character/수정본/욘두.jpg",
  },
  {
    man_name: "네뷸라",
    char_name: "네뷸라",
    img: "img/character/수정본/네뷸라.jpg",
  },
  {
    man_name: "콜렉터",
    char_name: "콜렉터",
    img: "img/character/수정본/콜렉터.jpg",
  },
  {
    man_name: "울트론",
    char_name: "울트론",
    img: "img/character/수정본/울트론.jpg",
  },
  {
    man_name: "비젼",
    char_name: "비젼",
    img: "img/character/수정본/비젼.jpg",
  },
  {
    man_name: "스캇 랭",
    char_name: "앤트맨",
    img: "img/character/수정본/앤트맨.jpg",
  },
  {
    man_name: "행크 핌 박사",
    char_name: "",
    img: "img/character/수정본/행크 핌 박사.jpg",
  },
  {
    man_name: "호프 반 다인",
    char_name: "와스프",
    img: "img/character/수정본/와스프.jpg",
  },
  {
    man_name: "대런 크로스",
    char_name: "옐로우 자켓",
    img: "img/character/수정본/옐로우 자켓.jpg",
  },
  {
    man_name: "제모 남작",
    char_name: "제모 남작",
    img: "img/character/수정본/제모 남작.jpg",
  },
  {
    man_name: "티 찰라",
    char_name: "블랙 팬서",
    img: "img/character/수정본/티 찰라.jpg",
  },
  {
    man_name: "피터 파커",
    char_name: "스파이더맨",
    img: "img/character/수정본/스파이더맨.jpg",
  },
  {
    man_name: "스티븐 스트레인지",
    char_name: "닥터 스트레인지",
    img: "img/character/수정본/닥터 스트레인지.jpg",
  },
  {
    man_name: "에인션트 원",
    char_name: "에인션트 원",
    img: "img/character/수정본/에인션트 원.png",
  },
  {
    man_name: "케실리우스",
    char_name: "케실리우스",
    img: "img/character/수정본/케실리우스.jpg",
  },
  {
    man_name: "모르도 남작",
    char_name: "모르도 남작",
    img: "img/character/수정본/모르도 남작.jpg",
  },
  {
    man_name: "도르마무",
    char_name: "도르마무",
    img: "img/character/수정본/도르마무.jpg",
  },
  {
    man_name: "맨티스",
    char_name: "맨티스",
    img: "img/character/수정본/맨티스.jpg",
  },
  {
    man_name: "에고",
    char_name: "에고",
    img: "img/character/수정본/에고.jpg",
  },
  {
    man_name: "아드리안 툼즈",
    char_name: "벌쳐",
    img: "img/character/수정본/벌쳐.jpg",
  },
  {
    man_name: "미쉘 존스",
    char_name: "",
    img: "img/character/수정본/미쉘 존스.jpg",
  },
  {
    man_name: "헬라",
    char_name: "헬라",
    img: "img/character/수정본/헬라.jpg",
  },
  {
    man_name: "발키리",
    char_name: "발키리",
    img: "img/character/수정본/발키리.jpg",
  },
  {
    man_name: "에릭 몽거",
    char_name: "",
    img: "img/character/수정본/에릭 몽거.jpg",
  },
  { man_name: "슈리", char_name: "", img: "img/character/수정본/슈리.jpg" },
  {
    man_name: "타노스",
    char_name: "타노스",
    img: "img/character/수정본/타노스.jpg",
  },
  {
    man_name: "에이트리",
    char_name: "에이트리",
    img: "img/character/수정본/에이트리.jpg",
  },
  {
    man_name: "재닛 반 다인",
    char_name: "",
    img: "img/character/수정본/재닛 반 다인.jpg",
  },
  {
    man_name: "에이바",
    char_name: "고스트",
    img: "img/character/수정본/고스트.jpg",
  },
  {
    man_name: "캐럴 댄버스",
    char_name: "캡틴 마블",
    img: "img/character/수정본/캡틴 마블.jpg",
  },
  {
    man_name: "페기 카터",
    char_name: "",
    img: "img/character/수정본/페기 카터.jpg",
  },
  {
    man_name: "퀜틴 벡",
    char_name: "미스테리오",
    img: "img/character/수정본/미스테리오.jpg",
  },
  {
    man_name: "J. 조너 제임슨",
    char_name: "편집장",
    img: "img/character/수정본/편집장.jpg",
  },
  {
    man_name: "옐레나 벨로바",
    char_name: "",
    img: "img/character/수정본/옐레나 벨로바.jpg",
  },
  {
    man_name: "멜리나 보스토코프",
    char_name: "",
    img: "img/character/수정본/멜리나 보스토코프.jpg",
  },
  {
    man_name: "알렉세이 쇼스타코프",
    char_name: "레드 가디언",
    img: "img/character/수정본/알렉세이 쇼스타코프.jpg",
  },
  {
    man_name: "에디 브록",
    char_name: "베놈",
    img: "img/character/수정본/베놈.jpg",
  },
  {
    man_name: "피터 파커1",
    char_name: "스파이더맨1",
    img: "img/character/수정본/스파이더맨1.jpg",
  },
  {
    man_name: "피터 파커2",
    char_name: "스파이더맨2",
    img: "img/character/수정본/스파이더맨22.jpg",
  },
  {
    man_name: "노먼 오스본",
    char_name: "그린 고블린",
    img: "img/character/수정본/그린 고블린.jpg",
  },
  {
    man_name: "메리 제인1",
    char_name: "",
    img: "img/character/수정본/메리 제인1.jpg",
  },
  {
    man_name: "닥터 옥타비우스",
    char_name: "닥터 옥타비우스",
    img: "img/character/수정본/닥터 옥타비우스.jpg",
  },
  {
    man_name: "플린트 마코",
    char_name: "샌드맨",
    img: "img/character/수정본/샌드맨.jpg",
  },
  {
    man_name: "커트 코너스 박사",
    char_name: "리자드",
    img: "img/character/수정본/리자드.jpg",
  },
  {
    man_name: "맥스 딜런",
    char_name: "일렉트로",
    img: "img/character/수정본/일렉트로.jpg",
  },
  {
    man_name: "그웬 스테이시2",
    char_name: "",
    img: "img/character/수정본/그웬 스테이시2.jpg",
  },
];

const characters = [];
let name_chars = [];

for (let c = 0; c < characters_raw.length - 1; c++) {
  name_chars.push(characters_raw[c]["man_name"]);
}
name_chars.sort();
console.log(name_chars);

for (let cn = 0; cn < name_chars.length; cn++) {
  for (let cr = 0; cr < characters_raw.length; cr++) {
    if (name_chars[cn] === characters_raw[cr]["man_name"]) {
      characters.push(characters_raw[cr]);
    }
  }
}
// console.log(characters);
