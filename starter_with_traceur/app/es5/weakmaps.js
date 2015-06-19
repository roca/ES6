System.registerModule("../es6/weakmaps.js", [], function() {
  "use strict";
  var __moduleName = "../es6/weakmaps.js";
  describe('WeakMaps', function() {
    it('should not haved properties & methods that relate to the entire map', function() {
      var map = new WeakMap();
      expect(map.size).toBe(undefined);
      expect(map.entries).toBe(undefined);
      expect(map.values).toBe(undefined);
      expect(map.forEach).toBe(undefined);
    });
    it('should be able to find items with has', function() {
      var map = new WeakMap();
      var key = {};
      var item = {name: 'Joe'};
      map.set(key, item);
      expect(map.has(key)).toBe(true);
    });
    it('should be able to get the correct value', function() {
      var map = new WeakMap();
      var key = {};
      var item = {name: 'Joe'};
      map.set(key, item);
      expect(map.get(key)).toBe(item);
    });
    it('should remove a item when delete is called', function() {
      var map = new WeakMap();
      var key = {};
      var item = {name: 'Joe'};
      map.set(key, item);
      map.delete(key);
      expect(map.has(key)).toBe(false);
    });
    xit('should remove all items when clear is called', function() {
      var map = new WeakMap();
      var key = {};
      var item = {name: 'Joe'};
      map.set(key, item);
      map.clear();
      expect(map.has(key)).toBe(false);
    });
  });
  return {};
});
System.get("../es6/weakmaps.js" + '');
