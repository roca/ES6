System.registerModule("../es6/destructuring.js", [], function() {
  "use strict";
  var __moduleName = "../es6/destructuring.js";
  describe('destructuring', function() {
    it('can destructure arrays', function() {
      var $__1,
          $__2;
      var doWork = function() {
        return [1, 3, 2];
      };
      var $__0 = doWork(),
          x = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), $__1.next(), ($__2 = $__1.next()).done ? void 0 : $__2.value),
          y = ($__2 = $__1.next()).done ? void 0 : $__2.value,
          z = ($__2 = $__1.next()).done ? void 0 : $__2.value;
      expect(x).toBe(3);
      expect(y).toBe(2);
      expect(z).toBeUndefined();
    });
    it('can destructure objects', function() {
      var doWork = function() {
        return {
          firstName: "Scott",
          lastName: "Allen",
          handles: {twitter: "OdeToCode"}
        };
      };
      var $__0 = doWork(),
          first = $__0.firstName,
          lastName = $__0.lastName,
          handleName = $__0.handles.twitter;
      expect(first).toBe("Scott");
      expect(lastName).toBe("Allen");
      expect(handleName).toBe("OdeToCode");
    });
    it('works with parameters', function() {
      var doWork = function(name, $__0) {
        var $__1 = $__0,
            dataValue = $__1.data,
            cacheValue = $__1.cache;
        return dataValue;
      };
      var result = doWork("api/test", {
        data: "test",
        cache: false
      });
      expect(result).toBe("test");
    });
  });
  return {};
});
System.get("../es6/destructuring.js" + '');
