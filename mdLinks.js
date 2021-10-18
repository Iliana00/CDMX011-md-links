const fs = require('fs');
const path = require('path');
const findFiles = require('./findfiles.js')
const links = require('./getLinks.js')
const validation = require('./validateLinks')
const ruta = process.argv[2];

let arrayFiles = findFiles.files(ruta)
let arrayLinks = links.getLinks(arrayFiles)
let validateLinks = validation.validateLinks(arrayLinks)
console.log(arrayLinks)

