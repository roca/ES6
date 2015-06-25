System.registerModule("../es6/code.js", [], function() {
  "use strict";
  var __moduleName = "../es6/code.js";
  'use strict'(function(target) {
    var getOrder = function(orderId) {
      return Promise.resolve({userId: 35});
    };
    var getUser = function(userId) {
      return Promise.resolve({companyId: 18});
    };
    var getCompany = function(companyId) {
      return Promise.resolve({name: 'Pluralsight'});
    };
    var getCourse = function(courseId) {
      var courses = {
        1: {name: "Introduction to Cobol"},
        2: {name: "Yet Another C# Course"},
        3: {name: "How to make billions by blogging"}
      };
      return Promise.resolve(courses[courseId]);
    };
    var oldPause = function(delay, cb) {
      setTimeout(function() {
        console.log('paused for ' + delay + 'ms');
        cb();
      }, delay);
    };
    var pause = function(delay) {
      setTimeout(function() {
        console.log('paused for ' + delay + 'ms');
        async.resume();
      }, delay);
    };
    var sequence;
    var run = function(generator) {
      sequence = generator();
      var next = sequence.next();
    };
    var resume = function(value) {
      sequence.next(value);
    };
    var fail = function(reason) {
      sequence.throw(reason);
    };
    var getStockPrice = function() {
      setTimeout(function() {
        try {
          throw Error('there was a problem!');
          async.resume(50);
        } catch (ex) {
          async.fail(ex);
        }
      }, 300);
    };
    var executeTrade = function() {
      setTimeout(function() {
        console.log("trade completed");
        async.resume();
      }, 300);
    };
    target.async = {
      run: run,
      resume: resume,
      fail: fail
    };
    target.pause = pause;
    target.oldPause = oldPause;
    target.getOrder = getOrder;
    target.getUser = getUser;
    target.getCompany = getCompany;
    target.getCourse = getCourse;
    target.getStockPrice = getStockPrice;
    target.executeTrade = executeTrade;
  }(window));
  return {};
});
System.get("../es6/code.js" + '');
