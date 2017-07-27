var webpack = require( 'webpack' ),
	path = require( 'path' ),
	CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
	ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

// TODO autoprefixer:
// browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9', 'safari 7', 'safari 8'],
// map: true

var IS_HOT_UPDATE = ( process.env.NODE_ENV !== 'production' );

var scssLoader = [ 'style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader' ];

// if we're doing hot update, we want to render component SCSS inline.
// if not, we want to extract the text into a separate dist/[name].css file

if ( ! IS_HOT_UPDATE ) {
	scssLoader.unshift();
	scssLoader = ExtractTextPlugin.extract( { fallback: "style-loader", use: scssLoader } );
}

// create a list of plugins filtered based on whether we're developing locally (i.e. using Hot Update)
var plugins = [
	new CleanWebpackPlugin( [ 'dist' ] ),
	new ExtractTextPlugin( '[name].css' ),
	IS_HOT_UPDATE ? new webpack.HotModuleReplacementPlugin() : false,
	IS_HOT_UPDATE ? new webpack.NoEmitOnErrorsPlugin() : false, // don't hot-reload if there's an error in our code
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
	// progress: true,
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'react': 'React'
	},
	output: {
		publicPath: '/assets/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
		modules: [ path.join( __dirname, "node_modules" ), path.resolve( __dirname, 'client' ) ]
	},
	stats: {
		colors: true,
		reasons: true
	},
	node: {
		fs: "empty"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [ 'react-hot-loader/webpack', 'babel-loader', 'eslint-loader' ],
				include: [
					path.join( __dirname, 'client' )
				]
			},
			{
				test: /\.json$/,
				use: require.resolve( 'json-loader' )
			},
			{
				test: /\.scss$/,
				use: scssLoader
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: require.resolve('url-loader')+"?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: plugins
};
