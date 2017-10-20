define('module/angular/app__main', [
	'lib/ngProgress',
	'lib/ngAnimate',
	'lib/ui.router',
	'module/angular/services/main',
	'module/angular/directives/common'
	], function () {


	var app = angular.module('app', ['app.Services', 'app.Directives', 'ui.router', 'ngAnimate', 'ngProgress']);

		/*
		app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

			$locationProvider.html5Mode({
			  enabled: true,
			  requireBase: false
			});

	        $stateProvider
			    .state('home', {
			      url: "/home/",
			      templateUrl: "/templates/home.aspx"
			    });

	    }]);
		*/
		


	    //generic controlers go here
	    app.controller('MainCtrll', ['$scope', '$rootScope', 'dataService', 'langService', 'ngProgressFactory', '$state', 
	    	function($scope, $rootScope, dataService, langService, ngProgressFactory, $state) {

	    	$scope.progressbar = ngProgressFactory.createInstance();

	    	$rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options){ 
				/* Muda a lingua quando o state muda
			    if(String(toState.name).indexOf('pt') != -1){ $scope.changeLang('pt'); }
			    if(String(toState.name).indexOf('en') != -1){ $scope.changeLang('en'); }
			    if(String(toState.name).indexOf('fr') != -1){ $scope.changeLang('fr'); }
			    */

			    $scope.progressbar.start();
			});

			$rootScope.$on('$stateChangeSuccess', 
			function(event, toState, toParams, fromState, fromParams, options){ 
			    $scope.progressbar.complete();
			});

	    	$scope.$watch('lang', function(){
	    		console.log($scope.lang);
	    		langService.setLangKey($scope.lang);
	    	});

	    	$scope.translate = function(key){
	    		return langService.translate(key);
	    	}

	    	$scope.changeLang = function(lang){
	    		$scope.lang = lang;
	    	}

	    	$scope.getLangURL = function(substate){
	    		return $state.href($scope.lang+'_'+substate);
	    	}

	    }]);
	    
    $('.js_loading').removeClass('js_loading');
    $('.angular-loading').removeClass('angular-loading');
    
    angular.bootstrap(document, ['app']);

    return app;

});
