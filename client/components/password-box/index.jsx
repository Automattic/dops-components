var React = require( 'react' ),
	classNames = require( 'classnames' ),
	Gridicon = require( '../gridicon' ),
	ScreenReaderText = require( '../screen-reader-text' );

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
					<span className='dops-text-input' aria-hidden={ true }>************</span>
					<button className='dops-password-box__toggle-visibility' onClick={ this.togglePasswordVisibility } aria-live='assertive'>
						<Gridicon icon="visible" />
						<ScreenReaderText>{ this.props.showLabel }</ScreenReaderText>
					</button>
				</div>
			);
		} else {
			return (
				<div className={ toggleVisibilityClasses }>
					<input id={ this.props.id } className='dops-text-input' type="text" value={ this.props.value } />
					<button className='dops-password-box__toggle-visibility' onClick={ this.togglePasswordVisibility } aria-live='assertive'>
						<Gridicon icon="not-visible" />
						<ScreenReaderText>{ this.props.hideLabel }</ScreenReaderText>
					</button>
				</div>
			);
		}
	}
} );

module.exports = PasswordBox;

