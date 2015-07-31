/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	classNames = require( 'classnames' ),
	_ = require( 'underscore' );

var Navigation = React.createClass( {

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
		} );

		return (
			<li className={ linkClasses } key={ i }>
				<a href={ link.url }>
					<i className={ 'fa fa-' + link.icon } />
					<span className='menu-link-text'>{ link.title }</span>
				</a>
			</li>
		);
	},

	renderSection: function( section, i ) {
		return (
			<div className='navigation-container' key={ i }>
				<h3 className='sidebar-heading'>{ section.title }</h3>
				<ul>
					{ section.items.map( this.renderLink ) }
				</ul>
			</div>
		);
	},

	render: function() {
		return (
			<div className="navigation-container">
				{ this.props.navigation.map( this.renderSection ) }
			</div>
		);
	}

} );

module.exports = Navigation;
