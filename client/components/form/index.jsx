var React = require( 'react' ),
	Formsy = require( 'formsy-react' ),
	classNames = require( 'classnames' ),
	Payment = require( 'payment' ),
	Button = require( '../button' ),
	FormInputValidation = require( '../form-input-validation' );

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
		className: React.PropTypes.any,
		style: React.PropTypes.any,
		floatingLabel: React.PropTypes.any,
		label: React.PropTypes.any,
		type: React.PropTypes.string,
		formatter: React.PropTypes.oneOf( ['cardNumber', 'cardExpiry', 'cardCVC'] ),
		labelSuffix: React.PropTypes.any,
		required: React.PropTypes.any,
		validations: React.PropTypes.oneOfType( [
			React.PropTypes.string,
			React.PropTypes.object
		] ),
		validationError: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			uniqueId: getUniqueId(),
			// for floating label support
			floated: this.props.value ? this.props.value.length > 0 : false,
			animating: this.props.value ? this.props.value.length > 0 : false,
		};
	},

	componentDidMount: function() {
		var el = this.refs.input.getDOMNode();
		switch ( this.props.formatter ) {
		case 'cardNumber':
			Payment.formatCardNumber( el );
			break;
		case 'cardExpiry':
			Payment.formatCardExpiry( el );
			break;
		case 'cardCVC':
			Payment.formatCardCVC( el );
			break;
		}
	},

	getDefaultProps: function() {
		return { type: 'text' };
	},

	changeValue: function( event ) {
		var inputValue = event.target.value;

		this.setValue( inputValue );
		if ( this.props.onChange ) {
			this.props.onChange( event );
		}

		// handle floating label animation
		if ( this.props.floatingLabel ) {
			if ( !inputValue.length ) {
				this.setState( {floated: false, animating: false} );
				return;
			}
			this.setState( {animating: true} );
			requestAnimationFrame( function() {
				this.setState( {floated: true} );
			}.bind( this ) );
		}
	},

	render: function() {
		var labelClass;

		let { style, labelSuffix, label, className, ...other } = this.props;

		className = classNames( 'dops-field', 'dops-field-' + this.props.name, className );

		if ( this.props.floatingLabel ) {
			className = className + ' dops-floating-label-input';
			labelClass = classNames( {
				'floating': true,
				'floating--floated': this.state.animating,
				'floating--floated-active': this.state.floated,
			} );
		}

		if ( this.props.label ) {
			return (
				<Form.Label className={className} labelClassName={labelClass} style={style} label={label} labelSuffix={labelSuffix} htmlFor={this.state.uniqueId} required={this.props.required}>
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
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || '' ) : null;
			}
		}

		let className = classNames( {
			'dops-form-text': true,
			'dops-form-error': errorMessage,
		} );

		return (
			<div className={className} style={style}>
				<input
					ref="input"
					className='dops-form-input'
					type={this.props.type}
					id={this.state.uniqueId}
					{ ...other }
					placeholder={this.props.placeholder}
					onChange={this.changeValue}
					value={this.getValue()} />

				{this.props.children}
				<div className="clear"></div>
				{errorMessage && ( <FormInputValidation text={errorMessage} isError={ true }/> )}
			</div>
		);
	}
} );

let Label = React.createClass( {

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
		className: React.PropTypes.any,
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
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || '' ) : null;
			}
		}

		let className = classNames( {
			'dops-form-checkbox': true,
			'dops-form-error': errorMessage,
		}, this.props.className );

		return (
			<div className={className} style={style}>
				<Form.Label inline label={label} labelSuffix={labelSuffix} htmlFor={uniqueId} required={this.props.required}>
					<input
						type="checkbox"
						id={uniqueId}
						{ ...other }
						onChange={this.changeValue}
						checked={this.getValue()}
						className='dops-form-checkbox' />
				</Form.Label>
				{errorMessage && ( <FormInputValidation text={errorMessage} isError={ true }/> )}
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
		className: React.PropTypes.any,
		style: React.PropTypes.any,
		label: React.PropTypes.any,
		floatingLabel: React.PropTypes.bool,
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
		var errorMessage, labelClass;

		if ( !this.isPristine() ) {
			errorMessage = this.showError() ? this.getErrorMessage() : null;
			if ( !errorMessage ) {
				errorMessage = this.showRequired() ? Form.requiredFieldErrorFormatter( this.props.label || this.props.placeholder || '' ) : null;
			}
		}

		if ( this.props.floatingLabel ) {
			// we fake out the post-floating state because the animation makes
			// no sense for a select input
			labelClass = 'floating floating--floated floating--floated-active';
		}

		let className = classNames( {
			'dops-form-select': true,
			'dops-field': true,
			'dops-form-error': errorMessage,
			'dops-form-inline': this.props.inline,
			'dops-floating-label-input': this.props.floatingLabel,
		}, this.props.className );

		return (
			<Form.Label className={className} inline={this.props.inline} labelClassName={labelClass} label={this.props.label} labelSuffix={this.props.labelSuffix} htmlFor={this.state.uniqueId} required={this.props.required} style={this.props.style}>
				<div className="dops-form-select">
					<select ref="select" id={this.state.uniqueId} value={this.getValue()} onChange={this.changeValue}>
						{this.props.children}
					</select>
				</div>
				{errorMessage && ( <FormInputValidation text={errorMessage} isError={ true }/> )}
			</Form.Label>
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
		var len = ccNum.length,
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

	// strip spaces
	value = value.replace( /\s/g, '' );

	return value.length === 16 && luhnChk( value );
} );

// this can be overridden with a custom function so that you can internationalise the output
Form.requiredFieldErrorFormatter = function( label ) {
	return label + ' is required';
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
