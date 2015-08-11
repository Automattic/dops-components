/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Internal dependencies
 */
var Picker = require( './picker' ),
	Sidebar = require( './sidebar' );

var SITE_HEIGHT = 66,
	EXTRA_SITE_ITEMS_HEIGHT = 200,
	MAX_SIDEBAR_HEIGHT = 1200;

module.exports = React.createClass( {
	displayName: 'MySitesNavigation',

	preventPickerDefault: function( event ) {
		event.preventDefault();
		event.stopPropagation();
	},

	render: function() {
		var containerHeight = MAX_SIDEBAR_HEIGHT;

		return (
			<div className="sites-navigation" style={ { height: containerHeight } } >
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
				/>
			</div>
		);
	}
} );
