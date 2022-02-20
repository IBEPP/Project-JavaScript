// les differants selector
// pour recuperer des trucs en html : document.querySelector('body')
// pour recuperer des trucs en html : document.querySelector('#body')pour viser plus precisement
// document.querySelector('h4').style.background = "red";


// const baliseHtml = document.querySelector("h4");

// console.log(baliseHtml);

// baliseHtml.style.background = "red";

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");

questionContainer.addEventListener("click" , () => {
    questionContainer.style.background = "red";
    questionContainer.style.border = "3px solid blue";
    questionContainer.classList.toggle("question-click")
});

btn1.addEventListener("click", () => {
    reponse.classList.add("show-reponse")
    reponse.style.background = "green";
})

btn2.addEventListener("click", () => {
    reponse.classList.add("show-reponse")
    reponse.style.background = "red";
})

//--------------------------------------------------------
// Mouse Events

let mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%";
    mousemove.style.border = "2px solid teal";
})

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "blue";
})

reponse.addEventListener("mouseover", () => {
    reponse.style.transform = "rotate(2deg)";
})

//--------------------------------------------------------
// keyPresse Envent

const keypresseContainer = document.querySelector(".keypress");

const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress", (e) =>{
    key.textContent = e.key;
    
    if (e.key === "j") {
        keypresseContainer.style.background = "gold";
    } else if (e.key === "h") {
        keypresseContainer.style.background = "blue";
    } else {
        keypresseContainer.style.background = "purple";
    }

    ring(e.key);
});

//--------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

console.log(nav);

window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50%";
    }
})

//--------------------------------------------------------










