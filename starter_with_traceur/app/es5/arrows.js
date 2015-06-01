System.registerModule("../es6/arrows.js", [], function() {
  "use strict";
  var __moduleName = "../es6/arrows.js";
  describe('arrows functions', function() {
    it('provide a compact syntax to define a function', function() {
      var add = (function(x, y) {
        var temp = x + y;
        return temp;
      });
      var square = (function(x) {
        return x * x;
      });
      var three = (function() {
        return 3;
      });
      expect(square(add(2, three()))).toBe(25);
    });
    it('can be used with array methods', function() {
      var numbers = [1, 2, 3, 4];
      var sum = 0;
      numbers.forEach((function(n) {
        return sum += n;
      }));
      expect(sum).toBe(10);
      var doubled = numbers.map((function(n) {
        return n * 2;
      }));
      expect(doubled).toEqual([2, 4, 6, 8]);
    });
    it('lexically binds to this', function(done) {
      var $__0 = this;
      var self = this;
      this.name = "Scott";
      setTimeout(function() {
        expect(this.name).toBe("");
        expect(self.name).toBe("Scott");
        done();
      }, 15);
      setTimeout((function() {
        expect($__0.name).toBe("Scott");
        done();
      }), 15);
    });
  });
  return {};
});
System.get("../es6/arrows.js" + '');
