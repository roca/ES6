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
            return (this.name + " is a working " + this.title);
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
      expect(e1.doWork()).toBe("Scott is a working Developer");
      e1.title = "Manager";
      e1.name = "Christopher";
      expect(e1.doWork()).toBe("Christopher is a working Manager");
    });
    it('can overide methods in super class', function() {
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
          },
          doWork: function() {
            return "free";
          },
          toString: function() {
            return this.name;
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
            return "paid";
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
      var p1 = new Person("Alex");
      expect(p1.doWork()).toBe("free");
      expect(e1.doWork()).toBe("paid");
      expect(p1.toString()).toBe("Alex");
      expect(e1.toString()).toBe("Scott");
      var makeEveryoneWork = function() {
        for (var people = [],
            $__1 = 0; $__1 < arguments.length; $__1++)
          people[$__1] = arguments[$__1];
        var result = [];
        for (var i = 0; i < people.length; i++) {
          if (people[i] instanceof Person) {
            result.push(people[i].doWork());
          }
        }
        ;
        return result;
      };
      expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "paid"]);
    });
  });
  return {};
});
System.get("../es6/inheritance.js" + '');
