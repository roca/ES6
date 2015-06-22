System.registerModule("../es6/promises.js", [], function() {
  "use strict";
  var __moduleName = "../es6/promises.js";
  describe('Promises', function() {
    it('should execute the callback given to then', function(done) {
      var resolved = false;
      var promise = new Promise(function(resolve, reject) {
        resolved = true;
        resolve();
      });
      promise.then(function() {
        expect(resolved).toBe(true);
        done();
      });
    });
    it('should receive the resolved data', function(done) {
      var promise = new Promise(function(resolve, reject) {
        resolve(1);
      });
      promise.then(function(data) {
        expect(data).toBe(1);
        done();
      });
    });
    it('should fail when rejected', function(done) {
      var promise = new Promise(function(resolve, reject) {
        reject(Error("oh no!"));
      });
      promise.then(function() {}, function(error) {
        expect(error.message).toBe("oh no!");
        done();
      });
    });
    it('should have a catch', function(done) {
      var promise = new Promise(function(resolve, reject) {
        reject(Error("oh no!"));
      });
      promise.catch(function(error) {
        expect(error.message).toBe("oh no!");
        done();
      });
    });
    it('should compose whenresolved with a promise', function(done) {
      var previousPromise = new Promise(function(resolve, reject) {
        resolve(3);
      });
      var promise = new Promise(function(resolve, reject) {
        resolve(previousPromise);
      });
      promise.then(function(data) {
        expect(data).toBe(3);
        done();
      });
    });
    it('should have a static resolve', function(done) {
      var previousPromise = Promise.resolve(3);
      var promise = Promise.resolve(previousPromise);
      promise.then(function(data) {
        expect(data).toBe(3);
        done();
      });
    });
    it('should have a static reject', function(done) {
      var promise = Promise.reject(Error("oh no!"));
      promise.catch(function(error) {
        expect(error.message).toBe("oh no!");
        done();
      });
    });
    it('should be asynchronous', function(done) {
      var async = false;
      var promise = new Promise(function(resolve, reject) {
        resolve();
      });
      promise.then(function() {
        expect(async).toBe(true);
        done();
      });
      async = true;
    });
    describe('Advanced', function() {
      var getOrder = function(orderId) {
        return Promise.resolve({userId: 35});
      };
      var getUser = function(userId) {
        return Promise.resolve({companyId: 18});
      };
      var getCompany = function(companyId) {
        return Promise.resolve({name: 'Pluralsight'});
      };
      it('should chain sequentially using then', function(done) {
        getOrder(3).then(function(order) {
          return getUser(order.userId);
        }).then(function(user) {
          return getCompany(user.companyId);
        }).then(function(company) {
          expect(company.name).toBe('Pluralsight');
          done();
        }).catch(function(error) {});
      });
      var getCourse = function(courseId) {
        var courses = {
          1: {name: "Introduction to Cobol"},
          2: {name: "Yet Another C# Course"},
          3: {name: "How to make billions by blogging"}
        };
        return Promise.resolve(courses[courseId]);
      };
      it('should execute after all promises with all', function(done) {
        var courseIds = [1, 2, 3];
        var promises = [];
        for (var i = 0; i < courseIds.length; i++) {
          promises.push(getCourse(courseIds[i]));
        }
        Promise.all(promises).then(function(values) {
          var set = new Set();
          for (var i = 0; i < values.length; i++) {
            set.add(values[i].name);
          }
          expect(set.has("Yet Another C# Course")).toBe(true);
          expect(set.size).toBe(3);
          done();
        });
      });
      it('should resolve after the first promise', function(done) {
        var courseIds = [1, 2, 3];
        var promises = [];
        for (var i = 0; i < courseIds.length; i++) {
          promises.push(getCourse(courseIds[i]));
        }
        Promise.race(promises).then(function(firstValue) {
          expect(firstValue.name).toBeDefined();
          done();
        });
      });
    });
  });
  return {};
});
System.get("../es6/promises.js" + '');
