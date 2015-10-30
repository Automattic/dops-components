require( './style.scss' );

var React = require( 'react' );

var Ribbon = React.createClass({
	render: function() {
		return <div className="corner-ribbon-wrapper left">
			<div className="corner-ribbon">
				{this.props.children}
			</div>
		</div>;
	}
});

module.exports = Ribbon;