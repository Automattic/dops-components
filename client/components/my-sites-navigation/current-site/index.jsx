/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Internal dependencies
 */
var translate = require ( '../../../mixins/translate' ),
	AllSites = require( '../all-sites' ),
	Site = require( '../site' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'CurrentSite',

	mixins: [ translate ],

	propTypes: {
		sites: React.PropTypes.object.isRequired,
		siteCount: React.PropTypes.number.isRequired
	},

	getSelectedSite: function() {
		if ( this.props.sites.get().length === 1 ) {
			return this.props.sites.get().shift();
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
						<a className="current-site__add-new-wordpress" href={ this.props.addNewPath } target="_blank">{ this.props.addNewString }</a>
					: <span className="current-site__switch-sites" /> }
				</div>
			);
		}

		if ( this.props.sites.selected ) {
			site = this.props.sites.getSelectedSite();
		}

		return (
			<div className="current-site">
				{ this.props.sites.selected ? <Site site={ site } /> : <AllSites sites={ this.props.sites } /> }
				{ hasOneSite ?
					<a className="current-site__add-new-wordpress" href={ this.props.addNewPath } target="_blank">{ this.props.addNewString }</a>
				: <span className="current-site__switch-sites" onClick={ this.props.onSwitchClick }>{ this.translate( 'Switch Site' ) }</span> }
			</div>
		);
	}
} );
