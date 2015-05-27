System.registerModule("../es6/rest.js", [], function() {
  "use strict";
  var __moduleName = "../es6/rest.js";
  describe('rest parameters', function() {
    it('is like varargs', function() {
      var doWork = function(name) {
        for (var numbers = [],
            $__0 = 1; $__0 < arguments.length; $__0++)
          numbers[$__0 - 1] = arguments[$__0];
        var result = 0;
        numbers.forEach(function(n) {
          result += n;
        });
        return result;
      };
      expect(doWork("Scott", 1, 2, 3)).toBe(6);
      expect(doWork("Scott")).toBe(0);
    });
  });
  return {};
});
System.get("../es6/rest.js" + '');
