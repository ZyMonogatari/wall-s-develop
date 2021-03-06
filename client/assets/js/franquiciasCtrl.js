angular.module('application').controller('franquiciasCtrl',
  ['$scope', '$window', 'NgMap', '$state', '$messageApi', 'FoundationApi', function($scope, $window, NgMap, $state, $messageApi, FoundationApi){
    document.title = "Franquicias - Wall´s Barbershop";    
    $scope.displaySesionN = 'none';
    $scope.mostrarMenu = function (){
            console.log($scope.displayMenu);

        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
    }
    $scope.message = {};
    $scope.send = function(){
        FoundationApi.publish('main-notifications', { title: 'Mensaje enviado', content: 'Se ha enviado su mensaje, muchas gracias'});
       //$messageApi.sendMessage($scope.message);
    }

    $scope.scroll = function(){
        var elementTop = document.getElementById('info-bounce').getBoundingClientRect().top;
        elementTop = elementTop + 100;
        window.scrollTo(0, elementTop);
    }

    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.logoTransform = '';
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';
    angular.element(document.querySelector('#bounceIn')).addClass('bounceIn2s');
    angular.element(document.querySelector('#bounceIn-button')).addClass('bounceIn3s');
    
   $window.onscroll = function(event){
        var delayTime = 100;
    if(document.getElementById('cabecera-walls-logo').getBoundingClientRect().top <= 0){
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
    if(window.scrollY <= 5){
        $scope.cabecera.position = 'absolute';
        angular.element(document.querySelector('#cabeceraDiv')).addClass('from-white');
        angular.element(document.querySelector('#cabeceraDivMovil')).addClass('from-white');
        $scope.cabecera.top = '3%';
        $scope.logoTransform = 'scale(1, 1)';
        $scope.cabecera.fontColor = 'white';
        $scope.iconColor = 'white';
        $scope.cabecera.source = '/assets/img/logo.png';
        $scope.$apply();
      }
    if((document.getElementById('fadeInLeft-logo').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#fadeInLeft-logo')).addClass('fadeInLeft1s');
    }
    if((document.getElementById('fadeIn-text').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#fadeIn-text')).addClass('fadeInLeft1s');
    }
    if((document.getElementById('single1').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#single1')).addClass('fadeInUp1s');
    }
    if((document.getElementById('single2').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#single2')).addClass('fadeInUp1s');
    }
    if((document.getElementById('single3').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#single3')).addClass('fadeInUp1s');
    }
    if((document.getElementById('fadeInLeftBig-title').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#fadeInLeftBig-title')).addClass('fadeInLeftBig2s');
    }
    if((document.getElementById('fadeInLeft-text').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#fadeInLeft-text')).addClass('fadeInLeft1s');
    }
    if((document.getElementById('single2').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#single2')).addClass('fadeInUp1s');
    }
    if((document.getElementById('single-area2').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#single-area2')).addClass('fadeInUp1s');
    }
    if((document.getElementById('info-bounce').getBoundingClientRect().top + delayTime) <= screen.height){
        angular.element(document.querySelector('#info-bounce')).addClass('bounceIn1s');
    }    
   }
}]);
