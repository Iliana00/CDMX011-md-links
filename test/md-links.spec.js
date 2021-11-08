const findFiles = require('../findfiles.js')
const getLinks = require('../getLinks.js')
const validate = require('../validateLinks.js')
const stats = require('../statistics.js')
const mdLinks = require('../mdLinks.js')
const mdMock = require('./data.js')

describe('findFiles', () => {
  it('should be a function', () =>{
    expect(typeof findFiles.files).toBe('function')
  });
   it("should return md files", () => {
    const mdFiles = findFiles.files("C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba") /* \\carpetauno\\carpetados\\memes.md */
    expect(mdFiles).toEqual(mdMock.filesData);
  }); 

})

describe('getLinks', () => {
  it('should be a function', () =>{
    expect(typeof getLinks.getLinks ).toBe('function')
  });
  it("you should find the links inside the md files", () => {
    const getL = getLinks.getLinks(mdMock.objMd[1]);
    expect(getL).toEqual(mdMock.arrayLinks);
  }); 
})

describe('validate', () => {
  it('should be a function', () =>{
    expect(typeof validate.validateLinks ).toBe('function')
  })
  /* test('should return an object with the status code 200', () => {
    const promVal = validate.validateLinks(mdMock.validateDoscientos);
      expect(promVal).toEqual(mdMock.completeValidate[0]);
    
  }); */
})

/*
 it("should return an object with 3 properties when validate is true", () => {
    const validateTrue = stats.stats(data.arrayValidated);
    expect(validateTrue).toEqual(data.resultArrayValidated);
  });
*/
describe('stats', () => {
  it('should be a function', () =>{
    expect(typeof stats.statistics).toBe('function')
  })
})

describe('mdLinks', () => {
  it('should be a function', () =>{
    expect(typeof mdLinks.mdLinks ).toBe('function')
  });
  test('should return a validated array', () => {
    const path = 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md'
    const options = {validate:true, stats: false}
    return mdLinks.mdLinks(path, options).then(res => {
      expect(res).toEqual(mdMock.validArray);
    });
  }); 
  test('should return stats and validate', () => {
    const path = 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md'
    const options = {validate: true, stats: true}
    return mdLinks.mdLinks(path, options).then(res => {
      expect(res).toEqual(mdMock.mdValidStats);
    });
  }); 
  test('should return stats', () => {
    const path = 'C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba\\carpetauno\\carpetados\\memes.md'
    const options = {validate: false, stats: true}
    return mdLinks.mdLinks(path, options).then(res => {
      expect(res).toEqual(mdMock.mdStats);
    });
  }); 
})


