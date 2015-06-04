System.registerModule("../es6/generator.js", [], function() {
  "use strict";
  var __moduleName = "../es6/generator.js";
  describe('generators', function() {
    it('can build an iterable', function() {
      var numbers = $traceurRuntime.initGeneratorFunction(function $__10(start, end) {
        var i;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                i = start;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (i <= end) ? 5 : 7;
                break;
              case 4:
                i++;
                $ctx.state = 9;
                break;
              case 5:
                console.log("yield: " + i);
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return i;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 7:
                ;
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__10, this);
      });
      var sum = 0;
      console.log("next");
      var $__5 = true;
      var $__6 = false;
      var $__7 = undefined;
      try {
        for (var $__3 = void 0,
            $__2 = (numbers(1, 5))[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
          var n = $__3.value;
          {
            sum += n;
            console.log("next");
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
      expect(sum).toBe(15);
    });
    it('can be used to make a class iterable', function() {
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
          value: $traceurRuntime.initGeneratorFunction(function $__10() {
            var $__5,
                $__6,
                $__7,
                $__3,
                $__2,
                e,
                $__8;
            return $traceurRuntime.createGeneratorInstance(function($ctx) {
              while (true)
                switch ($ctx.state) {
                  case 0:
                    $__5 = true;
                    $__6 = false;
                    $__7 = undefined;
                    $ctx.state = 26;
                    break;
                  case 26:
                    $ctx.pushTry(12, 13);
                    $ctx.state = 15;
                    break;
                  case 15:
                    $__3 = void 0, $__2 = (this.employees)[$traceurRuntime.toProperty(Symbol.iterator)]();
                    $ctx.state = 11;
                    break;
                  case 11:
                    $ctx.state = (!($__5 = ($__3 = $__2.next()).done)) ? 7 : 9;
                    break;
                  case 4:
                    $__5 = true;
                    $ctx.state = 11;
                    break;
                  case 7:
                    e = $__3.value;
                    $ctx.state = 8;
                    break;
                  case 8:
                    console.log(e);
                    $ctx.state = 6;
                    break;
                  case 6:
                    $ctx.state = 2;
                    return e;
                  case 2:
                    $ctx.maybeThrow();
                    $ctx.state = 4;
                    break;
                  case 9:
                    $ctx.popTry();
                    $ctx.state = 13;
                    $ctx.finallyFallThrough = 17;
                    break;
                  case 12:
                    $ctx.popTry();
                    $ctx.maybeUncatchable();
                    $__8 = $ctx.storedException;
                    $ctx.state = 18;
                    break;
                  case 18:
                    $__6 = true;
                    $__7 = $__8;
                    $ctx.state = 13;
                    $ctx.finallyFallThrough = 17;
                    break;
                  case 13:
                    $ctx.popTry();
                    $ctx.state = 24;
                    break;
                  case 24:
                    try {
                      if (!$__5 && $__2.return != null) {
                        $__2.return();
                      }
                    } finally {
                      if ($__6) {
                        throw $__7;
                      }
                    }
                    $ctx.state = 22;
                    break;
                  case 17:
                    ;
                    $ctx.state = -2;
                    break;
                  case 22:
                    $ctx.state = $ctx.finallyFallThrough;
                    break;
                  default:
                    return $ctx.end();
                }
            }, $__10, this);
          }),
          configurable: true,
          enumerable: true,
          writable: true
        }), $__1), {});
      }());
      var filter = $traceurRuntime.initGeneratorFunction(function $__10(items, predicate) {
        var $__5,
            $__6,
            $__7,
            $__3,
            $__2,
            item,
            $__8;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $__5 = true;
                $__6 = false;
                $__7 = undefined;
                $ctx.state = 29;
                break;
              case 29:
                $ctx.pushTry(15, 16);
                $ctx.state = 18;
                break;
              case 18:
                $__3 = void 0, $__2 = (items)[$traceurRuntime.toProperty(Symbol.iterator)]();
                $ctx.state = 14;
                break;
              case 14:
                $ctx.state = (!($__5 = ($__3 = $__2.next()).done)) ? 10 : 12;
                break;
              case 9:
                $__5 = true;
                $ctx.state = 14;
                break;
              case 10:
                item = $__3.value;
                $ctx.state = 11;
                break;
              case 11:
                console.log("filter", item);
                $ctx.state = 7;
                break;
              case 7:
                $ctx.state = (predicate(item)) ? 1 : 4;
                break;
              case 1:
                $ctx.state = 2;
                return item;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                ;
                $ctx.state = 9;
                break;
              case 12:
                $ctx.popTry();
                $ctx.state = 16;
                $ctx.finallyFallThrough = -2;
                break;
              case 15:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__8 = $ctx.storedException;
                $ctx.state = 21;
                break;
              case 21:
                $__6 = true;
                $__7 = $__8;
                $ctx.state = 16;
                $ctx.finallyFallThrough = -2;
                break;
              case 16:
                $ctx.popTry();
                $ctx.state = 27;
                break;
              case 27:
                try {
                  if (!$__5 && $__2.return != null) {
                    $__2.return();
                  }
                } finally {
                  if ($__6) {
                    throw $__7;
                  }
                }
                $ctx.state = 25;
                break;
              case 25:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__10, this);
      });
      var take = $traceurRuntime.initGeneratorFunction(function $__11(items, number) {
        var count,
            $__5,
            $__6,
            $__7,
            $__3,
            $__2,
            item,
            $__8;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                count = 0;
                $ctx.state = 34;
                break;
              case 34:
                $ctx.state = (number > 1) ? 1 : 2;
                break;
              case 1:
                $ctx.state = -2;
                break;
              case 2:
                $__5 = true;
                $__6 = false;
                $__7 = undefined;
                $ctx.state = 36;
                break;
              case 36:
                $ctx.pushTry(20, 21);
                $ctx.state = 23;
                break;
              case 23:
                $__3 = void 0, $__2 = (items)[$traceurRuntime.toProperty(Symbol.iterator)]();
                $ctx.state = 19;
                break;
              case 19:
                $ctx.state = (!($__5 = ($__3 = $__2.next()).done)) ? 15 : 17;
                break;
              case 9:
                $__5 = true;
                $ctx.state = 19;
                break;
              case 15:
                item = $__3.value;
                $ctx.state = 16;
                break;
              case 16:
                console.log("take", item);
                $ctx.state = 12;
                break;
              case 12:
                $ctx.state = 5;
                return item;
              case 5:
                $ctx.maybeThrow();
                $ctx.state = 7;
                break;
              case 7:
                count += 1;
                $ctx.state = 14;
                break;
              case 14:
                $ctx.state = (count >= number) ? 8 : 9;
                break;
              case 8:
                $ctx.state = 21;
                $ctx.finallyFallThrough = -2;
                break;
              case 17:
                $ctx.popTry();
                $ctx.state = 21;
                $ctx.finallyFallThrough = -2;
                break;
              case 20:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__8 = $ctx.storedException;
                $ctx.state = 26;
                break;
              case 26:
                $__6 = true;
                $__7 = $__8;
                $ctx.state = 21;
                $ctx.finallyFallThrough = -2;
                break;
              case 21:
                $ctx.popTry();
                $ctx.state = 32;
                break;
              case 32:
                try {
                  if (!$__5 && $__2.return != null) {
                    $__2.return();
                  }
                } finally {
                  if ($__6) {
                    throw $__7;
                  }
                }
                $ctx.state = 30;
                break;
              case 30:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__11, this);
      });
      var count = 0;
      var company = new Company();
      company.addEmployees("Tim", "Sue", "Joy", "Tom", "Terance");
      var iterator = company[Symbol.iterator]();
      iterator.next();
      var $__5 = true;
      var $__6 = false;
      var $__7 = undefined;
      try {
        for (var $__3 = void 0,
            $__2 = (take(filter(company, (function(e) {
              return e[0] == 'T';
            })), 1))[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
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
      expect(count).toBe(1);
    });
    it('can take a parametre from next(param)', function() {
      var range = $traceurRuntime.initGeneratorFunction(function $__10(start, end) {
        var current;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                current = start;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (current <= end) ? 1 : -2;
                break;
              case 1:
                $ctx.state = 2;
                return current;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                current += 1;
                $ctx.state = 9;
                break;
              default:
                return $ctx.end();
            }
        }, $__10, this);
      });
      var result = [];
      var iterator = range(1, 10);
      var next = iterator.next();
      expect(result).toEqual([1, 3, 5, 7, 9]);
    });
  });
  return {};
});
System.get("../es6/generator.js" + '');
