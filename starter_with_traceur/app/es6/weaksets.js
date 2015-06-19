describe('WeakSets', function() {

	it('should not haved properties & methods that relate to the entire set', function() {
        var set = new WeakSet();
		expect(set.size).toBe(undefined);
		expect(set.entries).toBe(undefined);
		expect(set.values).toBe(undefined);
		expect(set.forEach).toBe(undefined);

	});

	it('should be able to find items with has', function() {
		var set = new WeakSet();
		var item = {name:'Joe'};
		set.add(item);
		expect(set.has(item)).toBe(true);
	});

	it('should be able to remove items with delete', function() {
		var set = new WeakSet();
		var item = {name:'Joe'};
		set.add(item);
		set.delete(item);
		expect(set.has(item)).toBe(false);
	});

	xit('should remove all items when clear is called', function() {
		var set = new WeakSet();
		var item = {name:'Joe'};
		set.add(item);
		set.clear();
		expect(set.has(item)).toBe(false);
	});

});