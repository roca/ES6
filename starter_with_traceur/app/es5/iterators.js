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
      for (var i$__10 in numbers) {
        sum += numbers[i$__10];
      }
      ;
      expect(sum).toBe(10);
      sum = 0;
      var iterator = numbers[Symbol.iterator]();
      var next = iterator.next();
      while (!next.done) {
        sum += next.value;
        next = iterator.next();
      }
      expect(sum).toBe(10);
    });
  });
  describe('for of', function() {
    it('can work with iterables at a high level', function() {
      var sum = 0;
      var numbers = [1, 2, 3, 4];
      var $__5 = true;
      var $__6 = false;
      var $__7 = undefined;
      try {
        for (var $__3 = void 0,
            $__2 = (numbers)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
          var n = $__3.value;
          {
            sum += n;
          }
        }
      } catch ($__8) {
        $__6 = true;
        $__7 = $__8;
      } finally {
        try {
          if (!$__5 && $__2.return != null) {
            $__2.return();
          }
        } finally {
          if ($__6) {
            throw $__7;
          }
        }
      }
      ;
      expect(sum).toBe(10);
    });
  });
  describe('iterable', function() {
    it('can be built by implmenting Symbol.iterator', function() {
      var Company = (function() {
        var $__1;
        function Company() {
          this.employees = [];
        }
        return ($traceurRuntime.createClass)(Company, ($__1 = {}, Object.defineProperty($__1, "addEmployees", {
          value: function() {
            for (var names = [],
                $__9 = 0; $__9 < arguments.length; $__9++)
              names[$__9] = arguments[$__9];
            this.employees = this.employees.concat(names);
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__1, Symbol.iterator, {
          value: function() {
            return new ArrayIterator(this.employees);
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), $__1), {});
      }());
      var ArrayIterator = (function() {
        function ArrayIterator(array) {
          this.array = array;
          this.index = 0;
        }
        return ($traceurRuntime.createClass)(ArrayIterator, {next: function() {
            var result = {
              value: undefined,
              done: true
            };
            if (this.index < this.array.length) {
              result.value = this.array[this.index];
              result.done = false;
              this.index += 1;
            }
            return result;
          }}, {});
      }());
      var count = 0;
      var company = new Company();
      company.addEmployees("Tim", "Sue", "Joy", "Tom");
      var $__5 = true;
      var $__6 = false;
      var $__7 = undefined;
      try {
        for (var $__3 = void 0,
            $__2 = (company)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
          var employee = $__3.value;
          {
            count += 1;
          }
        }
      } catch ($__8) {
        $__6 = true;
        $__7 = $__8;
      } finally {
        try {
          if (!$__5 && $__2.return != null) {
            $__2.return();
          }
        } finally {
          if ($__6) {
            throw $__7;
          }
        }
      }
      expect(count).toBe(4);
    });
  });
  return {};
});
System.get("../es6/iterators.js" + '');
