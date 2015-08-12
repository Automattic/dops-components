var Demo,
	Sidebar = require( './components/sidebar' ),
	React = require( 'react' );

require( './demo.scss' );

Demo = React.createClass( {
	render: function() {
		return (
			<h1>It works!</h1>
		);
	}
} );

jQuery( document ).ready( function() {
	React.render(
		React.createElement( Demo, {} ), document.getElementById( 'demo' )
	);
	React.render(
		React.createElement( Sidebar, {} ), document.getElementById( 'secondary' )
	);
} );
