System.registerModule("../es6/let.js", [], function() {
  "use strict";
  var __moduleName = "../es6/let.js";
  describe("how to run a test", function() {
    it("should work...", function() {
      var add = (function(x, y) {
        return x + y;
      });
      expect(add(5, 3)).toBe(8);
    });
  });
  describe('how let works', function() {
    it('will provide block scoping, unlike var', function() {
      var doWork = function(flag) {
        if (flag) {
          var x = 3;
          return x;
        }
      };
      var result = doWork(true);
      expect(result).toBe(3);
    });
    it('will provide block scoping with for', function() {
      var j = undefined;
      var doWork = function(flag) {
        for (var i = 0; i < 10; i++) {
          j = i;
        }
        return j;
      };
      var result = doWork();
      expect(result).toBe(9);
    });
  });
  return {};
});
System.get("../es6/let.js" + '');
