const sec1 = document.querySelector(".js.sec2");
const lects = document.querySelector(".jssec4");

import { coursesData } from "./main.js";
import { siteLang } from "./main.js";

const COURSE_PROGRESS_KEY = "lecturesDoneByCourse";
const SELECTED_COURSE_KEY = "selectedCourseId";


function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) {
    console.log("YT already loaded");
    return;
  }

  const existingScript = document.querySelector(
    'script[src="https://www.youtube.com/iframe_api"]'
  );

  if (existingScript) return;

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
}



// function getVideoId(url) {
//   const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
//   const match = url.match(regExp);
//   return match ? match[1] : null;
// }

// function getVideoId(url) {
//   const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
//   const match = url.match(regExp);
//   return match ? match[1] : null;
// }

// // let player;
// // let isPlayerReady = false;

// // window.onYouTubeIframeAPIReady = function () {
// //   player = new YT.Player("player", {
// //     videoId: "M7lc1UVf-VE",
// //     events: {
// //       onReady: function () {
// //         isPlayerReady = true;
// //         console.log("Player جاهز");
// //       }
// //     }
// //   });
// // };

// let player;
// let isPlayerReady = false;

// window.onYouTubeIframeAPIReady = function () {
//   player = new YT.Player("player", {
//     videoId: "M7lc1UVf-VE",
//     events: {
//       onReady: function () {
//         isPlayerReady = true;
//         console.log("Player جاهز ✅");
//       }
//     }
//   });
// };

let player;
let isPlayerReady = false;

function resizePlayer() {
  const playerContainer = document.getElementById("player");
  if (!playerContainer || !player || typeof player.setSize !== "function") {
    return;
  }

  const width = playerContainer.clientWidth;
  const height = Math.round((width * 9) / 16);
  player.setSize(width, height);
}

// دالة استخراج videoId
function getVideoId(url) {
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// 🌟 جعل الدالة global
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player("player", {
    // videoId: "M7lc1UVf-VE", // الفيديو الافتراضي
    events: {
      onReady: function() {
        isPlayerReady = true;
        resizePlayer();
        console.log("Player جاهز ✅");
      }
    }
  });
};


loadYouTubeAPI();
window.addEventListener("resize", resizePlayer);


function getLocalizedValue(value, lang) {
  if (value && typeof value === "object") {
    const preferred = value[lang];
    if (typeof preferred === "string" && preferred.trim() !== "") {
      return preferred;
    }
    const fallbackAr = value.ar;
    if (typeof fallbackAr === "string" && fallbackAr.trim() !== "") {
      return fallbackAr;
    }
    const fallbackEn = value.en;
    if (typeof fallbackEn === "string" && fallbackEn.trim() !== "") {
      return fallbackEn;
    }
    return "";
  }
  return value ?? "";
}

function getStoredProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(COURSE_PROGRESS_KEY));
    return raw && typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}

function getCourseProgress(courseId) {
  const progress = getStoredProgress();
  return Array.isArray(progress[courseId]) ? progress[courseId] : [];
}

function saveCourseProgress(courseId, doneLectureIds) {
  const progress = getStoredProgress();
  progress[courseId] = doneLectureIds;
  localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress));
}

function resolveSelectedCourse() {
  const params = new URLSearchParams(window.location.search);
  const selectedFromQuery = params.get("course");
  const selectedId = selectedFromQuery || localStorage.getItem(SELECTED_COURSE_KEY);

  if (selectedFromQuery) {
    localStorage.setItem(SELECTED_COURSE_KEY, selectedFromQuery);
  }

  return coursesData.find((course) => course.id === selectedId) ?? coursesData[0] ?? null;
}

