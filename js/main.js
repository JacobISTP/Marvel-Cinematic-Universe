"use strict";

// 시간순 div 지정
const order_time = document.querySelector(
  "#order_time .phase:first-child .phase_movie"
);

// 개봉예정 div 지정
const order_schedule = document.querySelector(
  "#order_schedule .phase:first-child .phase_movie"
);

// 페이즈 div 지정
const order_launch_p = [
  document.querySelector("#order_launch .phase:first-child .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(2) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(3) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(4) .phase_movie"),
];

// 개봉순 정렬
for (let p = 0; p < 4; p++) {
  if (order_launch_p[p] != null) {
    for (let i = 0; i < movies_launch.length; i++) {
      const return_launch = createDivEach(movies_launch, i);
      f_a_title(return_launch[1], i, movies_launch);
      f_a_title(return_launch[2], i, movies_launch);
      if (String(p + 1) === movies_launch[i].phase) {
        order_launch_p[p].appendChild(return_launch[0]);
      }
    }
  }
}

// 타임라인순 정렬
for (let il = 0; il < movies_time.length; il++) {
  if (order_time != null) {
    const return_time = createDivEach(movies_time, il);
    f_a_title(return_time[1], il, movies_time);
    f_a_title(return_time[2], il, movies_time);
    order_time.appendChild(return_time[0]);
  }
}

// 개봉예정작
for (let il = 0; il < movies_schedule.length; il++) {
  if (order_schedule != null) {
    const return_schedule = createDivEach(movies_schedule, il);
    f_a_title(return_schedule[1], il, movies_schedule);
    f_a_title(return_schedule[2], il, movies_schedule);
    order_schedule.appendChild(return_schedule[0]);
  }
}
