AOS.init();



const active = document.querySelector('.back-top')
// let lang = document.querySelector(".lang")
const footer = document.querySelector("footer")
const header = document.querySelector("header")

// console.log(lang);
export let siteLang = document.documentElement.lang;



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

const footerInfo = [
    {
        par:{
            ar:" منصة التعليم الأكاديمي ©2026 جميع الحقوق محفوظة ",
            en:"Academic Learning Platform ©2026 All rights reserved"
        }
    }
]

const headerInfo = [
    {
        head:{
            ar:" منصة التعليم الأكاديمي ",
            en:"Academic Education Platform"
        },
        nav1:{
            ar:" الرئيسية ",
            en:"Home"
        },
        nav2:{
            ar:" الكورسات ",
            en:"Courses"
        },
        nav3:{
            ar:" حول المنصة ",
            en:"About the platform"
        },
        lang:{
            ar:"English",
            en:" العربية "
        }
    }
]


function reset(){
    if(footer){
        footer.innerHTML = ""
    }

    if(header){
        header.innerHTML = ""
    }

    footerInfo.forEach(info =>{
        let item = `<div class="container text-center py-3">
        <p class="f-20">${info.par[siteLang]}</p>
        </div>`
        footer?.insertAdjacentHTML('beforeend', item);
    })

    headerInfo.forEach(info => {
        let item = `<nav class="navbar fixed-top border-bottom navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <!--  abo alQombos !!!!!!!!!!  -->
                <a class="nav-link f-20 bold" href="#"><i class="f-27 fa-solid fa-book" style="color: #4F39F6;"></i>${info.head[siteLang]}</a>

                    <div class="menu">
                    <button><i class="fas fa-bars"></i></button>
                </div>

                <div class="sidemenu">
                    <button class="close"><i class="fas fa-times"></i></button>
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="bold nav-item"><a class="nav-link active" href="index.html">${info.nav1[siteLang]}</a></li>
                        <li class="bold nav-item"><a class="nav-link" href="course.html">${info.nav2[siteLang]}</a></li>
                        <li class="bold nav-item"><a class="nav-link" href="about.html">${info.nav3[siteLang]}</a></li>
                        <li class="lang bold nav-item ">${info.lang[siteLang]}</li>
                    </ul>
                </div>
            </div>
        </nav>`

        header?.insertAdjacentHTML('beforeend', item);
        // lang = document.querySelector(".lang")
        // console.log(lang);
    })


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



export const courseBageInfo = [
    {
        title:{
            ar:" الكورسات الأكاديمية ",
            en:"Academic Courses"
        },
        desc:{
            ar:" استعرض جميع كورسات الهندسة وتكنولوجيا المعلومات ",
            en:"Browse all engineering and information technology courses."
        }
    }
]

export const levelsFormIfo = [
    {
        formName:{
            ar:" تصفية الكورسات ",
            en:"Course Clearance"
        },
        level:{
            ar:" المستوى الأكاديمي ",
            en:"Academic level"
        },
        levelPlace:{
            ar:" المستوى الأكاديمي ",
            en:"Academic level"
        },
        chapter:{
            ar:" الفصل الدراسي ",
            en:"The semester"
        },
        chapterPlace:{
            ar:" الفصل الدراسي ",
            en:"The semester"
        }
    }
]


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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        link: "math.html",
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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
        show:{
            ar:" عرض الكورس ",
            en:"Course presentation"
        }
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


export const coursesNo = [
    {
        no: "+",
        title:{
            ar:" كورس أكاديمي ",
            en:""
        }
    },
    {
        no: "5",
        title:{
            ar:" مستويات دراسية ",
            en:""
        }
    },
    {
        no: "2",
        title:{
            ar:" تخصص رئيسي ",
            en:""
        }
    },
    {
        no: "+",
        title:{
            ar:" درس تعليمي ",
            en:""
        }
    },
]

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

// console.log(lang);

// lang.onclick = ()=>{
//     // console.log(lang);
//         // console.log(siteLang);
//     if(siteLang == "en"){
//         siteLang = "ar"
//         document.documentElement.dir = "rtl"
//         lang.textContent = "English"
//         script.reset()
//         course.reset()
//         about.reset()
//         reset();
//         // console.log(siteLang);
//         // console.log(66);
//     }else{
//         siteLang = "en"
//         document.documentElement.dir = "ltr"
//         lang.textContent = "العربية"
//         script.reset()
//         course.reset()
//         about.reset()
//         reset();
//         // console.log(siteLang);
//         // console.log(siteLang);
//         // console.log(55);
//     }
//     // console.log(lang);
// }

document.onclick = (e)=>{
    if(e.target.classList.contains("lang")){
        if(siteLang == "en"){
            siteLang = "ar"
            document.documentElement.dir = "rtl"
        } else {
            siteLang = "en"
            document.documentElement.dir = "ltr"
        }

        script.reset()
        course.reset()
        about.reset()
        reset()
    }
}