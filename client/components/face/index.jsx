var React = require( 'react' ),
	Color = require( 'color' );

var Face = React.createClass( {
	propTypes: {
		happiness: React.PropTypes.number, // between 0 ( sad ) and 100 ( happy )
		size: React.PropTypes.number
	},

	getDefaultProps: function() {
		return {
			happiness: 100,
			size: 100
		};
	},

	style: {
		eyeWrapperStyle: {
			position: 'absolute',
			top: '30%',
			left: '50%'
		}
	},

	_wrapperStyle: function() {
		var color = Color().rgb( 255, 255, 0 ).lighten( 1 - ( this.props.happiness / 100 ) ); // eslint-disable-line new-cap

		return {
			position: 'relative',
			width: this.props.size,
			height: this.props.size,
			background: color.hexString(),
			borderRadius: this.props.size,
			boxShadow: '0px 0px 2px #000'
		};
	},

	_eyeStyle: function() {
		return {
			position: 'absolute',
			top: 0,
			width: 0,
			height: 0,
			border: ( this.props.size * 0.07 ) + 'px solid #171717',
			borderRadius: ( this.props.size * 0.07 )
		};
	},

	_leftEyeStyle: function() {
		var eyeStyle = this._eyeStyle();
		eyeStyle.left = this.props.size / -4;
		return eyeStyle;
	},

	_rightEyeStyle: function() {
		var eyeStyle = this._eyeStyle();
		eyeStyle.right = this.props.size / -4;
		return eyeStyle;
	},

	_mouthStyle: function() {
		return {
			position: 'absolute',
			top: '20%',
			left: '50%',
			width: ( this.props.size * 0.6 ),
			height: ( this.props.size * 0.6 ),
			marginLeft: ( this.props.size * -0.3 ),
			border: ( this.props.size * 0.05 ) + 'px solid #171717',
			borderRadius: ( this.props.happiness / 100 ) * this.props.size * 0.4,
			borderColor: 'transparent transparent #171717 transparent'
		};
	},

	render: function() {
		return (
			<div style={this._wrapperStyle()}>
				<span style={this.style.eyeWrapperStyle}>
					<div style={this._leftEyeStyle()}></div>
					<div style={this._rightEyeStyle()}></div>
				</span>
				<span style={this._mouthStyle()}></span>
			</div>
		);
	}
} );

module.exports = Face;
