const axios = require("axios");

function validateLinks(links) {
  return new Promise((resolve, reject) =>{
    const mapLink = links.map(objeto =>{
      return axios.get(objeto.href)
      .then((response) => {
        if (response.status >= 200 || response.status <= 300) {
          objeto.status = response.status;
          objeto.message = "OK";
          //console.log(objeto)
          return objeto;
        }
      })
      .catch(function (error) {    
        if(error.response) {
          objeto.status = error.response.status;
          objeto.message = "FAIL";
          return objeto;    
        } else {
          objeto.status = 500;
          objeto.message = "FAIL";          
          return objeto
        }          
      });
    })
    Promise.all(mapLink)
    .then(() => resolve(links))
    .catch(() => reject(new Error('There is a mistake')))
  })
  
}

exports.validateLinks = validateLinks;
