const fs = require('fs');
const path = require('path');


function files(route) {
    const mdFiles = [];
    const files = fs.readdirSync(route);
    files.forEach(doc => {
      const fullpath = path.join(route, doc);      
      const info = fs.statSync(fullpath);
      if (info.isDirectory()) {
       files(fullpath);
      } else if (path.extname(doc) == '.md' || path.extname(doc).toLowerCase() == '.markdown') {
        mdFiles.push(smallRoute)
      }
    });
    return mdFiles;
  }

  exports.files = files;