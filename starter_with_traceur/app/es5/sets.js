System.registerModule("../es6/sets.js", [], function() {
  "use strict";
  var __moduleName = "../es6/sets.js";
  describe('Sets', function() {
    it('should contain zero items when constructed', function() {
      var set = new Set();
      expect(set.size).toBe(0);
    });
    it('should contain 1 item when one item is added', function() {
      var set = new Set();
      set.add("someValue");
      expect(set.size).toBe(1);
    });
    it('should allow objects as keys', function() {
      var set = new Set();
      var key = {someValue: 1};
      set.add(key);
      expect(set.has(key)).toBe(true);
    });
    it('should contain items when given an array in the constructor', function() {
      var set = new Set([1, 2, 3]);
      expect(set.has(1)).toBe(true);
    });
    it('should allow duplicate values', function() {
      var set = new Set();
      var key = {someValue: 1};
      set.add(key);
      set.add(key);
      expect(set.size).toBe(1);
    });
    it('should have no items after clear is called', function() {
      var set = new Set();
      set.add(1);
      set.add(2);
      set.add(3);
      set.clear();
      expect(set.size).toBe(0);
    });
    it('should remove an item when delete is called', function() {
      var set = new Set();
      set.add(1);
      set.add(2);
      set.add(3);
      set.delete(2);
      expect(set.size).toBe(2);
    });
    it('should call a callback function once for each item when forEach is invoked', function() {
      var set = new Set([1, 2, 3]);
      var iterationCount = 0;
      set.forEach((function(item) {
        return iterationCount++;
      }));
      expect(iterationCount).toBe(3);
    });
    it('should support for of iteration', function() {
      var set = new Set([1, 2, 3]);
      var iterationCount = 0;
      var $__3 = true;
      var $__4 = false;
      var $__5 = undefined;
      try {
        for (var $__1 = void 0,
            $__0 = (set)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
          var item = $__1.value;
          {
            iterationCount++;
          }
        }
      } catch ($__6) {
        $__4 = true;
        $__5 = $__6;
      } finally {
        try {
          if (!$__3 && $__0.return != null) {
            $__0.return();
          }
        } finally {
          if ($__4) {
            throw $__5;
          }
        }
      }
      ;
      expect(iterationCount).toBe(3);
    });
    it('should return an iterator of arrays when entries is called', function() {
      var set = new Set();
      set.add("1");
      var entries = set.entries();
      var firstEntry = entries.next().value;
      expect(firstEntry[0]).toBe("1");
      expect(firstEntry[1]).toBe("1");
    });
    it('should return an iterator of values when values is called', function() {
      var set = new Set();
      set.add("1");
      var values = set.values();
      var firstEntry = values.next().value;
      expect(firstEntry).toBe("1");
    });
    it('should be able to be constructed with an iterator', function() {
      var set = new Set([1, 2, 3]);
      var set2 = new Set(set.values());
      expect(set2.size).toBe(3);
    });
    it('should be able to be constructed with another Set', function() {
      var set = new Set([1, 2, 3]);
      var set2 = new Set(set);
      expect(set2.size).toBe(3);
    });
  });
  return {};
});
System.get("../es6/sets.js" + '');
