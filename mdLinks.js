const fs = require("fs");
const path = require("path");
//const validation = require("./validateLinks.js");
const findFiles = require("./findfiles.js");
const links = require("./getLinks.js");
const stat = require("./statistics.js");

//Datos de inicio
const ruta = process.argv[2];
const options = {
  validate: false,
  stats: true
}

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
    if(options.validate === true && options.stats === false){
      let arrayValidate = arrayLinks.map(elem => {        
       return validation.validateLinks(elem)
      })
      resolve(Promise.all(arrayValidate))
    } 
  });
} 


//Consumir la promesa
mdLinks(ruta, options)
.then((response)=> console.log(response))
.catch((error) => console.log(error))