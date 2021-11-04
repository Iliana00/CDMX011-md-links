#!/usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const mdFunct = require("./mdLinks.js");

const greet = chalk.white.bold("Welcome to MdLinks!");
const inst = chalk.white.bold("The format required is:");
const inst2 = chalk.white.bold("mdlink -v <path> OR mdlink -s <path> OR mdlink -v -s <path> ")
const msgHelp = chalk.red.bold("Are you stuck? Use --help");
const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "yellow",
 backgroundColor: "#555555"
};
const msgBox = boxen(greet, boxenOptions);


console.log(msgBox); 
console.log(inst)
console.log(inst2)
console.log(' ')
console.log(msgHelp)
const options = yargs
 .option("v", { alias: "validate", describe: "Validate the links", type: "boolean", demandOption: false })
 .option("s", { alias: "stats", describe: "Show statistics", type: "boolean", demandOption: false })
 .option("h", { alias: "help", describe: "Commands", type: "boolean", demandOption: false })
 .argv

 
const validOpt = options.validate
const statOpt = options.stats 

//Datos de inicio
const ruta = process.argv[2];



if(statOpt === true && validOpt === true){
  const optValidate = {
    validate: true,
    stats: true
  }
  mdFunct.mdLinks(ruta,optValidate)
  .then((response)=> {
    console.log(' ')
    console.log(chalk.magenta('        Statistics          '))
    console.log(' ')
    console.log(chalk.yellow(`        TOTAL: ${response.total}`))
    console.log(chalk.white(`        UNIQUE: ${response.unique}`))   
    console.log(chalk.red(`        BROKEN: ${response.broken}`))  
  })
} else if (validOpt == true){
    const optValidate = {
      validate: true,
      stats: false
    }
      mdFunct.mdLinks(ruta,optValidate)
      .then((response)=> {
        console.log(' ')
          console.log(chalk.magentaBright('                 Links have been validated'))
          console.log(' ')
        response.forEach(element => {          
          console.log(chalk.white(element.file))
          console.log(chalk.yellow(element.href))
          console.log(chalk.white(element.text))
          if(element.message === 'FAIL'){
            console.log(chalk.red(element.message))
          }else{
            console.log(chalk.blue(element.message))
          }
          if(element.status >= 301){
            console.log(chalk.red(element.status))
          }else{
            console.log(chalk.blue(element.status))
          }
          console.log('------------------------------------------------------')
        });    
      })
    }else{
      const optValidate = {
        validate: false,
        stats: true
      }
        mdFunct.mdLinks(ruta,optValidate)
        .then((response)=> {      
          console.log(' ')
          console.log(chalk.magenta('        Statistics          '))
          console.log(' ')
          console.log(chalk.yellow(`        TOTAL: ${response.total}`))
          console.log(chalk.white(`        UNIQUE: ${response.unique}`))      
        })
        
      } 

 
