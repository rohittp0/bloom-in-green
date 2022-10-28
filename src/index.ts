import "@splidejs/splide/css/sea-green";
import Splide from "@splidejs/splide";

import {eventDetails} from "./utils/content";
import swal from "sweetalert";

const eventsList = document.getElementById("eventsList") as HTMLUListElement;
const video = document.getElementById("heroMovie") as HTMLIFrameElement;
const close = document.getElementById("closeBanner") as HTMLButtonElement;
const banner = document.getElementById("banner") as HTMLDivElement;
const form = document.getElementById("joinUsForm") as HTMLFormElement;
const emailInput = document.getElementById("joinUsInput") as HTMLInputElement;
const videoBg = document.getElementById("videoBg") as HTMLVideoElement;

function createEvent(image, title, description) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    return `
    <li class="splide__slide">
        <div class="event-card">
            <img loading="lazy" src="${image}?w=${Math.min(35 * vw, 420)}" alt="card image" class="event-image">
            <div class="hover-panel">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        </div>
    </li>`;
}

eventsList.innerHTML = eventDetails
    .map((v, i) =>
        createEvent(`https://rohittp.imgix.net/img/index/event/(${i + 1}).webp`, v[0], v[1]))
    .join("\n");


new Splide(".event-slide", {
    classes: {
        arrow: "splide__arrow events-arrow"
    },
    autoWidth: true,
    autoplay: true
}).mount();

new Splide(".community-slide", {
    classes: {
        arrow: "splide__arrow events-arrow"
    },
    autoWidth: false,
    autoplay: true
}).mount();


document.addEventListener('fullscreenchange', onFullScreenChange, {passive: true});
document.addEventListener('webkitfullscreenchange', onFullScreenChange, {passive: true});
document.addEventListener('mozfullscreenchange', onFullScreenChange, {passive: true});

function onFullScreenChange() {
    // @ts-ignore
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
        video.classList.add("scale-down");
}

document.getElementById("playButton").addEventListener("click", async () => {
    video.classList.remove("scale-down");
    await video.requestFullscreen();
});

video.addEventListener("ended", () => {
    video.classList.add("scale-down");
    return document.exitFullscreen();
}, {passive: true});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;

    return fetch("https://api.apispreadsheets.com/data/FTtiYWAmU4xWNan8/", {
        method: "POST",
        body: JSON.stringify({email})
    })
        .then(() => swal("Joined", "Welcome aboard", "success"))
        .catch(() => swal("Oops", "Something went wrong", "error"))
})

close.addEventListener("click", () => banner.classList.add("hidden"));

if (window.innerWidth > 414)
    videoBg.src = "https://rohittp.imgix.net/index/web-banner.m4v";
else
    videoBg.src = "https://rohittp.imgix.net/index/web-banner-mobile.m4v";

videoBg.play().catch((e) => console.error(e));
