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

const images = getFiles(path.resolve("public/img")).filter((img) => !img.endsWith(".webp"));
const html = getFiles(path.resolve("src/templates")).filter((html) => html.endsWith(".html"));

images.forEach(async (img) => {
    const out = img.split(".")[0] + ".webp";

    await webp.cwebp(img, out);

    for (const html_path of html)
        fs.writeFile(html_path, fs.readFileSync(html_path, 'utf8').replaceAll(img, out),
            'utf8', () => null);

});
