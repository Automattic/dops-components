/**
 * External dependencies
 */
var debug = require( 'debug' )( 'calypso:wp' );

/**
 * Internal dependencies
 */
var WPCOM = require( 'lib/wpcom-undocumented' ),
	config = require( 'config' );

var wpcom;

if ( config.isEnabled( 'oauth' ) ) {
	wpcom = WPCOM( window.app.oAuthToken, require( 'wpcom-xhr-request' ) );
} else {
	// Set proxy request handler
	wpcom = WPCOM( require( 'wpcom-proxy-request' ) );

	//Upgrade to "access all users blogs" mode
	wpcom.request( {
		metaAPI: { accessAllUsersBlogs: true }
	}, function( error ) {
		if ( error ) {
			throw error;
		}
		debug( 'Proxy now running in "access all user\'s blogs" mode' );
	} );
}

/**
 * Expose `wpcom`
 */
module.exports = wpcom;
