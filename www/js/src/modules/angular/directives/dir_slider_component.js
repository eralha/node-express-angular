define('module/angular/directives/dir_slider_component', [
  'module/angular/directives/main',
  'module/slider__component'
  ], function (module, sliderComp) {


    module.directive('dirSliderComponent', ['$rootScope', '$injector', '$compile', function($rootScope, $injector, $compile) {
      return {
        restrict: 'EA',
        compile: function(e, a){
            //console.log($(e).html(), arguments);
            return function(scope, elem, attrs) {

              var slider;

              function run(){

                /*
                  se ja existir um slider instanciado forçamos um trigger à window resize
                  isto vai fazer com que o componente de slide se actualize.
                */
                if(slider){
                  $(window).trigger('resize');
                }

                deferImagesLoad(elem, function(){
                  $(elem).removeClass('loading');

                  slider = new sliderComp(elem);
                  var sliderElem = $(elem).find($(elem).attr('data-slider'));
                  var slides = $(elem).find($(elem).attr('data-slides'));

                  if(Boolean(attrs.autoHeight) == true){
                    var h;

                    $(window).resize(function(){
                      h = 0;
                      $(slides).each(function(){
                        h = ($(this).outerHeight(true) > h) ? $(this).outerHeight(true) : h;
                      });
                    }).trigger('resize');

                    //console.log(h);
                    $(elem).height(h);
                  }
                });//end defer images load
              }//end run init

              /*
                se for dada instrução para esperar pelo carregamento de lista de paginas esperamos
                senão corre de imediato
              */
              if(attrs.waitPageList == 'true'){
                $rootScope.$on("pageListLoaded", function(e, attrs){
                  setTimeout(run, 100);
                });
              }else{
                run();
              }

              
            }//end return
        }
      };
    }]);


    return module;

});
