var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var merge = require('merge-stream');
var webpack = require("webpack");
var assign = require('lodash/object/assign');
var WebpackDevServer = require("webpack-dev-server");

// console.log(webpackConfig);

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
// var dependencies = [
// 	'react',
// 	'react/addons',
// 	'babelify/polyfill'
// ];

// By default run a server for development
gulp.task("default", ["webpack-dev-server"]);

// Production build
gulp.task("build", ["webpack:build"]);

// Production build
gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	process.env.NODE_ENV = "production"
	var buildConfig = Object.create(getWebpackConfig());
	buildConfig.plugins = buildConfig.plugins.concat(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(buildConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack:build-dev", function(callback) {
    process.env.NODE_ENV = "production"

    var devAccountConfig = Object.create(getWebpackConfig());
	devAccountConfig.devtool = "sourcemap";
	devAccountConfig.debug = true;

	// create a single instance of the compiler to allow caching
	var devCompiler = webpack(devAccountConfig);

    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var serverConfig = Object.create(getWebpackConfig());
    var entry = {}
    Object.keys(serverConfig.entry).forEach( function( key ) {
    	entry[key] = ["webpack/hot/dev-server", serverConfig.entry[key]];
    });

    serverConfig.entry = entry;
    serverConfig.devtool = "sourcemap";//"eval" for performance, but no JSX :(
	serverConfig.debug = true;

	// console.log(serverConfig.output);

    new WebpackDevServer(webpack(serverConfig), {
        publicPath: serverConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
        	colors: true
        }
    }).listen(8085, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8085/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

function getWebpackConfig() {
	var entries = {
		"demo": "./client/demo.js"
	};

	// clone and extend webpackConfig
	var customConfig = Object.create(require("./webpack.config.js"));
	customConfig.entry = entries;

	return customConfig;
}
