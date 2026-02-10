AOS.init();

const open = document.querySelector('.menu button')
const close = document.querySelector('.sidemenu .close')
const side = document.querySelector('.sidemenu')
const active = document.querySelector('.back-top')
const lang = document.querySelector(".lang")
// console.log(lang);
const siteLang = document.documentElement.lang;

checkActiveLink();
open.onclick = () => side.classList.add('open')

close.onclick = () =>  side.classList.remove('open')


function checkActiveLink() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    // console.log(links);
    const currentPath = window.location.pathname;
    // console.log(currentPath);
    links.forEach(link => {
        // console.log(link.getAttribute('href'));
        // if (link.getAttribute('href') === currentPath) {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.onscroll = ()=>{
    // console.log(window.pageYOffset)

    if(window.pageYOffset > 300){
        // console.log('ntjg')
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

lang.onclick = ()=>{
    if(document.documentElement.lang == "en"){
        document.documentElement.lang = "ar"
        document.documentElement.dir = "rtl"
        lang.textContent = "English"
    }else{
        document.documentElement.lang = "en"
        document.documentElement.dir = "ltr"
        lang.textContent = "العربية"
        console.log(55);
    }
}

const coursesData = [
    {
        id: "cs",
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
        link: ""
    },
    {
        id: "eng",
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
        link: "math.html"
    },
    {
        id: "cs",
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
        link: ""
    },
    {
        id: "eng",
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
        link: ""
    },
    {
        id: "cs",
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
        link: ""
    },
    {
        id: "eng",
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
        link: ""
    },
    {
        id: "cs",
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
        link: ""
    },
    {
        id: "eng",
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
        link: ""
    },
    {
        id: "cs",
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
        link: ""
    },
    {
        id: "eng",
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
        link: ""
    },
    {
        id: "cs",
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
        link: ""
    },
]

const whyUsCards = [
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

const coursesNo = [
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

const messages = [
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

const valuables =[
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

const whatWeDos = [
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