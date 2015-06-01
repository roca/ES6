describe('iterables', function() {

	it('can work with iterators at a low level', function() {

		let sum = 0;
		let numbers = [1,2,3,4];


		sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		};
		expect(sum).toBe(10);

		sum = 0;
		for (let i in numbers) {
			sum += numbers[i];
		};
		expect(sum).toBe(10);

		sum = 0;
		let interator = numbers.values();
		let next = interator.next();
		while(!next.done) {
			sum += next.value;
			next = interator.next();
		}
		expect(sum).toBe(10);

	});

});