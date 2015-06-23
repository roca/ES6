System.registerModule("../es6/code.js", [], function() {
  "use strict";
  var __moduleName = "../es6/code.js";
  (function() {
    var sequence;
    var run = function(generator) {
      sequence = generator();
      var next = sequence.next();
    };
    var resume = function() {
      sequence.next();
    };
    window.async = {
      run: run,
      resume: resume
    };
  }());
  return {};
});
System.get("../es6/code.js" + '');
