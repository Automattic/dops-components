var React = require( 'react' ),
	Icon = require( '../icon' ),
	classnames = require( 'classnames' ),
	omit = require( 'lodash/omit' );

require( './style.scss' );

let CardSection = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		vertical: React.PropTypes.any,
		style: React.PropTypes.object,
		className: React.PropTypes.string,
		device: React.PropTypes.oneOf( ['desktop', 'tablet', 'phone'] )
	},

	getDefaultProps: function() {
		return { vertical: null };
	},

	render: function() {
		return (
			<div className={classnames( 'dops-card-section', this.props.className )} style={this.props.style}>
				{this.props.title ?
					this._renderWithTitle() :
					this.props.children
				}
			</div>
		);
	},

	_renderWithTitle: function() {
		var orientation = this.props.vertical ? 'vertical' : 'horizontal';
		var wrapperClassName = 'dops-card-section-orient-' + orientation;

		return (
			<div className={wrapperClassName}>
				<h4 ref="label" className="dops-card-section-label">
					{this.props.title}
				</h4>
				<div ref="content" className="dops-card-section-content">
					{this.props.children}
				</div>
			</div>
		);
	}
} );

let CardFooter = React.createClass( {

	render: function() {
		return (
			<div className="dops-card-footer">
				{this.props.children}
			</div>
		);
	}
} );

let Card = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		meta: React.PropTypes.any,
		icon: React.PropTypes.string,
		iconLabel: React.PropTypes.any,
		iconColor: React.PropTypes.string,
		style: React.PropTypes.object,
		className: React.PropTypes.string,
		compact: React.PropTypes.bool,
		device: React.PropTypes.oneOf( ['desktop', 'tablet', 'mobile'] )
	},

	getDefaultProps: function() {
		return {
			iconColor: '#787878',
			className: ''
		};
	},

	render: function() {
		const filteredProps = omit( this.props, [ 'iconLabel', 'iconColor', 'compact' ] );
		var { style, title, meta, icon, iconLabel, ...other } = this.props,
			cardClasses = classnames( {
				'dops-card': true,
				'is-compact': this.props.compact
			} );
		return (
			<div { ...filteredProps } className={ classnames( this.props.className, cardClasses ) } style={ this.props.style }>
				{ this.props.title && (
					<h2 className="dops-card-title">
						{title}
						{meta && <span className="dops-card-meta">{meta}</span>}
						{( icon || iconLabel ) && (
							this._renderIcon()
						)}
					</h2>
				)}

				{this.props.children}
			</div>
		);
	},

	_renderIcon: function() {
		return (
			<span className="dops-card-icon" style={{color: this.props.iconColor}}>
				{this.props.icon && <Icon name={this.props.icon} style={{backgroundColor: this.props.iconColor}}/>}
				{this.props.iconLabel}
			</span>
		);
	}

} );

Card.Section = CardSection;
Card.Footer = CardFooter;

module.exports = Card;
