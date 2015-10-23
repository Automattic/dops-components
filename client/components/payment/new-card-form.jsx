/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	extend = require( 'lodash/object/assign' ),
	isEmpty = require( 'lodash/lang/isEmpty' ),
	classNames = require( 'classnames' ),
	assign = require( 'lodash/object/assign' );

/**
 * Internal dependencies
 */
var Form = require('../form'),
	// XXX temporary hack because default country select has 3-char countries
	CountrySelect = require('../form/input-select-country-2'); 

module.exports = React.createClass( {
	displayName: 'NewCardForm',

	propTypes: {
		hasStoredCards: React.PropTypes.bool,
		defaultCCInfo: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			formValue: assign({}, this.props.defaultCCInfo)
		};
	},

	getValidFormFields: function() {
		var form = this.refs.form;
		form.submit();

		if ( form.isValid() ) {
			return form.getCurrentValues();
		} else {
			console.log("error!");
			return false;
		}
	},

	render: function() {
		console.log(this.state.formValue);
		let classes = classNames( 'all-fields-required', { 'has-saved-cards': this.props.hasStoredCards } );

		return (
			<div className="new-card">
				<button type="button" className="new-card-toggle">
					{ this.translate( '+ Use a New Credit/Debit Card' ) }
				</button>

				<Form ref="form" value={this.state.formValue} className="new-card-fields">
					{ this.props.hasStoredCards ?
						<h6 className="new-card-header">{ this.translate( 'Use New Credit/Debit Card' ) }:</h6> : null
					}

					<span className={ classes }>{ this.translate( 'All fields required' ) }</span>

					<Form.TextInput
						name="name"
						value={this.state.formValue.name}
						floatingLabel
						label={this.translate( 'Name on Card' )}/>

					<Form.TextInput
						name="number"
						formatter="cardNumber"
						validations="isCC"
						validationError="Not a valid Credit Card number"
						floatingLabel
						label={this.translate( 'Card Number' )}/>

					<div className="new-card-extras">
						<Form.TextInput 
							name="expiration-date"
							className="expiration-date"
							formatter="cardExpiry"
							label={this.translate( 'MM/YY' )} 
							floatingLabel
							required />

						<Form.TextInput 
							name="cvv"
							className="cvv"
							formatter="cardCVV"
							label={this.translate( 'CVV' )}
							floatingLabel
							required />

						<CountrySelect
							name="country"
							value={this.state.formValue.country}
							className="country"/>

						<Form.TextInput 
							name="postal-code"
							value={this.state.formValue['postal-code']}
							label={this.translate( 'Postal Code' )}
							floatingLabel
							required />
						{this.props.children}
					</div>
				</Form>
			</div>
		);
	}
} );
