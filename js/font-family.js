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
        })

        sansSerif.addEventListener("click", function() {
            document.body.style.fontFamily = "sans-serif";
            inputUser.style.fontFamily = "sans-serif";
            textValue.innerHTML = "Sans Serif";
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
    }
}