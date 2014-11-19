var numericChallenge = (function () {
	var token = null,
		endpoint = '127.0.0.1:4263'
		start = function () {
			requestToken();
		},
		end = function () {

		},
		createTargets = function () {

		},
		requestToken = function () {
			$.get(endpoint, function () {
				console.log(arguments);
			});

		},
		init = function () {
			start();
		};
	return  {
		init : init,
		start : start,
		end : end
	};
}());