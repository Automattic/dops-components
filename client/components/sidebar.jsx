var _navigation = require( '../data/navigation' ),
	_sites = require( '../data/sites' ),
	MySitesNavigation = require( './my-sites-navigation' );

module.exports = React.createClass( {
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
