var browserify = require('gulp-browserify');
var download   = require('gulp-download');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');

var path = {
	dest: 'web/dist/',
	destImages: 'web/dist/images/',
	entry: 'web/source/main.jsx',
	html: 'web/source/index.html',
	images: 'web/source/images/*',
	keyboardLayouts: 'web/source/keyboard-layouts/*'
};

var urls = [{
	file: 'FileSaver.min.js',
	url: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
}];

gulp.task('default', ['copyHTML', 'copyKeyboardLayouts', 'copyImages'], function () {
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

gulp.task('copyKeyboardLayouts', function () {
	return gulp.src(path.keyboardLayouts)
		.pipe(gulp.dest(path.dest + 'keyboard-layouts/'));
});

gulp.task('copyHTML', function () {
	return gulp.src(path.html)
		.pipe(gulp.dest(path.dest));
});

gulp.task('copyImages', function () {
	return gulp.src(path.images)
		.pipe(gulp.dest(path.destImages));
});

gulp.task('download', function () {
	return download(urls)
		.pipe(gulp.dest(path.dest));
});
