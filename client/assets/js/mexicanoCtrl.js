angular.module('application').controller('mexicanoCtrl',
  ['$scope', '$window', '$state', '$dbApi', 'FoundationApi', function($scope, $window,  $state, $dbApi, FoundationApi){
  	
	$scope.cabecera = {};
    /*
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'black';
    $scope.actualBody = 1;
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.iconColor = '#333';*/
    $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
     $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.cabecera.fontColor = 'black';
          $scope.iconColor = '#333';
          $scope.cabecera.background = 'rgba(255, 255, 255, .9)';
          

	$window.onscroll = function(event){
		if(document.getElementById('cabeceraDiv').getBoundingClientRect().top <= 0 & window.scrollY >= 50){
          $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.cabecera.fontColor = 'black';
          $scope.iconColor = '#333';
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
	        $scope.cabecera.fontColor = 'black';
	        $scope.iconColor = 'white';
	        $scope.$apply();
	      }
		
	}
 }]);