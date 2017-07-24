angular.module('application').controller('homeCtrl',
  ['$scope', '$window', 'NgMap', '$state',  function($scope, $window, NgMap, $state){
    $scope.mostrarMenu = function (){
        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    $scope.displaySesionN = 'none';
    $scope.goMap = function(e, state){
      $state.go(state).then(function(){
           window.location.reload(true); 
        });
    }
    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
    }
    $scope.gotoRegist = function(){
        window.scrollTo(0,0);        
        $state.go('wallsCard').then(function(){
          var elementTop= document.getElementById('bounceInForm1s').getBoundingClientRect().top -300;
          window.scrollTo(0, elementTop);
        });
    }
     $scope.gotoLogin = function(){
        window.scrollTo(0,0);        
        $state.go('wallsCard').then(function(){
          var elementTop= document.getElementById('bounceInPointsForm1s').getBoundingClientRect().top +50;
          window.scrollTo(0, elementTop);
        });
    }
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    $scope.displaySesion = '0';
    $scope.displayNumber = '0';

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAHEDIPSO32Z4XxR71iW71oP29-B7Zh4Y";
    
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';

   
    if(screen.width <= 768){
      $scope.zoom = 5;
    }
    else{
      $scope.zoom = 6;
    }
    $scope.navBarBackground = 'red';
    var cuerpo2top = document.getElementById('cuerpo2').getBoundingClientRect().top;
    $scope.actualBody = 0;

    //static scenes values
    var cabeceraStaticWidth = 1440; 
    var body1StaticWidth = 1440;
    var fixedStaticWidth = 2000;

    //cabecera resize
    var cabeceraImageWidth = screen.width / cabeceraStaticWidth;
    var cabeceraHeight = 833 * cabeceraImageWidth;
    $scope.cabeceraHeight =  cabeceraHeight + 'px';
    //fondo-fixed resize

    var fixedImageWidth = screen.width / fixedStaticWidth;
    var fixedHeight = 1333 * fixedImageWidth;
    $scope.fixedHeight = fixedHeight + 'px';


    //body1 position & resize
    var body1ImageWidth = screen.width/ body1StaticWidth;
    var body1Height;
    if(screen.width <= 414){
      body1Height = 2300 * body1ImageWidth;
    }
    else{
      body1Height = 2000 * body1ImageWidth;
    }
    var body1Top = (cabeceraHeight/4) * 3;
    $scope.body1Top = body1Top + 'px';
    $scope.body1Height = body1Height + 'px';    
    
    //body 2 position & resize
    var body2Top = body1Height + cabeceraHeight + (cabeceraHeight/9) * 8;

    $scope.body2Top = body2Top + 'px';
    console.log($scope.body2Top);
    //body 3 position & resize
    var body3Top = body1Height + body2Top;
    $scope.body3Top = body3Top + 'px';

    /*
    //browser events
    $window.onresize = function(event) {
      $window.location.reload();
    }*/

   $window.onscroll = function(event){
    
    if(document.getElementById('cabeceraDiv').getBoundingClientRect().top <= 0 & window.scrollY >= 50){
          $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.cabecera.fontColor = 'black';
          $scope.iconColor = '#333';
          $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
            angular.element(document.querySelector('#cabeceraDiv')).addClass('to-white');
            angular.element(document.querySelector('#cabeceraDiv')).removeClass('from-white');
            angular.element(document.querySelector('#cabeceraDivMovil')).addClass('to-white');
            angular.element(document.querySelector('#cabeceraDivMovil')).removeClass('from-white');
          $scope.$apply();
        }
    if(window.scrollY <= 50){
        $scope.cabecera.position = 'absolute';
        angular.element(document.querySelector('#cabeceraDiv')).addClass('from-white');
        angular.element(document.querySelector('#cabeceraDivMovil')).addClass('from-white');
        $scope.cabecera.top = '5%';
        $scope.logoTransform = 'scale(1, 1)';
        $scope.cabecera.fontColor = 'white';
        $scope.iconColor = 'white';
        $scope.cabecera.source = '/assets/img/logo.png';
        $scope.$apply();
      }
    if(window.scrollY >= (body1Height/2)){
      $scope.actualBody = 1;
      $scope.$apply();
    } else if(window.scrollY <= (body1Height/2)){
      $scope.actualBody = 0;
      $scope.$apply();
    }
    if(window.scrollY >= cuerpo2top){
      $scope.actualBody = 2;
      console.log('cuerpo2');
      $scope.$apply();
    }
    else if(window.scrollY <= (cuerpo2top) & window.scrollY >= (body1Height/2) ){
      $scope.actualBody = 1;
      $scope.$apply();
    }
   }
}]);
