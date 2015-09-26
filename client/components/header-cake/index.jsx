/**
 * External dependencies
 */
var React = require( 'react' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var translate = require ( '../../mixins/translate' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'HeaderCake',

	mixins: [ translate ],

	propTypes: {
		onClick: React.PropTypes.func.isRequired,
		onTitleClick: React.PropTypes.func,
		backText: React.PropTypes.oneOfType( [
			React.PropTypes.element,
			React.PropTypes.string
		] )
	},

	getDefaultProps: function() {
		return {
			isCompact: false
		};
	},

	render: function() {
		var classes = classNames(
			'card',
			'header-cake',
			this.props.className,
			{
				'is-compact': this.props.isCompact
			}
		);

		return (
			<div className={ classes }>
				<div className="header-cake__corner">
					<a className="header-cake__back" onClick={ this.props.onClick }>
						<span className="noticon noticon-collapse" />
						<span className="header-cake__back-text">{ this.props.backText || this.translate( 'Back' ) }</span>
					</a>
				</div>
				<span className="header-cake__title" onClick={ this.props.onTitleClick }>
					{ this.props.children }
				</span>
				<div className="header-cake__corner" />
			</div>
		);
	}
} );
