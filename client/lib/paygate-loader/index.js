/**
 * External dependencies
 */
var debug = require( 'debug' )( 'calypso:paygate' );

/**
 * Internal dependencies
 */
var loadScript = require( '../load-script' ),
	config = require( 'config' );

var PAYGATE_URL = 'https://pay-js.automattic.com/v1/paygate.js';

/**
 * PaygateLoader component
 *
 * @api public
 */
function PaygateLoader() {
	var isDevelopment, isSandboxed;
	if ( ! ( this instanceof PaygateLoader ) ) {
		return new PaygateLoader();
	}

	isDevelopment = 'development' === config( 'env' );
	isSandboxed = document.cookie.indexOf( 'store_sandbox=' ) !== -1;

	if ( isDevelopment || isSandboxed ) {
		this._environment = 'sandbox';
		this._publicKey = config( 'paygate_keys' ).sandbox;
	} else {
		this._environment = 'production';
		this._publicKey = config( 'paygate_keys' ).production;
	}
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

	loadScript.loadjQueryDependentScript( PAYGATE_URL, function( error ) {
		if ( error ) {
			callback( error );
			return;
		}

		debug( 'Paygate loaded for the first time' );
		window.Paygate.setPublicKey( this._publicKey );
		window.Paygate.setEnvironment( this._environment );
		callback( null, window.Paygate );
	}.bind( this ) );
};

/**
 * Expose `PaygateLoader`
 */
module.exports = new PaygateLoader();
