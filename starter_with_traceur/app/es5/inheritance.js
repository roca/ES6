System.registerModule("../es6/inheritance.js", [], function() {
  "use strict";
  var __moduleName = "../es6/inheritance.js";
  describe('inheritance', function() {
    it('can have a super class', function() {
      var Person = (function() {
        function Person(name) {
          this.name = name;
        }
        return ($traceurRuntime.createClass)(Person, {
          set name(newValue) {
            if (newValue) {
              this._name = newValue;
            }
          },
          get name() {
            return this._name;
          }
        }, {});
      }());
      var Employee = (function($__super) {
        function Employee() {
          $traceurRuntime.superConstructor(Employee).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(Employee, {doWork: function() {
            return (this.name + " is working");
          }}, {}, $__super);
      }(Person));
      var p1 = new Person("Scott");
      var e1 = new Employee("Christopher");
      expect(p1.name).toBe("Scott");
      expect(e1.name).toBe("Christopher");
      expect(e1.doWork()).toBe("Christopher is working");
    });
    it('can call super class methods', function() {
      var Person = (function() {
        function Person(name) {
          this.name = name;
        }
        return ($traceurRuntime.createClass)(Person, {
          set name(newValue) {
            if (newValue) {
              this._name = newValue;
            }
          },
          get name() {
            return this._name;
          }
        }, {});
      }());
      var Employee = (function($__super) {
        function Employee(title, name) {
          $traceurRuntime.superConstructor(Employee).call(this, name);
          this.title = title;
        }
        return ($traceurRuntime.createClass)(Employee, {
          doWork: function() {
            return (this.name + " is working " + this.title);
          },
          set title(newValue) {
            if (newValue) {
              this._title = newValue;
            }
          },
          get title() {
            return this._title;
          }
        }, {}, $__super);
      }(Person));
      var e1 = new Employee("Developer", "Scott");
      expect(e1.name).toBe("Scott");
      expect(e1.title).toBe("Developer");
      expect(e1.doWork()).toBe("Scott is working Developer");
      e1.title = "Manager";
      e1.name = "Christopher";
      expect(e1.doWork()).toBe("Christopher is working Manager");
    });
  });
  return {};
});
System.get("../es6/inheritance.js" + '');
