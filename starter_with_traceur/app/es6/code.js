(function () {
	var sequence;
	var run = function(generator) {
		sequence = generator();
		var next = sequence.next();
	};


	var resume = function() {
		sequence.next();
	};


	window.async = {
		run:run,
		resume: resume
	};


}());
