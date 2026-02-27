AOS.init();



const active = document.querySelector('.back-top')
const lang = document.querySelector(".lang")

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

const open = document.querySelector('.menu button')
const close = document.querySelector('.sidemenu .close')
const side = document.querySelector('.sidemenu')
checkActiveLink();

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



export const coursesData = [
  {
    id: "eng-211",
    idName:{
            ar:" قسم علوم الحاسوب ",
            en:"Computer Science"
        },
    title: { ar: "مقدمة في هندسة البرمجيات", en: "Introduction to Software Engineering" },
    faculty: "cs",
    level: {
            ar:"المستوى الثاني",
            en:"Second Level"
        },
    semester: {
            ar:"الفصل الثاني",
            en:"Second Semester"
        },
    description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
    lectures: [
      {
        id: "eng-211-l1",
        title: { ar: "مقدمة الكورس", en: "Course Introduction" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL: "https://youtu.be/aZcUoPaEuoM?si=14P4z7TYBOu6Yw29",
      },
      {
        id: "eng-211-l2",
        title: { ar: "تطوير البرامج المهنية و التمهيدية", en: "Introductory and Professional Software Development" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=dTomNirU-Jw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=2",
      },
      {
        id: "eng-211-l3",
        title: { ar: "هندسة البرمجيات", en: "Software Engineering" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=dTomNirU-Jw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=2",
      },
      {
        id: "eng-211-l4",
        title: { ar: "أساسيات هندسة البرمجيات", en: "Software Engineering Fundamentals" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=qDOz-eK901Y&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=4",
      },
      {
        id: "eng-211-l5",
        title: { ar: "دراسة الحالة", en: "Case Study" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=V_dv3N-ZouI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=6",
      },
      {
        id: "eng-211-l6",
        title: { ar: "محطة الطقس البرية", en: "Ground Weather Station" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=JahJLuobchw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=6",
      },
      {
        id: "eng-211-l7",
        title: { ar: "عملية البرمجيات", en: "Software Process" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=tOHhLoXGZCc&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=7",
      },
      {
        id: "eng-211-l8",
        title: { ar: "التطوير التدريجي", en: "Incremental Development" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=gAlGdUWck9E&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=8",
      },
      {
        id: "eng-211-l9",
        title: { ar: "أنشطة عملية", en: "Practical Activities" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=RmYMVRCqxBA&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=9",
      },
      {
        id: "eng-211-l10",
        title: { ar: "المرحلة والاختبار", en: "Phases and Testing" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=_GP4j-mKPYg&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=10",
      },
      {
        id: "eng-211-l11",
        title: { ar: "نماذج البرامج", en: "Software Models" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=n9pO4i_9Lko&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=11",
      },
      {
        id: "eng-211-l12",
        title: { ar: "تحسين العمليات", en: "Process Improvement" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=lgLVzI_MWQk&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=12",
      },
      {
        id: "eng-211-l13",
        title: { ar: "تطوير البرمجيات بستخدام Agile", en: "Agile Software Development" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=-7LinGqHWQA&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=13",
      },
      {
        id: "eng-211-l14",
        title: { ar: "طرق agile", en: "Agile Methods" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=zC3JtMqelSM&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=14",
      },
      {
        id: "eng-211-l15",
        title: { ar: "تقنيات التطوير باستخدام ِagile", en: "Agile Development Techniques" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=z_BemS0y1ho&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=15",
      },
      {
        id: "eng-211-l16",
        title: { ar: "قصص المستخدم ومتطلباته", en: "User Stories and Requirements" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=ia7wKpyuSsw&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=16",
      },
      {
        id: "eng-211-l17",
        title: { ar: "تطوير الاختبار الاول", en: "Test-First Development" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "youtube.com/watch?v=d7tdiTudu_Y&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=17&pp=iAQB",
      },
      {
        id: "eng-211-l18",
        title: { ar: "تمتة الاختبار", en: "Test Automation" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=Vqw4ICMp-jI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=18",
      },
      {
        id: "eng-211-l19",
        title: { ar: "ادارة مشروع agile + scrum", en: "Agile + Scrum Project Management" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=FlyzF9UNOmg&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=19",
      },
      {
        id: "eng-211-l20",
        title: { ar: "دورة scrum sprint", en: "Scrum Sprint Cycle" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=oSpCxdxMcS8&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=20",
      },
      {
        id: "eng-211-l21",
        title: { ar: "نمذجة النظام", en: "System Modeling" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=ssINghF895E&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=21",
      },
      {
        id: "eng-211-l22",
        title: { ar: "تموذج السياق", en: "Context Modeling" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=41wXSMUJP0M&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=22",
      },
      {
        id: "eng-211-l23",
        title: { ar: "نماذج التفاعل", en: "Interaction Models" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=6W8L2p139iI&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=23",
      },
      {
        id: "eng-211-l24",
        title: { ar: "النماذج الهيكلية", en: "Structural Models" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=l3Xb2WlWxVM&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=24",
      },
      {
        id: "eng-211-l25",
        title: { ar: "نماذج السلوك", en: "Behavioral Models" },
        description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        videoURL:
          "https://www.youtube.com/watch?v=9iESLItGVa4&list=PLfJcnsgJ9GzKS_1wKLgMaRnxOiqLDeLRA&index=25",
      },
    ],
  },
  {
    id: "eng-212",
    idName:{
            ar:"قسم علوم الحاسوب ",
            en:"Computer Science"
        },
    title: { ar: "تراكيب بيانات", en: "Data Structures" },
    faculty: "cs",
    level: {
            ar:"المستوى الثاني",
            en:"Second Level"
        },
    semester: {
            ar:"الفصل الأول",
            en:"First Semester"
        },
    description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
    lectures: [
      {
        id: "eng-212-l1",
        title: { ar: "مقدمة الكورس", en: "Course Introduction" },
        description: { ar: "مقدمة بسيطة عن المادة والمواضيع التي سيتم شرحها.", en: "A simple introduction to the course and the topics that will be covered." },
        videoURL: "https://youtu.be/DocSkU1Qyos?si=FsFLc4CfSH1O8Z8B",
      },
      {
        id: "eng-212-l2",
        title: { ar: "مراجة لغة جافا", en: "Java Review" },
        description:
          { ar: "مراجعة سريعة من لغة Java وأنواع البيانات والدوال والكائنات.", en: "A quick review of Java, data types, functions, and objects." },
        videoURL: "https://youtu.be/SCEAJouTHPI?si=re0PGuFHmpZt2eqM",
      },
      {
        id: "eng-212-l3",
        title: { ar: "تمثيل البيانات في الذاكرة", en: "Data Representation in Memory" },
        description:
          { ar: "طرق تمثيل البيانات المترابطة في الذاكرة، وتوضيح مفهوم التمثيل الديناميكي عن طريق القائمة المرتبطة المفردة (SLL).", en: "Methods for representing linked data in memory, and explaining dynamic representation using a Singly Linked List (SLL)." },
        videoURL: "https://youtu.be/mzh5XO3jyDo?si=O3QMU9IKj9ULjSm7",
      },
      {
        id: "eng-212-l4",
        title: { ar: "كيفية انشاء SLL", en: "How to Create an SLL" },
        description:
          { ar: "شرح كيفية إنشاء SLL برمجياً وهندسياً وإنشاء Nodes وربطهم بها.", en: "Explains how to build an SLL programmatically and conceptually, including creating and linking nodes." },
        videoURL: "https://www.youtube.com/watch?v=F0xCZ3K5zWU",
      },
      {
        id: "eng-212-l5",
        title: { ar: "العمليات على SLL (1)", en: "Operations on SLL (1)" },
        description:
          { ar: "تطبيق برمجي وهندسي لعمليات على SLL مثل طباعة محتويات القائمة أو البحث عن node معينة.", en: "Programmatic and conceptual implementation of SLL operations such as printing list contents and searching for a specific node." },
        videoURL: "https://www.youtube.com/watch?v=roQsy2ro2qA",
      },
      {
        id: "eng-212-l6",
        title: { ar: "العمليات على SLL (2)", en: "Operations on SLL (2)" },
        description:
          { ar: "شرح عملية الإضافة برمجياً وهندسياً لأي node في بداية أو وسط أو نهاية القائمة.", en: "Explains insertion operations programmatically and conceptually for any node at the beginning, middle, or end of the list." },
        videoURL: "https://youtu.be/NO3a_83MCRU?si=j93MbH1naQ6Y4jTw",
      },
      {
        id: "eng-212-l7",
        title: { ar: "العمليات على SLL (3)", en: "Operations on SLL (3)" },
        description:
          { ar: "شرح تطبيقات أخرى على القائمة مثل حذف node أو قلب القائمة أو دمج قائمتين.", en: "Explains additional list operations such as deleting a node, reversing a list, or merging two lists." },
        videoURL: "https://youtu.be/E4_pNeJuaXA?si=TOiHNvoyROq0AHsx",
      },
      {
        id: "eng-212-l8",
        title: { ar: "انشاء CLL & DLL", en: "Creating CLL & DLL" },
        description:
          { ar: "شرح هياكل بيانات مرتبطة أخرى مثل القائمة المرتبطة المزودجة (DLL) و القائمة المرتبطة الدائرية (CLL).", en: "Explains other linked data structures such as Doubly Linked Lists (DLL) and Circular Linked Lists (CLL)." },
        videoURL: "https://youtu.be/Ok9JsGHm4HA?si=INZqAinytBU9EzMx",
      },
      {
        id: "eng-212-l9",
        title: { ar: "الاستدعاء الذاتي (Recursion) (1)", en: "Recursion (1)" },
        description: { ar: "شرح مفهوم الاستدعاء الذاتي للدوال (Recursion).", en: "Explains the concept of function recursion." },
        videoURL: "https://youtu.be/ulkviIBSGgM?si=HrddCW_HcF8uG852",
      },
      {
        id: "eng-212-l10",
        title: { ar: "الاستدعاء الذاتي (Recursion) (2)", en: "Recursion (2)" },
        description: { ar: "شرح هندسي لبعض الدوال التي تطبق مفهوم الاستدعاء الذاتي.", en: "Conceptual explanation of functions that apply recursion." },
        videoURL: "https://youtu.be/N7TrfqIKRwQ?si=5nVsFmkL88rmgugE",
      },
      {
        id: "eng-212-l11",
        title: { ar: "كيفية انشاء Stack", en: "How to Create a Stack" },
        description:
          { ar: "شرح مفهوم ال Stack ومبدأ LIFO الذي يقوم عليه وكيفية الإضافة والحذف منه.", en: "Explains the Stack concept, the LIFO principle, and how to push and pop elements." },
        videoURL: "https://youtu.be/fG455l8iuHA?si=Tn_lFk6avguwWCHO",
      },
      {
        id: "eng-212-l12",
        title: { ar: "خوارزمية التحويل من infext الى podtfix", en: "Infix to Postfix Conversion Algorithm" },
        description:
          { ar: "شرح الخوارزمية المتبعة في تحويل التعبيرات الرياضية من صورة infix إلى صورة postfix.", en: "Explains the algorithm used to convert mathematical expressions from infix form to postfix form." },
        videoURL: "https://youtu.be/o7t4Iuh1qJA?si=TxZFLr0z0SiAiAW_",
      },
      {
        id: "eng-212-l13",
        title: { ar: "تطبيق على ال stack (1)", en: "Stack Application (1)" },
        description:
          { ar: "تطبيق عملي على Stack في تحويل التعبيرات الرياضية من infix إلى postfix.", en: "Practical application of Stack in converting mathematical expressions from infix to postfix." },
        videoURL: "https://youtu.be/7pz1nzzXfBQ?si=aa06Aa1Tq2Y687dE",
      },
      {
        id: "eng-212-l14",
        title: { ar: "تطبيق على ال stack (2)", en: "Stack Application (2)" },
        description:
          { ar: "شرح تطبيقات مفهوم ال Stack في حساب قيمة التعبيرات الرياضية التي على شكل postfix، وفحص توازن الأقواس.", en: "Explains Stack applications for evaluating postfix expressions and checking balanced parentheses." },
        videoURL: "https://youtu.be/1iXSN6YRa4g",
      },
      {
        id: "eng-212-l15",
        title: { ar: "تطبيق على ال stack (3)", en: "Stack Application (3)" },
        description:
          { ar: "استعمال ال Stack في تطبيق الدوال التي تنفذ استدعاء ذاتي (Recursion).", en: "Using Stack in implementing functions that perform recursion." },
        videoURL: "https://youtu.be/fVS-pHdCJ1s",
      },
      {
        id: "eng-212-l16",
        title: { ar: "كيفية أنشاء ال Queue", en: "How to Create a Queue" },
        description:
          { ar: "شرح مفهوم الطابور (Queue) ومبدأ FIFO الذي يتبعه في تمثيل البيانات.", en: "Explains the Queue concept and the FIFO principle used in data representation." },
        videoURL: "https://youtu.be/4C3U2V0ghcU?si=oznEAT7txtgS8elI",
      },
      {
        id: "eng-212-l17",
        title: { ar: "الشجرة الثنائية (Binary tree)", en: "Binary Tree" },
        description:
          { ar: "شرح مفهوم الشجرة الثنائية (Binary tree) وكيفية ارتباط ال nodes معاً والمفاهيم المتعلقة بها.", en: "Explains the Binary Tree concept, how nodes are connected, and related concepts." },
        videoURL: "https://youtu.be/kpNPObajBok?si=6AAHnkpivyWeHE6V",
      },
    ],
  },
  {
    id: "eng-213",
    idName:{
            ar:"قسم الهندسة",
            en:"Engineering"
        },
    title: { ar: "نظرية الأتمتة", en: "Automata Theory" },
    faculty: "eng",
    level: { ar: "المستوى الثالث", en: "Third Level" },
    semester: {
            ar:"الفصل الأول",
            en:"First Semester"
        },
    description: { ar: "Lorem ipsum dolor sit, amet consectetur adipisicing.", en: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
    lectures: [
      {
        id: "eng-213-l1",
        title: { ar: "مقدمة الكورس", en: "Course Introduction" },
        description:
          { ar: "شرح مفهوم كلمة الأتمتة و أهميتها و مجالاتها ، و تعريف بعض المصطلحات الشائعة في المادة .", en: "Explains the concept of automata, its importance and fields, and defines common course terms." },
        videoURL: "https://youtu.be/eD92CfCDgIg?si=LSfa_4ETdiBu_FfF",
      },
      {
        id: "eng-213-l2",
        title: { ar: "حل لغز", en: "Solving a Puzzle" },
        description: { ar: "حل لغز و توضيح علاقته بال Finite Automata .", en: "Solve a puzzle and explain its relation to Finite Automata." },
        videoURL: "https://youtu.be/BjgK9yYDOhQ?si=B-Z7SxuJRnOdPWUT",
      },
      {
        id: "eng-213-l3",
        title: { ar: "توضيح ال مفهوم Finite Automata", en: "Explaining the Finite Automata Concept" },
        description:
          { ar: "توضيح معنى Finite Automata و مكوناتها و توضيح مصطلح ال formal language .", en: "Explains the meaning of Finite Automata, its components, and the term formal language." },
        videoURL: "https://youtu.be/EQWuRlhSTuo?si=jdNPxFUYG4nXkz3x",
      },
      {
        id: "eng-213-l4",
        title: { ar: "أنواع الFA", en: "Types of FA" },
        description:
          { ar: "تثبيت مصطلح FA ،،انواع ال FA -> DFA , NFA و الفرق بينهم ، و تحديد اللغة التي تمثلها ال F.", en: "Reinforces the FA term, covers DFA and NFA types, explains the differences, and identifies the language represented by the automaton." },
        videoURL: "https://youtu.be/grMNGq7lLms?si=kcIAgihNTr58Ipee",
      },
      {
        id: "eng-213-l5",
        title: { ar: "الفرق بين NFA & DFA", en: "Difference Between NFA & DFA" },
        description:
          { ar: "تكملة شرح امثلة و تحديد متى تكون الرسمة DFA و NFA و ما الفرق بينهم", en: "Continues with examples and clarifies when a diagram is DFA or NFA and the differences between them." },
        videoURL: "https://youtu.be/dTqTf4KTT5M?si=fKUME48Lp5Kh1GkL",
      },
      {
        id: "eng-213-l6",
        title: { ar: "حل أسئلة DFA", en: "Solving DFA Questions" },
        description: { ar: "حل اسئلة على ال DFA ", en: "Solving questions on DFA." },
        videoURL: "https://youtu.be/C4KZvbT8fnE?si=oubNln1BKIpu5q5M",
      },
      {
        id: "eng-213-l7",
        title: { ar: "مناقشة أسئلة DFA (1)", en: "DFA Question Discussion (1)" },
        description: { ar: "مناقشة سؤال المحاضرة السابقة .", en: "Discusses a question from the previous lecture." },
        videoURL: "https://youtu.be/WxAGa-0mZ9Y?si=jk14IEeA6mkkHNiU",
      },
      {
        id: "eng-213-l8",
        title: { ar: "مناقشة أسئلة DFA (2)", en: "DFA Question Discussion (2)" },
        description: { ar: "استكمال مناقشة السؤال و أمثلة ..", en: "Continues the question discussion with examples." },
        videoURL: "https://youtu.be/ld_wv2VTeNU?si=gEXgakUS2R3Js7Gw",
      },
      {
        id: "eng-213-l9",
        title: { ar: "مناقشة أسئلة DFA (3)", en: "DFA Question Discussion (3)" },
        description: { ar: "حل اسئلة مهمة ...", en: "Solves important questions." },
        videoURL: "https://youtu.be/Mu4CPCzCgT8?si=sRNUlNv05h5YNj48",
      },
      {
        id: "eng-213-l10",
        title: { ar: "مناقشة أسئلة DFA (4)", en: "DFA Question Discussion (4)" },
        description: { ar: "استكمال حل اسئلة و توضيح مصطلح ال dead stute .", en: "Continues solving questions and explains the dead state term." },
        videoURL: "https://youtu.be/t145ZlsZYVE?si=iJgMBQeJ7R0xwdBj",
      },
      {
        id: "eng-213-l11",
        title: { ar: "مناقشة أسئلة DFA (5)", en: "DFA Question Discussion (5)" },
        description: { ar: "حل اسئلة على DFA و اسئلة في النهاية للطالب ", en: "Solves DFA questions and includes end-of-lecture questions for students." },
        videoURL: "https://youtu.be/cXPqxSGjBFg?si=DdtpjnOsF97OIar5",
      },
      {
        id: "eng-213-l12",
        title: { ar: "مناقشة أسئلة DFA (6)", en: "DFA Question Discussion (6)" },
        description: { ar: "استكمال اسئلة ..", en: "Continues solving questions." },
        videoURL: "https://youtu.be/QStxIFJbepM?si=rbWgaXrsTMq3wYrz",
      },
      {
        id: "eng-213-l13",
        title: { ar: "شرح NFA", en: "Explaining NFA" },
        description: { ar: "شرح NFA و توضيحها بالأمثلة ", en: "Explains NFA with examples." },
        videoURL: "https://youtu.be/CxK_T9_WCeo?si=dCHveaPbPJQIsf73",
      },
      {
        id: "eng-213-l14",
        title: { ar: "حل أسئلة NFA", en: "Solving NFA Questions" },
        description: { ar: "استكمال حل اسئلة على NFA.", en: "Continues solving NFA questions." },
        videoURL: "https://youtu.be/IKJfdugRyHg?si=x06HAT0WMzJs8twf",
      },
      {
        id: "eng-213-l15",
        title: { ar: "التحويل من NFA الى DFA", en: "Converting NFA to DFA" },
        description: { ar: "خوارزمية طريقة تحويل NFA الى DFA ، و ليش بنحتاج نحول ", en: "Covers the algorithm for converting NFA to DFA and why this conversion is needed." },
        videoURL: "https://youtu.be/dfa5JpuW8ek?si=YomhCNvweYJHqdBQ",
      },
      {
        id: "eng-213-l16",
        title: { ar: "حل أسئلة على التحويل من NFA الى DFA", en: "Solving Questions on NFA-to-DFA Conversion" },
        description: { ar: "حل اسئلة على خوارزمية التحويل من NFAالى DFA ", en: "Solves questions on the NFA-to-DFA conversion algorithm." },
        videoURL: "https://youtu.be/j185djkMb7E?si=Sny9EUWE5l4ftZ-E",
      },
      {
        id: "eng-213-l17",
        title: { ar: "شرح NFA with Lamda transitions", en: "Explaining NFA with Lambda Transitions" },
        description: { ar: "شرح NFA with Lamda transitions ، و حل أمثلة عليها .", en: "Explains NFA with lambda transitions and solves related examples." },
        videoURL: "https://youtu.be/5QwspuIyaMg?si=YkC8B9KCgjLUD5e5",
      },
      {
        id: "eng-213-l18",
        title: { ar: "التحويل من NFA with lamda transition الى DFA", en: "Converting NFA with Lambda Transitions to DFA" },
        description:
          { ar: "اسئلة على التحويل من NFA with Lamda transition الى DFA ، و اسئلة في نهاية المحاضرة للطالب .", en: "Questions on converting NFA with lambda transitions to DFA, with end-of-lecture questions for students." },
        videoURL: "https://youtu.be/8OuiIDhI4Kw?si=jmeTeeV1DFOOzPm_",
      },
    ],
  },
];


export let anyCoyrse = function() {
  console.log("Hello from function");
};

const showCourse = document.querySelectorAll(".course a")
showCourse.forEach(showCourse=>{
  showCourse.onclick = ()=>{
    anyCoyrse = function() {
      return showCourse.id;
    };
  }
})

import * as course from "./course.js";
import * as CoursePresentationn from "./CoursePresentationn.js"

course.reset()
CoursePresentationn.reset()

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
        formSelec1lev: "First Level",
        formSelec2lev: "Second Level",
        formSelec3lev: "Third Level",
        formSelec2: "Semester",
        formSelec2seas: "First Semester",
        formSelec2seas2: "Second Semester",
        courseNo: "Showing Courses",
        showBtn: "Show Course"
      },
      CoursePresentationn: {
        back: "<- Back to Courses",
        progressTitle: "Course Progress",
        lessonWord: "Lesson",
        completed: "Completed",
        lessonsTitle: "Lessons List",
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
        head: "منصة التعليم الأكاديمي",
        li1:"الرئيسية",
        li2:"الكورسات",
        li3:"حول المنصة"
      },
      footer: {
        copy: "منصة التعليم الأكاديمي ©2026 جميع الحقوق محفوظة"
      },
      index: {
        title: "منصة التعلم الأكاديمي للمهندسين",
        title2: "رحلتك التعليمية تبدأ من هنا",
        desc: "منصة تعليمية متكاملة لطلبة الهندسة وتقنية المعلومات. اكتشف مئات الكورسات الأكاديمية المنظمة والمصممة لدعم رحلتك التعليمية.",
        show: "تصفح الكورسات ->",
        learn: "تعرّف علينا",
        courseNo: "مقرر أكاديمي",
        levelsNo: "مستوى أكاديمي",
        subNo: "تخصص",
        lectsNo: "محاضرة",
        whyUs: "لماذا تختار منصتنا؟",
        whyUsDesc: "نوفر لك تجربة تعلم متكاملة مصممة خصيصًا لطلبة الهندسة وتقنية المعلومات",
        whyUs1: "محتوى منظم وشامل",
        whyUs1desc: "جميع الكورسات مرتبة حسب المستوى الأكاديمي والفصل الدراسي لتسهيل الوصول والتعلم المنهجي",
        whyUs2: "تتبع تقدّم واضح",
        whyUs2desc: "تابع تقدّمك في كل كورس بسهولة من خلال مؤشرات إنجاز واضحة",
        whyUs3: "مصممة للطلاب",
        whyUs3desc: "واجهة بسيطة ونظيفة صممت لتلائم احتياجات طلاب الجامعة",
        whyUs4: "جودة أكاديمية",
        whyUs4desc: "محتوى تعليمي احترافي يغطي المواد الأساسية في مجالات الهندسة وتقنية المعلومات",
        whyUs5: "تطوير مستمر",
        whyUs5desc: "نقوم بتحديث المحتوى باستمرار لمواكبة أحدث التطورات التقنية والهندسية",
        whyUs6: "تعلم ذكي",
        whyUs6desc: "نظام تصفية متقدم يساعدك على الوصول إلى الكورس المناسب بسرعة وسهولة",
        start: "ابدأ رحلتك التعليمية الآن",
        startDesc: "انضم إلى آلاف الطلاب الذين يطورون مهاراتهم الأكاديمية عبر منصتنا التعليمية",
        startBtn: "استكشف الكورسات ->"
      },
      course: {
        title: "الكورسات الأكاديمية",
        desc: "تصفح جميع كورسات الهندسة وتقنية المعلومات",
        formTitle: "تصفية الكورسات",
        formSelec1: "المستوى الأكاديمي",
        formSelec1lev: "المستوى الأول",
        formSelec2lev: "المستوى الثاني",
        formSelec3lev: "المستوى الثالث",
        formSelec2: "الفصل الدراسي",
        formSelec2seas: "الفصل الأول",
        formSelec2seas2: "الفصل الثاني",
        courseNo: "عرض الكورسات",
        showBtn: "عرض الكورس"
      },
      CoursePresentationn: {
        back: "<- العودة إلى الكورسات",
        progressTitle: "تقدم الكورس",
        lessonWord: "محاضرة",
        completed: "مكتمل",
        lessonsTitle: "قائمة المحاضرات",
      },
      about: {
        pageTitle: "من نحن",
        heroTitle: "عن منصة التعليم الأكاديمي",
        heroDesc: "منصة تعليمية متخصصة تهدف إلى دعم طلبة الهندسة وتقنية المعلومات خلال رحلتهم الدراسية عبر محتوى منظم وشامل.",
        message1Title: "رسالتنا",
        message1Desc: "نسعى إلى توفير بيئة تعلم رقمية متكاملة تساعد طلاب الجامعات في الهندسة وتقنية المعلومات على الوصول إلى محتوى أكاديمي منظم وعالي الجودة، بما يعزز تجربتهم التعليمية ويدعم تفوقهم الأكاديمي.",
        message2Title: "رؤيتنا",
        message2Desc: "أن نكون المنصة التعليمية الرائدة في العالم العربي لطلبة الهندسة وتقنية المعلومات، وأن نساهم في بناء جيل من المهندسين والتقنيين المؤهلين لمواجهة تحديات المستقبل وصناعة الابتكار في مجالاتهم.",
        valuesTitle: "قيمنا الأساسية",
        valuesDesc: "المبادئ التي نؤمن بها وتوجه عملنا اليومي",
        value1Title: "الجودة الأكاديمية",
        value1Desc: "نضع احتياجات الطلاب أولًا ونصمم تجربة تعلم تناسب متطلباتهم",
        value2Title: "التركيز على الطالب",
        value2Desc: "واجهة واضحة وبسيطة صممت خصيصًا لتلبية احتياجات طلبة الجامعة",
        value3Title: "التحسين المستمر",
        value3Desc: "نعمل باستمرار على تطوير المنصة والمحتوى لمواكبة أحدث التطورات التقنية والأكاديمية",
        value4Title: "التنظيم والوضوح",
        value4Desc: "نقدم المحتوى بطريقة منظمة وواضحة تسهل عملية التعلم والوصول إلى المعلومات",
        value5Title: "الابتكار",
        value5Desc: "نشجع التفكير الإبداعي والابتكار في تقديم الحلول التعليمية",
        value6Title: "التميز",
        value6Desc: "نسعى إلى التميز في كل جانب من جوانب المنصة والخدمات التي نقدمها",
        offerTitle: "ماذا نقدم؟",
        offer1Title: "كورسات أكاديمية شاملة",
        offer1Desc: "نغطي جميع المواد الأساسية في الهندسة وتقنية المعلومات عبر المستويات الأكاديمية من الأول إلى الخامس.",
        offer2Title: "تنظيم واضح ومنهجي",
        offer2Desc: "جميع الكورسات منظمة حسب التخصص والمستوى الأكاديمي والفصل الدراسي لتسهيل الوصول السريع لما يحتاجه الطالب.",
        offer3Title: "واجهة استخدام بسيطة",
        offer3Desc: "واجهة سهلة وواضحة تركز على الأساسيات فقط، مما يتيح إنجاز المهام بسرعة وبأقل جهد وبدون تعقيد.",
        offer4Title: "متابعة التقدم الدراسي",
        offer4Desc: "نوفر نظامًا مرئيًا واضحًا لمتابعة تقدمك في كل كورس، ليساعدك على الاستمرار والتحفيز طوال رحلتك التعليمية.",
        ctaTitle: "هل أنت مستعد للبدء؟",
        ctaDesc: "انضم إلينا اليوم واستكشف عالمًا من المعرفة الأكاديمية المنظمة",
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

        updateContent(); // نص عربي نص عربي

        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = newLang;

        lang.textContent = newLang === "ar" ? "English" : "العربية";

        localStorage.setItem("lang", newLang);


        course.reset()
        CoursePresentationn.reset()
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
    course.reset();
    CoursePresentationn.reset()
  });

});

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
}

function applyDirection(lang) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}
