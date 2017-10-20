define('module/angular/directives/common', ['module/angular/directives/main'], function (module) {


		module.directive('eventClickTracker', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'A',
		  	priority: 10,
		    compile: function(e, a){
		        //console.log($(e).html(), arguments);
		        return function(scope, element, attrs) {

		        	if(attrs.eventClickTracker){
		        		$(element).click(function(){
		        			//console.log(attrs.eventType, attrs.eventName);
		        			ga('send', 'event', 'UI - EVENT', 'click', attrs.eventClickTracker);
		        		});
		        	}

		        }
		    }
		  };
		}]);

		module.directive('dirFbShare', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        return function(scope, elem, attrs) {
		        	$(elem).click(fbShare);
		        }
		    }
		  };
		}]);

		module.directive('dirTwShare', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        return function(scope, elem, attrs) {
		        	$(elem).click(twShare);
		        }
		    }
		  };
		}]);

		module.directive('dirMenuSelected', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        return function(scope, elem, attrs) {
		        	setTimeout(function(){
		        		var href = $(elem).attr('href');

			        	if(String(window.location.href).indexOf(href) != -1){
			        		$(elem).addClass('selected');
			        	}
		        	}, 200);
		        }
		    }
		  };
		}]);

		module.directive('linkExterno', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        return function(scope, element, attrs) {
		        	var href = attrs.linkExterno;

		        	if(href == 'True'){
		        		$(element).attr('target', '_blank');
		        	}

		        }
		    }
		  };
		}]);

		module.directive('dirLayer', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        //console.log($(e).html(), arguments);
		        return function(scope, elem, attrs) {

		        	$(elem).find('.c-layer__content, .container').click(function(e){
		        		e.stopPropagation();
		        	});

		        	$(elem).click(function(){
		        		$(elem).remove();
		        	});

		        }
		    }
		  };
		}]);


    return module;

});
