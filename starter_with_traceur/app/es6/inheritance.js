describe('inheritance', function() {

	it('can have a super class', function() {

		class Person {

			constructor(name) {
			   this.name = name;
			}

			set name(newValue) {
				if(newValue) {
					this._name = newValue;
				}
			}

			get name() {
				return this._name;
			}

		}

		class Employee extends Person{

			doWork(){
				return `${this.name} is working`;
			}

		}

		let p1 = new Person("Scott");
		let e1 = new Employee("Christopher");

		expect(p1.name).toBe("Scott");
		expect(e1.name).toBe("Christopher");
		expect(e1.doWork()).toBe("Christopher is working");

	});


	it('can call super class methods', function() {

		class Person {

			constructor(name) {
			   this.name = name;
			}

			set name(newValue) {
				if(newValue) {
					this._name = newValue;
				}
			}

			get name() {
				return this._name;
			}

		}

		class Employee extends Person{

			constructor(title,name){
				super(name);
				this.title = title;
			}

			doWork(){
				return `${this.name} is working ${this.title}`;
			}

			set title(newValue) {
				if(newValue){
					this._title = newValue;
				}
			}

			get title(){
				return this._title;
			}

		}

		let e1 = new Employee("Developer","Scott");

		expect(e1.name).toBe("Scott");
		expect(e1.title).toBe("Developer");
		expect(e1.doWork()).toBe("Scott is working Developer")

		e1.title = "Manager";
		e1.name = "Christopher"
		expect(e1.doWork()).toBe("Christopher is working Manager")

	});
});