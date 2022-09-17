const fs = require("fs");
const webp=require('webp-converter');
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

const images = getFiles(path.resolve("public/img")).filter((img) => !img.endsWith(".webp"));
const html = getFiles(path.resolve("src/templates")).filter((html) => html.endsWith(".html"));

images.forEach((img) =>
{
    const out = img.replace("\..+", ".webp");

    html.forEach((text) => text.replace(img, out));
    return webp.cwebp(img, out);
});
