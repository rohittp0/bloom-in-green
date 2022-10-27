import {lineUP} from "./utils/content";

const div = document.getElementById("lineup");
const root = lineUP.root

function generateRow(root, names, key) {
    const title = key.toUpperCase().replaceAll("_", " ")
    const images = names.map((name, i) => `
        <div class="card-image">
            <img src="${root}/${key}/${i+1}.webp" alt="${name}">
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

const rows = Object.keys(lineUP.categories).map((key) =>
    generateRow(root, lineUP.categories[key], key));

div.innerHTML = div.innerHTML.replace("<!--IMAGE_GRIDS-->", rows.join(""))

