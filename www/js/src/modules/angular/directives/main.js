define('module/angular/directives/main', [
	'angular'
	], function () {


	var module = angular.module('app.Directives', []);

		module.directive('compileHtml', ['$rootScope', '$injector', '$compile', function($rootScope, $injector, $compile) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        //console.log($(e).html(), arguments);
		        return function(scope, element, attrs) {

		        	console.log(attrs.compileHtml);
		        	
		        	var html = scope.page[attrs.compileHtml];
		        	var compiled = $compile(html)(scope);

						element.html(compiled);
		        }
		    }
		  };
		}]);


    return module;

});
