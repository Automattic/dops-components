/**
 * External dependencies
 */
var React = require( 'react' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var AllSitesIcon = require( '../all-sites-icon' );

module.exports = React.createClass( {
	displayName: 'AllSites',

	getDefaultProps: function() {
		return {
			// onSelect callback
			onSelect: function() {},

			// Set a href attribute to the anchor
			href: null,

			// Mark as selected or not
			isSelected: false
		};
	},

	propTypes: {
		sites: React.PropTypes.object.isRequired,
		onSelect: React.PropTypes.func,
		href: React.PropTypes.string,
		isSelected: React.PropTypes.bool
	},

	onSelect: function( event ) {
		this.props.onSelect( event );
	},

	render: function() {
		var allSitesClass;

		allSitesClass = classNames( {
			'all-sites': true,
			'is-selected': this.props.isSelected
		} );

		return (
			<div className={ allSitesClass }>
				<a className="site__content" href={ this.props.href } onTouchTap={ this.onSelect }>
					<AllSitesIcon sites={ this.props.sites } />
					<div className="site__info">
						<span className="site__title">{ this.translate( 'All My Sites' ) }</span>
						<span className="site__domain">{ this.translate( 'Manage all my sites' ) }</span>
					</div>
				</a>
			</div>
		);
	}
} );
