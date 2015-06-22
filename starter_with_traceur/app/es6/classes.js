	describe('the classes keyword', function() {

	it('can create a class', function() {

		class Employee {


			doWork() {
				return "complete!";
			}

			getName() {
				return "Scott";
			}

		}

		let e = new Employee("Scott");

		expect(e.doWork()).toBe("complete!");
		expect(e.getName()).toBe("Scott");
		expect(Employee.prototype.doWork.call(e)).toBe("complete!");

	});


	it('can have a constructor', function() {

		class Employee {

			constructor(name) {
			   this._name = name;
			}

			doWork() {
				return "complete!";
			}

			getName() {
				return this._name;
			}

		}

		let e1 = new Employee("Scott");
		let e2 = new Employee("Alex");

		expect(e1.getName()).toBe("Scott");
		expect(e2.getName()).toBe("Alex");

	});


	it('can have getter and setters', function() {

		class Employee {

			constructor(name) {
			   this.name = name;
			}

			doWork() {
				return "complete!";
			}

			set name(newValue) {
				this._name = newValue;
			}

			get name() {
				return this._name.toUpperCase();
			}

		}

		let e1 = new Employee("Scott");
		let e2 = new Employee("Alex");

		expect(e1.name).toBe("SCOTT");
		expect(e2.name).toBe("ALEX");

		e1.name = "Chris"
		expect(e1.name).toBe("CHRIS");

	});

});