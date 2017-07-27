var Demo,
	Tabs = require( './components/tabs' ),
	Sidebar = require( './components/sidebar' ),
	LegacyDemo = require( './components/demo' ),
	Styleguide = require( './components/styleguide' ),
	React = require( 'react' ),
	ReactDOM = require( 'react-dom' );

require( 'babel-polyfill' );
require( './demo.scss' );

Demo = React.createClass( {
	render: function() {
		return (
			<Tabs>
				<Tabs.Panel title="sidebar">
					<Sidebar />
				</Tabs.Panel>
				<Tabs.Panel title="styleguide">
					<Styleguide />
				</Tabs.Panel>
				<Tabs.Panel title="legacy">
					<LegacyDemo />
				</Tabs.Panel>
			</Tabs>
		);
	}
} );

jQuery( document ).ready( function() {
	ReactDOM.render(
		React.createElement( Demo, {} ), document.getElementById( 'demo' )
	);
} );
