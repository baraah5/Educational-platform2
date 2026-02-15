AOS.init();



const active = document.querySelector('.back-top')
const lang = document.querySelector(".lang")
const footer = document.querySelector("footer")
const header = document.querySelector("header")

// console.log(lang);
export let siteLang = localStorage.getItem("lang") || document.documentElement.lang || "en";



window.onscroll = ()=>{

    if(window.pageYOffset > 300){
        active.classList.add('active')
    } else {
        active.classList.remove('active')
    }
}

active.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// const footerInfo = [
//     {
//         par:{
//             ar:" منصة التعليم الأكاديمي ©2026 جميع الحقوق محفوظة ",
//             en:"Academic Learning Platform ©2026 All rights reserved"
//         }
//     }
// ]

// const headerInfo = [
//     {
//         head:{
//             ar:" منصة التعليم الأكاديمي ",
//             en:"Academic Education Platform"
//         },
//         nav1:{
//             ar:" الرئيسية ",
//             en:"Home"
//         },
//         nav2:{
//             ar:" الكورسات ",
//             en:"Courses"
//         },
//         nav3:{
//             ar:" حول المنصة ",
//             en:"About the platform"
//         },
//         lang:{
//             ar:"English",
//             en:" العربية "
//         }
//     }
// ]


function reset(){
    // if(footer){
    //     footer.innerHTML = ""
    // }

    // if(header){
    //     header.innerHTML = ""
    // }

    // footerInfo.forEach(info =>{
    //     let item = `<div class="container text-center py-3">
    //     <p class="f-20">${info.par[siteLang]}</p>
    //     </div>`
    //     footer?.insertAdjacentHTML('beforeend', item);
    // })

    // headerInfo.forEach(info => {
    //     let item = `<nav class="navbar fixed-top border-bottom navbar-expand-lg bg-body-tertiary">
    //         <div class="container-fluid">
    //             <!--  abo alQombos !!!!!!!!!!  -->
    //             <a class="nav-link f-20 bold" href="#"><i class="f-27 fa-solid fa-book" style="color: #4F39F6;"></i>${info.head[siteLang]}</a>

    //                 <div class="menu">
    //                 <button><i class="fas fa-bars"></i></button>
    //             </div>

    //             <div class="sidemenu">
    //                 <button class="close"><i class="fas fa-times"></i></button>
    //                 <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    //                     <li class="bold nav-item"><a class="nav-link active" href="index.html">${info.nav1[siteLang]}</a></li>
    //                     <li class="bold nav-item"><a class="nav-link" href="course.html">${info.nav2[siteLang]}</a></li>
    //                     <li class="bold nav-item"><a class="nav-link" href="about.html">${info.nav3[siteLang]}</a></li>
    //                     <li class="lang bold nav-item ">${info.lang[siteLang]}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>`

    //     header?.insertAdjacentHTML('beforeend', item);
    //     // lang = document.querySelector(".lang")
    //     // console.log(lang);
    // })


}


reset();

const open = document.querySelector('.menu button')
const close = document.querySelector('.sidemenu .close')
// let lang = document.querySelector(".lang")
const side = document.querySelector('.sidemenu')
// console.log(lang);
checkActiveLink();
// console.log(open);

open.onclick = () => side.classList.add('open')

close.onclick = () =>  side.classList.remove('open')




function checkActiveLink() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname;
    links.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}



// export const courseBageInfo = [
//     {
//         title:{
//             ar:" الكورسات الأكاديمية ",
//             en:"Academic Courses"
//         },
//         desc:{
//             ar:" استعرض جميع كورسات الهندسة وتكنولوجيا المعلومات ",
//             en:"Browse all engineering and information technology courses."
//         }
//     }
// ]

// export const levelsFormIfo = [
//     {
//         formName:{
//             ar:" تصفية الكورسات ",
//             en:"Course Clearance"
//         },
//         level:{
//             ar:" المستوى الأكاديمي ",
//             en:"Academic level"
//         },
//         levelPlace:{
//             ar:" المستوى الأكاديمي ",
//             en:"Academic level"
//         },
//         chapter:{
//             ar:" الفصل الدراسي ",
//             en:"The semester"
//         },
//         chapterPlace:{
//             ar:" الفصل الدراسي ",
//             en:"The semester"
//         }
//     }
// ]


