var React = require( 'react' ),
	Card = require( '../card' ),
	Button = require( '../button' ),
	Form = require( '../form' );

require( './style.scss' );

var Section = React.createClass( {
	render: function() {
		return (
			<div className="styleguide-section">
				<h2>{this.props.title}</h2>
				{this.props.children}
			</div>
		)
	}
} );

var Subsection = React.createClass( {
	render: function() {
		return (
			<div className="styleguide-subsection">
				<h3	>{this.props.title}</h3>
				{this.props.children}
			</div>
		)
	}
} );

var SectionDemo = React.createClass( {
	render: function() {
		return (
			<div className="styleguide-section-demo">
				{this.props.children}
			</div>
		)
	}
} );

var Styleguide = React.createClass( {
	render: function() {
		return (
			<div className="styleguide">
				<h1>Style Guide</h1>
				<Section title="Cards">
					<SectionDemo>
						<Card title="Subscriptions">
							<strong>Akismet + VaultPress Premium</strong>
							Anti-Spam with WordPress backup
						</Card>
					</SectionDemo>
					<Subsection title="Card Header">
						height: 50px<br />
						background: #F9F9F9<br />
						border-bottom: 1px solid #DDD
					</Subsection>
					<Subsection title="Card">
						background: #FFFFFF<br />
						border-bottom: 1px solid #DDD
						padding: 24px
					</Subsection>
				</Section>

				<Section title="Type">

					<div className="clear">
						<SectionDemo>
							<h1>Quick foxes jump nightly above wizards.</h1>
						</SectionDemo>
						<Subsection title="Page Title">
							Open Sans Light (300)<br />
							font-size: 24px<br />
							line-height: 32px<br />
							color: #333
						</Subsection>
					</div>

					<div className="clear">
						<SectionDemo>
							<h2>Quick foxes jump nightly above wizards.</h2>
						</SectionDemo>
						<Subsection title="Subtitle">
							Open Sans Light (300)<br />
							font-size: 21px<br />
							line-height: 32px<br />
							color: #333
						</Subsection>
					</div>

					<div className="clear">
						<SectionDemo>
							<p>“A man who would letterspace lower case would steal sheep,” Frederic Goudy liked to say. The reason for not letterspacing lower case is that it hampers legibility. But there are some lowercase alphabets to which…</p>
						</SectionDemo>
						<Subsection title="Body Text">
							Open Sans Regular (400)<br />
							font-size: 14px<br />
							line-height: 21px<br />
							color: #333
						</Subsection>
					</div>

					<div className="clear">
						<SectionDemo>
							<p className="card-label">views per page</p>
						</SectionDemo>
						<Subsection title="Card / Section Label">
							Open Sans Regular (400)<br />
							All Caps<br />
							font-size: 11px<br />
							line-height: 16px<br />
							color: #999
						</Subsection>	
					</div>				
				</Section>

				<Section title="Buttons"> 
					<Subsection title="Standard Button">
						<Button>Label</Button>
					</Subsection>

					<Subsection title="Primary Button">
						<Button primary>Label</Button>
					</Subsection>
				</Section>

				<Section title="Dropdowns"> 
					<Subsection title="Default">
						<Form>
							<Form.SelectInput name="foo">
								<option>Foo</option>
								<option>Bar</option>
							</Form.SelectInput>
						</Form>
					</Subsection>
				</Section>
			</div>
		)
	}
} );

module.exports = Styleguide;