"use strict";
describe('destructuring', function() {
  it('can destructure arrays', function() {
    var $__0;
    var x = 2;
    var y = 3;
    ($__0 = [y, x], x = $__0[0], y = $__0[1], $__0);
    expect(x).toBe(3);
    expect(y).toBe(2);
  });
});

//# sourceMappingURL=destructuring.js.map
