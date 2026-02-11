const lect = document.querySelector(".container .lect")
// console.log(lect);

// let users = JSON.parse(localStorage.getItem("users"));
// function deleteUser(id) {
//   users = users.filter((user) => user.id != id);
//   localStorage.setItem("users", JSON.stringify(users));
//   generateUsers();
// }

const lects = [
    {
        name: " الرياضيات الهندسية ",
        desc: " يغطي هذا الكورس المفاهيم الرياضية الأساسية اللازمة للطلاب الهندسيين، بما في ذلك التفاضل، التكامل، والمعادلات التفاضلية. التركيز على التطبيقات الهندسية العملية. ",
        lects: [
            {
                no: 1,
                title: " مراجعة الجبر والدوال ",
                vidio: "https://www.youtube.com/embed/1QHqj8u9n2c"
            },
        ]
    },
]


let done = document.querySelectorAll(".sec4 .m-3")

// console.log(done);

// const Viewed = JSON.parse(localStorage.getItem("Viewed")) || []
const Viewed = document.querySelector(".sec3 .done")
let lecturesViewed = document.querySelector(".cont h5")
const ViewedPercent = document.querySelector(".sec3 p span")
// console.log(Viewed.style.width.value);


// console.log(Viewed.style.width);

let lecturesDone = JSON.parse(localStorage.getItem("lecturesDone"));
// console.log(lecturesDone);
lecturesDone = lecturesDone ?? [];



// if(lecturesDone){
//     lecturesDone.forEach((lect)=>{ lect.classList.add("is-active") 
//     const check = el.querySelector(".check") 
//      check.children[0].classList.toggle("d-none") 
//       check.children[1].classList.toggle("d-none")
//      })
// }

lecturesDone.forEach((lect) => {
    done.forEach((el) => {
        if (el.dataset.id == lect) {
            el.classList.add("is-active")
            const check = el.querySelector(".check")
            check.children[0].classList.toggle("d-none")
            check.children[1].classList.toggle("d-none")
        }
    })
})



// lecturesDone = lecturesDone.forEach((lect)=>{ lect.classList.add("is-active") ;const check = el.querySelector(".check") ; check.children[0].classList.toggle("d-none") ; check.children[1].classList.toggle("d-none") }) ?? [];


// lecturesDone = lecturesDone.filter((lect)=> 
//     console.log(32)
// )

const length = done.length
// console.log(length);
let view = lecturesDone.length
lecturesViewed.innerHTML = ` ${view}/${length} درس `
ViewedPercent.innerHTML = `${Math.ceil((view / length) * 100)}`
Viewed.style.width = `${ViewedPercent.innerHTML}%`;

done.forEach((el) => {
    el.onclick = () => {
        // console.log(el);
        el.classList.toggle("is-active")
        if (el.classList.contains("is-active")) {
            // console.log(el);
            lecturesDone.push(el.dataset.id)
            // location.href = "https://youtu.be/YopKllz8jxE?si=O8mv7kdzKSsQk0kI"
            // window.open("https://youtu.be/YopKllz8jxE?si=O8mv7kdzKSsQk0kI", "_blank");
            // console.log(object);
            localStorage.setItem("lecturesDone", JSON.stringify(lecturesDone));
            // const check = el.querySelector(".check")
            // // console.log(check);
            // check.children[0].classList.add("d-none")
            // check.children[1].classList.remove("d-none")
            // done = done.map((lect) => lect == el ? el : lect)

            view++
        } else {
            lecturesDone = lecturesDone.filter((lect) => lect != el.dataset.id);
            localStorage.setItem("lecturesDone", JSON.stringify(lecturesDone));
            // const check = el.querySelector(".check")
            // // console.log(check);
            // check.children[0].classList.remove("d-none")
            // check.children[1].classList.add("d-none")
            // done = done.map((lect) => lect == el ? el : lect)
            view--
        }
        lecturesViewed.innerHTML = ` ${view}/${length} درس `
        ViewedPercent.innerHTML = `${Math.ceil((view / length) * 100)}`
        Viewed.style.width = `${ViewedPercent.innerHTML}%`;
        console.log(view);
        const check = el.querySelector(".check")
        // console.log(check);
        check.children[0].classList.toggle("d-none")
        check.children[1].classList.toggle("d-none")
        // console.log(check.children[0].classList + "     "+ check.children[1].classList);
    }
})

// reset();
