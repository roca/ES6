describe('Maps', function() {

	it('should contain zero items when constructed', function() {
		var map = new Map();
		expect(map.size).toBe(0);
	});

	it('should contain 1 item when one is added', function() {
		var map = new Map();
		map.set("arg",35);
		expect(map.size).toBe(1);
	});

	it('should return the value when get is called with the correct key', function() {
		var map = new Map();
		map.set("age",35);
		expect(map.get('age')).toBe(35);
	});

	it('should allow an object to be the key', function() {
		var ageMap = new Map();
		var ralph = {"name": 'Ralph'};
		ageMap.set(ralph,29);
		expect(ageMap.get(ralph)).toBe(29);
	});


	it('should contain items when given an array of arrays in the constructor', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		expect(map.size).toBe(3);
	});

	it('should find the correct item when has is called', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		expect(map.has('age')).toBe(true);
	});

	it('should not allow duplicate keys', function() {
		var map = new Map();
		var key ={};
		map.set(key,'first');
		map.set(key,'second');
		expect(map.get(key)).toBe('second');
	});

	it('should have no no items after clear is called', function() {
		var map = new Map();
		map.set(1,'a');
		map.set(2,'b');
		map.set(3,'c');
		map.clear();
		expect(map.size).toBe(0);
	});

	it('should remove an item when delete is called', function() {
		var map = new Map();
		var key1 = {};
		var key2 = {};
		map.set(key1,100);
		map.set(key2,200);
		expect(map.size).toBe(2);
		map.delete(key2);
		expect(map.has(key2)).toBe(false);
		expect(map.size).toBe(1);

	});

	it('should call the callback function for each item when forEach is called', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		var iterationCount = 0;
		map.forEach(function  (key,value) {
			iterationCount++;
		});
		expect(iterationCount).toBe(3);
	});

	it('should support of iteration', function() {
	// 	var map = new Map([['name','John'],['age',15],['weight','155']]);
	// 	var iterationCount = 0;
	// 	for (var [key,value] of map) {
	// 		// item is a array like ['name','John']
	// 		iterationCount++;
	// 	});
	// 	expect(iterationCount).toBe(3);
	});

	it('should return an iterator of arrays of key value pairs when entries is called', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		var items = map.entries();
		var first = items.next().value;
		expect(first[0]).toBe('name');
		expect(first[1]).toBe('John');
	});

	it('should return an iterator of values when values is called', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		var values = map.values();
		var first = values.next().value;
		expect(first).toBe('John');
	});

	it('should return an iterator of keys when keys is called', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		var keys = map.keys();
		var firstKey = keys.next().value;
		expect(firstKey).toBe('name');
	});

	it('should be able to be constructed with an iterator', function() {
		var map = new Map([['name','John'],['age',15],['weight','155']]);
		var map2 = new Map(map.entries());
		expect(map2.size).toBe(3);

	});
});