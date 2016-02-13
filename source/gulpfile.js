var browserify = require('gulp-browserify');
var download   = require('gulp-download');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');

var path = {
	dest: '../build/',
	destImages: '../build/images/',
	destKeyboards: '../build/keyboard-layouts/',
	entry: 'web/main.jsx',
	html: 'web/index.html',
	images: 'web/images/*',
	keyboardLayouts: 'web/keyboard-layouts/*'
};

var urls = [{
	file: 'FileSaver.min.js',
	url: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
}];

gulp.task('complete', ['download', 'copy', 'build']);

gulp.task('default', ['copy', 'build']);

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

gulp.task('copy', ['copyHTML', 'copyKeyboardLayouts', 'copyImages']);

gulp.task('copyKeyboardLayouts', function () {
	return gulp.src(path.keyboardLayouts)
		.pipe(gulp.dest(path.destKeyboards));
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
