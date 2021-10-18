const fs = require('fs');
const path = require('path');

function files(route) {
  
  const pathRes = path.resolve(route)
  const filesMd = []
    if (path.extname(pathRes) === '.md' || path.extname(pathRes).toLowerCase() == '.markdown'){        
           filesMd.push(pathRes)          
    } else if (!path.basename(pathRes).startsWith('.')) {        
         fs.readdir(route, 'utf-8', (error, lista) => {
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
          }          
      })            
    }
    console.log(filesMd)
    return filesMd
  }

  
      
        
          
exports.files = files;

