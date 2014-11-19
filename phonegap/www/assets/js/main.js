var TheGame = (function () {
	var numericChallenge = (function () {
		var token = null,
			endpoint = 'http://127.0.0.1:4263/attack'
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
	}()),

	init = function () {
		console.log('initializing the game');
		numericChallenge.init();
	}

	return {
		init: init
	};
}());