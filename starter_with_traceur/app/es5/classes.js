System.registerModule("../es6/classes.js", [], function() {
  "use strict";
  var __moduleName = "../es6/classes.js";
  describe('the classes keyword', function() {
    it('can create a class', function() {
      var Employee = (function() {
        function Employee() {}
        return ($traceurRuntime.createClass)(Employee, {
          doWork: function() {
            return "complete!";
          },
          getName: function() {
            return "Scott";
          }
        }, {});
      }());
      var e = new Employee("Scott");
      expect(e.doWork()).toBe("complete!");
      expect(e.getName()).toBe("Scott");
      expect(Employee.prototype.doWork.call(e)).toBe("complete!");
    });
    it('can have a constructor', function() {
      var Employee = (function() {
        function Employee(name) {
          this._name = name;
        }
        return ($traceurRuntime.createClass)(Employee, {
          doWork: function() {
            return "complete!";
          },
          getName: function() {
            return this._name;
          }
        }, {});
      }());
      var e1 = new Employee("Scott");
      var e2 = new Employee("Alex");
      expect(e1.getName()).toBe("Scott");
      expect(e2.getName()).toBe("Alex");
    });
    it('can have getter and setters', function() {
      var Employee = (function() {
        function Employee(name) {
          this.name = name;
        }
        return ($traceurRuntime.createClass)(Employee, {
          doWork: function() {
            return "complete!";
          },
          set name(newValue) {
            this._name = newValue;
          },
          get name() {
            return this._name.toUpperCase();
          }
        }, {});
      }());
      var e1 = new Employee("Scott");
      var e2 = new Employee("Alex");
      expect(e1.name).toBe("SCOTT");
      expect(e2.name).toBe("ALEX");
      e1.name = "Chris";
      expect(e1.name).toBe("CHRIS");
    });
  });
  return {};
});
System.get("../es6/classes.js" + '');
