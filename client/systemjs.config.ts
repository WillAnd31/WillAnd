declare let System: any;

(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'@angular': 'lib/@angular',
		'app': 'app/app',
		'rxjs': 'lib/rxjs',
		'ng2-translate': 'lib/ng2-translate',
		'symbol-observable': 'lib/symbol-observable',
		'lodash': 'lib/lodash',
		'angulartics2': 'lib/angulartics2'
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app': {
			main: 'main/main.js',
			defaultExtension: 'js'
		},
		'rxjs': {
			main: 'Rx.js',
			defaultExtension: 'js'
		},
		'ng2-translate': {
			defaultExtension: 'js'
		},
		'symbol-observable': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'lodash': {
			main: 'index.js',
			defaultExtension: 'js'
		},
		'angulartics2': {
			main: 'index.js',
			defaultExtension: 'js'
		}
	};

	var packageNames = [
		'@angular/common',
		'@angular/compiler',
		'@angular/core',
		'@angular/http',
		'@angular/platform-browser',
		'@angular/platform-browser-dynamic',
		'@angular/router',
		// TODO: Update when there are tests
		// '@angular/testing'
	];

	// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
	packageNames.forEach(function(pkgName) {
		packages[pkgName] = {
			main: 'index.js',
			defaultExtension: 'js'
		};
	});

	var config = {
		map: map,
		packages: packages
	};

	// filterSystemConfig - index.html's chance to modify config before we register it.
	if (global.filterSystemConfig) global.filterSystemConfig(config);

	System.config(config);

})(this);

