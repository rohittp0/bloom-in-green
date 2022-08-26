import Splide from "@splidejs/splide";

const newsList = document.getElementById("newsList") as HTMLUListElement;

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
        cols.push(createSlides("/img/card-img.webp", "The news title", "News content"));

        if(i % colPerRow === 0)
        {
            rows.push(`<li class="splide__slide carousal-slide">${cols.join("\n")}</li>`);
            cols = [];
        }
    }

    return rows.reverse().join("\n");
}

newsList.innerHTML = createRows();

new Splide('.splide', {classes: {
    arrow: "splide__arrow news-arrow"
    }}).mount();

console.log(`%cDeveloped by
    Rohit  : https://www.linkedin.com/in/rohit-tp
    Varsha : https://www.linkedin.com/in/varsha-shaheen-a10295231`,
    "background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px");
