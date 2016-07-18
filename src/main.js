require.config({
	paths: {
		text: '../bower_components/requirejs-text/text',
		doT: '../bower_components/doT/doT',
	},
	packages: [ {
		name: 'bff',
		// Running in a non-browser env. means we are building for production
		location: '../bower_components/bff-lib/dist/' + (typeof window === 'undefined' ? 'prod' : 'dev'),
	}, ],
});

require([ 'app/view' ], function (AppView) {
	'use strict';
	document.body.appendChild(new AppView().el);
});
