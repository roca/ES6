'use strict'




(function () {

		var getOrder = function  (orderId) {
			return Promise.resolve({userId:35});
		}

		var getUser = function  (userId) {
			return Promise.resolve({companyId:18});
		}

		var getCompany = function  (companyId) {
			return Promise.resolve({name:'Pluralsight'});
		}

			var getCourse = function (courseId) {

				var courses = {
					1: {name:"Introduction to Cobol"},
					2: {name:"Yet Another C# Course"},
					3: {name:"How to make billions by blogging"}
				};
				return Promise.resolve(courses[courseId]);
			};


     var oldPause = function(delay,cb){
          	setTimeout(function() {
          		console.log('paused for ' + delay + 'ms');
          		cb();
          	},delay);
          }
	 var pause = function(delay){
          	setTimeout(function() {
          		console.log('paused for ' + delay + 'ms');
          		async.resume();
          	},delay);
          }

	var sequence;
	var run = function(generator) {
		sequence = generator();
		var next = sequence.next();
	};


	var resume = function() {
		sequence.next();
	};


	window.async = {
		run,
		resume
	};

	window.pause = pause;
	window.oldPause = oldPause;
	window.getOrder = getOrder;
	window.getUser = getUser;
	window.getCompany = getCompany;
	window.getCourse = getCourse;


}());
