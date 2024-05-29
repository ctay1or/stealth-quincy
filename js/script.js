<<<<<<< HEAD
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
})

fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
})

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
=======
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var topHeading = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        ball.classList.remove("light");
        ball.classList.remove("move-right");
        topHeading.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("light");
        ball.classList.add("move-right");
        topHeading.innerText = "Party Quincy";
    }
>>>>>>> toggle
});