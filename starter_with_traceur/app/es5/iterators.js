System.registerModule("../es6/iterators.js", [], function() {
  "use strict";
  var __moduleName = "../es6/iterators.js";
  describe('iterables', function() {
    it('can work with iterators at a low level', function() {
      var sum = 0;
      var numbers = [1, 2, 3, 4];
      sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      ;
      expect(sum).toBe(10);
      sum = 0;
      for (var i$__0 in numbers) {
        sum += numbers[i$__0];
      }
      ;
      expect(sum).toBe(10);
      sum = 0;
      var interator = numbers.values();
      var next = interator.next();
      while (!next.done) {
        sum += next.value;
        next = interator.next();
      }
      expect(sum).toBe(10);
    });
  });
  return {};
});
System.get("../es6/iterators.js" + '');
