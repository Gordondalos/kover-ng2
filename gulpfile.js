'use strict';

var gulp = require('gulp');
var	watch = require('gulp-watch');
var	rigger = require('gulp-rigger');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var jsdoc = require('gulp-jsdoc3');



var path = {
	build: {
		js: 'app/build/js/',
		css: 'app/build/css/'
	},
	src: {
		js: 'app/src/app/CommonBundle/common.js',

	},
	watch: {
		js: 'app/src/**/*.js',

	}

};



gulp.task('doc:build',function(cb){
	var config = require('./jsdoc.json');
	gulp.src(['readme.md', 'src/**/*.js'], {read: true})
		.pipe(jsdoc(config, cb));

});


gulp.task('js:build', function () {
	gulp.src(path.src.js)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(rigger())
		// .pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(plumber.stop(function () {
			console.log('ошибка');
		}))
		.pipe(gulp.dest(path.build.js));

});

gulp.task('build', [
	'js:build',
	'doc:build'
]);

gulp.task('watch', function(){
	watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
});

gulp.task('default', ['build', 'watch']);