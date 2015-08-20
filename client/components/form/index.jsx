var React = require( 'react' ),
	Formsy = require( 'formsy-react' ),
	Button = require( '../button' );

require( './style.scss' );

let idCounter = 0;

function getUniqueId() {
	return 'formid' + ( idCounter++ );
}

// very thin wrapper for Formsy.Form
let Form = React.createClass( {

	propTypes: {
		style: React.PropTypes.object,
		onValidSubmit: React.PropTypes.func,
		onInvalidValidSubmit: React.PropTypes.func,
		onValid: React.PropTypes.func,
		onInvalidValid: React.PropTypes.func,
		validationErrors: React.PropTypes.object
	},

	getInitialState: function() {
		return {};
	},

	isValid: function() {
		return this.refs.form.isValid();
	},

	// setValidationErrors: function( errors ) {
	// 	this.setState( { validationErrors: errors } );
	// },

	submit: function() {
		this.refs.form.submit();
	},

	render: function() {
		var { style, ...other } = this.props;
		return (
			<div className="dops-form" style={style}>
				<Formsy.Form ref="form" {...other}>
					{this.props.children}
				</Formsy.Form>
			</div>
		);
	}
} );

let Section = React.createClass( {
	
	propTypes: {
		title: React.PropTypes.any,
		id: React.PropTypes.string
	},

	render: function() {
		return (
			<div id={this.props.id}>
				{this.props.title ? 
					(
						<div>
							<div className="dops-form-section-title">{this.props.title}</div>
							<div className="dops-form-section-body">
								{this.props.children}
							</div>
						</div>
					) : 
					( this.props.children )
				}
			</div>
		);
	}
} );

// convenience wrapper for a label and an input
let TextInput = React.createClass( {

	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired,
		className: React.PropTypes.string,
		style: React.PropTypes.any,
		label: React.PropTypes.any,
		type: React.PropTypes.string,
		labelSuffix: React.PropTypes.any,
		required: React.PropTypes.any,
		validations: React.PropTypes.string,
		validationError: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			uniqueId: getUniqueId()
		};
	},

	getDefaultProps: function() {
		return { type: "text" };
	},

	changeValue: function( event ) {
		this.setValue( event.target.value );
		if ( this.props.onChange ) {
			this.props.onChange( event );
		}
	},

	render: function() {
		var { style, labelSuffix, label, className, ...other } = this.props;

		if ( !className ) {
			className = 'field-' + this.props.name;
		}

		if ( this.props.label ) {
			return (
				<Form.Label className={className} style={style} label={label} labelSuffix={labelSuffix} htmlFor={this.state.uniqueId} required={this.props.required}>
					{this._renderInput( this.props.label, null, null, ...other )}
				</Form.Label>
			);
		}
		return this._renderInput( this.props.name, style, className, ...other );
	},

	_renderInput: function( label, style, extraClassName, ...other ) {
		var errorMessage;

		style = style || {};

		if ( !this.isPristine() ) {
			errorMessage = this.showError() ? this.getErrorMessage() : null;
			if ( !errorMessage ) {
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || "" ) : null;
			}							
		}

		let className = "dops-form-text" + 
			( errorMessage ? " dops-form-error" : "" ) + 
			( extraClassName ? ' '+extraClassName : "" );

		return (
			<div className={className} style={style}>
				<input 
					type={this.props.type}
					id={this.state.uniqueId}
					{ ...other }
					placeholder={this.props.placeholder}
					onChange={this.changeValue} 
					value={this.getValue()} />

				{this.props.children}
				<div className="clear"></div>
				{errorMessage && ( <span className="dops-form-errormessage">{errorMessage}</span> )}
			</div>
		);
	}
} );

