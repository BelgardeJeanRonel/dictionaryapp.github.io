import { getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";


export const theme = {
    init : function() {
        theme.themeEvent();

        theme.loadDarkModeInStorage();
    },

    themeEvent : function() {
        const btnDark = document.querySelector(".mode__btn");
        const circle = document.querySelector(".circle");
        const body = document.querySelector("body");

        btnDark.addEventListener("click", function() {

            body.classList.toggle("theme-dark");

            theme.saveDarkModeInStorage();

            if (body.classList.contains("theme-dark")) {
                circle.style.float = "right";
                btnDark.style.background = "rgb(78, 49, 210)";
            }else{
                circle.style.float = "left";
                btnDark.style.background = "gray";
            }
        })

    },

    saveDarkModeInStorage : function() {

        const isDarkMode = isActive(document.querySelector("body"), "theme-dark");

        moveToLocalStorage("darkMode", isDarkMode);
    },

    loadDarkModeInStorage : function() {
        const isDarkMode = getItemInLocalStorage("darkMode");

        if (isDarkMode) {
            document.body.classList.add("theme-dark");

            document.querySelector(".mode__btn").style.background = "rgb(78, 49, 210)";
            document.querySelector(".circle").style.float = "right";
        }

    }
}