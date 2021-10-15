//module.exports = () => {
  // ...
//};

const fs = require('fs');
const path = require('path');

const route = process.argv[2];
//const route = __dirname;

const directories  = fs.readdir(route, 'utf-8', (error, lista) =>{
  const abs = path.resolve(route)
  console.log(route)
  if (error){
  console.log('There is a mistake, please make a new try ', error);
  } else {
    console.log(lista)
   lista.forEach(file => {     
      if (path.extname(file) == '.md'){
        let miniruta = path.join(abs, file)
        fs.readFile(miniruta, 'utf-8', (error, data) => {
          if(error){
            console.log('There is a mistake with read files', error);
          } else{
            console.log(data)
          }
          
        })
      }
      //console.log(file);
      })
  }
});








