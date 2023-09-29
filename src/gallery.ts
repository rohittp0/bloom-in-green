const container = document.getElementById("galleryContainer") as HTMLDivElement;

const srcBase = "https://rohittp.imgix.net/";

function getSrcSet(src: string): string {
    const sizes = [1440, 1024, 768, 410, 390, 375, 230];
    return sizes.map(size => `${src}?w=${size}&fit=max ${size}w`).join(", ");
}

function getImg(name: string): HTMLImageElement {
    const img = document.createElement("img");
    img.src = `${srcBase}${name}`;
    img.srcset = getSrcSet(`${srcBase}${name}`);
    img.alt = name;
    img.height = 220;
    return img;
}

const MAX_ROWS = 4;
const MAX_COLS = 4;

const MAX_IMAGES = 14;

for(let i = 0; i < MAX_ROWS; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < MAX_COLS; j++)
        row.appendChild(getImg(`gal-img-${(i*MAX_ROWS+j) % MAX_IMAGES}.webp`));

    container.appendChild(row);
}

export {};
