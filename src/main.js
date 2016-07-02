require.config({
	paths: {
		text: '../bower_components/requirejs-text/text',
		doT: '../bower_components/doT/doT',
	},
	packages: [ {
		name: 'bff',
		location: '../bower_components/bff-lib/dist/dev',
	}, ],
});

require([ 'app/view' ], function (AppView) {
	'use strict';
	document.body.appendChild(new AppView().el);
});
