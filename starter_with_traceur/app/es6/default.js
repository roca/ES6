describe('default parameters', function() {

	it('provides defaults', function() {

		var doWork = function(name="Scott"){
			return name;
		};

		expect(doWork()).toBe("Scott");
		expect(doWork("")).toBe("");
		expect(doWork(undefined)).toBe("Scott");
		expect(doWork(null)).toBe(null);
		expect(doWork("Cat")).toBe("Cat");

	});

	it('will provide a value for undefined', function() {

		var doWork = function(a = 1, b = 2, c = 3){
			return [a,b,c];
		};


		let [x,y,z] = doWork(5,undefined);

		expect(x).toBe(5);
		expect(y).toBe(2);
		expect(z).toBe(3);

	});


	it('works withj destructuring', function() {

		let doWork = function  (url,{data = "Scott",cache = true}) {
			return data;
		};

		let result = doWork("api/test",{cache:false});

		expect(result).toBe("Scott");

	});

});