(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/vaultpress/vp-dash/react/dops-components/client/demo.js":[function(require,module,exports){
'use strict';

var jQuery = require('jquery'),
    React = require('react');

var Demo = React.createClass({ displayName: "Demo",
	render: function render() {
		return React.createElement("div", null, React.createElement("h1", null, "It works!"));
	}
});

jQuery(document).ready(function () {
	React.render(React.createElement(Demo, {}), document.getElementById('demo'));
});

},{"jquery":"jquery","react":"react"}]},{},["/home/vaultpress/vp-dash/react/dops-components/client/demo.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YXVsdHByZXNzL3ZwLWRhc2gvcmVhY3QvZG9wcy1jb21wb25lbnRzL2NsaWVudC9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUUsUUFBUSxDQUFFO0lBQy9CLEtBQUssR0FBRyxPQUFPLENBQUUsT0FBTyxDQUFFLENBQUM7O0FBRTVCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUUsRUFBQyxXQUFXLEVBQUUsTUFBTTtBQUNqRCxPQUFNLEVBQUUsa0JBQVc7QUFDbEIsU0FDQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQzlCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FDNUMsQ0FDQTtFQUNGO0NBQ0QsQ0FBRSxDQUFDOztBQUVKLE1BQU0sQ0FBRSxRQUFRLENBQUUsQ0FBQyxLQUFLLENBQUUsWUFBWTtBQUNyQyxNQUFLLENBQUMsTUFBTSxDQUNYLEtBQUssQ0FBQyxhQUFhLENBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUUsTUFBTSxDQUFFLENBQ2xFLENBQUM7Q0FDRixDQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGpRdWVyeSA9IHJlcXVpcmUoICdqcXVlcnknICksXG5cdFJlYWN0ID0gcmVxdWlyZSggJ3JlYWN0JyApO1xuXG52YXIgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKCB7ZGlzcGxheU5hbWU6IFwiRGVtb1wiLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJJdCB3b3JrcyFcIilcblx0XHRcdClcblx0XHQpO1xuXHR9XG59ICk7XG5cbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCkge1xuXHRSZWFjdC5yZW5kZXIoXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudCggRGVtbywge30gKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdkZW1vJyApXG5cdCk7XG59ICk7XG4iXX0=
