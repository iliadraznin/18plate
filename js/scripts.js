// Avoid `console` errors in browsers that lack a console
// Based on HTML5 Boilerplate https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js
(function() {
	var method,
		noop = function() {},
		methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		],
		length = methods.length,
		console = (window.console = window.console || {});

	while (length--) {
	    method = methods[length];
	    console[method] = console[method] || noop;
	}
}());

$(function(){
	// your code here
});