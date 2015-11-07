var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var reactify = require('reactify');

var path = {
	html: 'web/source/index.html',
    icon: 'web/source/icon.png',
    dest: 'web/dist/',
    entry: 'web/source/main.jsx'
};

var browserifyArguments = {
	transform: [reactify]
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
