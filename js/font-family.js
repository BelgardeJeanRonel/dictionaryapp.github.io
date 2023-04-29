import { getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";

export const fontFamily = {
    init : function() {
        const btnFont = document.querySelector(".btn-serif");
        const dropdown = document.querySelector(".dropdown");
        const iconArrow = document.querySelector(".icon");

        btnFont.addEventListener("click", function() {
            dropdown.classList.toggle("ul-on");

            if (dropdown.classList.contains("ul-on")) {
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-up");
            }else{
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-down");
            }
        })

        const serif = document.querySelector(".serif");
        const sansSerif = document.querySelector(".sans-serif");
        const textValue = document.querySelector(".btn-serif span");
        const inputUser = document.querySelector("#input__user");

        serif.addEventListener("click", function() {
            document.body.style.fontFamily = "serif";
            inputUser.style.fontFamily = "serif";
            textValue.innerHTML = "Serif";

            fontFamily.saveFontInStorage();
        })

        sansSerif.addEventListener("click", function() {
            document.body.style.fontFamily = "sans-serif";
            inputUser.style.fontFamily = "sans-serif";
            textValue.innerHTML = "Sans serif";

            fontFamily.saveFontInStorage();
        })

        document.querySelector("main").addEventListener("click", function() {
            dropdown.classList.remove("ul-on");

            if (dropdown.classList.contains("ul-on")) {
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-up");
            }else{
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-down");
            }
        })

        document.querySelector("footer").addEventListener("click", function() {
            dropdown.classList.remove("ul-on");

            if (dropdown.classList.contains("ul-on")) {
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-up");
            }else{
                iconArrow.setAttribute("xlink:href", "svg/spriteIconArrow.svg#icon-arrow-down");
            }
        })

        fontFamily.loadFontInStorage();
    },

    saveFontInStorage : function() {

        let fontFamily;

        if (document.body.style.fontFamily === "sans-serif") {
            fontFamily = "sans-serif";
        }else{
            fontFamily = "serif";
        }

        moveToLocalStorage("fontFamily", fontFamily);
    },

    loadFontInStorage : function() {
        const fontFamily = getItemInLocalStorage("fontFamily");
        const textValue = document.querySelector(".btn-serif span");
        const inputUser = document.querySelector("#input__user");

        if (fontFamily === "sans-serif") {
            document.body.style.fontFamily = "sans-serif";
            inputUser.style.fontFamily = "sans-serif";
            textValue.innerHTML = "Sans serif";
        }else{
            document.body.style.fontFamily = "serif";
            inputUser.style.fontFamily = "serif";
            textValue.innerHTML = "Serif";
        }

    }
}