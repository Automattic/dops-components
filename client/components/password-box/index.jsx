var React = require( 'react' ),
	Button = require( '../button' ),
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
			showPass: false
		};
	},

	handleShowPass: function( e ) {
		e.preventDefault();
		this.setState( {showPass: true} );
	},

	handleHidePass: function( e ) {
		e.preventDefault();
		this.setState( {showPass: false} );
	},

	render: function() {
		return (
			<div className={'dops-password-box' + ( this.state.showPass ? '' : ' dops-password-box-hidden' )}>
				{this.state.showPass ? 
					( <div>
						<span className="dops-password-field">{this.props.value}<Gridicon onClick={this.handleHidePass} size={24} icon="not-visible"/></span>
					</div> ) : 
					( <div>
						<span className="dops-password-field">************<Gridicon size={24} icon="visible" onClick={this.handleShowPass}/></span>
					</div> )
				}
			</div>
		);
	}
} );

module.exports = PasswordBox;

