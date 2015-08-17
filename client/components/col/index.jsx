var React = require('react');

require( './style.scss' );

let Col = React.createClass({
	render: function() {
		var className = this.props.left ? "dops-col-left" : "dops-col-right";
		return (
			<div key="" className={className}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Col;
