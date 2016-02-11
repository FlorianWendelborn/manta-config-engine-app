var browserify = require('gulp-browserify');
var download   = require('gulp-download');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');

var path = {
	dest           : 'web/dist/',
	entry          : 'web/source/main.jsx',
	html           : 'web/source/index.html',
	icon           : 'web/source/icon.png',
	keyboardLayouts: 'web/source/keyboard-layouts/*'
};

var urls = {
	fileSaver: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
};

gulp.task('default', ['copyHTML', 'copyKeyboardLayouts'], function (callback) {
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

gulp.task('copyKeyboardLayouts', function (callback) {
	return gulp.src(path.keyboardLayouts)
		.pipe(gulp.dest(path.dest + 'keyboard-layouts/'));
});

gulp.task('copyHTML', function (callback) {
	return gulp.src(path.html)
		.pipe(gulp.dest(path.dest));
});

gulp.task('download', function (callback) {
	return download(urls.fileSaver)
		.pipe(gulp.dest(path.dest));
});
