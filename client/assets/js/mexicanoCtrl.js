angular.module('application').controller('mexicanoCtrl',
  ['$scope', '$window', '$state', 'Facebook', function($scope, $window,$state, Facebook){
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'black';
    $scope.iconColor = 'white';
    $scope.user;
    $scope.terms = false;
    $scope.login = function() {
      console.log('loggeando');
      Facebook.login(function(response) {
        me();
      });
    };
    var me = function() {
      Facebook.api('/me?fields=id,name,email,age_range' , function(response) {
        $scope.user = response;
      });
    };
    $scope.displayTerms = function(){
        console.log('enter')

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
