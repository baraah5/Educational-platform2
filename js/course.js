const courses = document.querySelector(".sec2 .courses")



import { coursesData } from "./main.js"
import { siteLang } from "./main.js"
const SELECTED_COURSE_KEY = "selectedCourseId";
const LEVEL_PATTERNS = [
  { code: "level1", patterns: [/first level/i, /المستوى\s*الأول/, /المستوى\s*الاول/] },
  { code: "level2", patterns: [/second level/i, /المستوى\s*الثاني/] },
  { code: "level3", patterns: [/third level/i, /المستوى\s*الثالث/] },
  { code: "level4", patterns: [/fourth level/i, /المستوى\s*الرابع/] },
  { code: "level5", patterns: [/fifth level/i, /المستوى\s*الخامس/] },
];
const SEMESTER_PATTERNS = [
  { code: "season1", patterns: [/first semester/i, /الفصل\s*الأول/, /الفصل\s*الاول/] },
  { code: "season2", patterns: [/second semester/i, /الفصل\s*الثاني/] },
];

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

function getValueCandidates(value) {
  if (value && typeof value === "object") {
    return [value.ar, value.en].filter(Boolean);
  }
  return [value].filter(Boolean);
}

function inferCode(candidates, dictionary, fallback) {
  for (const candidate of candidates) {
    const text = String(candidate).trim();
    if (!text) continue;
    const match = dictionary.find(({ patterns }) => patterns.some((pattern) => pattern.test(text)));
    if (match) {
      return match.code;
    }
  }
  return fallback;
}

function ensureAllOption(select, text) {
  if (!select) return;

  const existingOption = select.querySelector('option[value=""]');
  if (existingOption) {
    existingOption.textContent = text;
    return;
  }

  const option = document.createElement("option");
  option.value = "";
  option.textContent = text;
  select.insertAdjacentElement("afterbegin", option);
}



export function reset(){

  if(courses){
        courses.innerHTML = ""
    }

    
    const showCourseText = window.i18next ? i18next.t("course.showBtn") : "عرض الكورس";
    const allFilterText = siteLang === "ar" ? "الكل" : "All";
    ensureAllOption(levelSelect, allFilterText);
    ensureAllOption(semesterSelect, allFilterText);

    coursesData.forEach(course => {
    
          let item = ``
          const facultyClass = course.faculty === "cs" ? "cs" : "eng";
          const courseTitle = getLocalizedValue(course.title ?? course.name, siteLang);
          const courseLevel = getLocalizedValue(course.level ?? course.li1, siteLang);
          const courseSemester = getLocalizedValue(course.semester ?? course.li2, siteLang);
          const levelCode = inferCode(
            getValueCandidates(course.level ?? course.li1),
            LEVEL_PATTERNS,
            ""
          );
          const semesterCode = inferCode(
            getValueCandidates(course.semester ?? course.li2),
            SEMESTER_PATTERNS,
            ""
          );
          const baseCourseLink = course.link || "CoursePresentationn.html";
          const separator = baseCourseLink.includes("?") ? "&" : "?";
          const courseLink = `${baseCourseLink}${separator}course=${encodeURIComponent(course.id)}`;

          if(facultyClass === "cs"){
              item = `<div class="col-lg-4 col-md-6 mb-4" data-level="${levelCode}" data-semester="${semesterCode}">
            <div class="course">
              <div class="title cs px-3 py-2">${course.idName[siteLang]}</div>
              <h5 class="pb-2 bold">${courseTitle}</h5>
              <ul>
                <li>${courseLevel}</li>
                <li>${courseSemester}</li>
              </ul>
              <a data-course-id="${course.id}" href="${courseLink}"><button class="btn btn1 b2 f-16">${showCourseText}</button></a>
            </div>
          </div>`
          }else{
              item = `<div class="col-lg-4 col-md-6 mb-4" data-level="${levelCode}" data-semester="${semesterCode}">
            <div class="course">
              <div class="title eng px-3 py-2">${course.idName[siteLang]}</div>
              <h5 class="pb-2 bold">${courseTitle}</h5>
              <ul>
                <li>${courseLevel}</li>
                <li>${courseSemester}</li>
              </ul>
              <a data-course-id="${course.id}" href="${courseLink}"><button class="btn btn1 b2 f-16">${showCourseText}</button></a>
            </div>
          </div>`
          }
          courses?.insertAdjacentHTML('beforeend', item);
      
      
  })

  if (levelSelect) levelSelect.value = "";
  if (semesterSelect) semesterSelect.value = "";
  filterCourses();

  if (courses && !courses.dataset.selectionBound) {
    courses.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-course-id]");
      if (!link) {
        return;
      }
      const selectedCourseId = link.getAttribute("data-course-id");
      if (selectedCourseId) {
        localStorage.setItem(SELECTED_COURSE_KEY, selectedCourseId);
      }
    });
    courses.dataset.selectionBound = "1";
  }
}

const levelSelect = document.querySelector("#levels");
const semesterSelect = document.querySelector("#seasons");

function filterCourses() {
  if (!levelSelect || !semesterSelect) return;

  const levelValue = levelSelect.value.trim();
  const semesterValue = semesterSelect.value.trim();

  const cards = document.querySelectorAll(".sec2 .courses > div");

  cards.forEach(card => {
    const matchLevel = !levelValue || card.dataset.level === levelValue;
    const matchSemester = !semesterValue || card.dataset.semester === semesterValue;

    if (matchLevel && matchSemester) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// لما يتغير أي واحد منهم
if (levelSelect) levelSelect.addEventListener("change", filterCourses);
if (semesterSelect) semesterSelect.addEventListener("change", filterCourses);
