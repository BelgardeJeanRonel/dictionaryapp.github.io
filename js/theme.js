export const theme = {
    init : function() {
        theme.themeEvent();
    },

    themeEvent : function() {
        const btnDark = document.querySelector(".mode__btn");
        const circle = document.querySelector(".circle");
        const body = document.querySelector("body");

        btnDark.addEventListener("click", function() {

            body.classList.toggle("theme-dark");

            if (body.classList.contains("theme-dark")) {
                circle.style.float = "right";
                btnDark.style.background = "blue";
            }else{
                circle.style.float = "left";
                btnDark.style.background = "gray";
            }
        })

    }
}