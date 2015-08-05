var Demo, Sidebar,
	_navigation = require( './data/navigation' ),
	_sites = require( './data/sites' ),
	MySitesNavigation = require( './components/my-sites-navigation' ),
	React = require( 'react' );

require( './demo.scss' );

Demo = React.createClass( {
	render: function() {
		return (
			<h1>It works!</h1>
		);
	}
} );

Sidebar = React.createClass( {
	render: function() {
		var params = {
			allSitesPath: '',
			siteBasePath: '',
			path: '/react/sites/',
			sites: _sites,
			navigation: _navigation
		};

		return (
			<MySitesNavigation {...params} />
		);
	}
} );

jQuery( document ).ready( function() {
	React.render(
		React.createElement( Demo, {} ), document.getElementById( 'demo' )
	);
	React.render(
		React.createElement( Sidebar, {} ), document.getElementById( 'sidebar' )
	);
} );
