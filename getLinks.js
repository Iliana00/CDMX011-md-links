const fs = require("fs");
const path = require("path");
const marked = require("marked");
//const renderer = new marked.Renderer();
const { readFileSync } = require("fs");
const markdownLinkExtractor = require("markdown-link-extractor");

//1. Leer cada archivo
//2. Convertir archivos .md a HTML
//3. Filtrar solo los links
//4. Crear un array que incluya href, text y file por cada link
//5. Que la función muestre en consola un array que incluya arrays de todos los links

function getLinks(mdFiles) {
  const arrayLinks = []
    mdFiles.forEach((file) => {
      const markdown = readFileSync(file, { encoding: "utf8" });
      const links = markdownLinkExtractor(markdown, false);
      const details = markdownLinkExtractor(markdown, true);
      
      details.forEach((detail) => {
        if (detail.href.charAt(0) !== '#') {
          arrayLinks.push({
            href: detail.href,
            text: detail.text,
            file: file
          }) 
        } 
  
      });
    });
  
  
  //console.log(arrayLinks)
  return arrayLinks
}
exports.getLinks = getLinks;
