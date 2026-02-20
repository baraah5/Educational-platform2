const sec1 = document.querySelector(".js.sec2");
const lects = document.querySelector(".js.sec4");

import { coursesData } from "./main.js";
import { siteLang } from "./main.js";

const COURSE_PROGRESS_KEY = "lecturesDoneByCourse";
const SELECTED_COURSE_KEY = "selectedCourseId";

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
    const item = `<div class="m-3" data-id="${lect.id}">
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

  doneItems.forEach((el) => {
    if (lecturesDone.includes(el.dataset.id)) {
      el.classList.add("is-active");
      const check = el.querySelector(".check");
      if (check) {
        check.children[0].classList.toggle("d-none");
        check.children[1].classList.toggle("d-none");
      }
    }

    el.onclick = () => {
      const lectureId = el.dataset.id;
      if (!lectureId) {
        return;
      }

      el.classList.toggle("is-active");

      if (el.classList.contains("is-active")) {
        if (!lecturesDone.includes(lectureId)) {
          lecturesDone.push(lectureId);
        }
      } else {
        lecturesDone = lecturesDone.filter((id) => id !== lectureId);
      }

      saveCourseProgress(courseSelected.id, lecturesDone);
      updateProgressUi();

      const check = el.querySelector(".check");
      if (check) {
        check.children[0].classList.toggle("d-none");
        check.children[1].classList.toggle("d-none");
      }
    };
  });

  updateProgressUi();
}
