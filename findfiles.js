const fs = require('fs');
const path = require('path');

function files(route) {
  let mdFiles = []
  const pathRes = path.resolve(route)
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
