describe('generators', function() {

	it('can build an iterable', function() {
		let numbers = function * (start,end) {
			for (var i = start; i <= end; i++) {
				console.log("yield: " + i);
				yield i;
			};
		};

		let sum = 0;

		console.log("next");
		for(let n of numbers(1,5)) {
			sum += n;
			console.log("next");
		};


		expect(sum).toBe(15);
	});

	it('can be used to make a class iterable', function() {

		class Company {
			constructor() {
				this.employees = [];
			}

			addEmployees(...names) {
				this.employees = this.employees.concat(names);
			}

			*[Symbol.iterator]() {
				for (let e of this.employees) {
					console.log(e);
					yield e
				};
			}
		}

         let filter = function * (items,predicate) {
         	for(let item of items){
         		console.log("filter",item);
         		if (predicate(item)) {
                   yield item;
         		};
         	}
         };

         let take = function * (items,number) {
         	let count = 0;
         	if(number > 1) return;
         	for(let item of items){
         		console.log("take",item);
         		yield item;
         		count += 1;
         		if(count >= number){
         			return;
         		}
         	}
         };

		let count = 0;
		let company = new Company();

		company.addEmployees("Tim","Sue","Joy","Tom","Terance");

		let iterator = company[Symbol.iterator]();
		iterator.next();

		for (let employee of take(filter(company, e => e[0]=='T'),1)) {
			count += 1;
		}

		expect(count).toBe(1);

	});

	it('can take a parametre from next(param)', function() {
		let range = function * (start,end) {
			let current = start;
			while(current <= end) {
				yield current;
				current += 1;
			}
		};

		let result = [];
		let iterator = range(1,10);
		let next = iterator.next();


		expect(result).toEqual([1,3,5,7,9]);
	});

});