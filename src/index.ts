import "@splidejs/splide/css/sea-green";
import Splide from "@splidejs/splide";

import {eventDetails, srcsetSizes} from "./utils/content";

const eventsList = document.getElementById("eventsList") as HTMLUListElement;
const video = document.getElementById("heroMovie") as HTMLIFrameElement;
const close = document.getElementById("closeBanner") as HTMLButtonElement;
const banner = document.getElementById("banner") as HTMLDivElement;

function createEvent(image, title, description) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    return `
    <li class="splide__slide">
        <div class="event-card">
            <img loading="lazy" src="${image}?w=${Math.min(35*vw, 420)}" alt="card image" class="event-image">
            <div class="hover-panel">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        </div>
    </li>`;
}

eventsList.innerHTML = eventDetails
    .map((v, i) =>
        createEvent(`https://rohittp.imgix.net/img/index/event/(${i+1}).webp`, v[0], v[1]))
    .join("\n");


new Splide(".event-slide", {
    classes: {
        arrow: "splide__arrow events-arrow"
    },
    autoWidth: true
}).mount();

new Splide(".community-slide", {
    classes: {
        arrow: "splide__arrow events-arrow"
    },
    autoWidth: false
}).mount();


document.addEventListener('fullscreenchange', onFullScreenChange, {passive: true});
document.addEventListener('webkitfullscreenchange', onFullScreenChange, {passive: true});
document.addEventListener('mozfullscreenchange', onFullScreenChange, {passive: true});

function onFullScreenChange() {
    // @ts-ignore
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)
        video.classList.add("scale-down");
}

document.getElementById("playButton").addEventListener("click", async ()=> {
    video.classList.remove("scale-down");
    await video.requestFullscreen();
});

video.addEventListener("ended", () =>
{
    video.classList.add("scale-down");
    return document.exitFullscreen();
}, {passive: true});

close.addEventListener("click", () => banner.classList.add("hidden"));

document.querySelectorAll("video").forEach((v) => v.play());

if(window.innerWidth > 414)
    (document.getElementById("videoDesktop") as HTMLVideoElement).src = "/img/index/web-banner.m4v";
else
    (document.getElementById("videoMobile") as HTMLVideoElement).src = "/img/index/web-banner-mobile.m4v";

console.log(`%cDeveloped by
    Rohit  : https://www.linkedin.com/in/rohit-tp
    Varsha : https://www.linkedin.com/in/varsha-shaheen-a10295231`,
    "background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px");

window["CollectId"] = "5dba3e23a3d4732f9663f473";
