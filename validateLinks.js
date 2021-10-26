const axios = require("axios");

function validateLinks(objeto) {
 //console.log(objeto)
  return axios.get(objeto.href)
    .then(function (response) {
      //console.log(objeto.href)
      if (response.status >= 200 || response.status <= 300) {
        objeto.status = response.status;
        objeto.message = "OK";
        //console.log(link)
        return objeto;
      }
    })
    .catch(function (error) {    
      if(error.response) {
        objeto.status = error.response.status;
        //console.log(objeto.status)
        objeto.message = "FAIL";
        //console.log(link)
        return objeto;    
      } else {
        objeto.status = 500;
        //console.log(objeto.status)
        objeto.message = "FAIL";
        return objeto
      
      }
          
    });
}

exports.validateLinks = validateLinks;