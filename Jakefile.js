task('default', ['lint']);

desc('lint everything');
task('lint', [], function(){
	var lint = require('./lint_runner.js');
	lint.validateFile('Jakefile.js', {}, {});
});
