var React = require( 'react' );

require( './style.scss' );

let Panel = React.createClass( {
	propTypes: {
		title: React.PropTypes.any.isRequired
	},

	render: function() {
		return <div>{this.props.children}</div>;
	}
} );

let Tabs = React.createClass( {

	propTypes: {
		layout: React.PropTypes.oneOf( ['horizontal', 'vertical'] )
	},

	getDefaultProps: function() {
		return {
			layout: 'horizontal'
		};
	},

	getInitialState: function() {
		return {
			activeTab: 0
		};
	},

	handleSelectTab: function( index, e ) {
		e.preventDefault();
		this.setState( { activeTab: index } );
	},

	handleMouseOverTab: function( index ) {
		this.setState( { hoverTab: index } );
	},

	handleMouseOutTab: function( index ) {
		if ( this.state.hoverTab === index ) {
			this.setState( { hoverTab: null } );
		}
	},

	_isHorizontal: function() {
		return this.props.layout === 'horizontal';
	},

	render: function() {
		// var theme = this._isHorizontal() ? this.styles.horizontal : this.styles.vertical;
		var theme = this._isHorizontal() ? 'horizontal' : 'vertical';
		return (
			<div className={'dops-tabs-'+theme}>
				{this._renderNav()}
				<div>
					{React.Children.map( this.props.children, function( child, index ) {
						if ( index === this.state.activeTab ) {
							return child;
						} 
						return null;
					}.bind( this ) )}
				</div>
			</div>
		);
	},

	_renderNav: function() {
		return (
			<ul>
				{React.Children.map( this.props.children, function( child, index ) {
					var title = child.props.title,
						ref = 'tab-'+( index + 1 ),
						active = this.state.activeTab === index,
						hover = this.state.hoverTab === index;

					var className = this.state.activeTab === index ? 'active' : null;

					return (
						<li key={index} className={className}>
							<a href="#" ref={ref} onClick={this.handleSelectTab.bind( this, index )} onMouseOver={this.handleMouseOverTab.bind( this, index )} onMouseOut={this.handleMouseOutTab.bind( this, index )}>{title}</a>
						</li>		
					);
				}.bind( this ) )}
			</ul>
		);
	}
} );

Tabs.Panel = Panel;

module.exports = Tabs;
