var React = require( 'react' ),
	Icon = require( '../icon' ),
	Radium = require( 'radium' ),
	styles = require( '../../styles' ),
	m = require( '../../utils/m' );

require( './style.scss' );

let CardSection = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		vertical: React.PropTypes.any,
		style: React.PropTypes.object,
		device: React.PropTypes.oneOf( ['desktop', 'tablet', 'phone'] )
	},

	getDefaultProps: function( ) {
		return { vertical: null };
	},

	render: function( ) {
		return (
			<div className="card-section" style={this.props.style}>
				{this.props.title ? 
					this._renderWithTitle( ) : 
					this.props.children
				}
				<div className="clearfix"/>
			</div>
		);
	},

	_renderWithTitle: function( ) {
		var orientation = this.props.vertical ? 'vertical' : 'horizontal';
		var wrapperClassName = "card-section-orient-" + orientation;
		
		return (
			<div className={wrapperClassName}>
				<h4 ref="label" className="card-section-label">
					{this.props.title}
				</h4>
				<div ref="content" className="card-section-content">
						{this.props.children}
				</div>
			</div>
		);
	}
} );

let CardFooter = React.createClass( {

	render: function( ) {
		return (
			<div className="card-footer">
				{this.props.children}
			</div>
		);
	}
} );

let Card = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		icon: React.PropTypes.string,
		iconLabel: React.PropTypes.any,
		iconColor: React.PropTypes.string,
		style: React.PropTypes.object,
		device: React.PropTypes.oneOf( ['desktop', 'tablet', 'mobile'] )
	},

	getDefaultProps: function( ) {
		return {
			iconColor: styles.colors.gray
		};
	},

	render: function( ) {
		var { style, title, icon, iconLabel, ...other } = this.props;
		return (
			<div {...other} className="card card-stacked" style={this.props.style}>
				{this.props.title && (
					<h2 className="card-title">
						{title}
						{( icon || iconLabel ) && (
							this._renderIcon( )
						)}
					</h2>
				)}
				
				{this.props.children}
			</div>
		);
	},

	_renderIcon: function( ) {
		return (
			<span style={[styles.right, styles.accountStatus, {color: this.props.iconColor}]}>
				{this.props.icon && <Icon name={this.props.icon} style={m( styles.accountStatusNoticon, {backgroundColor: this.props.iconColor} )}/>}
				{this.props.iconLabel}
			</span>
		);
	}

} );

let RadiumCard = Radium( Card );

RadiumCard.Section = Radium( CardSection );
RadiumCard.Footer = CardFooter;

module.exports = RadiumCard;
