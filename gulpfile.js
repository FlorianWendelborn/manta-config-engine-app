var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var reactify = require('reactify');
var download = require('gulp-download');

var path = {
	html: 'web/source/index.html',
    icon: 'web/source/icon.png',
    dest: 'web/dist/',
    entry: 'web/source/main.jsx'
};

var urls = {
	fileSaver: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
};

gulp.task('default', ['copyHTML'], function (callback) {
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

gulp.task('copyHTML', function (callback) {
	return gulp.src(path.html)
		.pipe(gulp.dest(path.dest));
});

gulp.task('download', function (callback) {
	return download(urls.fileSaver)
		.pipe(gulp.dest(path.dest));
});
