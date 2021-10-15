const fs = require('fs');
const path = require('path');
const findFiles = require('./findfiles.js')
const links = require('./getLinks.js')
const ruta = process.argv[2];

let arrayFiles = findFiles.files(ruta)
//console.log(arrayFiles)