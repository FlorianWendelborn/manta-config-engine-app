var browserify = require('gulp-browserify');
var download   = require('gulp-download');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');

var path = {
	dest: '../build/',
	base: 'web/',
	entry: 'web/main.jsx',
	html: 'web/index.html',
	images: 'web/images/*',
	sass: 'web/styles/main.sass',
	keyboardLayouts: 'web/keyboard-layouts/*'
};

var urls = [{
	file: 'FileSaver.min.js',
	url: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
}];

gulp.task('complete', ['download', 'copy', 'build', 'style']);

gulp.task('default', ['copy', 'build', 'style']);

gulp.task('build', function () {
	return gulp.src(path.entry)
		.pipe(browserify({
			transform: [reactify]
		}))
		.pipe(rename(function (path) {
			path.basename = 'app';
			path.extname = '.js';
		}))
		.pipe(gulp.dest(path.dest));
});

gulp.task('style', function () {
	return gulp.src(path.sass, {
			base: path.base
		})
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(path.dest));
});

gulp.task('copy', function () {
	return gulp.src([
			path.keyboardLayouts,
			path.html,
			path.images
		], {
			base: path.base
		})
		.pipe(gulp.dest(path.dest));
});

gulp.task('download', function () {
	return download(urls)
		.pipe(gulp.dest(path.dest));
});
