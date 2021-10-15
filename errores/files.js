
/** ESTE CÓDIGO SÍ SIRVE
const fs = require('fs');
const path = require('path');

function files(route) {
  
  const pathRes = path.resolve(route)
  let filesMd = []
  
    if(path.extname(pathRes).length == 0 && !path.basename(pathRes).startsWith('.')){
      
    
     return fs.readdir(route, 'utf-8', (error, lista) => {
        if (error){
          console.log('There is a mistake, please make a new try ', error);
          } else {
            
            //console.log(lista)
             lista.forEach(doc => { 
                if(path.extname(doc).length == 0){
                let smallRoute = path.join(pathRes, doc);                
                files(smallRoute);
              } else {
                let smallRoute = path.join(pathRes, doc);
                if (path.extname(doc) == '.md' || path.extname(doc).toLowerCase() == '.markdown') {
                  filesMd.push(smallRoute)
                }
              }
            });
            console.log(filesMd)
            return filesMd
          }
          
      })      
      
    }
  }

  
      
        
          
exports.files = files; */

