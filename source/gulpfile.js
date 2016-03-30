var browserify = require('gulp-browserify');
var download   = require('gulp-download');
var fileList   = require('gulp-filelist');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');
var moment     = require('moment-timezone');

var fs         = require('fs');
var nPath      = require('path');

moment.tz.setDefault('Europe/Berlin');

var path = {
	root: '../',
	dest: '../build/',
	base: 'web/',
	entry: 'web/main.jsx',
	html: 'web/index.html',
	images: 'web/images/*',
	sass: 'web/styles/main.sass',
	keyboardLayouts: 'web/keyboard-layouts/*',
	presets: '../node_modules/dota2-manta-config-engine/presets/*',
	basePresets: '../node_modules/dota2-manta-config-engine/',
	cycles: '../node_modules/dota2-manta-config-engine/extensions/cycles/*',
	chatwheels: '../node_modules/dota2-manta-config-engine/extensions/chatwheels/*',
	layouts: '../node_modules/dota2-manta-config-engine/extensions/layouts/*',
	baseExtensions: '../node_modules/dota2-manta-config-engine/extensions/'
};

var urls = [{
	file: 'FileSaver.min.js',
	url: 'https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.min.js'
}];

gulp.task('complete', ['download', 'copy', 'build', 'style']);

gulp.task('default', ['copy', 'build', 'style']);

gulp.task('build', ['copy', 'changelog'], function () {
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

gulp.task('copy', ['copy-app', 'copy-presets', 'copy-cycles', 'copy-chatwheels', 'copy-layouts']);

gulp.task('copy-app', function () {
	return gulp.src([
			path.keyboardLayouts,
			path.html,
			path.images
		], {
			base: path.base
		})
		.pipe(gulp.dest(path.dest));
});

gulp.task('copy-presets', function () {
	return gulp.src(path.presets, {
			base: path.basePresets
		})
		.pipe(fileList('presets.json', {
			flatten: true,
			removeExtensions: true
		}))
		.pipe(gulp.dest(path.dest));
});

gulp.task('copy-cycles', function () {
	return gulp.src(path.cycles, {
			base: path.baseExtensions
		})
		.pipe(fileList('cycles.json', {
			flatten: true,
			removeExtensions: true
		}))
		.pipe(gulp.dest(path.dest));
});

gulp.task('copy-chatwheels', function () {
	return gulp.src(path.chatwheels, {
			base: path.baseExtensions
		})
		.pipe(fileList('chatwheels.json', {
			flatten: true,
			removeExtensions: true
		}))
		.pipe(gulp.dest(path.dest));
});

gulp.task('copy-layouts', function () {
	return gulp.src(path.layouts, {
			base: path.baseExtensions
		})
		.pipe(fileList('layouts.json', {
			flatten: true,
			removeExtensions: true
		}))
		.pipe(gulp.dest(path.dest));
});

gulp.task('download', function () {
	return download(urls)
		.pipe(gulp.dest(path.dest));
});

function jsonify (file) {
	var result = {};
	var data = fs.readFileSync(nPath.join(path.root, file)).toString('utf-8');
	var versions = data.split('## ');
	versions.forEach(function (item, index) {
		if (index) {
			var version = item.split('\n')[0].split(' ')[0];
			var content = item.substring(version.length).trim();
			var time = false, year = 0, month = 0, day = 0, hour = 0, minute = 0;
			if (content[0] === '(') {                              // version headline includes time
				time = content.split('\n')[0];                     // extract time sting
				content = content.split('\n').slice(1).join('\n'); // get rid of time string
				time = moment(time, '(YYYY.MM.DD-HH.mm Z)').toDate();
			}
			result[version] = {
				content: content,
				time: time
			};
		}
	});
	return result;
}

gulp.task('changelog', function (done) {
	var result = {
		app: jsonify('documentation/CHANGELOG.md'),
		engine: jsonify('node_modules/dota2-manta-config-engine/documentation/CHANGELOG.md')
	};
	fs.writeFileSync(nPath.join(path.dest, 'changelog.json'), JSON.stringify(result, null, '\t'));
	done();
});
