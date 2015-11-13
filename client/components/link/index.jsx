/* TODO: an accessible-by-default version of <a> */
var React = require( 'react' ),
	A11yMixin = require( '../../lib/a11y-mixin' );

let AccessibleLink = React.createClass( {
	mixins: [A11yMixin],
	render: function() {
		var { ...other } = this.props;
		return <a href="#" role="button" tabIndex="0" onKeyDown={this.handleKeyDown.bind(this, this.props.onClick)} { ...other }>{this.props.children}</a>;
	}
} );

module.exports = AccessibleLink;