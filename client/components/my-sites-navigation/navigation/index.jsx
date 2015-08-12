/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	classNames = require( 'classnames' ),
	_ = require( 'underscore' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'Navigation',

	propTypes: {
		navigation: React.PropTypes.array.isRequired,
		path: React.PropTypes.string.isRequired,
	},

	isSection: function( link, path ) {
		var result = _.find( link.paths, function( test ) {
			return test.test( path );
		} );
		return ( 'undefined' !== typeof result );
	},

	renderLink: function( link, i ) {
		var linkClasses = classNames( {
			selected: this.isSection( link, this.props.path ),
		}, link.icon );

		return (
			<li className={ linkClasses } key={ i }>
				<a href={ link.url }>
					<span className='menu-link-text'>{ link.title }</span>
				</a>
			</li>
		);
	},

	renderSection: function( section, i ) {
		return (
			<div className='navigation-container sidebar-menu' key={ i }>
				<h3 className='sidebar-heading'>{ section.title }</h3>
				<ul>
					{ section.items.map( this.renderLink ) }
				</ul>
			</div>
		);
	},

	render: function() {
		return (
			<div className="navigation-container sidebar">
				{ this.props.navigation.map( this.renderSection ) }
			</div>
		);
	}

} );
