/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	extend = require( 'lodash/object/assign' ),
	isEmpty = require( 'lodash/lang/isEmpty' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var Form = require('../form'),
	
	// CountrySelect = require( 'my-sites/upgrades/components/form/country-select' ),
	// CreditCardNumberInput = require( 'my-sites/upgrades/components/form/credit-card-number-input' ),
	// Input = require( 'my-sites/upgrades/components/form/input' ),
	creditCardDetails = require( 'lib/credit-card-details' );
	// upgradesActions = require( 'lib/upgrades/actions' );

module.exports = React.createClass( {
	displayName: 'NewCardForm',

	propTypes: {
		onCreditCardDetailsChange: React.PropTypes.func.isRequired
	},

	isFieldInvalid: function( fieldName ) {
		return ! isEmpty( this.props.transaction.errors[ fieldName ] );
	},

	getFieldValue: function( fieldName ) {
		return this.props.transaction.newCardFormFields[ fieldName ];
	},

	// field: function( fieldName, componentClass, props ) {
	// 	return React.createElement( componentClass, extend( {}, props, {
	// 		additionalClasses: 'checkout-field',
	// 		name: fieldName,
	// 		onBlur: this.handleInputChange,
	// 		onChange: this.handleInputChange,
	// 		value: this.getFieldValue( fieldName ),
	// 		invalid: this.isFieldInvalid( fieldName ),
	// 		eventFormName: 'Checkout Form'
	// 	} ) );
	// },

	render: function() {
		let classes = classNames( 'all-fields-required', { 'has-saved-cards': this.props.hasStoredCards } );

		return (
			<div className="new-card">
				<button type="button" className="new-card-toggle" onClick={ this.props.onSelect }>
					{ this.translate( '+ Use a New Credit/Debit Card' ) }
				</button>

				<Form className="new-card-fields">
					{ this.props.hasStoredCards ?
						<h6 className="new-card-header">{ this.translate( 'Use New Credit/Debit Card' ) }:</h6> : null
					}

					<span className={ classes }>{ this.translate( 'All fields required' ) }</span>

					<Form.TextInput
						name="name"
						floatingLabel
						label={this.translate( 'Name on Card', {
							context: 'Upgrades: Card holder name label on credit card form',
							textOnly: true
						} )}/>

					<Form.TextInput
						name="number"
						formatter="cardNumber"
						validations="isCC"
						validationError="Not a valid Credit Card number"
						floatingLabel
						label={this.translate( 'Card Number', {
							context: 'Upgrades: Card number label on credit card form',
							textOnly: true
						} )}/>

					<div className="new-card-extras">
						<Form.TextInput 
							formatter="cardExpiry"
							name="expiration-date"
							label={this.translate( 'MM/YY', {
								context: 'Upgrades: Expiry label on credit card form',
								textOnly: true
							} )} 
							floatingLabel
							required />

						<Form.TextInput 
							name="cvv"
							formatter="cardCVV"
							label={this.translate( 'CVV', {
								context: 'Upgrades: 3 digit security number on credit card form',
								textOnly: true
							} )}
							floatingLabel
							required />

						<Form.CountrySelect
							name="country"
							label={this.translate( 'Country', { textOnly: true } )}/>

						<Form.TextInput 
							name="postal-code"
							label={this.translate( 'Postal Code', {
								context: 'Upgrades: Postal code on credit card form',
								textOnly: true
							} )}
							required />
					</div>
				</Form>
			</div>
		);
	},

	handleInputChange: function( event ) {
		var previousTransaction, previousValue, fieldName, nextValue, rawDetails,
			maskedDetails;

		fieldName = event.target.name;
		nextValue = event.target.value;

		previousTransaction = this.props.transaction;
		previousValue = previousTransaction.newCardFormFields[ fieldName ];

		rawDetails = {};
		rawDetails[ fieldName ] = creditCardDetails.unmaskField( fieldName, previousValue, nextValue );

		maskedDetails = {};
		maskedDetails[ fieldName ] = creditCardDetails.maskField( fieldName, previousValue, nextValue );

		// upgradesActions.setNewCreditCardDetails( {
		// 	rawDetails: rawDetails,
		// 	maskedDetails: maskedDetails
		// } );

		this.props.onCreditCardDetailsChange( {
			rawDetails: rawDetails,
			maskedDetails: maskedDetails
		} );
	}
} );
