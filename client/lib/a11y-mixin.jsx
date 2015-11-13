// a11y-mixin

var A11yMixin = {
	handleKeyDown: function(callback, e) {
		e.stopPropagation();
		if ( ( e.which === 32 || e.which === 13 ) && callback ) {
			callback( e );
		}
	},
};

module.exports = A11yMixin;