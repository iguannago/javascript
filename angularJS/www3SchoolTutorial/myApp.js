var app = angular.module('myApp', []);

app.directive("myCustomDirective", function() {
	return {
		template: "This is my custom directive"
	};
});
