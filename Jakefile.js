/* global desc, task, jake, fail, complete */

'use strict';

(function() {
	task('default', ['lint']);

	desc('lint everything');
	task('lint', [], function(){
		var lint  = require('./lint_runner.js');
		var files = new jake.FileList();
		files.include('**/*.js');
		files.exclude('node_modules');

		lint.validateFileList(files.toArray(), nodeLintOptions(), {});
	});

	function nodeLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};
	}
})();

