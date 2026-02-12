const whyUs = document.querySelector(".hero .whyUsRow")
const courseNo = document.querySelector(".hero2 .no")
// console.log(courseNo);
// console.log(whyUs);

// const whyUsCards = [
//     {
//         icon: "fa-solid fa-book",
//         title: " محتوى تعليمي متميز ",
//         desc: "  جميع الكورسات منظمة حسب المستوى  الأكاديمي والفصل الدراسي لتسهيل الوصول والتعلم المنهجي  "
//     },
//     {
//         icon: "fa-solid fa-rocket",
//         title: " تقدم واضح ومتابعة ",
//         desc: " تتبع تقدمك في كل كورس بسهولة من خلال مؤشرات الإنجاز الواضحة والمرئية "
//     },
//     {
//         icon: "fa-solid fa-users",
//         title: " مصمم للطلاب ",
//         desc: " واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين "
//     },
//     {
//         icon: "fa-solid fa-medal",
//         title: " جودة أكاديمية ",
//         desc: " محتوى تعليمي احترافي يغطي كافة المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات "
//     },
//     {
//         icon: "fa-solid fa-bolt-lightning",
//         title: " تطور مستمر ",
//         desc: " نحدث المحتوى باستمرار لمواكبة أحدث التطورات في المجالين الهندسي والتقني "
//     },
//     {
//         icon: "fa-regular fa-lightbulb",
//         title: " تعلم ذكي ",
//         desc: " نظام تصفية متقدم يساعدك في العثور على الكورس المناسب بسرعة وسهولة "
//     },
// ]



// const coursesNo = [
//     {
//         no: "+",
//         title: " كورس أكاديمي "
//     },
//     {
//         no: "5",
//         title: " مستويات دراسية "
//     },
//     {
//         no: "2",
//         title: " تخصص رئيسي "
//     },
//     {
//         no: "+",
//         title: " درس تعليمي "
//     },
// ]

// import { whyUsCards } from "./main.js"
// import { coursesNo } from "./main.js"
import { siteLang } from "./main.js"

export function reset(){

    // if(whyUs){
    //     whyUs.innerHTML = ""
    // }

    // if(courseNo){
    //     courseNo.innerHTML = ""
    // }

    // whyUsCards.forEach(card => {
    // let item = `<div class="col-lg-4 col-md-6 mb-4">
    //         <div class="whyUs">
    //             <div class="icon pb-3"><i class="${card.icon}"></i></div>
    //             <h5 class="pb-2 bold">${card.title[siteLang]}</h5>
    //             <p>${card.desc[siteLang]}</p>
    //         </div>
    //     </div>`
    // // if (whyUs) {
    // //     whyUs.insertAdjacentHTML('beforeend' , item);
    // // }
    // whyUs?.insertAdjacentHTML('beforeend', item);
    // // item = ``
    // })

    // coursesNo.forEach(course => {
    //     let item = `<div class="col-6 col-md-3">
    //                         <p class="nom f-30 bold">${course.no}</p>
    //                         <p class="f-20">${course.title[siteLang]}</p>
    //                     </div>`
    //     // if (courseNo) {
    //     //     courseNo.insertAdjacentHTML('beforeend', item);
    //     // }
    //     courseNo?.insertAdjacentHTML('beforeend', item);
    // })

}

// reset();