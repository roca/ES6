"use strict";
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
        try {
          throw undefined;
        } catch (x) {
          x = 3;
          return x;
        }
      }
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it('will provide block scoping with for', function() {
    var j = undefined;
    var doWork = function(flag) {
      {
        try {
          throw undefined;
        } catch ($i) {
          $i = 0;
          for (; $i < 10; $i++) {
            try {
              throw undefined;
            } catch (i) {
              i = $i;
              try {
                j = i;
              } finally {
                $i = i;
              }
            }
          }
        }
      }
      return j;
    };
    var result = doWork();
    expect(result).toBe(9);
  });
});

//# sourceMappingURL=let.js.map
