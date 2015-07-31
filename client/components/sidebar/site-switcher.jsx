/**
 * External dependencies
 */
var React = require( 'react/addons' );

var SiteSwitcher = React.createClass( {

	displayAllSites: function() {
		return (
			<div className='site-info'>
				<h1 className='site-title'>Site Switcher</h1>
				<p className='site-url'>Manage my VaultPress sites</p>
			</div>
		);
	},

	displayOneSite: function( site ) {
		return (
			<div className='site-info'>
				<h1 className='site-title'>{ site.title }</h1>
				<p className='site-url'>{ site.url }</p>
			</div>
		);
	},

	render: function() {
		// Eventually we can use the Calypso thing, but for now let's just redirect to /sites/.
		var switchURL = '/react/sites/',
			site = this.props.site;

		return (
			<div className='site-switcher-container'>
				<div className='site-container'>
					<img src='https://placehold.it/64/ac0300/fff&amp;text=VP' />
					{ this.props.selected ? this.displayOneSite( site ) : this.displayAllSites() }
				</div>
				<div className='site-change'>
					<a href={ switchURL }>Switch Site</a>
				</div>
			</div>
		);
	}

} );

module.exports = SiteSwitcher;
