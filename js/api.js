import { createTemplate, createElement } from "./_functions.js";

// function createElement (tagName) {
//     const element = document.createElement(tagName);
  
//     return element;
// }

// function createTemplate() {
//     document.querySelector(".section__word").innerHTML = `
//         <div>
//           <h1 class="section__word--title"></h1>
//           <span class="section__word--phonetic"></span>
//         </div>
        
//         <div class="section__word--audio">
//           <svg class="icon-play">
//             <use xlink:href="svg/SpritePlay.svg#play"></use>
//           </svg>
//         </div>`;
//     document.querySelector(".section__noun").innerHTML = `
//     <h2></h2>

//         <h3></h3>
//         <ul>

//         </ul>

//         <div class="synonym"><span></span> <span></span></div>`;
//     document.querySelector(".section__verb").innerHTML = `
//     <h2></h2>

//         <h3></h3>
//         <ul>

//         </ul>`;
//     document.querySelector(".source").innerHTML = `
//     <span></span><a href="" target="_blank"> <i class="fa fa-external-link"></i></a>`;
// }


async function fetchJSON(url, options = {}) {

    const headers = {Accept : "application/json", ...options.headers};
    const response = await fetch(url, {...options, headers})

    if (response.ok){
        return response.json();
    }

    throw new Error("Erreur serveur", {cause : response});
}


export const dictionaryApi = {

    init : function(){
        const paragraphError = document.createElement("p");
        document.querySelector("main").append(paragraphError);
        paragraphError.classList.add("error");

        paragraphError.style.display = 'none';




        const form = document.forms[0];
        form.addEventListener("submit",  async function(event) {

            paragraphError.style.display = 'none';

            try {
                event.preventDefault();
                const inputUser = document.querySelector("#input__user").value;
                const word = await fetchJSON(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputUser}`);
                console.log(word);

                if (inputUser) {
                    createTemplate();

                    console.log(createTemplate);

                    const wordTitle = document.querySelector(".section__word--title");
                    const phonetic = document.querySelector(".section__word--phonetic");
                    const btnAudio = document.querySelector(".section__word--audio");
                    const btnSubmit = document.querySelector(".btn-search");
                    const h2SectionNoun = document.querySelector(".section__noun h2");
                    const h3SectionNoun = document.querySelector(".section__noun h3");
                    const ulNounElement = document.querySelector(".section__noun ul");
                    const synonym = document.querySelectorAll(".synonym span")[0];
                    const synonymValue = document.querySelectorAll(".synonym span")[1];

                    const h2SectionVerb = document.querySelector(".section__verb h2");
                    const h3SectionVerb = document.querySelector(".section__verb h3");
                    const ulVerbElement = document.querySelector(".section__verb ul");
                    const source = document.querySelector(".source span");
                    const sourceValue = document.querySelector(".source a");
                    

                    document.querySelector(".section__verb").style.borderBottom = "1px solid var(--color-border)";


                    wordTitle.textContent = word[0].word;
                    phonetic.textContent = word[0].phonetic;
            
                    let urlAudio;
                    for (const value of word[0].phonetics) {
                        if (value.audio === ""){
                        }else{
                            urlAudio = value.audio;
                        }
                    }
            
            
                    function play() {
                        const music = new Audio(urlAudio);
                        music.play();
                    }
            
                    btnAudio.addEventListener("click", play)
            
            
            
            
                    // NOUN
            
                    h2SectionNoun.textContent = word[0].meanings[0].partOfSpeech;
                    h3SectionNoun.textContent = "Meaning";
            
                    if (word[0].meanings[0].synonyms[0]) {
                        synonym.textContent = "Synonyms ";
                        synonymValue.textContent = word[0].meanings[0].synonyms[0];
                    }else{
                        synonym.textContent = "";
                        synonymValue.textContent = "";
                    }
            
                    const nounMeaning = word[0].meanings[0].definitions
                    for (const def of nounMeaning) {
                    
                        const newLiElement = createElement("li");
                        console.log(newLiElement);
                        newLiElement.textContent = def.definition;
            
                        ulNounElement.append(newLiElement);
                    }
            
            
                    // VERB
            
                    h2SectionVerb.textContent = word[0].meanings[1].partOfSpeech;
                    h3SectionVerb.textContent = "Meaning";
            
                    const verbMeaning = word[0].meanings[1].definitions
                    for (const def of verbMeaning) {
                    
                        const newLiElement = createElement("li");
                        newLiElement.textContent = def.definition;
                        const divExemple = createElement("div");
                        if (def.example){
                            divExemple.textContent = `"${def.example}"`;
                        }
                        divExemple.classList.add("section__verb--example")
                        newLiElement.append(divExemple);
            
                        ulVerbElement.append(newLiElement);
                    }
            
                    // SOURCE
                    source.textContent = "Source";
                    sourceValue.href = word[0].sourceUrls[0];
                    sourceValue.prepend(word[0].sourceUrls[0]);
            
            
                    // CLEAR AUDIO, AND ULELEMENTS
            
                    btnSubmit.addEventListener("click", function() {
                        btnAudio.removeEventListener("click", play);
            
                        const oldLiNounElements = ulNounElement.querySelectorAll("li");
                        for (const oldLiNounElement of oldLiNounElements) {
                            oldLiNounElement.remove();
                        }
            
                        const oldLiVerbElements = ulVerbElement.querySelectorAll("li");
                        for (const oldLiVerbElement of oldLiVerbElements) {
                            oldLiVerbElement.remove();
                        }
            
                    })
                }
            

            

            }catch (e){

                document.querySelector(".section__word").innerHTML = "";
                document.querySelector(".section__noun").innerHTML = "";
                document.querySelector(".section__verb").innerHTML = "";
                document.querySelector(".source").innerHTML = "";
                paragraphError.style.display = 'block';
                document.querySelector(".section__verb").style.borderBottom = "none";

                if (document.querySelector("#input__user").value === "") {
                    paragraphError.textContent = "Enter a word";
                }else{
                    paragraphError.innerHTML = "Word not found";
                }
            }
        })

    }
        

}