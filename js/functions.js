export function createElement (tagName) {
  const element = document.createElement(tagName);

  return element;
}

export function createTemplate() {
    document.querySelector(".section__word").innerHTML = `
        <div>
          <h1 class="section__word--title"></h1>
          <span class="section__word--phonetic"></span>
        </div>
        
        <div class="section__word--audio">
          <svg class="icon-play">
            <use xlink:href="svg/SpritePlay.svg#play"></use>
          </svg>
        </div>`;
    document.querySelector(".section__noun").innerHTML = `
    <h2><div></div></h2>

        <h3></h3>
        <ul>

        </ul>

        <div class="synonym"><span></span> <span></span></div>`;
    document.querySelector(".section__verb").innerHTML = `
    <h2><div></div></h2>

        <h3></h3>
        <ul>

        </ul>`;
    document.querySelector(".source").innerHTML = `
    <span></span><a href="" target="_blank"> <i class="fa fa-external-link"></i></a>`;
}

export function isActive(element, classe) {
  const response = element.classList.contains(classe);

  return response;
}

export function moveToLocalStorage(keyLocalStarage, value) {
  localStorage.setItem(keyLocalStarage, JSON.stringify(value));
}

export function getItemInLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
