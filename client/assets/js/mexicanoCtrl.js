angular.module('application').controller('mexicanoCtrl',
  ['$scope', '$window', '$state', 'Facebook', '$dbApi', '$messageApi', function($scope, $window,$state, Facebook, $dbApi, $messageApi){
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'black';
    $scope.iconColor = 'white';
    $scope.concursante;
    $scope.dataReceived;
    $scope.registed;
    $scope.terms = false;
    $scope.mostrarMenu = function (){
        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    $scope.go = function(state){
        window.scrollTo(0, 0);
        $state.go(state);
    }
    $scope.login = function() {
      Facebook.login(function(response) {
        me();
      });
    };
    var me = function() {
      Facebook.api('/me?fields=id,name,email,age_range' , function(response) {
        $scope.concursante.name = response.name;
        $scope.concursante.email = response.email;
        $scope.concursante.age = response.age_range.min;
      });
    };
    $scope.displayTerms = function(){

      if(!$scope.terms){
        angular.element(document.querySelector('#terms-div')).removeClass('slide-down');
        angular.element(document.querySelector('#terms-div')).addClass('slide-up');
        $scope.terms = true;
      }else{
        angular.element(document.querySelector('#terms-div')).removeClass('slide-up');
        angular.element(document.querySelector('#terms-div')).addClass('slide-down');
        $scope.terms = false;
      }
    }

    $scope.sendData = function(){
      $scope.dataReceived = true;
      $dbApi.insertConcursantesMexicano($scope.concursante).then(function(response){
        console.log(response.data);
        if(response.data == 'exito'){
          $scope.registed = true;
        }
        else{
          $scope.registed = false;
        }
      });

    }

    $scope.sendToMail = function(){
      $messageApi.sendEmailMexicano($scope.concursante.email);
    }

    $window.onscroll = function(event){
    if(document.getElementById('cabecera-walls-logo').getBoundingClientRect().top <= 0){
          $scope.cabecera.position = 'fixed';
          $scope.cabecera.top = '0px';
          $scope.logoTransform = 'scale(0.8, 0.8)';
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
        $scope.$apply();
      }
    }
}]);
