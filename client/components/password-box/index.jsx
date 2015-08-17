var React = require( 'react' ),
	Button = require( '../button' );

require( './style.scss' );

let PasswordBox = React.createClass( {

	propTypes: {
		value: React.PropTypes.any.isRequired,
		hideLabel: React.PropTypes.any,
		showLabel: React.PropTypes.any
	},

	getDefaultProps: function() {
		return {
			hideLabel: "hide",
			showLabel: "show"
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
			<div className="dops-password-box">
				{this.state.showPass ? 
					( <div>
						<span>{this.props.value}</span>
						<Button size="tiny" style={{float: 'right'}} onClick={this.handleHidePass}>{this.props.hideLabel}</Button>
					</div> ) : 
					( <div>
						<span>************</span>
						<Button size="tiny" style={{float: 'right'}} onClick={this.handleShowPass}>{this.props.showLabel}</Button>
					</div> )
				}
			</div>
		);
	}
} );

module.exports = PasswordBox;

