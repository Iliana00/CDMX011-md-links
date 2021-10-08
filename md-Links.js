const fs = require('fs');
const path = require('path');

const route = process.argv[2];

const directories  = fs.readdir(route, 'utf-8', (error, lista) =>{
  if (error){
  console.log('There is a mistake, please make a new try ', error);
  } else {
    //lista.forEach(file => {
      //if (path.extname(file))
        console.log(lista);
    //})
  }
});
    