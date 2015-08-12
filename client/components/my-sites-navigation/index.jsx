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

require( './style.scss' );

var SITE_HEIGHT = 66,
	EXTRA_SITE_ITEMS_HEIGHT = 200,
	MAX_SIDEBAR_HEIGHT = 1200;

module.exports = React.createClass( {
	displayName: 'MySitesNavigation',

	getInitialState: function() {
		return {
			showSites: false
		};
	},

	preventPickerDefault: function( event ) {
		event.preventDefault();
		event.stopPropagation();

		this.setState( {
			showSites: ( ! this.state.showSites )
		} );
	},

	toggleShowingSites: function( event ) {
		event.preventDefault();
		event.stopPropagation();

		this.setState( {
			showSites: ( ! this.state.showSites )
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
					onClose={ this.preventPickerDefault }
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
					onSwitchClick={ this.toggleShowingSites }
				/>
			</div>
		);
	}
} );
