describe('destructuring', function() {

	it('can destructure arrays', function() {

		var doWork = function() {
			return [1,3,2];
		}


		let [,x,y,z] = doWork();


		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();

	});

	it('can destructure objects', function() {

		var doWork = function() {
			return {
				firstName: "Scott",
				lastName: "Allen",
				handles: {
					twitter: "OdeToCode"
				}
			};
		}


		let {
			firstName:first,
			lastName,
			handles:{twitter: handleName}
		} = doWork();


		expect(first).toBe("Scott");
		expect(lastName).toBe("Allen");
		expect(handleName).toBe("OdeToCode");

	});


	it('works with parameters', function() {

		let doWork = function  (name,{data:dataValue,cache:cacheValue}) {
			return dataValue
		}

		let result = doWork(
			"api/test", {
				data: "test",
				cache: false
			}
		);

		expect(result).toBe("test");

	});

});