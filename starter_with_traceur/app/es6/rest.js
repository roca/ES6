describe('rest parameters', function() {

	it('is like varargs', function() {

		let doWork = function  (name , ...numbers) {
			let result = 0;
			numbers.forEach ( function(n) {
				result += n;
			});
			return result;
		}

		expect(doWork("Scott",1,2,3)).toBe(6)
		expect(doWork("Scott")).toBe(0)

	});

});