angular.module('application').controller('sucursalesCtrlV2',
  ['$scope', '$window', 'NgMap', '$interval', '$timeout', '$state', '$sharedData', function($scope, $window, NgMap, $interval, $timeout, $state, $sharedData){
    document.title = "Sucursales- Wall´s Barbershop";
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.logoTransform = '';
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';
    
    $scope.displaySesionN = 'none';
    $scope.sucursalInfoDiv;
    $scope.selectSucursal;
    $scope.mapSucursalDiv = '180px';
    $scope.mapCenter = "23.848025, -98.605808";
    $scope.telefonoMarginTop = null;
    $scope.whatsappMarginTop = null;

    $scope.selectSucursal = function(key){
        for (var k in $scope.sucursales) {
            $scope.sucursales[k].select = false;
        }
        if(!$scope.sucursales[key].select){
            $scope.sucursales[key].select = true;
        }
        else{
            $scope.sucursales[key].select = false;
        }
    }
    $scope.hideInfoDiv = function(marker, param, key){
        $scope.sucursalInfoDiv = false;
        if(param){
            $scope.showInfoDiv(key);
        }
    }
    $scope.showInfoDiv =function(key){
        if(key){
            //console.log('centrando')
            $scope.selectSucursal = $scope.sucursales[key];
            if(!$scope.selectSucursal.whatsapp){
                $scope.telefonoMarginTop = '7px'
            }
            else{
                $scope.telefonoMarginTop = null;
            }
            if(!$scope.selectSucursal.telefono){
                $scope.whatsappMarginTop = '7px'
            }
            else{
                $scope.whatsappMarginTop = null;
            }
            var x = parseFloat($scope.selectSucursal.x) ;
            console.log($scope.selectSucursal.x, x);
            //$scope.mapCenter = "0,0";

            $scope.mapCenter = $scope.selectSucursal.y + "," + x;
        }
        $timeout(function(){
            $scope.sucursalInfoDiv = true;
        }, 500);
        
    }
    var displayMenu = 'none';
    
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
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAHEDIPSO32Z4XxR71iW71oP29-B7Zh4Y";
    $scope.sucursales = $sharedData.getSucursales();

    $scope.mostrarMenu = function (){
        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    
    
    $window.onscroll = function(event){
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
    }
}]);