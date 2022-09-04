import "@splidejs/splide/css/sea-green";
import Splide from "@splidejs/splide";

import {circleData} from "./content";

const newsList = document.getElementById("newsList") as HTMLUListElement;
const eventsList = document.getElementById("eventsList") as HTMLUListElement;
const circlesList = document.getElementById("circlesList") as HTMLDivElement;
const gallery = document.getElementById("gallery") as HTMLDivElement;

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

    for (let i = 0; i < 10; i++) {
        cols.push(createSlides("/img/news-card.webp", "The news title", "News content"));

        if (i % colPerRow === 0) {
            rows.push(`<li class="splide__slide carousal-slide">${cols.join("\n")}</li>`);
            cols = [];
        }
    }

    return rows.reverse().join("\n");
}

function createEvent(image, title, description) {
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

    for (const title in circleData)
        elements.push(`
    <img src="${circleData[title].img}" alt="" tabindex="1" width="22px" height="22px">
    <div class="circle-center">
        <h6>${title}</h6>
        <p>${circleData[title].text}</p>
    </div>`);

    return elements.join("\n");
}

function getPercentOfView(element) {
    const viewTop = window.pageYOffset;
    const viewBottom = viewTop + window.innerHeight;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + viewTop;
    const elementBottom = elementTop + rect.height;

    if (elementBottom <= viewTop)
        return -1;
    else if (elementTop >= viewBottom)
        return 0.3;

    else if (elementBottom <= viewBottom) {
        if (elementTop < viewTop || true)
            return (elementBottom - viewTop) / window.innerHeight ;
        else
            return (elementBottom - elementTop) / window.innerHeight ;
    } else
        return (viewBottom - elementTop) / window.innerHeight;
}

circlesList.innerHTML = createCircles();
newsList.innerHTML = createRows();
eventsList.innerHTML = [...Array(10).keys()]
    .map(() => createEvent("/img/festival-card.webp", "Title", "Details"))
    .join("\n");

new Splide(".news-slide", {
    classes: {
        arrow: "splide__arrow news-arrow"
    }
}).mount();

new Splide(".event-slide", {
    classes: {
        arrow: "splide__arrow events-arrow"
    },
    autoWidth: true
}).mount();

window.addEventListener("scroll", () =>
    document.body.style.setProperty("--scroll",
        String(window.pageYOffset / (gallery.offsetTop - gallery.offsetHeight))), false);

window.addEventListener("scroll", () =>
    document.body.style.setProperty("--gallery-scroll",
        String(getPercentOfView(gallery))), false)


console.log(`%cDeveloped by
    Rohit  : https://www.linkedin.com/in/rohit-tp
    Varsha : https://www.linkedin.com/in/varsha-shaheen-a10295231`,
    "background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px");
