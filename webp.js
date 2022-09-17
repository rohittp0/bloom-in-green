const fs = require("fs");
const webp = require('webp-converter');
const path = require("path");

webp.grant_permission();

function getFiles(dir) {
    return fs.readdirSync(dir).flatMap((item) => {
        const path = `${dir}/${item}`;
        if (fs.statSync(path).isDirectory()) {
            return getFiles(path);
        }

        return path;
    });
}

const base = path.resolve("public");

const noConvert = ["webp", "m4v", "mp4", "mkv"];

const images = getFiles(path.resolve("public/img")).filter((img) => noConvert.indexOf(img.split(".")[1]) === -1);
const html = getFiles(path.resolve("src/templates")).filter((html) => html.endsWith(".html"));

// images.forEach((img) => webp.cwebp(img, img.split(".")[0] + ".webp"));

html.forEach(async (p) =>{
    const content = fs.readFileSync(p, 'utf8');

    images.forEach((img) =>
    {
        img = img.replace(base+"\\", "/").replaceAll("\\\\", "/");
        content.replaceAll(img, img.split(".")[0] + ".webp");
    });

    fs.writeFile(p, content, 'utf8', console.log);
})
