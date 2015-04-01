/* global desc, task, jake, fail, complete */

'use strict';

task('default', ['lint']);

desc('lint everything');
task('lint', [], function(){
	var lint  = require('./lint_runner.js');
	var files = new jake.FileList();
	files.include('**/*.js');
	files.exclude('node_modules');

	var options = {
		node: true
	};

	lint.validateFileList(files.toArray(), options, {});
});
