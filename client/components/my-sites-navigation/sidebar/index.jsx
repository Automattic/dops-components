/**
 * External dependencies
 */
var React = require( 'react' ),
	startsWith = require( 'lodash/startsWith' );

/**
 * Internal dependencies
 */
var CurrentSite = require( '../current-site' ),
	Navigation = require( '../navigation' );

module.exports = React.createClass( {
	displayName: 'MySitesSidebar',

	isItemLinkSelected: function( paths ) {
		if ( ! Array.isArray( paths ) ) {
			paths = [ paths ];
		}

		return paths.some( function( path ) {
			return startsWith( this.props.path, path );
		}, this );
	},

	isSingle: function() {
		return this.props.sites.selected || this.props.sites.get().length === 1;
	},

	getSelectedSite: function() {
		if ( this.props.sites.get().length === 1 ) {
			return this.props.sites.get().shift();
		}

		return this.props.sites.getSelectedSite();
	},

	siteSuffix: function() {
		return this.isSingle() ? '/' + this.getSingleSiteDomain() : '';
	},

	render: function() {
		return (
			<ul className="navigation-sidebar sidebar">
				{ this.props.enableSiteSwitcher &&
					<CurrentSite
						addNewString={ this.props.addNewString }
						addNewPath={ this.props.addNewPath }
						sites={ this.props.sites }
						siteCount={ this.props.sites.get().length }
						onSwitchClick={ this.props.onSwitchClick }
					/>
				}
				<Navigation path={ this.props.path } navigation={ this.props.navigation } />
			</ul>
		);
	}
} );
