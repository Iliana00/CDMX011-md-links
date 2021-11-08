const fs = require('fs');
const path = require('path');

function files(route) {
  const pathRes = path.resolve(route)
  let mdFiles = []
  /* if( path.extname(pathRes).length == 0){
    return 'There is no a validate route'
  } */
  if (path.extname(pathRes) === '.md' || path.extname(pathRes).toLowerCase() === '.markdown') {
    mdFiles.push(pathRes)
  } else  {
    const directories = (pathRes) => {
      const lista = fs.readdirSync(pathRes, {withFileTypes: true});
      lista.forEach(doc => {
        const info = fs.statSync(pathRes);
        if (doc.isDirectory()) {   
          directories(`${pathRes}\\${doc.name}`);
        } else {
           if (path.extname(doc.name) === '.md' || path.extname(doc.name).toLowerCase() == '.markdown' ) {
            mdFiles.push(`${pathRes}\\${doc.name}`)
          }  
        }
      });
   }
   directories(pathRes);
  }
  return mdFiles
}

exports.files = files;
