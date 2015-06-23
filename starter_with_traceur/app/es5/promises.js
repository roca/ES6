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
      describe('async generators', function() {
        xit('should be difficult to read with regular async code', function() {
          console.log('start');
          oldPause(500, function() {
            console.log('middle');
            oldPause(500, function() {
              console.log('end');
            });
          });
        });
        it('should be easier to read with generators', function(done) {
          var $__0 = $traceurRuntime.initGeneratorFunction(main);
          function main() {
            return $traceurRuntime.createGeneratorInstance(function($ctx) {
              while (true)
                switch ($ctx.state) {
                  case 0:
                    console.log('start');
                    $ctx.state = 10;
                    break;
                  case 10:
                    $ctx.state = 2;
                    return pause(500);
                  case 2:
                    $ctx.maybeThrow();
                    $ctx.state = 4;
                    break;
                  case 4:
                    console.log('middle');
                    $ctx.state = 12;
                    break;
                  case 12:
                    $ctx.state = 6;
                    return pause(500);
                  case 6:
                    $ctx.maybeThrow();
                    $ctx.state = 8;
                    break;
                  case 8:
                    console.log('end');
                    done();
                    $ctx.state = -2;
                    break;
                  default:
                    return $ctx.end();
                }
            }, $__0, this);
          }
          async.run(main);
        });
      });
    });
  });
  return {};
});
System.get("../es6/promises.js" + '');
