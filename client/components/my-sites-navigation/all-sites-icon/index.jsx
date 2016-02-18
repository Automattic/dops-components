/**
 * External dependencies
 */
var React = require( 'react' ),
	union = require( 'lodash/array/union' );

/**
 * Internal dependencies
 */
var SiteIcon = require( '../site-icon' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'AllSitesIcon',

	getDefaultProps: function() {
		return {
			size: 120
		};
	},

	propTypes: {
		sites: React.PropTypes.object.isRequired,
		size: React.PropTypes.number
	},

	getMaxSites: function() {
		return this.props.sites.get().slice( 0, 3 );
	},

	getSitesWithIcons: function() {
		return this.props.sites.get().filter( function( site ) {
			return site.icon;
		} ).slice( 0, 3 );
	},

	getIcons: function() {
		var sites = union( this.getSitesWithIcons(), this.getMaxSites() ).slice( 0, 3 );

		return sites.map( function( site, i ) {
			return <SiteIcon site={ site } key={ i + '-icon' } size={ 15 } />;
		} );
	},

	render: function() {
		var icons = this.getIcons(),
			classes;

		// Set element class attribute
		classes = 'all-sites-icon is-shape-' + this.getMaxSites().length;

		return (
			<div className={ classes }>
				{ icons }
			</div>
		);
	}
} );
