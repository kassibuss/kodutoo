const fs = require("fs")

let nav = fs.readFileSync ("src/navigation.html", "utf8");

applyTemplate("index.html")
applyTemplate("pricing.html")
applyTemplate("contact.html")

fs.writeFileSync("dist/index.html", page)

console.log("DONE")

function applyTemplate(fileName) {
    let page = fs.readFileSync("src/index.html", "utf-8");
    page = page.replace("{{HEADER}}", nav);
    fs.writeFileSync("dist/index.html", page)
}   