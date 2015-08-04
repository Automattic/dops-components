require('./demo.scss');
var React = require( 'react' );

var Demo = React.createClass( {
	render: function() {
		return (
			<div>
				<h1>It works!</h1>
			</div>
		);
	}
} );

jQuery( document ).ready( function () {
	React.render(
		React.createElement( Demo, {} ), document.getElementById( 'demo' )
	);
} );
