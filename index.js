"use strict";

let buttonList = [...document.querySelectorAll(".list-group-item")];

for (button of buttonList) {
    button.addEventListener("click", (e)=> {
        e.target.classList.add("active");
    })
}