/** External Dependencies **/
var React = require( 'react' ),
	classNames = require( 'classnames' );

module.exports = React.createClass( {
	displayName: 'Label',

	propTypes: {
		style: React.PropTypes.any,
		label: React.PropTypes.any,
		labelSuffix: React.PropTypes.any,
		labelClassName: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		required: React.PropTypes.any,
		inline: React.PropTypes.any
	},

	render: function() {
		var label,
			className = classNames( {
				'dops-form-label': true,
				'dops-form-inline': this.props.inline,
			}, this.props.className );

		if ( this.props.label ) {
			label = this.props.label + ( this.props.required ? '*' : '' );
		}

		return (
			<div className={className} style={this.props.style}>
				{label && <label className={this.props.labelClassName} htmlFor={this.props.htmlFor}>
					{this.props.inline && this.props.children}{label}{this.props.labelSuffix}
				</label>}
				{( !this.props.inline || !label ) && this.props.children}
			</div>
		);
	}
} );
