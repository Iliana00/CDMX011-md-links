const objMd = [
   ["C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md"],
   ["C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md"],
   ["C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\hola.md"]
]
const filesData = [
    "C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md",
    "C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md",
    "C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\hola.md",
    ]
const validateDoscientos = {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md',
    status: 200,
    message: 'OK'     
    }     
const completeValidate =[
    {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md'  
    },
    {
    href: 'https://nodejs.org/es/fg',
    text: 'Node.js',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md'   
    }
]
/*
const completeValidate =[
    {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md',
    status: 200,
    message: 'OK'    
    },
    {
    href: 'https://nodejs.org/es/fg',
    text: 'Node.js',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\archivo.md',
    status: 404,
    message: 'FAIL'    
    }
]
*/

const arrayLinks = [
    {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md'    
    },
    {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md'    
    }
    ]     
const validArray = [
    {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md',
    status: 200,
    message: 'OK'
    },
    {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md',
    status: 200,
    message: 'OK'
    }
    ]

    const mdValidStats = {
    "unique": 2,
    "total": 2,  
    "broken": 0
    }
    const mdStats = {
    "unique": 2,
    "total": 2,  
    "broken": 0
    }
    
module.exports = { filesData, validArray, mdValidStats, mdStats, arrayLinks, validateDoscientos, objMd, completeValidate }


