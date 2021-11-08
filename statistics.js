/* eslint-disable no-unused-vars */
function statistics(links) {
    return new Promise((resolve, reject) =>{
   const uniqueLinks = [];
      const totalLinks = [];
      const brokenLinks = []
      
     links.forEach(x => {
       if(x.href){        
         totalLinks.push(x.href)       
       }
      })
      const tempArray = [...totalLinks].sort();
       for (let i = 0; i < tempArray.length; i++) {
          if (tempArray[i + 1] !== tempArray[i]) {
            uniqueLinks.push(tempArray[i]);
          }
        } 
      links.forEach(x => {
          if(x.message === "FAIL"){        
            brokenLinks.push(x.href)       
          }
         })
  
      const results = {
          unique: uniqueLinks.length,
          total: totalLinks.length,  
          broken : brokenLinks.length     
          };
  
      resolve(results)
    })
      
  }
  
  exports.statistics = statistics;
  
  