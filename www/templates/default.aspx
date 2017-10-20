  


  <h1>{{page.Titulo}}</h1>

  <div class="wrapper content__container content__container-gpe editor cf">
    <div class="container_12">

      <div class="grid_6" compile-html="Texto1"></div>
      <div class="grid_6" compile-html="Texto2"></div>

    </div>
  </div>


  <!-- REPEATER BLOCOS -->
  <div class="main__footer main__footer--interior">
    <div ng-repeat="bloco in page.Blocos">

      <div ng-bind-html="parseHtml(bloco.Texto)" ng-if="bloco.Ficheiro == ''"></div>
      
      <div class="main__footer_paralax" ng-if="bloco.Ficheiro != ''"
        data-bottom-top="background-position:center -150px;"
        data-bottom-bottom="background-position:center -300px;"
        style="background-image:url('{{bloco.Ficheiro}}');"></div>

    </div>
  </div>
  <!-- END REPEATER BLOCOS -->