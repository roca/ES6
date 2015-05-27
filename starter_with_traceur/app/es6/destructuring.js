describe('destructuring', function() {

	it('can destructure arrays', function() {

		let x = 2;
		let y = 3;

		[x,y] = [y,x];

		expect(x).toBe(3);
		expect(y).toBe(2);

	});

});