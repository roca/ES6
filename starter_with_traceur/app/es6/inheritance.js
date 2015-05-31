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
				return `${this.name} is a working ${this.title}`;
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
		expect(e1.doWork()).toBe("Scott is a working Developer")

		e1.title = "Manager";
		e1.name = "Christopher"
		expect(e1.doWork()).toBe("Christopher is a working Manager")

	});

	it('can overide methods in super class', function() {


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

			doWork(){
				return "free";
			}


			toString() {
				return this.name;
			}

		}

		class Employee extends Person{

			constructor(title,name){
				super(name);
				this.title = title;
			}

			doWork(){
				return "paid";
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
		let p1 = new Person("Alex");

		expect(p1.doWork()).toBe("free");
		expect(e1.doWork()).toBe("paid");

		expect(p1.toString()).toBe("Alex");
		expect(e1.toString()).toBe("Scott");

		let makeEveryoneWork = function (...people) {
			var result = [];
			for (var i = 0; i < people.length ; i++) {
				if (people[i] instanceof Person) {
					result.push(people[i].doWork());
				}
			};
			return result;
		}

		expect(makeEveryoneWork(p1,e1,{})).toEqual(["free","paid"]);

	});
});