angular.module('application').controller('contactoCtrl',
  ['$scope', '$window', '$state', function($scope, $window,$state){
    document.title = "Contacto - Wall´s Barbershop";
    $scope.cabecera = {};
   $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
     $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.cabecera.fontColor = 'black';
          $scope.iconColor = '#333';
          $scope.cabecera.background = 'rgba(255, 255, 255, .9)';
    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
    }
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    $scope.mostrarMenu = function (){
            console.log($scope.displayMenu);

        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    $window.onscroll = function(event){
    	if(document.getElementById('cabeceraDiv').getBoundingClientRect().top <= 0 & window.scrollY >= 50){
          $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.iconColor = '#333';
          $scope.cabecera.fontColor = 'black';
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
        if((document.getElementById('contact-container-BounceIn').getBoundingClientRect().top + 00) <= screen.height){
        	angular.element(document.querySelector('#contact-container-BounceIn')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('contacto-form-bounceIn1s').getBoundingClientRect().top + 100) <= screen.height){
        	angular.element(document.querySelector('#contacto-form-bounceIn1s')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('contact-container2-bounceIn').getBoundingClientRect().top + 100) <= screen.height){
        	angular.element(document.querySelector('#contact-container2-bounceIn')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('titulo-fadeInLeftBig-2s').getBoundingClientRect().top + 00) <= screen.height){
        	angular.element(document.querySelector('#titulo-fadeInLeftBig-2s')).addClass('fadeInLeftBig2s');
    	}
    }
}]);
