define(
	[ 'bff/view', 'bff/extend', 'doT', 'text!./template.dot' ], function (
	   View,       extend,       doT,   templateStr) {

	'use strict';

	var template = doT.template(templateStr);

	return View.makeSubclass({

		constructor: function () {
			this.render();
		},

		getHtml: function () {
			return template();
		},

	});

});
