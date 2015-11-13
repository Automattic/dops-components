var React = require( 'react' ),
	classNames = require( 'classnames' ),
	Gridicon = require( '../gridicon' );

require( './style.scss' );

let PasswordBox = React.createClass( {

	propTypes: {
		value: React.PropTypes.any.isRequired,
		hideLabel: React.PropTypes.any,
		showLabel: React.PropTypes.any
	},

	getDefaultProps: function() {
		return {
			hideLabel: 'hide',
			showLabel: 'show'
		};
	},

	getInitialState: function() {
		return {
			hidePassword: true
		};
	},

	togglePasswordVisibility: function() {
		this.setState( { hidePassword: ! this.state.hidePassword } );
	},

	hidden: function() {
		return !! this.state.hidePassword;
	},

	render: function() {
		var toggleVisibilityClasses = classNames( {
			'dops-password-box': true,
			'dops-password-box--hidden': this.hidden(),
		} );

		if ( this.hidden() ) {
			return (
				<div className={ toggleVisibilityClasses }>
					<span className='dops-text-input'>************</span>
					<button className='dops-password-box__toggle-visibility' onClick={ this.togglePasswordVisibility }>
						<Gridicon icon="visible" />
					</button>
				</div>
			);
		} else {
			return (
				<div className={ toggleVisibilityClasses }>
					<input className='dops-text-input' type="text" value={ this.props.value } />
					<button className='dops-password-box__toggle-visibility' onClick={ this.togglePasswordVisibility }>
						<Gridicon icon="not-visible" />
					</button>
				</div>
			);
		}
	}
} );

module.exports = PasswordBox;

