var React = require( 'react' );
var CodeMirror;

// adapted from:
// https://github.com/facebook/react/blob/master/docs/_js/live_editor.js#L16

// also used as an example:
// https://github.com/facebook/react/blob/master/src/browser/ui/dom/components/ReactDOMInput.js

var IS_MOBILE = typeof navigator === 'undefined' || (
	navigator.userAgent.match( /Android/i ) ||
	navigator.userAgent.match( /webOS/i ) ||
	navigator.userAgent.match( /iPhone/i ) ||
	navigator.userAgent.match( /iPad/i ) ||
	navigator.userAgent.match( /iPod/i ) ||
	navigator.userAgent.match( /BlackBerry/i ) ||
	navigator.userAgent.match( /Windows Phone/i )
);

if ( !IS_MOBILE ) {
	CodeMirror = require( 'codemirror' );
	require( 'codemirror/mode/xml/xml' );
	require( 'codemirror/mode/javascript/javascript' );
}

let CodeMirrorEditor = React.createClass( {
	getInitialState: function() {
		return {
			isControlled: this.props.value !== null
		};
	},

	propTypes: {
		value: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		style: React.PropTypes.object,
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		theme: React.PropTypes.string
	},

	componentDidMount: function() {
		var isTextArea = this.props.forceTextArea || IS_MOBILE;
		if ( !isTextArea ) {
			this.editor = CodeMirror.fromTextArea( this.refs.editor.getDOMNode(), this.props );
			this.editor.on( 'change', this.handleChange );
		}
	},

	componentDidUpdate: function() {
		if ( this.editor ) {
			if ( this.props.value !== null ) {
				if ( this.editor.getValue() !== this.props.value ) {
					this.editor.setValue( this.props.value || this.props.defaultValue );
				}
			}
		}
	},

	handleChange: function() {
		if ( this.editor ) {
			let value = this.editor.getValue();
			if ( value !== this.props.value ) {
				if ( this.props.onChange ) {
					this.props.onChange( {
						target: {
							value: value
						}
					} );
				}
				if ( this.editor.getValue() !== this.props.value ) {
					if ( this.state.isControlled ) {
						this.editor.setValue( this.props.value );
					} else {
						this.props.value = value;
					}
				}
			}
		}
	},

	render: function() {
		var editor = React.createElement( 'textarea', {
			ref: 'editor',
			value: this.props.value,
			readOnly: this.props.readOnly,
			defaultValue: this.props.defaultValue,
			onChange: this.props.onChange,
			style: this.props.textAreaStyle,
			className: this.props.textAreaClassName || this.props.textAreaClass
		} );

		return React.createElement( 'div', {
			style: this.props.style,
			className: this.props.className
		}, editor );
	}
} );

module.exports = CodeMirrorEditor;