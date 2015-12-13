var gulp = require('gulp'),
	rename = require('gulp-rename'),
	
	// CSS
	autoPrefixer = require('autoprefixer-core'),
	concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	postCSS = require('gulp-postcss'),
	
	// HTML
	inject = require('gulp-inject'),
	minifyHTML = require('gulp-html-minifier'),
	templateCache = require('gulp-angular-templatecache'),
	angularFilesort = require('gulp-angular-filesort'),
	
	// JS
	uglify = require('gulp-uglify'),
	concatJS = require('gulp-concat'),
	ngmin = require('gulp-ngmin'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish'),
	
	// Serve
	nodemon = require('gulp-nodemon'),
	liveReload = require('gulp-livereload'),
	notify = require('gulp-notify'),

	// Source files
	htmlFiles = [
		'www/components/**/templates/*.html', 
		'www/components/**/directives/**/*.html'
	],
	jsFiles = [
		'www/components/**/*.js', 
		'www/components/**/**/.js'
	],
	watchFiles = [
		'www/components/**/**/*.html', 
		'www/components/**/*.js', 
		'www/components/**/**/*.js', 
		'www/components/**/**/**/*.js', 
		'www/index.html'
	],
	sassFiles = [
		'www/components/**/styles/*.scss', 
		'www/components/**/directives/**/*.scss'
	],
	testFiles = [
		'test/**/*.js'
	];

//Tasks
gulp.task('lint', lintTask);
gulp.task('css', cssTask);
gulp.task('inject', injectTask);
gulp.task('watch', watchTask);
gulp.task('templates', templateCachingTask);
gulp.task('serve', serveTask);
gulp.task('dist', distTask);
gulp.task('build', ['css', 'templates', 'inject']);
gulp.task('default', ['build', 'watch', 'serve']);

function serveTask(){
	nodemon({
		script: 'server.js',
		ext: 'css html js'
	}).on('start', function(){
		setTimeout(function(){
			gulp.src('./server.js')
				.pipe(liveReload())
				.pipe(notify('Reloading page...'));
		}, 500);
	});
}

function lintTask(){
	gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish))
}

//Converts SASS to CSS, concatenats, autoprefixes, and minifies all css files
function cssTask(){
	gulp.src(sassFiles)
	  .pipe(sass({
	  	style: 'compressed'
	  }))
	  .on('error', console.error.bind(console))
	  .pipe(concatCSS('style.min.css'))
	  .pipe(postCSS([ autoPrefixer({ browsers: ['last 2 version'] }) ]))
	  .pipe(minifyCSS())
	  .pipe(gulp.dest('www/css/'))
}

function templateCachingTask(){
	gulp.src(htmlFiles)
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(templateCache('compiledTemplates.js', {
			standalone: true,
			module: 'will.templates',
			base: function(baseInfo){
				return baseInfo.path.split('').slice(baseInfo.path.split('').lastIndexOf('/') + 1, baseInfo.path.length).join('');
			}
		}))
		.pipe(gulp.dest('www/components/compiledTemplates'));
}

function injectTask(){
	gulp.src('www/index.html')
	  	.pipe(inject(
	  		gulp.src(jsFiles, {read: true})
	  		.pipe(angularFilesort()), {
	  			relative: true
	  		}))
	  .pipe(gulp.dest('./www'));
}

function watchTask(){
	gulp.watch(htmlFiles, ['templates']);
	gulp.watch(sassFiles, ['css']);
	gulp.watch(watchFiles, ['inject']);
}

function distTask(){
	gulp.src(htmlFiles)
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(templateCache('compiledTemplates.js', {
			standalone: true,
			module: 'will.templates',
			base: function(baseInfo){
				return baseInfo.path.split('').slice(baseInfo.path.split('').lastIndexOf('/') + 1, baseInfo.path.length).join('');
			}
		}))
		.pipe(gulp.dest('www/components/compiledTemplates'));

	gulp.src(['www/components/app/app.module.js', 'www/components/*.run.js', 'www/components/*.constants.js', 'www/components/*.module.js', 'www/components/**/**/*.js', 'www/components/**/**/**/*.js'])
		.pipe(concatJS('willand.js'))
		.pipe(ngmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(gulp.dest('dist/js/will/'))

	gulp.src(['www/lib/angular/angular.min.js', 'www/lib/angular-ui-router/release/angular-ui-router.min.js', 'www/lib/angular-ui-router.stateHelper/statehelper.min.js', 'www/lib/angular-animate/angular-animate.min.js', 'www/lib/jquery/dist/jquery.min.js', 'www/lib/angular-local-storage/dist/angular-local-storage.min.js', 'www/lib/bootstrap/dist/js/bootstrap.min.js', 'www/lib/angular-touch/angular-touch.min.js'])
		.pipe(concatJS('dependencies.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(gulp.dest('dist/js/dependencies/'))

	gulp.src(sassFiles)
		.pipe(sass({
			style: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(concatCSS('style.min.css'))
		.pipe(postCSS([ autoPrefixer({ browsers: ['last 2 version'] }) ]))
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'))
}