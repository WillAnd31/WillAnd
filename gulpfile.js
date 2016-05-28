var gulp = require('gulp');
var liveReload = require('gulp-livereload');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var minifyJS = require('gulp-minify');
var minifyHTML = require('gulp-htmlmin');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');

var serverTsFiles = [
	'./server/**/*.ts',
	'!./server/typings/main/**/**/*.d.ts',
	'!./server/typings/main.d.ts'
];
var clientTsFiles = [
	'./client/**/*.ts',
	'./client/**/**/*.ts',
	'./client/**/**/**/*.ts',
	'!./client/typings/main/**/**/*.d.ts',
	'!./client/typings/main.d.ts'
];
var scssFiles = [
	'./client/**/*.scss',
	'./client/**/**/*.scss',
	'./client/**/**/**/*.scss'
];
var imageFiles = [
	'./client/images/*'
];
var htmlFiles = [
	'./client/**/**/**/*.html',
	'./client/**/**/*.html',
	'./client/**/*.html',
	'./client/*.html'
];

gulp.task('serve', serveTask);
gulp.task('watch', watchTask);
gulp.task('css', cssTask);
gulp.task('html', htmlTask);
gulp.task('clean', shell.task(['rm -rf dist']));
gulp.task('build:server', buildServerTask);
gulp.task('build:client', buildClientTask);
gulp.task('build', ['clean', 'build:server', 'build:client', 'css', 'html']);
gulp.task('dev', ['build', 'watch', 'serve']);
gulp.task('default', ['build']);

function serveTask () {
	liveReload.listen();
	nodemon({
		script: './server/server.js',
		ext: 'css html js'
	})
	.on('start', function () {
		setTimeout(function () {
			gulp.src('./server/server.js')
				.pipe(liveReload());
		}, 500);
	});
}

function watchTask () {
	gulp.watch(htmlFiles, ['html']);
	gulp.watch(scssFiles, ['css']);
	gulp.watch(clientTsFiles, ['build:client']);
}

function cssTask () {
	gulp.src(scssFiles)
		.pipe(sass({outputStyle: 'compressed'}))
		.on('error', console.error.bind(console))
		.pipe(autoPrefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/'));
}

function imagesTask () {
	gulp.src(imageFiles)
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
}

function buildServerTask () {
	var tsProject = ts.createProject('./server/tsconfig.json');
	return gulp.src(serverTsFiles)
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject))
		.js
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('./server/'));
}

function htmlTask () {
	return gulp.src(htmlFiles)
		// .pipe(minifyHTML({
		// 	collapseWhitespace: true,
		// 	minifyJS: true,
		// 	caseSensitive: true,
		// 	removeComments: true
		// }))
		.pipe(gulp.dest('./dist/'));
}

function buildClientTask () {
	var tsProject = ts.createProject('./client/tsconfig.json');
	return gulp.src(clientTsFiles)
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject))
		.js
		.pipe(minifyJS({
			src: '-debug.js',
			min: '.js'
		}))
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('./dist/'));
}
