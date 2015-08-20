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
	MAX_SIDEBAR_HEIGHT = 1200;

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'MySitesNavigation',

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
