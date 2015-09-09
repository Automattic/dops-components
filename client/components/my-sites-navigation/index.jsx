/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var Picker = require( './picker' ),
	Sidebar = require( './sidebar' );

var SITE_HEIGHT = 66,
	EXTRA_SITE_ITEMS_HEIGHT = 200,
	MAX_SIDEBAR_HEIGHT = 600;

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'MySitesNavigation',

	/**
	 * Calculate the height of the sites list based on how many sites
	 * the user has to be displayed
	 *
	 * @return {number}
	 */
	getSitesHeight: function() {
		var count = this.props.sites.get().length;
		return ( count * SITE_HEIGHT ) + EXTRA_SITE_ITEMS_HEIGHT;
	},

	getInitialState: function() {
		return {
			showSites: false
		};
	},

	closeSites: function( event ) {
		event.preventDefault();
		event.stopPropagation();

		// Already closed :)
		if ( ! this.state.showSites ) {
			return;
		}

		this.setState( {
			showSites: false,
		} );
	},

	showSites: function( event ) {
		event.preventDefault();
		event.stopPropagation();

		// Already open :)
		if ( this.state.showSites ) {
			return;
		}

		this.setState( {
			showSites: true,
		} );
	},

	render: function() {
		var containerHeight = MAX_SIDEBAR_HEIGHT,
			sidebarClass = classNames( {
				'sites-navigation': true,
				'focus-sites': this.state.showSites
			} );

		// When layout focus is on sites list
		// Calculate the height of the navigation block
		if ( this.state.showSites ) {
			containerHeight = this.getSitesHeight();
		}

		return (
			<div className={ sidebarClass } style={ { height: containerHeight } } >
				<Picker
					addNewPath={ this.props.addNewPath }
					addNewString={ this.props.addNewString }
					allSitesPath={ this.props.allSitesPath }
					onClose={ this.closeSites }
					onOutsideClose={ this.closeSites }
					siteBasePath={ this.props.siteBasePath }
					sites={ this.props.sites }
					showingSites={ this.state.showSites }
				/>
				<Sidebar
					addNewPath={ this.props.addNewPath }
					addNewString={ this.props.addNewString }
					allSitesPath={ this.props.allSitesPath }
					navigation={ this.props.navigation }
					path={ this.props.path }
					siteBasePath={ this.props.siteBasePath }
					sites={ this.props.sites }
					onSwitchClick={ this.showSites }
				/>
			</div>
		);
	}
} );
