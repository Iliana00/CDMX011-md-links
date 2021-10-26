const axios = require("axios");

function statistics(objeto) {
 //console.log(objeto)
 const brokenLinks = [];
    const uniqueLinks = [];
    const totalLinks = [];
    const results = [];
  return axios.get(objeto.href)
    .then(function (response) {
      //console.log(objeto.href)
      if (response.status >= 200 || response.status <= 300) {
        objeto.status = response.status;
        objeto.message = "OK";
        return objeto
        //console.log(link)
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

exports.statistics = statistics;

/* function statistics(objeto) {
  const brokenLinks = [];
    const uniqueLinks = [];
    const totalLinks = [];
    const results = [];
    console.log(objeto)
  objeto.map(element =>{
    if(element.href){
      uniqueLinks.push(element.href)
   } else if (element.message === "FAIL"){
       brokenLinks.push(element + 4)
   }
   results.push(brokenLinks.length, uniqueLinks.length)
   console.log(results)
   return results

  })
  
 
} 
 */
/* function statistics(objeto) {
  objeto.map(elem =>{
    console.log(elem.status)
  })
 
} */



/*  
return new Promise((resolve, reject) =>{
    const brokenLinks = [];
    const active = [];
    const allResults = [];
    const countAllResults = [];
    objeto.map(element => {
        allResults.push(element.href);
        
    if(element.message === "OK"){
       active.push(element)
    } else if (element.message === "FAIL"){
        brokenLinks.push(element)
    }
    });
    const dataArr = new Set(allResults);
    const uniqueLinks = [...dataArr];
    
    countAllResults = {
        total: allResults.length,
        unique: uniqueLinks.length,
        active: active.length,
        brokenLinks: brokenLinks.length
    };
    resolve(countAllResults)               
})
*/