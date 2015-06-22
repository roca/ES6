describe('Promises', function() {



	it('should execute the callback given to then', function(done) {
		var resolved = false;

		var promise = new Promise(function  (resolve,reject) {
			resolved = true;
			resolve();
		});

		promise.then(function  () {
			expect(resolved).toBe(true);
			done();
		});


	});


	it('should receive the resolved data', function(done) {
		var promise = new Promise(function  (resolve,reject) {
			resolve(1);
		});

		promise.then(function  (data) {
			expect(data).toBe(1);
			done();
		});
	});

	it('should fail when rejected', function(done) {
		var promise = new Promise(function  (resolve,reject) {
			reject(Error("oh no!"));
		});

		promise.then(function() {
			// success
		},function  (error) {
			expect(error.message).toBe("oh no!");
			done();
		});
	});

	it('should have a catch', function(done) {
		var promise = new Promise(function  (resolve,reject) {
			reject(Error("oh no!"));
		});

		promise.catch(function  (error) {
			expect(error.message).toBe("oh no!");
			done();
		});
	});


	it('should compose whenresolved with a promise', function(done) {
		var previousPromise = new Promise(function  (resolve,reject) {
			resolve(3);
		});

		var promise = new Promise(function  (resolve,reject) {
			resolve(previousPromise);
		});

		promise.then(function  (data) {
			expect(data).toBe(3);
			done();
		});
	});

	it('should have a static resolve', function(done) {
		var previousPromise = Promise.resolve(3);

		var promise = Promise.resolve(previousPromise);


		promise.then(function  (data) {
			expect(data).toBe(3);
			done();
		});
	});


	it('should have a static reject', function(done) {
		var promise = Promise.reject(Error("oh no!"));

		promise.catch(function  (error) {
			expect(error.message).toBe("oh no!");
			done();
		});
	});

	it('should be asynchronous', function(done) {
		var async = false;

		var promise = new Promise(function  (resolve,reject) {
			resolve();
		});

		promise.then(function  () {

			expect(async).toBe(true);
			done();
		});

		async = true;
	});



});