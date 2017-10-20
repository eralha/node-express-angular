define('module/angular/services/main', [
	'angular'
	], function () {


	var module = angular.module('app.Services', []);

        module.service('navService', ['$q', '$http', '$filter', '$state', 'dataService', function($q, $http, $filter, $state, dataService) {

        	var sup = this;

            return this;
        }]);

        module.service('langService', ['$q', '$http', '$filter', '$rootScope', function($q, $http, $filter, $rootScope) {

        	this.lang;
        	this.langData = {};
        	this.langDefer = $q.defer();
        	this.loading;
        	var sup = this;

        	$rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options){ 
			    if(String(toState.url).indexOf('/pt/') != -1){ sup.lang = 'pt'; }
			    if(String(toState.url).indexOf('/en/') != -1){ sup.lang = 'en'; }
			    if(String(toState.url).indexOf('/fr/') != -1){ sup.lang = 'fr'; }
			});

			this.loadLangData = function(){
				if(this.loading){
					return this.langDefer.promise;
				}

				this.loading = true;

            	$http.get('/ajax/language.aspx?v='+Math.random()*1000).success(function(data, status, headers, config) {
            	  sup.langData = data;
		          sup.langDefer.resolve(data);
		        });

            	return this.langDefer.promise;
			}
			this.loadLangData();

			this.setLangKey = function(key){
				this.lang = key;
			}

			this.translate = function(key){
				if(this.langData[this.lang] && this.langData[this.lang]){
					return this.langData[this.lang][key];
				}else{
					this.loadLangData();
				}
			}

            return this;
        }]);
	    

		module.service('dataService', ['$q', '$http', '$filter', 'langService', function($q, $http, $filter, langService) {

			this.data = {};
			this.menuData;
			this.menuDefer = {};
			this.pageListDefer = {};
			this.pagesDefer = {};
			this.loading = false;
			sup = this;

            return this;
        }]);


    return module;

});
