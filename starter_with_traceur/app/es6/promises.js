describe('Promises', function() {



	xit('should execute the callback given to then', function(done) {
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


	xit('should receive the resolved data', function(done) {
		var promise = new Promise(function  (resolve,reject) {
			resolve(1);
		});

		promise.then(function  (data) {
			expect(data).toBe(1);
			done();
		});
	});

	xit('should fail when rejected', function(done) {
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

	xit('should have a catch', function(done) {
		var promise = new Promise(function  (resolve,reject) {
			reject(Error("oh no!"));
		});

		promise.catch(function  (error) {
			expect(error.message).toBe("oh no!");
			done();
		});
	});


	xit('should compose whenresolved with a promise', function(done) {
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

	xit('should have a static resolve', function(done) {
		var previousPromise = Promise.resolve(3);

		var promise = Promise.resolve(previousPromise);


		promise.then(function  (data) {
			expect(data).toBe(3);
			done();
		});
	});


	xit('should have a static reject', function(done) {
		var promise = Promise.reject(Error("oh no!"));

		promise.catch(function  (error) {
			expect(error.message).toBe("oh no!");
			done();
		});
	});

	xit('should be asynchronous', function(done) {
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


	describe('Advanced', function() {


		xit('should chain sequentially using then', function(done) {
            getOrder(3).then(function(order) {
            	return getUser(order.userId);
            }).then(function(user) {
            	return getCompany(user.companyId);
            }).then(function(company) {
            	expect(company.name).toBe('Pluralsight')
            	done();
            }).catch(function(error) {
            	// handle error
            });
		});

		xit('should execute after all promises with all', function(done) {


			var courseIds = [1,2,3];
			var promises = [];
			for(var i=0 ; i< courseIds.length; i++){
				promises.push(getCourse(courseIds[i]));
			}

			Promise.all(promises).then(function (values) {
				var set = new Set();

				for(var i=0 ; i< values.length; i++){
					set.add(values[i].name);
				}
				expect(set.has("Yet Another C# Course")).toBe(true);
				expect(set.size).toBe(3);
				done();
			});

		});

		xit('should resolve after the first promise', function(done) {

			var courseIds = [1,2,3];
			var promises = [];
			for(var i=0 ; i< courseIds.length; i++){
				promises.push(getCourse(courseIds[i]));
			}

			Promise.race(promises).then(function (firstValue) {
				expect(firstValue.name).toBeDefined();
				done();
			});
		});


	describe('async generators', function() {




			xit('should be difficult to read with regular async code', function() {

				console.log('start');
				oldPause(500,function(){
					console.log('middle');
					oldPause(500,function(){
						console.log('end');
					});
				});

			});

			xit('should be easier to read with generators', function(done) {
				function* main(){
					console.log('start');
					yield pause(500);
					console.log('middle');
					yield pause(500);
					console.log('end');
					done();
				}
				async.run(main);
			});

			xit('should work with returned data', function(done) {

				function * main(){
					var price = yield getStockPrice();
					if (price > 45) {
						yield executeTrade();
					} else{
						console.log('trade not made: ' + price);
					};
					done();
				}
				async.run(main);
			});
			it('should work with errors', function(done) {

				function * main(){
					try {
						var price = yield getStockPrice();
						if (price > 45) {
							yield executeTrade();
						} else{
							console.log('trade not made: ' + price);
						};
					} catch(ex){
						console.log('error!' + ex.message);
					}

					done();
				}

				async.run(main);
			});



		});

	});



});