export function reset() {
  if (!sec1 || !lects) {
    return;
  }

  const courseSelected = resolveSelectedCourse();
  if (!courseSelected) {
    return;
  }

  const courseLectures = Array.isArray(courseSelected.lectures) ? courseSelected.lectures : [];
  if (courseLectures.length === 0) {
    return;
  }

  sec1.innerHTML = "";
  lects.innerHTML = "";

  localStorage.setItem(SELECTED_COURSE_KEY, courseSelected.id);

  const courseTitle = getLocalizedValue(courseSelected.title ?? courseSelected.name, siteLang);
  const courseLevel = getLocalizedValue(courseSelected.level ?? courseSelected.li1, siteLang);
  const courseSemester = getLocalizedValue(courseSelected.semester ?? courseSelected.li2, siteLang);
  const courseDescription = getLocalizedValue(courseSelected.description, siteLang);

  const headerMarkup = `<div>
    <ul class="list-inline mx-2 mx-md-5 pb-3 d-flex  flex-nowrap">
      <li class="bold list-inline-item"><a data-i18n="CoursePresentationn.breadcrumb1" href="#">${getLocalizedValue(courseSelected.idName, siteLang)}</a></li>
      <li class="bold list-inline-item"><a data-i18n="CoursePresentationn.breadcrumb2" href="#">${courseLevel}</a></li>
      <li class="bold list-inline-item"><a data-i18n="CoursePresentationn.breadcrumb3" href="#">${courseSemester}</a></li>
    </ul>
    <h1 data-i18n="CoursePresentationn.title" class="bold mx-5 my-4 p-2">${courseTitle}</h1>
    <p data-i18n="CoursePresentationn.desc" class="f-20 mx-5 px-2">${courseDescription}</p>
  </div>`;

  sec1.insertAdjacentHTML("beforeend", headerMarkup);

  let num = 0;
  courseLectures.forEach((lect) => {
    num += 1;
    const item = `<div class="m-3" data-id=${lect.id} data-href=${lect.videoURL}>
      <div class="lects">
        <div class="row align-items-center">
          <div class="col-lg-1 col-2 text-center">
            <div class="num">
              <p class="py-2 mb-0">${num}</p>
            </div>
          </div>
          <div class="col-lg-10 col-8">
            <div class="par">
              <p class="mb-0">${getLocalizedValue(lect.title, siteLang)}</p>
            </div>
          </div>
          <div class="col-lg-1 col-2">
            <div class="check">
              <p class="mb-0"></p>
              <div class="d-none"><i class="fa-regular fa-circle-check f-27"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    lects.insertAdjacentHTML("beforeend", item);
  });

  const doneItems = Array.from(document.querySelectorAll(".sec4 .m-3"));
  const viewedBar = document.querySelector(".sec3 .done");
  const viewedCount = document.querySelector(".cont .view-count");
  const viewedPercent = document.querySelector(".sec3 p span");

  const validLectureIds = new Set(doneItems.map((el) => el.dataset.id));
  let lecturesDone = getCourseProgress(courseSelected.id).filter((id) => validLectureIds.has(id));
  saveCourseProgress(courseSelected.id, lecturesDone);

  function updateProgressUi() {
    const length = doneItems.length;
    const viewed = lecturesDone.length;
    const percent = length > 0 ? Math.ceil((viewed / length) * 100) : 0;

    if (viewedCount) {
      viewedCount.textContent = `${viewed}/${length}`;
    }
    if (viewedPercent) {
      viewedPercent.textContent = `${percent}`;
    }
    if (viewedBar) {
      viewedBar.style.width = `${percent}%`;
    }
  }

  function setLectureState(el, isDone) {
    const check = el.querySelector(".check");

    if (isDone) {
      el.classList.add("is-active");
    } else {
      el.classList.remove("is-active");
    }

    if (check) {
      check.children[0].classList.toggle("d-none", isDone);
      check.children[1].classList.toggle("d-none", !isDone);
    }
  }

  doneItems.forEach((el) => {
    const lectureId = el.dataset.id;
    const check = el.querySelector(".check");
    setLectureState(el, Boolean(lectureId && lecturesDone.includes(lectureId)));

    el.onclick = () => {
      if (!lectureId) {
        return;
      }

      if (lecturesDone.includes(lectureId)) {
        return;
      }

      const play = document.getElementById("player")
      console.log(play.classList);
      play.classList.remove("d-none")

      // const videoId = el.dataset.href;
      // console.log(videoId);
      // player.loadVideoById(videoId);

     const url = el.dataset.href;
    const videoId = getVideoId(url);
    console.log("Video ID:", videoId);

    if (isPlayerReady && player) {
      player.loadVideoById(videoId);
      resizePlayer();
      console.log("Video loaded ✅");
    } else {
      console.log("Player not ready yet ❌");
    }

      lecturesDone.push(lectureId);
      setLectureState(el, true);
      saveCourseProgress(courseSelected.id, lecturesDone);
      updateProgressUi();
    };

    if (check) {
      check.onclick = (event) => {
        event.stopPropagation();

        if (!lecturesDone.includes(lectureId)) {
          return;
        }

        lecturesDone = lecturesDone.filter((id) => id !== lectureId);
        setLectureState(el, false);
        saveCourseProgress(courseSelected.id, lecturesDone);
        updateProgressUi();
      };
      check.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          check.click();
        }
      };

      if (!check.hasAttribute("tabindex")) {
        check.setAttribute("tabindex", "0");
      }
      if (!check.hasAttribute("role")) {
        check.setAttribute("role", "button");
      }
      check.setAttribute("aria-label", "Mark lecture as not attended");
    }
  });

  updateProgressUi();
}


