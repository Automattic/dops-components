/**
 * External dependencies
 */
var React = require( 'react' ),
	noop = require( 'lodash/utility/noop' );

/**
 * Internal dependencies
 */
var SiteSelector = require( '../site-selector' );

module.exports = React.createClass( {
	displayName: 'SitePicker',

	propTypes: {
		onClose: React.PropTypes.func,
		layoutFocus: React.PropTypes.object
	},

	getDefaultProps: function() {
		return {
			onClose: noop
		};
	},

	componentDidUpdate: function() {
		document.addEventListener( 'click', this.closePickerOnOutsideClick );
	},

	componentWillUnmount: function() {
		document.removeEventListener( 'click', this.closePickerOnOutsideClick );
	},

	onClose: function( event ) {
		this.closePicker();
		this.props.onClose( event );
	},

	closePicker: function() {
		document.getElementById( 'secondary' ).scrollTop = 0;
		window.scrollTo( 0, 0 );
	},

	closePickerOnOutsideClick: function( event ) {
		var pickerNode = React.findDOMNode( this.refs.siteSelector );

		// If the user clicks outside the Picker, let's close it
		if ( ! pickerNode.contains( event.target ) && event.target !== pickerNode ) {
			this.closePicker();
		}
	},

	render: function() {
		return (
			<SiteSelector
				ref="siteSelector"
				indicator={ true }
				showAddNewSite={ true }
				showAllSites={ true }
				sites={ this.props.sites }
				allSitesPath={ this.props.allSitesPath }
				siteBasePath={ this.props.siteBasePath }
				addNewString={ this.props.addNewString }
				addNewPath={ this.props.addNewPath }
				onClose={ this.onClose }
			/>
		);
	}
} );
