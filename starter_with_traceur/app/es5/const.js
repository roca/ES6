System.registerModule("../es6/const.js", [], function() {
  "use strict";
  var __moduleName = "../es6/const.js";
  describe('using const', function() {
    "use strict";
    it('will make a variable read-only', function() {
      var MAX_SIZE = 10;
      expect(MAX_SIZE).toBe(10);
    });
    it('can shadow outer declaration', function() {
      var x = 12;
      var doWork = function() {
        var x = 10;
        return x;
      };
      var result = doWork();
      expect(result).toBe(10);
      expect(x).toBe(12);
    });
  });
  return {};
});
System.get("../es6/const.js" + '');
