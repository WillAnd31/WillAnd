var gulp = require('gulp'),
	angularFilesort = require('gulp-angular-filesort'),
	autoPrefixer = require('autoprefixer-core'),
	browserSync = require('browser-sync').create(),
	concatCSS = require('gulp-concat-css'),
	inject = require('gulp-inject'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish'),
	jsDoc = require('gulp-angular-jsdoc'),
	minify = require('gulp-minify-css'),
	mocha = require('gulp-mocha'),
	postCSS = require('gulp-postcss'),
	sass = require('gulp-sass'),
	server = require('gulp-webserver'),

	// Source files
	jsFiles = ['www/components/**/*.js', 'www/components/**/**/.js'],
	watchFiles = ['www/components/**/**/*.html', 'www/components/**/*.js', 'www/components/**/**/*.js', 'www/components/**/**/**/*.js', 'www/index.html'],
	sassFiles = ['www/components/**/styles/*.scss', 'www/components/**/directives/**/*.scss'],
	testFiles = ['test/**/*.js'];

//Tasks
gulp.task('lint', lintTask);
gulp.task('css', cssTask);
gulp.task('inject', injectTask);
gulp.task('serve', serveTask);
gulp.task('reload', reloadTask);
gulp.task('watch', watchTask);
gulp.task('document', documentTask);
gulp.task('test', testTask);
gulp.task('default', ['css', 'inject', 'watch', 'serve']);


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
	  .pipe(minify())
	  .pipe(gulp.dest('www/css/'))
		.pipe(browserSync.stream())
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

function serveTask(){
    browserSync.init({
        server: {
            baseDir: "./www"
        }
    });
}

function reloadTask(){
    browserSync.reload();
}

function watchTask(){
	gulp.watch(sassFiles, ['css']);
	gulp.watch(watchFiles, ['inject', 'reload']);
}

function documentTask(){
	gulp.src(jsFiles)
		.pipe(jsDoc('./documentation'))
}

function testTask(){
	gulp.src(testFiles, {read: false})
		.pipe(mocha({reporter: 'nyan'}));
}