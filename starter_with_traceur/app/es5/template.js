System.registerModule("../es6/template.js", [], function() {
  "use strict";
  var __moduleName = "../es6/template.js";
  describe('template literals', function() {
    it('can easily combine literals and data', function() {
      var doWork = function(name) {
        return ("Hello, " + name);
      };
      expect(doWork("Scott")).toBe("Hello, Scott");
    });
    it('can help build URLs', function() {
      var category = "music";
      var id = 2112;
      var url = ("http://apiserver/" + category + "/" + id);
      expect(url).toBe("http://apiserver/music/2112");
    });
    it('can use tags', function() {
      var upper = function(strings) {
        for (var values = [],
            $__0 = 1; $__0 < arguments.length; $__0++)
          values[$__0 - 1] = arguments[$__0];
        var result = "";
        for (var i = 0; i < strings.length; i++) {
          result += strings[i];
          if (i < values.length) {
            result += values[i];
          }
          ;
        }
        ;
        return result.toUpperCase();
      };
      var x = 1;
      var y = 3;
      var template = (x + " + " + y + " is " + (x + y));
      var result = upper(template);
      expect(result).toBe("1 + 3 IS 4");
      expect(template.toUpperCase()).toBe("1 + 3 IS 4");
    });
  });
  return {};
});
System.get("../es6/template.js" + '');
