exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: ['spec.js'],
    directConnect : true,
    capabilities :{
        browserName: 'chrome'
    }
    
  };