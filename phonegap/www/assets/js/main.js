var TheGame = (function () {
	var numericChallenge = (function () {
		var token = null,
			endpoint = 'http://127.0.0.1:4263/attack'
			targetCount = 5,
			container = '.game-div',
			startTime = 0,
			finishTime = 0,
			currentPosition = 0,
			targets = {},

			start = function () {
				requestToken();
				createTargets();
				bindActions();
			},
			end = function () {

			},
			bindActions = function () {
				$('body').on('click tap touch', '.game-start-trigger', startItUp);
				$('body').on('click tap touch', '.touch-target', targetHit);
			},
			startItUp = function () {
				startTime = Date.now();
				currentPosition = 1;
				$('.game-start-trigger').remove();
				$('.touch-target').show();
			},
			targetHit = function (e) {
				$target = $(this);

				if ($target.data('num') == currentPosition) {
					$target.fadeOut(250);
					currentPosition = $target.data('num') + 1;

					targets[$target.data('num')] = Date.now();

					if ($target.data('num') == targetCount) {
						finishTime = Date.now();
						cleanupTimes();
					}

				} else {
					$target.css({
						'background-color': '#e95434'
					});

					setTimeout(function () {
						$target.css({
							'background-color': '#00938f'
						});
					}, 250);
				}
			}
			cleanupTimes = function () {
				_.each(targets, function (t, i) {
					targets[i] = parseInt(t, 10) - parseInt(startTime, 10);
				});

				console.log(startTime, targets, finishTime);
			}
			createTargets = function () {
				var $win = $(container),
					targetHeight = 40,
					button = '<button class="game-start-trigger">Start Game</button>',
					targetWidth = 40,
					winHeight = $win.height(),
					winWidth = $win.width(),
					maxTop = winHeight - targetHeight,
					maxLeft = winWidth - targetWidth,
					i, top, left;

					console.log(maxTop, maxLeft);

					$('body').append(button);

				for (i=0; i < targetCount; i++) {


					top = Math.floor(Math.random() * maxTop) + 1;
					left = Math.floor(Math.random() * maxLeft) + 1;
					console.log(i, top, left);
					$('body').append([
						'<button ',
						'data-num="',
						(i+1),
						'" class="touch-target" ',
						'style="',
						'display:none;',
						'position:absolute;',
						'line-height:',
						targetHeight,
						'px;height:',
						targetHeight,
						'px; width:',
						targetWidth,
						'px; top:',
						(top > maxTop) ? maxTop : top,
						'px;left:',
						(left > maxLeft) ? maxLeft : left,
						'px;" id="target-',
						(i + 1),
						'">',
						(i + 1),
						'</button>'
					].join(''));
				}
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

	attackBase = (function () {
		var container = '.base-attack-div',
			timer = null,

			init = function () {
				console.log('init');

				$button = $('<div style="height:200px;" class="blow-it-up">Hold to Capture Base</div>');
				$(container).append($button);

				bindActions();
			},
			bindActions = function () {
				console.log('bindActions');
				$('body').on('touchstart', '.blow-it-up', startTimer);
				$('body').on('touchend', '.blow-it-up', endTimer);
			},
			startTimer = function () {
				console.log('startTimer');
				timer = window.setTimeout(complete, 5000);
			},
			endTimer = function () {
				console.log('endTimer');
				window.clearTimeout(timer);
				timer = null;
			},
			complete = function () {
				var $holder = $(container).parent();
				$(container).remove();
				
				$holder.append('<h1> YOU WIN!!!</h1>');
			};

		return {
			init: init
		};
	}()),

	bindActions = function () {

	};

	return {
		attackPlayer : numericChallenge,
		attackBase: attackBase
	};

}()) ;
