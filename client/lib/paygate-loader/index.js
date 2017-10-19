/**
 * External dependencies
 */
var debug = require( 'debug' )( 'calypso:paygate' );

/**
 * Internal dependencies
 */
var loadScript = require( 'load-script' ),
	config = require( 'config' ),
	paygateUrl = false;


/**
 * PaygateLoader component
 *
 * @api public
 */
function PaygateLoader( settings ) {
	if ( ! ( this instanceof PaygateLoader ) ) {
		return new PaygateLoader( settings );
	}
	debug( 'paygate config settings: ' + settings );

	paygateUrl = settings.jsUrl;
	this._publicKey = settings.publicKey;
	this._processor = settings.processor;
	this._apiUrl = settings.apiUrl;
	this._environment = settings.environment;

	//sandbox paygate request if in development or if store_sandbox cookie is set
	if ( 'development' === config( 'env' ) ||
		document.cookie.indexOf( 'store_sandbox=' ) !== -1
	) {
		this._environment = 'sandbox';
		this._publicKey = config( 'paygate_keys' ).sandbox;
	}
	debug( 'paygateLoader: ' + this );
}

/**
 * After the external Paygate script has loaded, this method calls the
 * `callback` with the `Paygate` class as its first argument
 *
 * @api public
 */
PaygateLoader.prototype.ready = function( callback ) {
	if ( window.Paygate ) {
		return callback( null, window.Paygate );
	}

	loadScript.loadjQueryDependentScript( paygateUrl, function( error ) {
		if ( error ) {
			callback( error );
			return;
		}

		debug( 'Paygate loaded for the first time' );
		window.Paygate.setPublicKey( this._publicKey );
		window.Paygate.setEnvironment( this._environment );
		window.Paygate.setProcessor( this._processor );
		window.Paygate.setApiUrl( this._apiUrl );
		callback( null, window.Paygate );
	}.bind( this ) );
};

/**
 * Expose `PaygateLoader`
 */
module.exports = PaygateLoader;
