System.registerModule("../es6/default.js", [], function() {
  "use strict";
  var __moduleName = "../es6/default.js";
  describe('default parameters', function() {
    it('provides defaults', function() {
      var doWork = function() {
        var name = arguments[0] !== (void 0) ? arguments[0] : "Scott";
        return name;
      };
      expect(doWork()).toBe("Scott");
      expect(doWork("")).toBe("");
      expect(doWork(undefined)).toBe("Scott");
      expect(doWork(null)).toBe(null);
      expect(doWork("Cat")).toBe("Cat");
    });
    it('will provide a value for undefined', function() {
      var $__1,
          $__2;
      var doWork = function() {
        var a = arguments[0] !== (void 0) ? arguments[0] : 1;
        var b = arguments[1] !== (void 0) ? arguments[1] : 2;
        var c = arguments[2] !== (void 0) ? arguments[2] : 3;
        return [a, b, c];
      };
      var $__0 = doWork(5, undefined),
          x = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), ($__2 = $__1.next()).done ? void 0 : $__2.value),
          y = ($__2 = $__1.next()).done ? void 0 : $__2.value,
          z = ($__2 = $__1.next()).done ? void 0 : $__2.value;
      expect(x).toBe(5);
      expect(y).toBe(2);
      expect(z).toBe(3);
    });
    it('works withj destructuring', function() {
      var doWork = function(url, $__0) {
        var $__2,
            $__3;
        var $__1 = $__0,
            data = ($__2 = $__1.data) === void 0 ? "Scott" : $__2,
            cache = ($__3 = $__1.cache) === void 0 ? true : $__3;
        return data;
      };
      var result = doWork("api/test", {cache: false});
      expect(result).toBe("Scott");
    });
  });
  return {};
});
System.get("../es6/default.js" + '');
