var gulp = require('gulp'),
	angularFilesort = require('gulp-angular-filesort'),
	autoPrefixer = require('autoprefixer-core'),
	concatCSS = require('gulp-concat-css'),
	concatJS = require('gulp-concat'),
	ngmin = require('gulp-ngmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	inject = require('gulp-inject'),
	jshint = require('gulp-jshint'),
	templateCache = require('gulp-angular-templatecache'),
	jshintStylish = require('jshint-stylish'),
	jsDoc = require('gulp-angular-jsdoc'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-html-minifier'),
	postCSS = require('gulp-postcss'),
	sass = require('gulp-sass'),
	nodemon = require('gulp-nodemon'),

	// Source files
	htmlFiles = ['www/components/**/templates/*.html', 'www/components/**/directives/**/*.html'],
	jsFiles = ['www/components/**/*.js', 'www/components/**/**/.js'],
	watchFiles = ['www/components/**/**/*.html', 'www/components/**/*.js', 'www/components/**/**/*.js', 'www/components/**/**/**/*.js', 'www/index.html'],
	sassFiles = ['www/components/**/styles/*.scss', 'www/components/**/directives/**/*.scss'],
	testFiles = ['test/**/*.js'];

//Tasks
gulp.task('lint', lintTask);
gulp.task('css', cssTask);
gulp.task('inject', injectTask);
gulp.task('server', serverTask);
gulp.task('watch', watchTask);
gulp.task('document', documentTask);
gulp.task('templates', templateCachingTask);
gulp.task('dist', distTask);
gulp.task('default', ['css', 'templates', 'inject', 'watch', 'server']);

function serverTask(){
	nodemon({
		script: 'server.js',
		ext: 'css html js'
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

function documentTask(){
	gulp.src(jsFiles)
		.pipe(jsDoc('./documentation'))
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