/** @jsx React.DOM */
/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Internal dependencies
 */
var SiteSwitcher = require( './site-switcher' ),
	Navigation = require( './navigation' );

var Sidebar = React.createClass( {

	render: function() {
		return (
			<div>
				<SiteSwitcher selected={ 1 } site={ this.props.site } />
				<Navigation path={ this.props.path } navigation={ this.props.navigation } />
			</div>
		);
	}

} );

module.exports = Sidebar;
