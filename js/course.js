const courses = document.querySelector(".sec2 .courses")
const courseBage = document.querySelector(".courseBage")
const levelsForm = document.querySelector(".levelsForm")
const coursesNumber = document.querySelector(".sec2 h5")
// console.log(coursesNumber.innerHTML);


// console.log(courseBage);
// console.log(levelsForm);
// console.log(courses);

// const coursesData = [
//     {
//         id: "cs",
//         name: " أساسيات البرمجة ",
//         li1: " المستوى الأول ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
//     {
//         id: "eng",
//         name: " الرياضيات الهندسية ",
//         li1: " المستوى الأول ",
//         li2: " الفصل الأول ", 
//         link: "CoursePresentationn.html"
//     },
//     {
//         id: "cs",
//         name: " قواعد البيانات ",
//         li1: " المستوى الثاني ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
//     {
//         id: "eng",
//         name: " الدوائر الكهربائية ",
//         li1: " المستوى الثاني ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
//     {
//         id: "cs",
//         name: " تطوير الويب ",
//         li1: " المستوى الثالث ",
//         li2: " الفصل الثاني ",
//         link: ""
//     },
//     {
//         id: "eng",
//         name: " الإلكترونيات الرقمية ",
//         li1: " المستوى الثالث ",
//         li2: " الفصل الثاني ",
//         link: ""
//     },
//     {
//         id: "cs",
//         name: " الذكاء الاصطناعي ",
//         li1: " المستوى الرابع ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
//     {
//         id: "eng",
//         name: " أنظمة التحكم ",
//         li1: " المستوى الرابع ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
//     {
//         id: "cs",
//         name: " أمن المعلومات ",
//         li1: " المستوى الخامس ",
//         li2: " الفصل الثاني ",
//         link: ""
//     },
//     {
//         id: "eng",
//         name: " هندسة الطاقة ",
//         li1: " المستوى الخامس ",
//         li2: " الفصل الثاني ",
//         link: ""
//     },
//     {
//         id: "cs",
//         name: " هندسة البرمجيات ",
//         li1: " المستوى الثالث ",
//         li2: " الفصل الأول ",
//         link: ""
//     },
// ]

import { coursesData } from "./main.js"
import { siteLang } from "./main.js"
// import { courseBageInfo } from "./main.js"
// import { levelsFormIfo } from "./main.js"
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


// const coursesNumberInfo = [
//     {
//       first:{
//         ar:"عرض",
//         en:"Offer of"
//       },
//       sec:{
//         ar:"كورس",
//         en:"courses"
//       }
//     }
// ]

export function reset(){

  if(courses){
        courses.innerHTML = ""
        // console.log(siteLang);
    }

    // if(courseBage){
    //   courseBage.innerHTML = ""
    // }

    // if(levelsForm){
    //   levelsForm.innerHTML = ""
    // }

    // courseBageInfo.forEach(info =>{
    //   // console.log("info");
    //   let item =`<div class="container courseBage my-5 mb-2">
    //   <h1>${info.title[siteLang]}</h1>
    //   <p>${info.desc[siteLang]}</p>
    // </div>`

    // // console.log(courseBage);

    // courseBage?.insertAdjacentHTML('beforeend', item);
    // })

    // levelsFormIfo.forEach(lev =>{
    //   let item = `<section class="container levelsForm sec1">
    //   <form action="">
    //     <!-- <i class="fa-light fa-filter"></i> -->
    //     <p><i class="fa-solid fa-filter"></i>${lev.formName[siteLang]}</p>
    //     <div class="row justify-content-around">
    //       <div class="col contact-form">
    //         <label for="">${lev.level[siteLang]}</label>
    //         <input type="text" placeholder="${lev.levelPlace[siteLang]}">
    //       </div>

    //       <div class="col contact-form">
    //         <label for="">${lev.chapter[siteLang]}</label>
    //         <input type="text" placeholder="${lev.chapterPlace[siteLang]}">
    //       </div>
    //     </div>
    //   </form>
    // </section>`

    // levelsForm?.insertAdjacentHTML('beforeend', item);
    // })

    // console.log(coursesData.length);
    
    // if(coursesNumber){
    //   coursesNumberInfo.forEach(no =>{
    //   coursesNumber.innerHTML = `${no.first[siteLang]} ${coursesData.length} ${no.sec[siteLang]}`
    // })
    // }

    const showCourseText = window.i18next ? i18next.t("course.showBtn") : "عرض الكورس";

    coursesData.forEach(course => {
    
      // console.log(siteLang);
          let item = ``
          const facultyClass = course.faculty === "cs" ? "cs" : "eng";
          const courseTitle = getLocalizedValue(course.title ?? course.name, siteLang);
          const courseLevel = getLocalizedValue(course.level ?? course.li1, siteLang);
          const courseSemester = getLocalizedValue(course.semester ?? course.li2, siteLang);
          const baseCourseLink = course.link || "CoursePresentationn.html";
          const separator = baseCourseLink.includes("?") ? "&" : "?";
          const courseLink = `${baseCourseLink}${separator}course=${encodeURIComponent(course.id)}`;

          if(facultyClass === "cs"){
              item = `<div class="col-lg-4 col-md-6 mb-4">
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
              item = `<div class="col-lg-4 col-md-6 mb-4">
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

// reset();
