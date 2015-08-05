/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Internal dependencies
 */
var translate = require ( '../../../mixins/translate' ),
	AllSites = require( '../all-sites' ),
	// Card = require( 'components/card' ),
	Site = require( '../site' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'CurrentSite',

	mixins: [ translate ],

	propTypes: {
		sites: React.PropTypes.object.isRequired,
		siteCount: React.PropTypes.number.isRequired
	},

	switchSites: function( event ) {
		event.preventDefault();
		event.stopPropagation();
	},

	getSelectedSite: function() {
		if ( this.props.sites.get().length === 1 ) {
			return this.props.sites.getPrimary();
		}

		return this.props.sites.getSelectedSite();
	},

	render: function() {
		var site,
			hasOneSite = this.props.siteCount === 1;

		if ( ! this.props.sites.initialized ) {
			return (
				<div className="current-site is-loading">
					<div className="site">
						<a className="site__content">
							<div className="site-icon" />
							<div className="site__info">
								<span className="site__title">{ this.translate( 'Loading My Sites…' ) }</span>
							</div>
						</a>
					</div>
					{ hasOneSite ?
						<a className="current-site__add-new-wordpress" href={ config( 'signup_url' ) + '?ref=calypso-sites' } target="_blank">{ this.translate( 'Add New WordPress' ) }</a>
					: <span className="current-site__switch-sites" /> }
				</div>
			);
		}

		if ( this.props.sites.selected ) {
			site = this.props.sites.getSelectedSite();
		} else {
			site = this.props.sites.getPrimary();
		}

		return (
			<div className="current-site">
				{ this.props.sites.selected ? <Site site={ site } /> : <AllSites sites={ this.props.sites } /> }
				{ hasOneSite ?
					<a className="current-site__add-new-wordpress" href={ config( 'signup_url' ) + '?ref=calypso-sites' } target="_blank">{ this.translate( 'Add New WordPress' ) }</a>
				: <span className="current-site__switch-sites" onClick={ this.switchSites }>{ this.translate( 'Switch Site' ) }</span> }
			</div>
		);
	}
} );
