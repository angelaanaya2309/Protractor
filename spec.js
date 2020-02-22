describe('first test in protractor', function() {
    it('should verify title', function() {
      browser.get('https://angularjs.org');
  
      expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
    
  });