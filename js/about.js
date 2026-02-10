const message = document.querySelector(".hero .messages")

// const messages = [
//     {
//         icon:"fa-solid fa-users-rays",
//         title:" رسالتنا ",
//         desc:" نسعى لتوفير بيئة تعليمية رقميةمتكاملة تساعد طلاب الجامعات في مجالي الهندسة وتكنولوجيا المعلومات على الوصول إلى محتوى أكاديمي منظم وعالي الجودة، مما يعزز من تجربتهم التعليمية ويساهم في تحقيق التميز الأكاديمي. "
//     },
//     {
//         icon:"fa-regular fa-lightbulb",
//         title:" رؤيتنا ",
//         desc:" أن نكون المنصة التعليمية الرائدة في العالم العربي لطلاب الهندسة وتكنولوجيا المعلومات، ونساهم في بناء جيل من المهندسين والتقنيين المؤهلين القادرين على مواجهة تحديات المستقبل وقيادة الابتكار في مجالاتهم. "
//     },
// ]

messages.forEach(msg => {
    // console.log(lang);
    // console.log(msg.title[siteLang]);
    let item = `<div class="col-md-6 col-lg-6 my-3  ">
                        <div class="message  ">
                            <div class="icon ico2 pb-2"><i class="${msg.icon}"></i></div>
                            <h3 class="bold pb-2">${msg.title[siteLang]}</h3>
                            <p>${msg.desc[siteLang]}</p>
                        </div>
                    </div>`
    message?.insertAdjacentHTML('beforeend', item);
})

const valuable = document.querySelector(".container .valuable")
// console.log(valuable);

// const valuables =[
//     {
//         icon:"fa-solid fa-medal",
//         title:" الجودة الأكاديمية ",
//         desc:" نضع احتياجات الطلاب في المقام الأول ونصمم تجربة تعليمية تناسب متطلباتهم "
//     },
//     {
//         icon:"fa-solid fa-users",
//         title:" التركيز على الطالب ",
//         desc:" واجهة نظيفة وبسيطة مصممة خصيصاً لتلبية احتياجات الطلاب الجامعيين "
//     },
//     {
//         icon:"fa-solid fa-medal",
//         title:" التطوير المستمر ",
//         desc:" نسعى دائماً لتحسين منصتنا ومحتوانا لمواكبة أحدث التطورات التقنية والأكاديمية "
//     },
//     {
//         icon:"fa-solid fa-book",
//         title:" التنظيم والوضوح ",
//         desc:" نقدم المحتوى بطريقة منظمة وواضحة تسهل عملية التعلم والوصول للمعلومات "
//     },
//     {
//         icon:"fa-regular fa-lightbulb",
//         title:" الابتكار ",
//         desc:" نشجع التفكير الإبداعي والابتكار في تقديم الحلول التعليمية "
//     },
//     {
//         icon:"fa-solid fa-users-rays",
//         title:" التميز ",
//         desc:" نسعى لتحقيق التميز في كل جانب من جوانب المنصة والخدمات المقدمة "
//     },
// ]

valuables.forEach(val => {
    let item = `<div class="col-lg-4 col-md-6 mb-4">
                        <div class="whyUs">
                            <div class="icon icon3 pb-4"><i class="${val.icon}"></i></div>
                            <h5 class="pb-2 bold">${val.title[siteLang]}</h5>
                            <p>${val.desc[siteLang]}</p>
                        </div>
                    </div>`
    valuable?.insertAdjacentHTML('beforeend', item);
})

const whatWeDo = document.querySelector(".container .whatWeDo")
// console.log(whatWeDo);

// const whatWeDos = [
//     {
//         no: 1,
//         title:" كورسات أكاديمية شاملة ",
//         desc:" نغطي جميع المواد الأساسية في مجالي الهندسة وتكنولوجيا المعلومات عبر المستويات الدراسية المختلفة من المستوى الأول حتى المستوى الخامس. "
//     },
//     {
//         no: 2,
//         title:" تنظيم واضح ومنهجي ",
//         desc:" جميع الكورسات منظمة حسب التخصص، المستوى الأكاديمي، والفصل الدراسي، مما يسهل على الطلاب العثور على ما يحتاجونه بسرعة. "
//     },
//     {
//         no: 3,
//         title:" واجهة استخدام بسيطة ",
//         desc:" واجهة استخدام بسيطة هي واجهة واضحة وسهلة التعلم، تركز على الأساسيات فقط، وتُمكّن المستخدم من إنجاز مهامه بسرعة وبأقل جهد ممكن، دون تعقيد أو عناصر غير ضرورية. "
//     },
//     {
//         no: 4,
//         title:" متابعة التقدم الدراسي ",
//         desc:" نوفر نظام مرئي واضح لمتابعة تقدمك في كل كورس، مما يساعدك على البقاء منظماً ومتحفزاً طوال رحلتك التعليمية. "
//     },
// ]

whatWeDos.forEach(wwd => {
    let item = ``
    if(wwd.no % 2 === 0){
        item = `<div class="col-md-1 pb-3 text-center">
                        <div class="count even">${wwd.no}</div>
                    </div>
                    <div class="col-md-11 pb-4">
                        <h5>${wwd.title[siteLang]}</h5>
                        <p>${wwd.desc[siteLang]}</p>
                    </div>`
    }else{
        item = `<div class="col-md-1 pb-3 text-center">
                        <div class="count">${wwd.no}</div>
                    </div>
                    <div class="col-md-11 pb-4">
                        <h5>${wwd.title[siteLang]}</h5>
                        <p>${wwd.desc[siteLang]}</p>
                    </div>`
    }
    whatWeDo?.insertAdjacentHTML('beforeend', item);
})