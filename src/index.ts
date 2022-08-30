import Splide from "@splidejs/splide";
import {circleData} from "./content";

const newsList = document.getElementById("newsList") as HTMLUListElement;
const eventsList = document.getElementById("eventsList") as HTMLUListElement;
const circlesList = document.getElementById("circlesList") as HTMLDivElement;

function createSlides(image, title, content) {
    return `
        <div class="carousal-content">
            <div class="news-card">
                <img src="${image}" alt="">
                <h4>${title}</h4>
                <a href="#">
                    <button>The Hindu</button>
                </a>
                <p>${content}</p>

            </div>
        </div>
    `;
}

function createRows() {
    const colPerRow = 3;

    let cols = [];
    const rows = []

    for(let i=0; i<10; i++)
    {
        cols.push(createSlides("/img/news-card.webp", "The news title", "News content"));

        if(i % colPerRow === 0)
        {
            rows.push(`<li class="splide__slide carousal-slide">${cols.join("\n")}</li>`);
            cols = [];
        }
    }

    return rows.reverse().join("\n");
}

function createEvent(image, title, description)
{
    return `
    <li class="splide__slide">
        <div class="event-card">
            <img src="${image}" alt="card image" class="event-image">
            <div class="hover-panel">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        </div>
    </li>`;
}

function createCircles() {
    const elements = [];

    for(const title in circleData)
        elements.push(`
    <img src="${circleData[title].img}" alt="" tabindex="1">
    <div class="circle-center">
        <h6>${title}</h6>
        <p>${circleData[title].text}</p>
    </div>`);

    return elements.join("\n");
}

circlesList.innerHTML = createCircles();
newsList.innerHTML = createRows();
eventsList.innerHTML = [...Array(10).keys()]
    .map(() => createEvent("/img/festival-card.webp", "Title", "Details"))
    .join("\n");

console.log(Array(10)
    .map(() => createEvent("/img/festival-card.webp", "Title", "Details"))
    .join("\n"))

new Splide('.news-slide', {classes: {
    arrow: "splide__arrow news-arrow"
    }}).mount();

new Splide('.event-slide', {classes: {
    arrow: "splide__arrow events-arrow"
    },
    autoWidth: true
}).mount();

console.log(`%cDeveloped by
    Rohit  : https://www.linkedin.com/in/rohit-tp
    Varsha : https://www.linkedin.com/in/varsha-shaheen-a10295231`,
    "background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px");
