/* global desc, task, jake, fail, complete */

'use strict';

(function() {
	task('default', ['lint', 'test']);

	desc('lint everything');
	task('lint', [], function(){
		var lint  = require('./build/lint_runner.js');
		var files = new jake.FileList();
		files.include('**/*.js');
		files.exclude('node_modules');

		lint.validateFileList(files.toArray(), nodeLintOptions(), {});
	});

	desc('test everything');
	task('test', [], function() {
		var reporter = require('nodeunit').reporters['default'];
		reporter.run(['test']);
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
}());

