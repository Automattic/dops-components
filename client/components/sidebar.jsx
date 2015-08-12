var _navigation = require( '../data/navigation' ),
	_sites = require( '../data/sites' ),
	MySitesNavigation = require( './my-sites-navigation' );

module.exports = React.createClass( {
	render: function() {
		var params = {
			siteBasePath: '#site',
			allSitesPath: '#all',
			addNewString: 'Add New Site',
			addNewPath: '#new',
			path: '#',
			sites: _sites,
			navigation: _navigation
		};

		return (
			<MySitesNavigation {...params} />
		);
	}
} );