let Label = React.createClass( {

	propTypes: {
		style: React.PropTypes.any,
		label: React.PropTypes.any,
		labelSuffix: React.PropTypes.any,
		htmlFor: React.PropTypes.string,
		required: React.PropTypes.any,
		inline: React.PropTypes.any
	},

	render: function() {
		if ( this.props.label ) {
			let label = this.props.label + 
				( this.props.labelSuffix ? this.props.labelSuffix : '' ) + 
				( this.props.required ? '*' : '' );
			return (
				<div className="dops-form-label" style={this.props.style}>
					<label htmlFor={this.props.htmlFor} className="dops-form-label">
						{this.props.inline && this.props.children}{label}
					</label>
					{!this.props.inline && this.props.children}
				</div>
			);
		} 
		return (
			<div className="dops-form-label" style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
} );

let Row = React.createClass( {
	render: function() {
		return (
			<div className="dops-form-row">
				{this.props.children}
			</div>
		);
	}
} );

let Checkbox = React.createClass( {
	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired,
		style: React.PropTypes.any,
		label: React.PropTypes.any.isRequired,
		labelSuffix: React.PropTypes.any,
		required: React.PropTypes.any,
		validations: React.PropTypes.string,
		validationError: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			uniqueId: getUniqueId()
		};
	},

	getDefaultProps: function() {
		return { required: false };
	},

	changeValue: function( event ) {
		this.setValue( event.target.checked );
	},

	render: function() {
		var { style, labelSuffix, label, ...other } = this.props;
		var uniqueId = this.state.uniqueId;
		var errorMessage;

		if ( !this.isPristine() ) {
			errorMessage = this.showError() ? this.getErrorMessage() : null;
			if ( !errorMessage ) {
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || "" ) : null;
			}
		}

		let className = "dops-form-checkbox" + 
			( errorMessage ? " dops-form-error" : "" );

		return (
			<div className={className} style={style}>
				<Form.Label inline label={label} labelSuffix={labelSuffix} htmlFor={uniqueId} required={this.props.required}>
					<input 
						type="checkbox" 
						id={uniqueId}
						{ ...other }
						onChange={this.changeValue} 
						checked={this.getValue()} 
						className="form-checkbox"/>
				</Form.Label>
				{errorMessage && ( <span className="dops-form-errormessage">{errorMessage}</span> )}
			</div>
		);
	}
} );

let RadioInput = React.createClass( {
	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<p>Radio button</p>
		);
	}
} );

let Hidden = React.createClass( {
	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<input type="hidden" value={this.getValue()}/>
		);
	}
} );

let SelectInput = React.createClass( {

	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired,
		style: React.PropTypes.any,
		label: React.PropTypes.any,
		inline: React.PropTypes.any,
		labelSuffix: React.PropTypes.any,
		required: React.PropTypes.any,
		validations: React.PropTypes.string,
		validationError: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			uniqueId: getUniqueId()
		};
	},

	changeValue: function( event ) {
		this.setValue( event.target.value );
	},

	render: function() {
		var errorMessage;

		if ( !this.isPristine() ) {
			errorMessage = this.showError() ? this.getErrorMessage() : null;
			if ( !errorMessage ) {
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || "" ) : null;
			}
		}

		let className = "dops-form-select" + 
			( errorMessage ? " dops-form-error" : "" );

		if ( this.props.inline ) {
			className = className + " dops-form-inline";
		}

		return (
			<div className={className} style={this.props.style}>
				<Form.Label inline={this.props.inline} label={this.props.label} labelSuffix={this.props.labelSuffix} htmlFor={this.state.uniqueId} required={this.props.required}>
					<select ref="select" id={this.state.uniqueId} value={this.getValue()} onChange={this.changeValue}>
						{this.props.children}
					</select>
				</Form.Label>
				{errorMessage && ( <span className="dops-form-errormessage">{errorMessage}</span> )}
			</div>
		);
	}
} );

let ActionBar = React.createClass( {
	propTypes: {
		style: React.PropTypes.object
	},

	render: function() {
		return (
			<div className="dops-form-actionbar" style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
} );

// simple button that submits the form
let Submit = React.createClass( {

	render: function() {
		var { ...other } = this.props;

		return (
			<Button {...other} type="submit">{this.props.children}</Button>
		);
	}
} );

// from: https://gist.github.com/ShirtlessKirk/2134376
/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright ( c ) 2012.
 * @license WTFPL ( http://www.wtfpl.net/txt/copying )
 */
let luhnChk = ( function( arr ) {
	return function( ccNum ) {
		var 
			len = ccNum.length,
			bit = 1,
			sum = 0,
			val;
 
		while ( len ) {
			val = parseInt( ccNum.charAt( --len ), 10 );
			sum += ( bit ^= 1 ) ? arr[val] : val;
		}
 
		return sum && sum % 10 === 0;
	};
}( [0, 2, 4, 6, 8, 1, 3, 5, 7, 9] ) );

// To find out more about validators, see:
// https://github.com/christianalfoni/formsy-react/blob/master/API.md#validators

Formsy.addValidationRule( 'isCC', function( values, value ) {
	if ( value === undefined || value === null ) {
		return false;
	}
	return value.length === 16 && luhnChk( value );
} );

// this can be overridden with a custom function so that you can internationalise the output
Form.requiredFieldErrorFormatter = function( label ) {
	return label + " is required";
};

Form.Submit = Submit;
Form.ActionBar = ActionBar;
Form.Section = Section;
Form.Hidden = Hidden;
Form.RadioInput = RadioInput;
Form.SelectInput = SelectInput;
Form.TextInput = TextInput;
Form.Checkbox = Checkbox;
Form.Label = Label;
Form.Row = Row;

module.exports = Form;
