/*
 * Fake data for site list. Implement this in your app, however you've structured it.
 */
var _sites;

module.exports = {
	initialized: true,
	selected: 'site-1',

	getSite: function( siteID ) {
		if ( ! siteID ) {
			return false;
		}

		return this.get().filter( function( site ) {
			// We need to check `slug` before `domain` to grab the correct site on certain
			// clashes between a domain redirect and a Jetpack site, as well as domains
			// on subfolders, but we also need to look for the `domain` as a last resort
			// to cover mapped domains for regular WP.com sites.
			return site.ID === siteID || site.slug === siteID || site.domain === siteID || site.wpcom_url === siteID;
		}, this ).shift();
	},

	getSelectedSite: function() {
		return this.getSite( this.selected );
	},

	getPrimary: function() {
		return this.get().filter( function( site ) {
			return site.primary === true;
		}, this ).shift();
	},

	getSelectedOrAll: function() {
		if ( ! this.selected ) {
			return this.get();
		}

		return [ this.getSite( this.selected ) ];
	},

	search: function( term ) {},

	get: function() {
		return [ {
			ID: 1,
			slug: 'site-1',
			title: 'My Awesome Site',
			domain: 'redradar.net',
			primary: true,
			is_private: false,
			jetpack: false,
			single_user_site: true,
			icon: {
				img: 'https://cldup.com/_zwF8rBDEL.png'
			}
		}, {
			ID: 2,
			slug: 'site-2',
			title: 'Another Site',
			domain: 'themes.redradar.net',
			primary: false,
			is_private: false,
			jetpack: false,
			single_user_site: true,
			icon: {
				img: 'https://cldup.com/_zwF8rBDEL.png'
			}
		}, {
			ID: 3,
			slug: 'site-3',
			title: 'Another Site',
			domain: 'my.redradar.net',
			primary: false,
			is_private: false,
			jetpack: false,
			single_user_site: true,
			icon: {
				img: 'https://cldup.com/_zwF8rBDEL.png'
			}
		} ];
	}
};