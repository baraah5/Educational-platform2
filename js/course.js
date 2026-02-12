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
//         link: "math.html"
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
    }

    if(courseBage){
      courseBage.innerHTML = ""
    }

    if(levelsForm){
      levelsForm.innerHTML = ""
    }

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

    coursesData.forEach(course => {
    
      // console.log(siteLang);
          let item = ``
          if(course.id === "cs"){
              item = `<div class="col-lg-4 col-md-6 mb-4">
            <div class="course">
              <div class="title cs px-3 py-2">${course.idName[siteLang]}</div>
              <h5 class="pb-2 bold">${course.name[siteLang]}</h5>
              <ul>
                <li>${course.li1[siteLang]}</li>
                <li>${course.li2[siteLang]}</li>
              </ul>
              <a href="${course.link}"><button class="btn btn1 b2 f-16">  عرض الكورس  </button></a>
            </div>
          </div>`
          }else{
              item = `<div class="col-lg-4 col-md-6 mb-4">
            <div class="course">
              <div class="title eng px-3 py-2">${course.idName[siteLang]}</div>
              <h5 class="pb-2 bold">${course.name[siteLang]}</h5>
              <ul>
                <li>${course.li1[siteLang]}</li>
                <li>${course.li2[siteLang]}</li>
              </ul>
              <a href="${course.link}"><button class="btn btn1 b2 f-16">  عرض الكورس  </button></a>
            </div>
          </div>`
          }

          courses?.insertAdjacentHTML('beforeend', item);
      
      
  })
}

// reset();