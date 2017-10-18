/** @ssr-ready **/

/* !!!
IF YOU ARE EDITING social-logo/index.jsx
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE SOCIAL LOGO REPO!
DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */

/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-pure-render/mixin';
import classNames from 'classnames';

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'SocialLogo',
	mixins: [ PureRenderMixin ],

	getDefaultProps() {
		return {
			className: '',
			size: 24
		};
	},

	propTypes: {
		icon: PropTypes.string.isRequired,
		size: PropTypes.number,
		onClick: PropTypes.func,
		className: PropTypes.string
	},

	render() {
		const icon = this.props.icon;

		const iconClass = classNames(
			this.props.className,
			icon,
			'social-logo'
		);
		let svg = null;

		switch ( icon ) {
			default:
				svg = <svg height={ this.props.size } width={ this.props.size } />;
				break;
			case 'amazon':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M13.582 8.182c-1.648.185-3.802.308-5.344.984-1.78.77-3.03 2.337-3.03 4.644 0 2.953 1.86 4.43 4.253 4.43 2.02 0 3.126-.478 4.686-2.066.516.747.685 1.11 1.63 1.894.21.114.482.103.67-.066l.007.006c.567-.505 1.6-1.4 2.18-1.888.23-.188.19-.496.01-.754-.52-.718-1.073-1.303-1.073-2.634V8.305c0-1.876.133-3.6-1.25-4.89C15.23 2.368 13.423 2 12.04 2 9.336 2 6.318 3.01 5.686 6.35c-.068.356.19.543.423.595l2.753.298c.258-.013.445-.266.494-.523.236-1.15 1.2-1.706 2.284-1.706.585 0 1.25.215 1.596.738.398.584.346 1.384.346 2.06v.37zm-.533 5.906c-.452.8-1.17 1.29-1.968 1.29-1.09 0-1.728-.83-1.728-2.06 0-2.42 2.17-2.86 4.227-2.86v.615c.002 1.108.028 2.03-.53 3.015zm7.633 5.25C18.33 21.077 14.917 22 11.98 22c-4.12 0-7.827-1.522-10.633-4.057-.22-.2-.024-.47.24-.317 3.028 1.762 6.772 2.823 10.64 2.823 2.608 0 5.476-.542 8.115-1.66.397-.17.73.26.34.55zm.653 1.705c-.194.163-.38.076-.293-.14.284-.71.92-2.297.62-2.683-.302-.386-1.99-.183-2.75-.092-.23.027-.266-.173-.06-.32 1.35-.945 3.556-.672 3.812-.355.26.32-.066 2.533-1.33 3.59z"/></g></svg>;
				break;
			case 'behance':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M7.8 5.698c.588 0 1.12.05 1.605.156.482.102.894.273 1.24.507.345.236.613.547.805.94.188.386.28.87.28 1.442 0 .62-.14 1.137-.42 1.55-.284.414-.7.752-1.255 1.015.756.218 1.317.6 1.69 1.146.373.55.556 1.205.556 1.975 0 .623-.12 1.16-.358 1.612-.24.457-.57.828-.973 1.114-.41.288-.877.5-1.4.637-.518.14-1.056.21-1.607.21H2V5.698h5.8m-.35 4.97c.48 0 .877-.114 1.19-.345.312-.228.464-.603.464-1.12 0-.285-.05-.522-.152-.706-.104-.182-.24-.326-.416-.427-.174-.104-.37-.176-.596-.216-.224-.044-.457-.06-.697-.06H4.71v2.874h2.74zm.15 5.237c.267 0 .52-.024.76-.077.242-.053.456-.137.636-.26.182-.12.332-.284.44-.492.11-.206.164-.474.164-.798 0-.633-.18-1.084-.533-1.357-.356-.27-.83-.403-1.413-.403H4.71v3.388H7.6zm8.562-.04c.367.357.897.537 1.583.537.493 0 .92-.125 1.277-.374.354-.248.57-.514.654-.79h2.155c-.346 1.072-.87 1.838-1.588 2.3-.708.462-1.572.692-2.58.692-.7 0-1.332-.113-1.9-.337-.566-.227-1.04-.544-1.438-.958-.39-.415-.69-.907-.904-1.484-.213-.573-.32-1.21-.32-1.898 0-.666.11-1.288.33-1.863.22-.578.528-1.076.932-1.493.406-.42.885-.75 1.444-.994.558-.24 1.175-.363 1.857-.363.754 0 1.414.145 1.98.44.563.29 1.026.686 1.39 1.18.362.494.62 1.058.782 1.69.16.633.217 1.293.17 1.984H15.56c0 .706.237 1.372.604 1.73m2.81-4.68c-.29-.32-.782-.496-1.383-.496-.39 0-.715.066-.974.2-.254.132-.46.297-.62.49-.158.198-.266.406-.33.63-.062.216-.1.412-.11.586h3.98c-.058-.625-.27-1.085-.563-1.41zm-3.915-3.446h4.985V6.524h-4.985v1.214z"/></g></svg>;
				break;
			case 'blogger-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19.78 9.904h-1.002c-.615 0-1.118-.475-1.16-1.078l-.002-.013c0-3.21-2.602-5.813-5.813-5.813H8.87C5.66 3 3.06 5.602 3.06 8.813v6.375C3.058 18.398 5.66 21 8.87 21h6.258c3.21 0 5.813-2.602 5.813-5.812l.003-4.12c0-.644-.522-1.164-1.164-1.164zM8.725 7.714h3.29c.618 0 1.118.5 1.118 1.116 0 .617-.5 1.117-1.117 1.117h-3.29c-.618 0-1.118-.5-1.118-1.117 0-.616.5-1.117 1.116-1.117zm6.6 8.656H8.72c-.584 0-1.057-.473-1.057-1.057s.473-1.057 1.057-1.057h6.607c.584 0 1.057.473 1.057 1.057s-.473 1.057-1.057 1.057z"/></g></svg>;
				break;
			case 'blogger':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M14.722 14.02c0 .36-.293.653-.654.653h-4.09c-.362 0-.655-.293-.655-.654s.293-.655.654-.655h4.09c.362 0 .655.293.655.654zm-4.74-3.322h2.037c.38 0 .69-.31.69-.692 0-.382-.31-.692-.69-.692H9.98c-.38 0-.69.31-.69.692 0 .382.31.692.69.692zM21 5v14c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2zm-3.456 6.39c0-.398-.322-.72-.72-.72h-.62c-.38 0-.692-.294-.718-.667v-.008c0-1.988-1.612-3.6-3.6-3.6H10.07c-1.988 0-3.6 1.612-3.6 3.6v3.947c0 1.987 1.612 3.6 3.6 3.6h3.874c1.988 0 3.6-1.612 3.6-3.6V11.39z"/></g></svg>;
				break;
			case 'codepen':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22.016 8.84l-.007-.037-.016-.072c-.003-.014-.01-.027-.013-.04l-.022-.063-.02-.042c-.008-.02-.018-.037-.03-.057-.007-.013-.017-.027-.025-.038l-.035-.052-.03-.037-.043-.044c-.01-.012-.022-.023-.035-.035-.015-.014-.032-.027-.048-.04l-.037-.03c-.005-.002-.01-.007-.015-.01l-9.16-6.097c-.29-.192-.667-.192-.956 0L2.36 8.237c-.006.003-.01.008-.016.012l-.038.027-.048.04c-.012.014-.024.025-.036.035-.015.015-.028.03-.042.047-.012.012-.022.022-.03.036-.01.017-.025.035-.035.052l-.025.038-.03.06-.02.04c-.008.022-.015.044-.02.064-.006.013-.01.027-.014.042-.007.023-.01.046-.016.07 0 .015-.005.026-.006.038-.006.04-.01.075-.01.114v6.093c0 .037.004.075.01.112 0 .01.004.024.006.037.005.023.008.047.015.072.003.014.008.027.013.04.007.02.013.04.022.062l.02.04c.008.02.018.038.03.058.007.013.015.027.025.038l.035.052.03.037c.013.015.028.032.042.045l.035.035c.015.013.032.028.048.04l.038.03.013.01 9.163 6.095c.148.1.313.148.48.148.167 0 .332-.047.478-.144l9.163-6.095.016-.01c.013-.01.027-.02.037-.03.018-.012.035-.027.048-.04.014-.01.026-.022.036-.034.017-.015.03-.032.043-.045l.03-.036.034-.052.025-.038.03-.058c.006-.013.012-.027.02-.04l.022-.063c.003-.013.01-.027.013-.04.007-.025.01-.048.015-.072l.007-.036c.003-.042.007-.08.007-.117V8.954c0-.04-.002-.075-.008-.114zm-9.154-4.376l6.75 4.49-3.015 2.013-3.735-2.492v-4.01zm-1.724 0v4.01l-3.735 2.493L4.39 8.954l6.748-4.49zm-7.44 6.098L5.854 12l-2.155 1.438v-2.876zm7.44 8.974l-6.75-4.49 3.016-2.012 3.735 2.492v4.01zm.862-5.5L8.953 12 12 9.966 15.047 12 12 14.035zm.862 5.5v-4.01l3.735-2.49 3.016 2.01-6.75 4.49zm7.44-6.098L18.148 12l2.156-1.438v2.876z"/></g></svg>;
				break;
			case 'dribbble':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm8.434-8.63c-.292-.093-2.644-.795-5.32-.366 1.117 3.07 1.572 5.57 1.66 6.09 1.915-1.296 3.28-3.35 3.66-5.725zm-5.098 6.506c-.127-.75-.623-3.36-1.822-6.477-.02.005-.038.012-.056.018-4.818 1.68-6.547 5.02-6.7 5.334 1.447 1.13 3.267 1.803 5.242 1.803 1.183 0 2.31-.242 3.336-.68zm-9.682-2.152c.193-.33 2.538-4.213 6.943-5.637.11-.036.224-.07.337-.102-.214-.485-.448-.97-.692-1.45-4.266 1.277-8.405 1.223-8.778 1.216-.003.088-.004.175-.004.262-.002 2.195.83 4.198 2.194 5.712zm-2.015-7.46c.38.005 3.9.02 7.896-1.04C10.12 6.706 8.594 4.59 8.37 4.283c-2.39 1.126-4.177 3.33-4.73 5.98zM9.997 3.71c.236.315 1.787 2.428 3.187 5 3.037-1.14 4.323-2.868 4.477-3.086C16.154 4.286 14.17 3.47 12 3.47c-.69 0-1.36.084-2.002.24zm8.614 2.902c-.18.243-1.612 2.078-4.77 3.367.2.406.39.82.567 1.236l.183.44c2.842-.356 5.666.216 5.948.276-.018-2.016-.74-3.867-1.928-5.32z"/></g></svg>;
				break;
			case 'dropbox':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 6.134L6.07 9.797 2 6.54l5.883-3.843L12 6.134zm-10 6.92l5.883 3.843L12 13.46 6.07 9.796 2 13.054zm10 .405l4.116 3.438L22 13.054l-4.07-3.257L12 13.46zm10-6.92l-5.884-3.843L12 6.134l5.93 3.663L22 6.54zm-9.99 7.66l-4.128 3.426-1.767-1.153v1.29l5.896 3.54 5.898-3.54v-1.29l-1.77 1.153-4.127-3.426z"/></g></svg>;
				break;
			case 'eventbrite':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M18.04 3.93L5.96 3C4.324 3 3 4.325 3 5.96V18.04C3 19.675 4.325 21 5.96 21l12.082-.93C19.7 19.982 21 18.743 21 17.11V6.89c0-1.634-1.26-2.863-2.96-2.96zm-1.107 4.24c-.082.215-.192.432-.378.55-.188.123-.49.133-.8.133-1.52 0-3.06-.048-4.606-.048-.153.708-.305 1.416-.452 2.128.932-.004 1.873.005 2.81.005.726 0 1.462-.07 1.586.525.04.19 0 .426-.052.615-.105.38-.258.676-.625.783-.185.055-.408.06-.646.06-1.144 0-2.344.016-3.492.02-.17.77-.328 1.552-.49 2.332 1.57-.005 3.068-.04 4.634-.058.627-.007 1.085.194 1.01.85-.032.262-.1.497-.212.725-.102.207-.248.375-.488.45-.237.076-.54.065-.862.08-.304.013-.614.007-.924.015-.31.01-.62.022-.92.022-1.252 0-2.428.08-3.682.073-.603-.004-1.014-.25-1.124-.757-.06-.273-.018-.58.036-.84.54-2.593 1.083-5.177 1.63-7.764.055-.266.113-.512.224-.715.17-.304.424-.52.79-.62.368-.1.883-.047 1.344-.047.305 0 .612.008.914.016.925.026 1.817.03 2.747.053.304.007.615.016.915.016.62 0 1.17.073 1.245.614.04.288-.05.567-.132.783z" fill-rule="evenodd" clip-rule="evenodd"/></g></svg>;
				break;
			case 'facebook':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.013c0 .55.445.994.993.994h8.62v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.59 3.494-3.59.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"/></g></svg>;
				break;
			case 'feed':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2 8.667V12c5.515 0 10 4.485 10 10h3.333c0-7.363-5.97-13.333-13.333-13.333zM2 2v3.333c9.19 0 16.667 7.477 16.667 16.667H22C22 10.955 13.045 2 2 2zm2.5 15C3.118 17 2 18.12 2 19.5S3.118 22 4.5 22 7 20.88 7 19.5 5.882 17 4.5 17z"/></g></svg>;
				break;
			case 'flickr':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"/></g></svg>;
				break;
			case 'foursquare':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M17.573 2H6.905S5 3.107 5 3.805v16.948c0 .785.422 1.077.66 1.172.238.097.892.177 1.285-.275 0 0 5.035-5.843 5.122-5.93.132-.132.132-.132.262-.132h3.26c1.367 0 1.587-.977 1.73-1.552.08-.318.693-3.428 1.226-6.122l.675-3.368C19.56 2.893 19.14 2 17.574 2zm-1.078 5.22c-.053.252-.372.518-.665.518h-4.157c-.467 0-.802.318-.802.787v.508c0 .467.338.798.806.798h3.528s.655.363.583.716c-.072.353-.407 2.102-.448 2.295-.04.194-.263.524-.656.524h-2.88c-.523 0-.683.068-1.033.503-.35.437-3.504 4.223-3.504 4.223-.032.035-.063.027-.063-.015V4.852c0-.298.26-.648.648-.648h8.563c.315 0 .61.297.528.683l-.445 2.333z"/></g></svg>;
				break;
			case 'ghost':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M10.203 20.997H3.005v-3.6h7.198v3.6zm10.792-3.6h-7.193v3.6h7.193v-3.6zm.003-7.197H3v3.6h17.998v-3.6zm-7.195-7.197H3.005v3.6h10.798v-3.6zm7.197 0h-3.6v3.6H21v-3.6z"/></g></svg>;
				break;
			case 'github':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.647.348-1.086.634-1.337-2.22-.252-4.555-1.112-4.555-4.944 0-1.09.39-1.984 1.03-2.682-.104-.254-.448-1.27.096-2.646 0 0 .84-.27 2.75 1.025.8-.223 1.654-.333 2.504-.337.85.004 1.705.114 2.504.336 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.7 1.026 1.59 1.026 2.682 0 3.84-2.337 4.687-4.565 4.935.36.307.68.917.68 1.852 0 1.335-.013 2.415-.013 2.74 0 .27.18.58.688.482C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></g></svg>;
				break;
			case 'google':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12.1,18.6L12.1,18.6c-3.7,0-6.6-3-6.6-6.6c0-3.7,3-6.6,6.6-6.6c1.8,0,3.3,0.7,4.4,1.7l-1.9,1.8c-0.5-0.4-1.3-1-2.5-1c-2.2,0-4,1.8-4,4.1c0,2.2,1.8,4.1,4,4.1c2.5,0,3.5-1.8,3.6-2.8h-3.6v-2.5h6.2c0.1,0.4,0.2,0.8,0.2,1.4C18.5,15.9,16,18.6,12.1,18.6z"/></g></svg>;
				break;
			case 'google-plus-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M8 11h6.61c.06.35.11.7.11 1.16 0 4-2.68 6.84-6.72 6.84-3.87 0-7-3.13-7-7s3.13-7 7-7c1.89 0 3.47.69 4.69 1.83l-1.9 1.83c-.52-.5-1.43-1.08-2.79-1.08-2.39 0-4.34 1.98-4.34 4.42S5.61 16.42 8 16.42c2.77 0 3.81-1.99 3.97-3.02H8V11zm15 0h-2V9h-2v2h-2v2h2v2h2v-2h2"/></g></svg>;
				break;
			case 'google_plus':
			case 'google-plus':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.92 14.05c-2.235 0-4.05-1.814-4.05-4.05s1.815-4.05 4.05-4.05c1.095 0 2.01.4 2.71 1.057l-1.15 1.118c-.292-.275-.802-.6-1.56-.6-1.34 0-2.433 1.115-2.433 2.48s1.094 2.48 2.434 2.48c1.552 0 2.123-1.074 2.228-1.71h-2.232v-1.51h3.79c.058.255.102.494.102.83 0 2.312-1.55 3.956-3.887 3.956zm8.92-3.3h-1.25V14h-1.5v-1.25H15v-1.5h1.25V10h1.5v1.25H19v1.5z"/></g></svg>;
				break;
			case 'instagram':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M18.924 10.615h-1.567c.114.443.182.906.182 1.385 0 3.06-2.48 5.54-5.54 5.54-3.058 0-5.537-2.48-5.537-5.54 0-.48.068-.942.182-1.385h-1.57v7.616c0 .383.31.693.694.693h12.46c.383 0 .693-.31.693-.692v-7.615zm0-4.846c0-.383-.31-.693-.693-.693h-2.075c-.382 0-.692.31-.692.692v2.076c0 .382.31.692.692.692h2.076c.384 0 .694-.31.694-.692V5.77zM12 8.537c-1.912 0-3.462 1.55-3.462 3.46 0 1.913 1.55 3.463 3.462 3.463s3.462-1.55 3.462-3.46c0-1.912-1.55-3.462-3.462-3.462M18.924 21H5.076C3.93 21 3 20.07 3 18.922V5.077C3 3.93 3.93 3 5.076 3h13.847C20.07 3 21 3.93 21 5.077v13.846C21 20.07 20.07 21 18.924 21" fill-rule="evenodd" clip-rule="evenodd"/></g></svg>;
				break;
			case 'linkedin':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574c-.857 0-1.55-.694-1.55-1.548 0-.855.692-1.548 1.55-1.548.854 0 1.547.694 1.547 1.548 0 .855-.692 1.548-1.546 1.548zm11.335 9.764h-2.67V14.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.6 1.086-1.6 2.206v4.248h-2.668v-8.59h2.56v1.174h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.203 1.78 3.203 4.092v4.71z"/></g></svg>;
				break;
			case 'mail':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"/></g></svg>;
				break;
			case 'medium':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20.962 7.257l-5.457 8.867-3.923-6.375 3.126-5.08c.112-.183.32-.287.527-.287.05 0 .1.008.15.02.038.01.077.023.113.04l5.43 2.716.006.002.01.008c.027.02.036.057.018.087zM9.86 8.592v5.783l5.14 2.57-5.14-8.353zm5.912 8.74l4.23 2.114c.552.275.998.083.998-.43V8.836l-5.228 8.495zM8.968 7.177l-5.303-2.65c-.096-.05-.187-.072-.27-.072-.232 0-.395.18-.395.482v11.45c0 .306.224.67.498.806l4.67 2.335c.12.06.235.087.338.087.29 0 .494-.225.494-.602V7.23c0-.022-.012-.042-.032-.052z"/></g></svg>;
				break;
			case 'path-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M17.19 16.38c-.676.338-1.536.6-2.317.6-.86 0-1.77-.027-2.577-.417v1.77c0 2.29-.99 3.672-3.385 3.672-.676 0-1.98-.21-2.37-.833V18.36c.365.415.938.702 1.51.702.626 0 .99-.364.99-.99V8.334h3.255v5.728c.546.182 1.094.26 1.666.26 2.084 0 3.83-1.406 3.83-3.594 0-3.41-2.944-4.738-5.964-4.738-2.813 0-5.73 1.64-5.73 4.764 0 .964.21 1.745.887 2.448l-2.37 2.03C3.313 13.803 3 12.657 3 10.756c0-4.947 4.114-7.76 8.722-7.76 4.66 0 9.322 2.396 9.322 7.604 0 2.603-1.535 4.686-3.853 5.78z"/></g></svg>;
				break;
			case 'path':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-4.08 11.19c-.383.192-.868.34-1.31.34-.484 0-1-.016-1.455-.236v1c0 1.294-.56 2.073-1.912 2.073-.383 0-1.118-.118-1.338-.47v-1.59c.206.236.53.398.853.398.353 0 .56-.205.56-.56v-5.5h1.838v3.236c.31.104.618.148.94.148 1.178 0 2.163-.794 2.163-2.03 0-1.927-1.663-2.676-3.37-2.676-1.588 0-3.235.926-3.235 2.69 0 .545.118.986.5 1.384l-1.34 1.147c-.734-.81-.91-1.456-.91-2.53 0-2.794 2.323-4.382 4.926-4.382 2.634 0 5.266 1.354 5.266 4.295 0 1.472-.868 2.65-2.176 3.266z"/></g></svg>;
				break;
			case 'pinterest-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12.29 2C6.616 2 3.605 5.648 3.605 9.622c0 1.846 1.025 4.146 2.666 4.878.25.11.38.063.44-.17.043-.174.266-1.028.364-1.427.032-.128.017-.237-.09-.362-.54-.63-.976-1.79-.976-2.872 0-2.777 2.194-5.464 5.933-5.464 3.23 0 5.49 2.108 5.49 5.122 0 3.407-1.794 5.768-4.13 5.768-1.29 0-2.257-1.02-1.948-2.277.372-1.495 1.09-3.112 1.09-4.19 0-.968-.543-1.776-1.664-1.776-1.318 0-2.378 1.31-2.378 3.06 0 1.115.394 1.87.394 1.87s-1.302 5.278-1.54 6.26c-.405 1.666.053 4.368.094 4.604.02.126.167.17.25.063.13-.165 1.7-2.42 2.142-4.05.158-.59.817-2.996.817-2.996.43.785 1.68 1.447 3.012 1.447 3.963 0 6.822-3.494 6.822-7.833C20.394 5.112 16.85 2 12.29 2"/></g></svg>;
				break;
			case 'pinterest':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.087-.79-.166-2.005.035-2.87.183-.78 1.174-4.97 1.174-4.97s-.3-.6-.3-1.484c0-1.39.807-2.43 1.81-2.43.853 0 1.265.642 1.265 1.41 0 .858-.547 2.14-.83 3.33-.235.995.5 1.806 1.482 1.806 1.777 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.067-4.177-4.067-2.846 0-4.516 2.134-4.516 4.34 0 .86.33 1.78.744 2.282.082.098.094.185.07.286-.078.316-.247.995-.28 1.134-.044.183-.145.222-.334.134-1.25-.58-2.03-2.407-2.03-3.874 0-3.154 2.292-6.05 6.607-6.05 3.47 0 6.166 2.47 6.166 5.774 0 3.446-2.173 6.22-5.19 6.22-1.012 0-1.965-.526-2.29-1.148l-.624 2.377c-.226.87-.835 1.957-1.243 2.622.935.29 1.93.445 2.96.445 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></g></svg>;
				break;
			case 'pocket':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21.927 4.194C21.667 3.48 20.982 3 20.222 3H3.84c-.748 0-1.43.47-1.695 1.17-.08.208-.12.424-.12.644v6.035l.07 1.2c.29 2.73 1.707 5.114 3.9 6.777l.118.09.025.017c1.175.86 2.49 1.44 3.91 1.727.655.133 1.325.2 1.99.2.616 0 1.233-.056 1.84-.17.073-.013.145-.027.22-.043.02-.004.04-.012.063-.023 1.36-.297 2.622-.864 3.754-1.69l.025-.02c.04-.028.08-.057.118-.088 2.192-1.664 3.61-4.05 3.898-6.778l.07-1.2V4.814c0-.21-.026-.416-.1-.62zm-4.235 6.287l-4.704 4.513c-.266.254-.608.382-.95.382-.34 0-.683-.128-.948-.382L6.385 10.48c-.547-.523-.565-1.39-.04-1.938.523-.547 1.39-.565 1.938-.04l3.756 3.6 3.754-3.6c.547-.524 1.415-.506 1.94.04.522.547.504 1.414-.042 1.94z"/></g></svg>;
				break;
			case 'polldaddy':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.487 2 2 6.487 2 12c0 5.514 4.487 10 10 10 5.514 0 10-4.486 10-10 0-5.513-4.486-10-10-10zm.99 1.68c2.362.084 4.658 1.25 6.198 3.136.283.334.54.693.774 1.067-1.427-1.79-3.627-2.94-6.094-2.94-2.357 0-4.467 1.047-5.896 2.703-.006.003-.01.01-.016.014l-.152.16-.03.03C6.76 8.948 6.14 10.41 6.14 12.017c0 3.387 2.756 6.143 6.143 6.143.57 0 1.123-.082 1.65-.228-1.85.84-4.132.747-5.927-.324-1.84-1.09-3.17-3.11-3.433-5.313-.294-2.205.483-4.548 2.117-6.158 1.604-1.637 3.944-2.574 6.3-2.457zm3.374 8.52c-.05-2.025-1.587-3.89-3.544-4.175-1.927-.343-3.917.857-4.45 2.66-.272.884-.19 1.848.2 2.654.39.8 1.066 1.45 1.893 1.758 1.664.654 3.63-.27 4.173-1.863.593-1.58-.396-3.423-1.94-3.776-1.52-.408-3.16.756-3.204 2.242-.05.716.253 1.42.753 1.88.5.475 1.23.666 1.87.528.647-.127 1.2-.557 1.47-1.134.27-.576.22-1.256-.087-1.767-.297-.514-.86-.864-1.43-.882-.57-.03-1.12.246-1.436.68-.326.435-.38 1.025-.18 1.488.004.01.01.02.016.03.193.634.774 1.1 1.467 1.117-.33.04-.674-.02-.97-.183-.466-.244-.81-.747-.893-1.29-.083-.544.09-1.137.5-1.54.398-.412.988-.65 1.58-.605.592.04 1.158.35 1.516.86.364.495.51 1.155.383 1.772-.115.62-.528 1.174-1.092 1.514-.557.34-1.264.455-1.914.287-.65-.16-1.226-.606-1.584-1.206-.36-.594-.49-1.337-.34-2.03.142-.7.572-1.32 1.175-1.753 1.193-.883 3.056-.75 4.106.41 1.107 1.1 1.328 3.028.407 4.372-.877 1.375-2.74 2.085-4.374 1.593-1.64-.45-2.913-2.08-3.03-3.853-.07-.884.13-1.797.582-2.577C8.43 8.636 9.14 7.98 9.957 7.55c1.64-.88 3.816-.742 5.35.425 1.25.924 2.082 2.42 2.235 4.01v.03c0 2.9-2.358 5.26-5.26 5.26-.686 0-1.343-.135-1.946-.377.866.207 1.777.176 2.613-.08 1.005-.303 1.893-.926 2.513-1.75.618-.828.95-1.86.9-2.87zM12 21.112c-5.024 0-9.11-4.087-9.11-9.113 0-4.79 3.712-8.723 8.41-9.08-.133.015-.266.035-.397.06-2.644.452-5.017 2.105-6.32 4.408-1.31 2.3-1.39 5.19-.3 7.527 1.056 2.34 3.253 4.156 5.776 4.553 2.496.44 5.132-.483 6.786-2.3 1.72-1.798 2.27-4.53 1.486-6.797-.583-1.81-1.976-3.33-3.7-4.045 3.417.594 6.174 3.22 6.174 6.78 0 1.005-.24 2.02-.657 2.967-1.5 2.984-4.587 5.04-8.15 5.04z"/></g></svg>;
				break;
			case 'print':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M9 16h6v2H9v-2zm13 1h-3v3c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2v-3H2V9c0-1.105.895-2 2-2h1V5c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v2h1c1.105 0 2 .895 2 2v8zM7 7h10V5H7v2zm10 7H7v6h10v-6zm3-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></g></svg>;
				break;
			case 'reddit':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"/></g></svg>;
				break;
			case 'share':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M18 16c-.788 0-1.5.31-2.034.807L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.048 4.118c-.053.223-.088.453-.088.692 0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3z"/></g></svg>;
				break;
			case 'skype':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M10.113 2.7l.1-.02c.033.016.066.032.098.05l-.197-.03zM2.72 10.222c-.006.034-.01.07-.017.103.018.032.033.064.05.095l-.033-.197zm18.555 3.548c.007-.034.01-.07.018-.105-.018-.03-.033-.064-.052-.095l.035.2zm-7.712 7.43c.032.018.065.034.096.052.035-.006.07-.01.104-.017l-.2-.036zM22 16.385c0 1.494-.58 2.898-1.637 3.953-1.056 1.056-2.46 1.636-3.953 1.636-.967 0-1.914-.25-2.75-.725l.105-.016-.202-.035c.032.018.065.034.096.052-.544.096-1.1.147-1.655.147-1.275 0-2.512-.25-3.676-.744-1.126-.474-2.136-1.156-3.003-2.023-.867-.867-1.548-1.877-2.023-3.002-.493-1.163-.743-2.4-.743-3.675 0-.546.05-1.093.143-1.628.018.032.033.064.05.095l-.033-.2c-.006.035-.01.07-.017.104C2.243 9.5 2 8.566 2 7.616c0-1.494.582-2.9 1.637-3.954 1.056-1.056 2.46-1.638 3.953-1.638.915 0 1.818.228 2.622.655-.033.006-.067.012-.1.02l.2.03c-.033-.018-.067-.034-.1-.05.003 0 .004-.002.005-.002.586-.112 1.187-.17 1.788-.17 1.275 0 2.512.25 3.676.743 1.125.477 2.136 1.157 3.003 2.025.868.867 1.548 1.877 2.024 3.002.493 1.164.743 2.4.743 3.676 0 .575-.054 1.15-.157 1.712-.018-.03-.033-.064-.052-.095l.035.2c.007-.034.01-.07.018-.105.46.83.707 1.767.707 2.72zm-5.183-2.248c0-1.33-.613-2.743-3.033-3.282l-2.21-.49c-.84-.192-1.806-.444-1.806-1.237 0-.795.68-1.35 1.903-1.35 2.47 0 2.244 1.697 3.47 1.697.644 0 1.208-.38 1.208-1.03 0-1.522-2.435-2.664-4.5-2.664-2.242 0-4.63.952-4.63 3.488 0 1.222.436 2.522 2.84 3.124l2.983.745c.904.222 1.13.73 1.13 1.188 0 .762-.758 1.507-2.13 1.507-2.678 0-2.306-2.062-3.742-2.062-.645 0-1.113.444-1.113 1.078 0 1.237 1.5 2.887 4.856 2.887 3.196 0 4.777-1.538 4.777-3.6z"/></g></svg>;
				break;
			case 'spotify':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.206.857M17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325"/></g></svg>;
				break;
			case 'squarespace':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20.87 9.27c-1.507-1.506-3.95-1.506-5.458 0l-6.14 6.142c-.378.377-.378.988 0 1.364.376.377.987.377 1.364 0l6.14-6.14c.754-.754 1.976-.754 2.73 0 .753.754.753 1.975 0 2.73l-6.023 6.02c.754.755 1.975.755 2.73 0l4.657-4.657c1.507-1.508 1.507-3.952 0-5.46zm-2.047 2.048c-.377-.377-.988-.377-1.365 0l-6.14 6.14c-.754.754-1.976.754-2.73 0-.376-.377-.987-.377-1.363 0-.377.377-.377.988 0 1.364 1.507 1.507 3.95 1.507 5.458 0l6.14-6.14c.376-.376.376-.988 0-1.364zm-2.047-6.14c-1.507-1.51-3.95-1.51-5.458 0l-6.14 6.14c-.377.376-.377.987 0 1.363.377.378.988.378 1.364 0l6.14-6.14c.755-.753 1.976-.753 2.73 0 .377.378.988.378 1.365 0 .376-.375.376-.986 0-1.363zM14.73 7.223c-.378-.377-.99-.377-1.365 0l-6.14 6.14c-.754.755-1.976.755-2.73 0-.753-.752-.753-1.974 0-2.728l6.023-6.022c-.754-.754-1.976-.754-2.73 0L3.13 9.27c-1.507 1.51-1.507 3.952 0 5.46 1.507 1.506 3.95 1.506 5.458 0l6.14-6.142c.378-.376.378-.987 0-1.364z"/></g></svg>;
				break;
			case 'stumbleupon':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 4.294c-2.47 0-4.47 2.002-4.47 4.47v6.354c0 .585-.475 1.06-1.06 1.06-.585 0-1.06-.475-1.06-1.06v-2.824H2v2.94c0 2.47 2.002 4.472 4.47 4.472 2.47 0 4.472-2.002 4.472-4.47v-6.47c0-.586.474-1.06 1.06-1.06s1.058.474 1.058 1.06v1.293l1.412.646 2-.647V8.764c0-2.47-2.003-4.47-4.472-4.47zm1.06 8.06v2.88c0 2.47 2 4.472 4.47 4.472S22 17.704 22 15.236V12.41h-3.412v2.825c0 .585-.474 1.06-1.06 1.06-.584 0-1.058-.475-1.058-1.06v-2.882l-2 .647-1.41-.647z"/></g></svg>;
				break;
			case 'telegram':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.08 14.757s-.25.625-.936.325l-2.54-1.95-1.63 1.487s-.128.095-.267.035c0 0-.12-.01-.27-.486-.15-.476-.91-2.973-.91-2.973L6 12.35s-.387-.138-.425-.44c-.037-.3.437-.46.437-.46l10.03-3.935s.824-.362.824.238l-1.786 9.004z"/></g></svg>;
				break;
			case 'tumblr-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16.75 17.396c-.358.17-1.042.32-1.552.332-1.54.04-1.837-1.08-1.85-1.896V9.847h3.86v-2.91h-3.846V2.04h-2.817c-.046 0-.127.04-.138.143-.165 1.5-.867 4.13-3.783 5.18V9.85H8.57v6.282c0 2.15 1.586 5.206 5.774 5.135 1.413-.024 2.982-.616 3.33-1.126l-.925-2.744z"/></g></svg>;
				break;
			case 'tumblr':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-5.57 14.265c-2.445.042-3.37-1.742-3.37-2.998V10.6H8.922V9.15c1.703-.615 2.113-2.15 2.21-3.026.006-.06.053-.084.08-.084h1.645V8.9h2.246v1.7H12.85v3.495c.008.476.182 1.13 1.08 1.107.3-.008.698-.094.907-.194l.54 1.6c-.205.297-1.12.642-1.946.657z"/></g></svg>;
				break;
			case 'twitch':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M16.5 8.09h-1.637V13H16.5V8.09zm-4.5 0h-1.637V13H12V8.09zM4.228 3.177L3 6.45v13.093h4.5V22h2.455l2.454-2.456h3.68L21 14.636V3.178H4.228zm15.136 10.638L16.5 16.68H12l-2.453 2.454V16.68H5.863V4.814h13.5v9.002z"/></g></svg>;
				break;
			case 'twitter-alt':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"/></g></svg>;
				break;
			case 'twitter':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-2.534 6.71c.004.1.007.198.007.298 0 3.045-2.318 6.556-6.556 6.556-1.3 0-2.512-.38-3.532-1.035.18.02.364.03.55.03 1.08 0 2.073-.367 2.862-.985-1.008-.02-1.86-.685-2.152-1.6.14.027.285.04.433.04.21 0 .414-.027.607-.08-1.054-.212-1.848-1.143-1.848-2.26v-.028c.31.173.666.276 1.044.288-.617-.413-1.024-1.118-1.024-1.918 0-.422.114-.818.312-1.158 1.136 1.393 2.834 2.31 4.75 2.406-.04-.17-.06-.344-.06-.525 0-1.27 1.03-2.303 2.303-2.303.664 0 1.262.28 1.683.728.525-.103 1.018-.295 1.463-.56-.172.54-.537.99-1.013 1.276.466-.055.91-.18 1.323-.362-.31.46-.7.867-1.15 1.192z"/></g></svg>;
				break;
			case 'vimeo':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"/></g></svg>;
				break;
			case 'whatsapp':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2.048 22l1.406-5.136C2.587 15.36 2.13 13.656 2.13 11.91 2.134 6.445 6.58 2 12.043 2c2.65 0 5.14 1.033 7.01 2.906 1.872 1.873 2.902 4.363 2.9 7.01 0 5.465-4.447 9.91-9.91 9.91h-.003c-1.66 0-3.29-.416-4.737-1.205L2.048 22zm5.497-3.172l.3.18c1.266.75 2.715 1.147 4.194 1.147h.002c4.54 0 8.235-3.695 8.237-8.237 0-2.2-.856-4.27-2.41-5.828-1.556-1.557-3.624-2.415-5.825-2.416-4.544 0-8.24 3.695-8.24 8.237-.002 1.557.434 3.073 1.258 4.385l.196.312-.833 3.04 3.118-.82zm9.49-4.554c-.062-.103-.227-.165-.475-.29-.248-.123-1.465-.722-1.692-.805-.227-.084-.392-.125-.557.123-.164.248-.64.806-.783.97-.144.166-.29.187-.536.063-.247-.124-1.045-.385-1.99-1.23-.736-.656-1.233-1.467-1.378-1.714-.144-.248-.015-.382.11-.505.11-.11.247-.29.37-.434.124-.145.165-.248.248-.413.083-.165.04-.31-.02-.434-.063-.124-.558-1.343-.764-1.84-.202-.482-.407-.416-.56-.424-.143-.007-.31-.01-.474-.01-.165 0-.433.063-.66.31-.226.25-.866.848-.866 2.067 0 1.218.887 2.395 1.01 2.56.125.166 1.747 2.667 4.23 3.74.592.255 1.053.408 1.413.522.592.19 1.132.162 1.56.098.475-.07 1.464-.6 1.67-1.177.206-.58.206-1.075.145-1.18z"/></g></svg>;
				break;
			case 'wordpress':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.57zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.342c-.5 1.117-.78 2.354-.78 3.658zm15.06-.454c0-1.112-.398-1.88-.74-2.48-.456-.74-.883-1.368-.883-2.11 0-.825.627-1.595 1.51-1.595.04 0 .078.006.116.008-1.598-1.464-3.73-2.36-6.07-2.36-3.14 0-5.904 1.613-7.512 4.053.21.008.41.012.58.012.94 0 2.395-.114 2.395-.114.484-.028.54.684.057.74 0 0-.487.058-1.03.086l3.275 9.74 1.968-5.902-1.4-3.838c-.485-.028-.944-.085-.944-.085-.486-.03-.43-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.997c.456-1.17.684-2.137.684-2.907zm1.82-3.86c.04.286.06.593.06.924 0 .912-.17 1.938-.683 3.22l-2.746 7.94c2.672-1.558 4.47-4.454 4.47-7.77 0-1.564-.4-3.033-1.1-4.314zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></g></svg>;
				break;
			case 'xanga':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M9 9h6v6H9V9zM3 9h6V3H3v6zm12 0h6V3h-6v6zm0 12h6v-6h-6v6zM3 21h6v-6H3v6z"/></g></svg>;
				break;
			case 'youtube':
				svg = <svg className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"/></g></svg>;
				break;
		}
		return ( svg );
	}
} );
