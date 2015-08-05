/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' ),
	noop = require( 'lodash/utility/noop' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var translate = require ( '../../../mixins/translate' ),
	AllSites = require( '../all-sites' ),
	Site = require( '../site' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'SiteSelector',

	mixins: [ translate ],

	propTypes: {
		showAddNewSite: React.PropTypes.bool,
		showAllSites: React.PropTypes.bool,
		indicator: React.PropTypes.bool,
		onClose: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			showAddNewSite: false,
			showAllSites: false,
			indicator: false,
			onClose: noop
		};
	},

	getInitialState: function() {
		return {
			searchOpen: false,
			search: ''
		};
	},

	getCount: function() {
		return this.props.sites.get().length || 10;
	},

	doSearch: function() {
		this.setState( { search: React.findDOMNode( this.refs.searchInput ).value } );
	},

	onSiteSelect: function( event ) {
		this.closeSelector();
		this.props.onClose( event );

		// ignore mouse events as the default page() click event will handle navigation
		if ( event.type !== 'mouseup' ) {
			page( event.currentTarget.pathname );
		}
	},

	closeSelector: function() {
		React.findDOMNode( this.refs.searchInput ).blur();
	},

	visibleCount: function() {
		return this.props.sites.selected ? 1 : this.getCount();
	},

	openSearch: function() {
		this.setState( { searchOpen: true } );
		React.findDOMNode( this.refs.searchInput ).focus();
	},

	// more complex translation logic here
	getTranslations: function() {
		var output = {},
			visibleCount = this.visibleCount();

		if ( ! this.props.sites.selected ) {
			output.selectedSites = this.translate( 'All sites' );
		} else {
			output.selectedSites = this.translate( '%(numberSelected)s site selected', '%(numberSelected)s sites selected', {
				count: visibleCount,
				args: {
					numberSelected: visibleCount
				}
			} );
		}

		output.totalSites = this.translate( '%(numberTotal)s site', 'All %(numberTotal)s Sites', {
			count: this.getCount(),
			args: {
				numberTotal: this.getCount()
			}
		} );

		return output;
	},

	addNewSite: function() {
		if ( ! this.props.showAddNewSite ) {
			return;
		}

		return (
			<a className="site-selector__add-new-wordpress" href={ '#?ref=calypso-selector' } target="_blank">
				<span className="noticon noticon-plus" />
				{ this.translate( 'Add New WordPress' ) }
			</a>
		);
	},

	searchElement: function() {
		return (
			<div key="search" className="search open">
				<div className="noticon noticon-search" onClick={ this.openSearch }></div>
				<input type="search" className="search-box" placeholder={ this.translate( 'Search…', { textOnly: true } ) } role="search" ref="searchInput" onChange={ this.doSearch } />
			</div>
		);
	},

	render: function() {
		var isLarge = this.getCount() > 6,
			hasOneSite = this.getCount() === 1,
			allSitesPath = this.props.allSitesPath,
			sites, selectorClass, postsBase;

		if ( this.state.search ) {
			sites = this.props.sites.search( this.state.search );
		} else {
			sites = this.props.sites.get();
		}

		// Render sites
		sites = sites.map( function( site ) {
			var siteBasePath = this.props.siteBasePath;
			postsBase = ( site.jetpack || site.single_user_site ) ? '/posts' : '/posts/my';

			// Default posts to /posts/my when possible and /posts when not
			siteBasePath = siteBasePath.replace( /^\/posts\b(\/my)?/, postsBase );

			// Default stats to /stats/slug when on a 3rd level post/page summary
			if ( siteBasePath.match( /^\/stats\/(post|page)\// ) ) {
				siteBasePath = '/stats';
			}

			if ( siteBasePath.match( /^\/domains\/manage\// ) ) {
				siteBasePath = '/domains/manage';
			}

			return (
				<Site
					site={ site }
					href={ siteBasePath + '/' + site.slug }
					key={ 'site-' + site.ID }
					indicator={ this.props.indicator }
					onSelect={ this.onSiteSelect }
					isSelected={ this.props.sites.selected === site.domain }
				/>
			);
		}, this );

		if ( this.props.showAllSites && ! this.state.search && allSitesPath ) {
			// default posts links to /posts/my when possible and /posts when not
			postsBase = ( this.props.sites.allSingleSites ) ? '/posts' : '/posts/my';
			allSitesPath = allSitesPath.replace( /^\/posts\b(\/my)?/, postsBase );

			// There is currently no "all sites" version of the insights page
			allSitesPath = allSitesPath.replace( /^\/stats\/insights\/?$/, '/stats/day' );

			sites.unshift(
				<AllSites
					key="selector-all-sites"
					sites={ this.props.sites }
					href={ allSitesPath }
					onSelect={ this.closeSelector }
					isSelected={ ! this.props.sites.selected }
				/>
			);
		}

		selectorClass = classNames( 'site-selector', 'sites-list', {
			'is-large': isLarge,
			'is-single': hasOneSite
		} );

		return (
			<div className={ selectorClass } ref="siteSelector">
				{ this.searchElement() }
				{ sites.length ? sites :
					<div className="site-selector__no-results">{ this.translate( 'No sites found' ) }</div>
				}
				{ this.addNewSite() }
			</div>
		);
	}
} );
