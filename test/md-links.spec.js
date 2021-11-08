/* eslint-disable no-undef */
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
   it("should return a md files' array", () => {
    const mdFiles = findFiles.files("C:\\Users\\ILIANA\\Desktop\\Laboratoria\\CDMX011-md-links\\prueba") /* \\carpetauno\\carpetados\\memes.md */
    expect(mdFiles).toEqual(mdMock.filesData);
  }); 
  it("should return a md files' array even when the path is relative", () => {
    const mdFiles = findFiles.files(".\\prueba") /* \\carpetauno\\carpetados\\memes.md */
    expect(mdFiles).toEqual(mdMock.filesData);
  }); 

})

describe('getLinks', () => {
  it('should be a function', () =>{
    expect(typeof getLinks.getLinks ).toBe('function')
  });
  it("should find the links inside the md files", () => {
    const getL = getLinks.getLinks(mdMock.objMd[1]);
    expect(getL).toEqual(mdMock.arrayLinks);
  }); 
})

describe('validate', () => {
  it('should be a function', () =>{
    expect(typeof validate.validateLinks ).toBe('function')
  })
})

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
  test('should return stats and validate of an array of md files', () => {
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


