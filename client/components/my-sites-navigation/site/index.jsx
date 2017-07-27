/**
 * External dependencies
 */
var React = require( 'react' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var SiteIcon = require( '../site-icon' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'Site',

	getDefaultProps: function() {
		return {
			// onSelect callback
			onSelect: function() {},

			// Set a href attribute to the anchor
			href: null,

			// Choose to show the SiteIndicator
			indicator: null,

			// Mark as selected or not
			isSelected: false
		};
	},

	propTypes: {
		href: React.PropTypes.string,
		indicator: React.PropTypes.bool,
		onSelect: React.PropTypes.func,
		isSelected: React.PropTypes.bool,
		site: React.PropTypes.object.isRequired
	},

	onSelect: function( event ) {
		this.props.onSelect( event );
	},

	render: function() {
		var site = this.props.site,
			siteClass;

		siteClass = classNames( {
			site: true,
			'is-jetpack': site.jetpack,
			'is-primary': site.primary,
			'is-private': site.is_private,
			'is-redirect': site.options && site.options.is_redirect,
			'is-selected': this.props.isSelected
		} );

		return (
			<div className={ siteClass }>
				<a className="site__content" href={ this.props.href } onClick={ this.onSelect } onTouchTap={ this.onSelect }>
					<SiteIcon site={ site } />
					<div className="site__info">
						<div className="site__title">{ site.title }</div>
						<div className="site__domain">{ site.domain }</div>
					</div>
				</a>
			</div>
		);
	}
} );
