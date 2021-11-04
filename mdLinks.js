const fs = require("fs");
const path = require("path");
const validation = require("./validateLinks.js");
const findFiles = require("./findfiles.js");
const links = require("./getLinks.js");
const stat = require("./stats.js");

 function mdLinks(ruta, options) {

  return new Promise((resolve, reject) => {
    let arrayFiles = findFiles.files(ruta);
    if(arrayFiles.length === 0){
      reject('No hay archivos .md o .markdown')
    } 
    let arrayLinks = links.getLinks(arrayFiles);
    if(arrayLinks.length === 0){
      reject('No hay links')
    }
    let arrayValidate = validation.validateLinks(arrayLinks)   
    if(options.validate === true && options.stats === false){          
      resolve(arrayValidate)
    }  
    if (options.stats === true && options.validate === false) {
      const objStats = validation.validateLinks(arrayLinks)   
      .then((resuelto) =>{ 
        resolve(stat.statistics(resuelto))
      })
    }
    if (options.stats === true && options.validate === true) {
      const objStats = validation.validateLinks(arrayLinks)   
      .then((resuelto) =>{ 
        resolve(stat.statistics(resuelto))
      })
     
    }
  });
} 


exports.mdLinks = mdLinks;







