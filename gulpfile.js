var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');
var streamify = require('gulp-streamify');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var glob = require('glob');
var sass = require('gulp-sass');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
	'react/addons',
	'babelify/polyfill'
];

var browserifyTask = function (options) {

	// Our app bundler
	var appBundler = browserify({
		entries: [options.src], // Only need initial file, browserify finds the rest
		transform: [reactify, babelify.configure({ stage: 1 })], // We want to convert JSX to normal javascript
		paths: ['./node_modules','./client'],
		extensions: ['.js','.jsx'],
		debug: options.development, // Gives us sourcemapping
		cache: {}, packageCache: {}, fullPaths: options.development // Requirement of watchify
	});

	// // We set our dependencies as externals on our app bundler when developing
	(options.development ? dependencies : []).forEach(function (dep) {
		appBundler.external(dep);
	});

	// The rebundle process
	var rebundle = function () {
		var start = Date.now();
		console.log('Building demo bundle');
		appBundler.bundle()
			.on('error', gutil.log )
			.pipe( source('demo.js') )
			.pipe( gulp.dest( options.dest ) )
			.on('end', function() {
				console.log('Demo js finished.');
			});
	};

	// Fire up Watchify when developing
	if (options.development) {
		appBundler = watchify(appBundler);
		appBundler.on('update', rebundle);
	}

	rebundle();

	// Remove react-addons when deploying, as it is only for testing
	if ( ! options.development ) {
		dependencies.splice( dependencies.indexOf('react-addons'), 1 );
	}

	// Bundle dependencies
	var vendorsBundler = browserify({
		debug: true,
		require: dependencies
	});

	// Run the vendor bundle
	console.log('Building vendors bundle');
	vendorsBundler.bundle()
		.on('error', gutil.log )
		.pipe( source('vendors.js') )
		.pipe( gulp.dest( options.dest ) )
		.on('end', function() {
			console.log('Vendors js finished.');
		});
}

var cssTask = function (options) {
	var run = function () {
		if ( arguments.length ) {
			console.log('Sass file ' + arguments[0].path + ' changed.');
		}
		var start = new Date();
		console.log('Building CSS bundle');
		gulp.src( options.srcFile )
			.pipe( sass().on('error', sass.logError ) )
			.pipe( gulp.dest( options.dest ) )
			.on('end', function() {
				console.log('CSS finished.');
			});
	};
	run();
	gulp.watch( options.srcPaths, run );
}

// Starts our development workflow
gulp.task('default', function () {
	var isDev = (process.env.NODE_ENV !== 'production');

	browserifyTask({
		development: isDev,
		src: './client/demo.js',
		dest: './dist'
	});

	cssTask({
		development: isDev,
		srcFile: './css/scss/demo.scss',
		srcPaths: ['./css/scss/**/*.scss'],
		dest: './css'
	});

});
