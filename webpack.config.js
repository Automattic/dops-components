var webpack = require( 'webpack' ),
	path = require( 'path' ),
	ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

// var dependencies = [
// 	'react',
// 	'react/addons',
// 	'babelify/polyfill'
// ];

// TODO autoprefixer:
// browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9', 'safari 7', 'safari 8'],
// map: true

var IS_HOT_UPDATE = ( process.env.NODE_ENV !== 'production' );

var styleDefaults = 'css?sourceMap!autoprefixer!sass?sourceMap';

// if we're doing hot update, we want to render component SCSS inline.
// if not, we want to extract the text into a separate dist/[name].css file
var scssLoader = IS_HOT_UPDATE ?
					'style!'+styleDefaults :
					ExtractTextPlugin.extract(styleDefaults);

// if we're doing hot update, we need the react hot loader in here,
// if not, skip it as it adds extra JS which is not necessary in production
var jsLoader = IS_HOT_UPDATE ?
				[require.resolve('react-hot-loader'), require.resolve('babel-loader')+'?stage=1', require.resolve('eslint-loader')] :
				[require.resolve('babel-loader')+'?stage=1', require.resolve('eslint-loader')];

// create a list of plugins filtered based on whether we're developing locally (i.e. using Hot Update)
var plugins = [
	new ExtractTextPlugin( '[name].css' ),
	IS_HOT_UPDATE ? new webpack.HotModuleReplacementPlugin() : false,
	IS_HOT_UPDATE ? new webpack.NoErrorsPlugin() : false, // don't hot-reload if there's an error in our code
	new webpack.DefinePlugin( {
		'process.env': {
			// This has effect on the react lib size
			'NODE_ENV': JSON.stringify( process.env.NODE_ENV ) // TODO switch depending on actual environment
		}
	} )
].filter( function( plugin ) {
	return plugin !== false;
} );

module.exports = {
	progress: true,
	externals: {
		'react': 'React',
		'react/addons': 'React'
	},
	output: {
		publicPath: '/assets/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	resolve: {
		extensions: [ '', '.js', '.jsx' ],
		root: path.resolve( __dirname, 'client' )
	},
	stats: {
		colors: true,
		reasons: true
	},
	node: {
		fs: "empty"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: jsLoader,
				include: [
					path.join( __dirname, 'client' )
				]
			},
			{
				test: /\.json$/,
				loader: require.resolve( 'json-loader' )
			},
			{
				test: /\.scss$/,
				loader: scssLoader
			}
		]
	},
	eslint: {
		configFile: path.join( __dirname, '.eslintrc' )
	},
	plugins: plugins
};
