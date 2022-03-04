"use strict";

const buttonList = [...document.querySelectorAll(".list-group-item")];

buttonList.forEach((button) => {
    button.addEventListener("click", (e)=> {
        let buttons = e.target.parentNode.children;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        e.target.classList.add("active");
    })
})



