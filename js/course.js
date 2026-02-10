const courses = document.querySelector(".sec2 .courses")

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

coursesData.forEach(course => {
    console.log(siteLang);
        let item = ``
        if(course.id === "cs"){
            item = `<div class="col-lg-4 col-md-6 mb-4">
          <div class="course">
            <div class="title cs px-3 py-2"> تكنولوجيا المعلومات </div>
            <h5 class="pb-2 bold">${course.name[siteLang]}</h5>
            <ul>
              <li>${course.li1[siteLang]}</li>
              <li>${course.li2[siteLang]}</li>
            </ul>
            <a href="${course.link}"><button class="btn btn1 b2 f-16"> عرض الكورس </button></a>
          </div>
        </div>`
        }else{
            item = `<div class="col-lg-4 col-md-6 mb-4">
          <div class="course">
            <div class="title eng px-3 py-2"> الهندسة </div>
            <h5 class="pb-2 bold">${course.name[siteLang]}</h5>
            <ul>
              <li>${course.li1[siteLang]}</li>
              <li>${course.li2[siteLang]}</li>
            </ul>
            <a href="${course.link}"><button class="btn btn1 b2 f-16"> عرض الكورس </button></a>
          </div>
        </div>`
        }

        courses?.insertAdjacentHTML('beforeend', item);
    
    
})