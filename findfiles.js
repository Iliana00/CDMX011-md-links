const fs = require('fs');
const path = require('path');


function files(route) {
  
  const abs = path.resolve(route)
    if(path.extname(abs).length == 0 && !path.basename(abs).startsWith('.')){
      
     return fs.readdir(route, 'utf-8', (error, lista) => {
        if (error){
          console.log('There is a mistake, please make a new try ', error);
          } else {
            let recur = []
            //console.log(lista)
             lista.forEach(doc => { 
              if(path.extname(doc).length == 0){
                let smallRoute = path.join(abs, doc);
                files(smallRoute);
              } else {
                let smallRoute = path.join(abs, doc);
                if (path.extname(doc) == '.md' || path.extname(doc).toLowerCase() == '.markdown') {
                  recur.push(smallRoute)
                }
              }
            });
            console.log(recur)
            return recur
          }
          
      })      
      
    }
  }

  
      
        
          
exports.files = files;


/*else {
      console.log(lista)
     lista.forEach(file => {     
        if (path.extname(file) == '.md'){
          let miniruta = path.join(abs, file)
        //  fs.readFile(miniruta, 'utf-8', (error, data) => {
        //    if(error){
        //      console.log('There is a mistake with read files', error);
        //    } else{
              console.log(data)
            }
            
          })
        }
        //console.log(file);
        })
    }
  });*/