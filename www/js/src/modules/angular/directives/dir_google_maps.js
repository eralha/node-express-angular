define('module/angular/directives/dir_google_maps', ['module/angular/directives/main'], function (module) {


		module.directive('dirGoogleMaps', ['$rootScope', '$injector', function($rootScope, $injector) {
		  return {
		  	restrict: 'EA',
		    compile: function(e, a){
		        //console.log($(e).html(), arguments);
		        return function(scope, elem, attrs) {

		        	var styleArray = [
						  {
						    "featureType": "water",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "visibility": "on" },
						      { "color": "#d1d1d1" },
						      { "saturation": 1 }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    elementType: "labels",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "road.arterial",
						    elementType: "labels",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "transit.station",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.medical",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.school",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.attraction",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.place_of_worship",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.government",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "poi.business",
						    stylers: [
						      { visibility: "off" }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "color": "#ffffff" }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "color": "#cdcdcd" }
						    ]
						  },{
						    "featureType": "road.highway",
						    "elementType": "geometry.stroke",
						    "stylers": [
						      { "color": "#828282" }
						    ]
						  },{
						    "featureType": "landscape",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "color": "#e7e7e7" }
						    ]
						  },{
						    "featureType": "landscape.man_made",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "color": "#e7e7e7" }
						    ]
						  },{
						    "featureType": "poi",
						    "elementType": "geometry.fill",
						    "stylers": [
						      { "color": "#e1e3e3" }
						    ]
						  }
						];


						var map;
						var _center = new google.maps.LatLng(38.7529619,-9.1474742);
						var mapOptions = {
							zoom:14,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							center: _center
						}

						function init(){
							setTimeout(function(){
								var marker = new google.maps.Marker({icon:'/images/map_marker.png'});
									marker.setPosition(new google.maps.LatLng(38.7529619,-9.1474742));

								var map = new google.maps.Map($(elem).get(0), mapOptions);
									map.setOptions({styles: styleArray});

								marker.setMap(map);
							}, 100);
						}

						function scrollHandler(){
							var wsct = $(window).scrollTop();
			        		var eofst = $(elem).offset().top;
			        		var wH = $(window).height();

			        		if((eofst - wsct) < wH + 100 && !$(elem).hasClass('image_added')){
			        			$(elem).addClass('image_added');
			        			init();

			        			$(window).unbind('scroll', scrollHandler);
		        			}
						}

						$(window).scroll(scrollHandler).trigger('scroll');

							


		        }
		    }
		  };
		}]);


    return module;

});