export const coursesData = [
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name:{
            ar:" أساسيات البرمجة ",
            en:"Programming Fundamentals"
        },
        li1:{
            ar:" المستوى الأول ",
            en:"Level One"
        },
        li2:{
            ar:" الفصل الأول ",
            en:"Chapter One"
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "eng",
        idName:{
            ar:" الهندسة ",
            en:"Engineering"
        },
        name:{
            ar:" الرياضيات الهندسية ",
            en:"Geometric Mathematics"
        },
        li1:{
            ar:" المستوى الأول ",
            en:"Level One"
        },
        li2:{
            ar:" الفصل الأول ",
            en:"Chapter One"
        }, 
        link: "CoursePresentationn.html",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name:{
            ar:" قواعد البيانات ",
            en:"Databases"
        },
        li1:{
            ar:" المستوى الثاني ",
            en:"Level Two"
        },
        li2:{
            ar:" الفصل الأول ",
            en:"Chapter One"
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "eng",
        idName:{
            ar:" الهندسة ",
            en:"Engineering"
        },
        name:{
            ar:" الدوائر الكهربائية ",
            en:"Electrical circuits"
        },
        li1:{
            ar:" المستوى الثاني ",
            en:"Level Two"
        },
        li2:{
            ar:" الفصل الأول ",
            en:"Chapter One"
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name: {
            ar:" تطوير الويب ",
            en:""
        },
        li1:{
            ar:" المستوى الثالث ",
            en:""
        },
        li2:{
            ar:" الفصل الثاني ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "eng",
        idName:{
            ar:" الهندسة ",
            en:"Engineering"
        },
        name:{
            ar:" الإلكترونيات الرقمية ",
            en:""
        },
        li1:{
            ar:" المستوى الثالث ",
            en:""
        },
        li2:{
            ar:" الفصل الثاني ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name:{
            ar:" الذكاء الاصطناعي ",
            en:""
        },
        li1:{
            ar:" المستوى الرابع ",
            en:""
        },
        li2:{
            ar:" الفصل الأول ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "eng",
        idName:{
            ar:" الهندسة ",
            en:"Engineering"
        },
        name:{
            ar:" أنظمة التحكم ",
            en:""
        },
        li1:{
            ar:" المستوى الرابع ",
            en:""
        },
        li2:{
            ar:" الفصل الأول ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name:{
            ar:" أمن المعلومات ",
            en:""
        },
        li1:{
            ar:" المستوى الخامس ",
            en:""
        },
        li2:{
            ar:" الفصل الثاني ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "eng",
        idName:{
            ar:" الهندسة ",
            en:"Engineering"
        },
        name:{
            ar:" هندسة الطاقة ",
            en:""
        },
        li1:{
            ar:" المستوى الخامس ",
            en:""
        },
        li2:{
            ar:" الفصل الثاني ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    },
    {
        id: "cs",
        idName:{
            ar:" تكنولوجيا المعلومات ",
            en:"Computer Science"
        },
        name:{
            ar:" هندسة البرمجيات ",
            en:""
        },
        li1:{
            ar:" المستوى الثالث ",
            en:""
        },
        li2:{
            ar:" الفصل الأول ",
            en:""
        },
        link: "",
        // show:{
        //     ar:" عرض الكورس ",
        //     en:"Course presentation"
        // }
    }
]


export const whyUsCards = [
    {
        icon: "fa-solid fa-book",
        title:{
            ar:" محتوى تعليمي متميز ",
            en:""
        },
        desc:{
            ar:"  جميع الكورسات منظمة حسب المستوى  الأكاديمي والفصل الدراسي لتسهيل الوصول والتعلم المنهجي  ",
            en:""
        }
    },
    {
        icon: "fa-solid fa-rocket",
        title:{
            ar:" تقدم واضح ومتابعة ",
            en:""
        },
        desc:{
            ar:" تتبع تقدمك في كل كورس بسهولة من خلال مؤشرات الإنجاز الواضحة والمرئية ",
            en:""
        }
    },
    {
        icon: "fa-solid fa-users",
        title:{
            ar:" مصمم للطلاب ",
            en:""
        },
        desc:{
            ar:" واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين ",
            en:""
        }
    },
    {
        icon: "fa-solid fa-medal",
        title:{
            ar:" جودة أكاديمية ",
            en:""
        },
        desc:{
            ar:" محتوى تعليمي احترافي يغطي كافة المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات ",
            en:""
        }
    },
    {
        icon: "fa-solid fa-bolt-lightning",
        title:{
            ar:" تطور مستمر ",
            en:""
        },
        desc:{
            ar:" نحدث المحتوى باستمرار لمواكبة أحدث التطورات في المجالين الهندسي والتقني ",
            en:""
        }
    },
    {
        icon: "fa-regular fa-lightbulb",
        title:{
            ar:" تعلم ذكي ",
            en:""
        },
        desc:{
            ar:" نظام تصفية متقدم يساعدك في العثور على الكورس المناسب بسرعة وسهولة ",
            en:""
        }
    },
]


// export const coursesNo = [
//     {
//         no: "+",
//         title:{
//             ar:" كورس أكاديمي ",
//             en:""
//         }
//     },
//     {
//         no: "5",
//         title:{
//             ar:" مستويات دراسية ",
//             en:""
//         }
//     },
//     {
//         no: "2",
//         title:{
//             ar:" تخصص رئيسي ",
//             en:""
//         }
//     },
//     {
//         no: "+",
//         title:{
//             ar:" درس تعليمي ",
//             en:""
//         }
//     },
// ]

export const messages = [
    {
        icon:"fa-solid fa-users-rays",
        title:{
            ar:" رسالتنا ",
            en:""
        },
        desc:{
            ar:" نسعى لتوفير بيئة تعليمية رقميةمتكاملة تساعد طلاب الجامعات في مجالي الهندسة وتكنولوجيا المعلومات على الوصول إلى محتوى أكاديمي منظم وعالي الجودة، مما يعزز من تجربتهم التعليمية ويساهم في تحقيق التميز الأكاديمي. ",
            en:""
        }
    },
    {
        icon:"fa-regular fa-lightbulb",
        title:{
            ar:" رؤيتنا ",
            en:""
        },
        desc:{
            ar:" أن نكون المنصة التعليمية الرائدة في العالم العربي لطلاب الهندسة وتكنولوجيا المعلومات، ونساهم في بناء جيل من المهندسين والتقنيين المؤهلين القادرين على مواجهة تحديات المستقبل وقيادة الابتكار في مجالاتهم. ",
            en:""
        }
    },
]

export const valuables =[
    {
        icon:"fa-solid fa-medal",
        title:{
            ar:" الجودة الأكاديمية ",
            en:""
        },
        desc:{
            ar:" نضع احتياجات الطلاب في المقام الأول ونصمم تجربة تعليمية تناسب متطلباتهم ",
            en:""
        }
    },
    {
        icon:"fa-solid fa-users",
        title:{
            ar:" التركيز على الطالب ",
            en:""
        },
        desc:{
            ar:" واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين ",
            en:""
        }
    },
    {
        icon:"fa-solid fa-medal",
        title:{
            ar:" التطوير المستمر ",
            en:""
        },
        desc:{
            ar:" نسعى دائماً لتحسين منصتنا ومحتوانا لمواكبة أحدث التطورات التقنية والأكاديمية ",
            en:""
        }
    },
    {
        icon:"fa-solid fa-book",
        title:{
            ar:" التنظيم والوضوح ",
            en:""
        },
        desc:{
            ar:" نقدم المحتوى بطريقة منظمة وواضحة تسهل عملية التعلم والوصول للمعلومات ",
            en:""
        }
    },
    {
        icon:"fa-regular fa-lightbulb",
        title:{
            ar:" الابتكار ",
            en:""
        },
        desc:{
            ar:" نشجع التفكير الإبداعي والابتكار في تقديم الحلول التعليمية ",
            en:""
        }
    },
    {
        icon:"fa-solid fa-users-rays",
        title:{
            ar:" التميز ",
            en:""
        },
        desc:{
            ar:" نسعى لتحقيق التميز في كل جانب من جوانب المنصة والخدمات المقدمة ",
            en:""
        }
    },
]

export const whatWeDos = [
    {
        no: 1,
        title:{
            ar:" كورسات أكاديمية شاملة ",
            en:""
        },
        desc:{
            ar:" نغطي جميع المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات عبر المستويات الدراسية المختلفة من المستوى الأول حتى المستوى الخامس. ",
            en:""
        }
    },
    {
        no: 2,
        title:{
            ar:" تنظيم واضح ومنهجي ",
            en:""
        },
        desc:{
            ar:" جميع الكورسات منظمة حسب التخصص، المستوى الأكاديمي، والفصل الدراسي، مما يسهل على الطلاب العثور على ما يحتاجونه بسرعة. ",
            en:""
        }
    },
    {
        no: 3,
        title:{
            ar:" واجهة استخدام بسيطة ",
            en:""
        },
        desc:{
            ar:" واجهة استخدام بسيطة هي واجهة واضحة وسهلة التعلم، تركز على الأساسيات فقط، وتُمكّن المستخدم من إنجاز مهامه بسرعة وبأقل جهد ممكن، دون تعقيد أو عناصر غير ضرورية. ",
            en:""
        }
    },
    {
        no: 4,
        title:{
            ar:" متابعة التقدم الدراسي ",
            en:""
        },
        desc:{
            ar:" نوفر نظام مرئي واضح لمتابعة تقدمك في كل كورس، مما يساعدك على البقاء منظماً ومتحفزاً طوال رحلتك التعليمية. ",
            en:""
        }
    },
]


import * as script from "./script.js";
import * as course from "./course.js";
import * as about from "./about.js";

script.reset()
course.reset()
about.reset()

const resources = {
  en: {
    translation: {
      header: {
        head: "Academic Education Platform",
        li1:"Home",
        li2:"Courses",
        li3:"About the platform"
      },
      footer: {
        copy: "Academic Education Platform ©2026 All rights reserved"
      },
      index: {
        title: "The Academic Learning Platform for Engineers",
        title2: "Your Learning Journey Starts Here",
        desc: "An integrated learning platform for engineering and IT students. Discover hundreds of organized academic courses specifically designed to support your learning journey.",
        show: "Browse Courses ->",
        learn: "Learn About Us",
        courseNo: "Academic Course",
        levelsNo: "Academic Levels",
        subNo: "Major",
        lectsNo: "Lesson",
        whyUs: "Why Choose Our Platform?",
        whyUsDesc: "We provide you with an integrated learning experience specifically designed for engineering and IT students",
        whyUs1: "Organized and Comprehensive Content",
        whyUs1desc: "All courses are organized by academic level and semester for easy access and systematic learning",
        whyUs2: "Clear Progress and Tracking",
        whyUs2desc: "Easily track your progress in each course with clear and visible achievement indicators",
        whyUs3: "Designed For students",
        whyUs3desc: "A clean and simple interface designed specifically to meet the needs of university students",
        whyUs4: "Academic quality",
        whyUs4desc: "Professional educational content covering all the essential subjects in the fields of engineering and information technology",
        whyUs5: "Continuous development",
        whyUs5desc: "We constantly update the content to keep pace with the latest developments in the engineering and technology fields",
        whyUs6: "Smart learning",
        whyUs6desc: "An advanced filtering system that helps you find the right course quickly and easily",
        start: "Start your learning journey now",
        startDesc: "Join thousands of students who are developing their academic skills through our educational platform",
        startBtn: "Explore courses ->"
      },
      course: {
        title: "Academic Courses",
        desc: "Browse all engineering and information technology courses",
        formTitle: "Filter Courses",
        formSelec1: "Academic Level",
        formSelec1lev: "Level One",
        formSelec2lev: "Level Two",
        formSelec3lev: "Level Three",
        formSelec2: "Semester",
        formSelec2seas: "First Semester",
        courseNo: "Showing Courses",
        showBtn: "Show Course"
      },
      CoursePresentationn: {
        pageTitle: "Engineering Mathematics",
        back: "<- Back to Courses",
        breadcrumb1: "Engineering",
        breadcrumb2: "Level One",
        breadcrumb3: "First Semester",
        title: "Engineering Mathematics",
        desc: "This course covers the core mathematical concepts required for engineering students, including calculus, integration, and differential equations, with a focus on practical engineering applications.",
        progressTitle: "Course Progress",
        lessonWord: "Lesson",
        completed: "Completed",
        lessonsTitle: "Lessons List",
        lesson1: "Algebra and Functions Review",
        lesson2: "Limits and Continuity",
        lesson3: "Differentiation - Basic Rules",
        lesson4: "Applications of Differentiation in Engineering",
        lesson5: "Implicit Differentiation and Related Rates",
        lesson6: "Indefinite Integration",
        lesson7: "Definite Integration and Areas",
        lesson8: "Integration Techniques",
        lesson9: "Engineering Applications of Integration",
        lesson10: "First-Order Differential Equations",
        lesson11: "Second-Order Differential Equations",
        lesson12: "Comprehensive Review"
      },
      about: {
        pageTitle: "About Us",
        heroTitle: "About The Academic Education Platform",
        heroDesc: "A specialized educational platform aimed at supporting engineering and information technology students throughout their academic journey with organized and comprehensive content.",
        message1Title: "Our Mission",
        message1Desc: "We strive to provide an integrated digital learning environment that helps university students in engineering and information technology access organized, high-quality academic content, enhancing their educational experience and supporting academic excellence.",
        message2Title: "Our Vision",
        message2Desc: "To be the leading educational platform in the Arab world for engineering and information technology students, and to contribute to building a generation of qualified engineers and technicians capable of facing future challenges and driving innovation in their fields.",
        valuesTitle: "Our Core Values",
        valuesDesc: "The principles we believe in and that guide our daily work",
        value1Title: "Academic Quality",
        value1Desc: "We put students' needs first and design a learning experience that fits their requirements",
        value2Title: "Student Focus",
        value2Desc: "A clean and simple interface specifically designed to meet university students' needs",
        value3Title: "Continuous Improvement",
        value3Desc: "We continuously improve our platform and content to keep pace with the latest technical and academic developments",
        value4Title: "Organization and Clarity",
        value4Desc: "We present content in an organized and clear way that makes learning and information access easier",
        value5Title: "Innovation",
        value5Desc: "We encourage creative thinking and innovation in delivering educational solutions",
        value6Title: "Excellence",
        value6Desc: "We strive for excellence in every aspect of the platform and the services we provide",
        offerTitle: "What Do We Offer?",
        offer1Title: "Comprehensive Academic Courses",
        offer1Desc: "We cover all core subjects in engineering and information technology across academic levels, from first to fifth level.",
        offer2Title: "Clear and Methodical Organization",
        offer2Desc: "All courses are organized by specialization, academic level, and semester, making it easy for students to quickly find what they need.",
        offer3Title: "Simple User Interface",
        offer3Desc: "A simple interface is clear and easy to learn, focused on essentials only, enabling users to complete tasks quickly with minimal effort and without unnecessary complexity.",
        offer4Title: "Study Progress Tracking",
        offer4Desc: "We provide a clear visual system to track your progress in each course, helping you stay organized and motivated throughout your learning journey.",
        ctaTitle: "Are You Ready To Start?",
        ctaDesc: "Join us today and explore a world of organized academic knowledge",
        footer: "Academic Education Platform ©2026 All rights reserved"
      }
    }
  },
  ar: {
    translation: {
      header: {
        head: " منصة التعليم الأكاديمي ",
        li1:" الرئيسية ",
        li2:" الكورسات ",
        li3:" حول المنصة "
      },
      footer: {
        copy: "منصة التعليم الأكاديمي ©2026 جميع الحقوق محفوظة"
      },
      index: {
        title: " منصة التعليم الأكاديمي للمهندسين ",
        title2:" رحلتك التعليمية تبدأ من هنا ",
        desc:" منصة تعليمية متكاملة لطلاب الهندسة وتكنولوجيا المعلومات. اكتشف مئات الكورسات الأكاديمية المنظمة والمصممةخصيصاً لدعم مسيرتك التعليمية. ",
        show:" تصفح الكورسات -> ",
        learn:" تعرف علينا ",
        courseNo:" كورس أكاديمي ",
        levelsNo:" مستويات دراسية ",
        subNo:" تخصص رئيسي ",
        lectsNo:" درس تعليمي ",
        whyUs:" لماذا تختار منصتنا؟ ",
        whyUsDesc:"نوفر لك تجربة تعليمية متكاملة مصممة خصيصاً لطلاب الهندسة وتكنولوجيا المعلومات ",
        whyUs1:" محتوى منظم وشامل ",
        whyUs1desc:" جميع الكورسات منظمة حسب المستوى  الأكاديمي والفصل الدراسي لتسهيل الوصول والتعلم المنهجي ",
        whyUs2:" تقدم واضح ومتابعة ",
        whyUs2desc:" تتبع تقدمك في كل كورس بسهولة من خلال مؤشرات الإنجاز الواضحة والمرئية ",
        whyUs3:" مصمم للطلاب ",
        whyUs3desc:" واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين ",
        whyUs4:" جودة أكاديمية ",
        whyUs4desc:" محتوى تعليمي احترافي يغطي كافة المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات ",
        whyUs5:" تطور مستمر ",
        whyUs5desc:" نحدث المحتوى باستمرار لمواكبة أحدث التطورات في المجالين الهندسي والتقني ",
        whyUs6:"تعلم ذكي ",
        whyUs6desc:" نظام تصفية متقدم يساعدك في العثور على الكورس المناسب بسرعة وسهولة ",
        start:"ابدأ رحلتك التعليمية الآن ",
        startDesc:" انضم إلى آلاف الطلاب الذين يطورون مهاراتهم الأكاديمية من خلال منصتنا التعليمية ",
        startBtn:" استكشف الكورسات -> "
      },
      course: {
        title: "الكورسات الأكاديمية",
        desc: "استعرض جميع كورسات الهندسة وتكنولوجيا المعلومات",
        formTitle: "تصفية الكورسات",
        formSelec1: "المستوى الأكاديمي",
        formSelec1lev: "المستوى الأول",
        formSelec2lev: "المستوى الثاني",
        formSelec3lev: "المستوى الثالث",
        formSelec2: "الفصل الدراسي",
        formSelec2seas: "الفصل الأول",
        courseNo: "عرض كورس",
        showBtn: "عرض الكورس"
      },
      CoursePresentationn: {
        pageTitle: "الرياضيات الهندسية",
        back: "<- العودة إلى الكورسات",
        breadcrumb1: "الهندسة",
        breadcrumb2: "المستوى الأول",
        breadcrumb3: "الفصل الأول",
        title: "الرياضيات الهندسية",
        desc: "يغطي هذا الكورس المفاهيم الرياضية الأساسية اللازمة للطلاب الهندسيين، بما في ذلك التفاضل، التكامل، والمعادلات التفاضلية. التركيز على التطبيقات الهندسية العملية.",
        progressTitle: "التقدم في الكورس",
        lessonWord: "درس",
        completed: "مكتمل",
        lessonsTitle: "قائمة الدروس",
        lesson1: "مراجعة الجبر والدوال",
        lesson2: "النهايات والاتصال",
        lesson3: "التفاضل - القواعد الأساسية",
        lesson4: "تطبيقات التفاضل في الهندسة",
        lesson5: "التفاضل الضمني والمتعلقات",
        lesson6: "التكامل غير المحدود",
        lesson7: "التكامل المحدود والمساحات",
        lesson8: "تقنيات التكامل",
        lesson9: "تطبيقات التكامل الهندسية",
        lesson10: "المعادلات التفاضلية من الدرجة الأولى",
        lesson11: "المعادلات التفاضلية من الدرجة الثانية",
        lesson12: "مراجعة شاملة"
      },
      about: {
        pageTitle: "حول المنصة",
        heroTitle: "حول منصة التعليم الأكاديمي",
        heroDesc: "منصة تعليمية متخصصة تهدف إلى دعم طلاب الهندسة وتكنولوجيا المعلومات في رحلتهم الأكاديمية من خلال محتوى منظم وشامل",
        message1Title: "رسالتنا",
        message1Desc: "نسعى لتوفير بيئة تعليمية رقمية متكاملة تساعد طلاب الجامعات في مجالي الهندسة وتكنولوجيا المعلومات على الوصول إلى محتوى أكاديمي منظم وعالي الجودة، مما يعزز من تجربتهم التعليمية ويساهم في تحقيق التميز الأكاديمي.",
        message2Title: "رؤيتنا",
        message2Desc: "أن نكون المنصة التعليمية الرائدة في العالم العربي لطلاب الهندسة وتكنولوجيا المعلومات، ونساهم في بناء جيل من المهندسين والتقنيين المؤهلين القادرين على مواجهة تحديات المستقبل وقيادة الابتكار في مجالاتهم.",
        valuesTitle: "قيمنا الأساسية",
        valuesDesc: "المبادئ التي نؤمن بها وتوجه عملنا اليومي",
        value1Title: "الجودة الأكاديمية",
        value1Desc: "نضع احتياجات الطلاب في المقام الأول ونصمم تجربة تعليمية تناسب متطلباتهم",
        value2Title: "التركيز على الطالب",
        value2Desc: "واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين",
        value3Title: "التطوير المستمر",
        value3Desc: "نسعى دائماً لتحسين منصتنا ومحتوانا لمواكبة أحدث التطورات التقنية والأكاديمية",
        value4Title: "التنظيم والوضوح",
        value4Desc: "نقدم المحتوى بطريقة منظمة وواضحة تسهل عملية التعلم والوصول للمعلومات",
        value5Title: "الابتكار",
        value5Desc: "نشجع التفكير الإبداعي والابتكار في تقديم الحلول التعليمية",
        value6Title: "التميز",
        value6Desc: "نسعى لتحقيق التميز في كل جانب من جوانب المنصة والخدمات المقدمة",
        offerTitle: "ماذا نقدم؟",
        offer1Title: "كورسات أكاديمية شاملة",
        offer1Desc: "نغطي جميع المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات عبر المستويات الدراسية المختلفة من المستوى الأول حتى المستوى الخامس.",
        offer2Title: "تنظيم واضح ومنهجي",
        offer2Desc: "جميع الكورسات منظمة حسب التخصص، المستوى الأكاديمي، والفصل الدراسي، مما يسهل على الطلاب العثور على ما يحتاجونه بسرعة.",
        offer3Title: "واجهة استخدام بسيطة",
        offer3Desc: "واجهة استخدام بسيطة هي واجهة واضحة وسهلة التعلم، تركز على الأساسيات فقط، وتُمكّن المستخدم من إنجاز مهامه بسرعة وبأقل جهد ممكن، دون تعقيد أو عناصر غير ضرورية.",
        offer4Title: "متابعة التقدم الدراسي",
        offer4Desc: "نوفر نظام مرئي واضح لمتابعة تقدمك في كل كورس، مما يساعدك على البقاء منظماً ومتحفزاً طوال رحلتك التعليمية.",
        ctaTitle: "هل أنت مستعد للبدء؟",
        ctaDesc: "انضم إلينا اليوم واستكشف عالماً من المعرفة الأكاديمية المنظمة",
        footer: "منصة التعليم الأكاديمي ©2026 جميع الحقوق محفوظة"
      }
    }
  }
};


lang.onclick = () => {

    const currentLang = i18next.language;
    const newLang = currentLang === "en" ? "ar" : "en";
    siteLang = newLang

    i18next.changeLanguage(newLang, () => {

        updateContent(); // ترجمة العناصر

        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = newLang;

        lang.textContent = newLang === "ar" ? "English" : "العربية";

        localStorage.setItem("lang", newLang);

        // إذا فعلاً عندك reset functions
        // script?.reset?.();
        // course?.reset?.();
        // about?.reset?.();
        // reset?.();

        script.reset()
        course.reset()
        about.reset()
        side.classList.remove('open')


    });
};

document.addEventListener("DOMContentLoaded", () => {

  const savedLang = localStorage.getItem("lang") || "en";
  siteLang = savedLang;

  i18next.init({
    lng: savedLang,
    debug: false,
    resources
  }, () => {
    updateContent();
    applyDirection(savedLang);
    if (lang) {
      lang.textContent = savedLang === "ar" ? "English" : "العربية";
    }
    script.reset();
    course.reset();
    about.reset();
  });

});

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
}

function changeLang(lang) {
  i18next.changeLanguage(lang, () => {
    updateContent();
    applyDirection(lang);
    localStorage.setItem("lang", lang);
  });
}


function applyDirection(lang) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}



// console.log(lang);

// lang.onclick = ()=>{
//     if(siteLang == "en"){
//         siteLang = "ar"
//         document.documentElement.dir = "rtl"
//         lang.textContent = "English"
//     }else{
//         siteLang = "en"
//         document.documentElement.dir = "ltr"
//         lang.textContent = "العربية"
//     }
//         script.reset()
//         course.reset()
//         about.reset()
//         reset();
// }

// document.onclick = (e)=>{
//     if(e.target.classList.contains("lang")){
//         if(siteLang == "en"){
//             siteLang = "ar"
//             document.documentElement.dir = "rtl"
//         } else {
//             siteLang = "en"
//             document.documentElement.dir = "ltr"
//         }

//         script.reset()
//         course.reset()
//         about.reset()
//         reset()
//     }
// }
