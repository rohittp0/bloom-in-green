import {lineUP} from "./utils/content";

const div = document.getElementById("lineup");
const root = lineUP.root

function getSrcset(path) {
    const sizes = [415, 375, 390, 300, 260, 230];

    return sizes.map((w) => `${path}?w=${w}&fit=max ${w}w`).join(", ");
}


function generateRow(root, names, key) {
    const title = key.toUpperCase().replaceAll("_", " ")
    const images = names.map((name, i) => `
        <div class="card-image">
            <img src="${root}/${key}/${i + 1}.webp" srcset="${getSrcset(`${root}/${key}/${i + 1}.webp`)}" 
                alt="${name}">
            <p>${name}</p>
        </div>
    `);

    return `
        <div class="column">
            <p>${title}</p>
            <div class="row">
                ${images.join("")}
            </div>
        </div>
    `
}

const rowsHtml = Object.keys(lineUP.categories).map((key) =>
    generateRow(root, lineUP.categories[key], key));

div.innerHTML = div.innerHTML.replace("<span data-id=\"image-grid\"></span>", rowsHtml.join(""));

const scrollStep = 10, slideTime = 2000;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.querySelectorAll('.row').forEach((row) => {
    const inter = setInterval(async () => {
        if (row.scrollLeft >= row.scrollWidth)
            return clearInterval(inter);

        const max = row.scrollLeft + (window.innerWidth > 415 ? 250 : window.innerWidth);

        for (let i = row.scrollLeft; i <= max+1; i+= scrollStep) {
            console.log(i)
            row.scrollTo(i, 0);
            await sleep(slideTime / max);
        }

        row.scrollTo(max, 0);

    }, slideTime);

    row.addEventListener("click", () => clearInterval(inter));
});

setTimeout(() => {
    let button = document.getElementById("chat-bot-launcher-button");

    while (!button)
        button = document.getElementById("chat-bot-launcher-button");

    button.click();
}, 25000)
