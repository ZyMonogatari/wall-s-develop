angular.module('application').controller('galeriaCtrl',
  ['$scope', '$window', 'FoundationApi', '$sce', '$state', function($scope, $window, FoundationApi, $sce, $state){
    document.title = "Galería - Wall´s Barbershop";
    var galleryIndex;
    $scope.cabecera = {};
    $scope.displaySesionN = 'none';
    $scope.cabecera.source = '/assets/img/wallslogo-negro-min.png';
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'black';
    $scope.actualBody = 1;
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.iconColor = '#333';
    $scope.leftArrow = true;
    $scope.rightArrow = true;
    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
    }
    $scope.actualVideo = $sce.trustAsResourceUrl(
     'https://www.youtube.com/embed/yGQljG8kJvo?modestbranding=1&autohide=1&showinfo=0');
    $scope.changeVideo =  function(videoId){
      console.log(videoId);
      $scope.actualVideo = $sce.trustAsResourceUrl(
     'https://www.youtube.com/embed/' + videoId + '?modestbranding=1&autohide=1&showinfo=0');
    
    }
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    $scope.fullGallery = [
      '/assets/img/galeria/1.jpg',
      '/assets/img/galeria/3.jpg',
      '/assets/img/galeria/2.jpg',
      '/assets/img/galeria/9.jpg',
      '/assets/img/galeria/4.jpg',
      '/assets/img/galeria/7.jpg',
      '/assets/img/galeria/6.jpg',
      '/assets/img/galeria/13.jpg',
      '/assets/img/galeria/5.jpg',
      '/assets/img/galeria/8.jpg',
      '/assets/img/galeria/20.jpg',
      '/assets/img/galeria/21.jpg', 
      '/assets/img/galeria/12.jpg',
      '/assets/img/galeria/24.jpg',
      '/assets/img/galeria/10.jpg'
    ];
    $scope.gallery = {
      col1: [
        '/assets/img/galeria/1.jpg',
        '/assets/img/galeria/3.jpg',
        '/assets/img/galeria/2.jpg',
        '/assets/img/galeria/9.jpg',
        '/assets/img/galeria/4.jpg'
      ],
      col2: [
        '/assets/img/galeria/7.jpg',
        '/assets/img/galeria/6.jpg',
        '/assets/img/galeria/13.jpg',
        '/assets/img/galeria/5.jpg',
        '/assets/img/galeria/8.jpg'
      ],
      col3: [
        '/assets/img/galeria/20.jpg',
        '/assets/img/galeria/21.jpg', 
        '/assets/img/galeria/12.jpg',
        '/assets/img/galeria/24.jpg',
        '/assets/img/galeria/10.jpg'        
      ]
    };
    $scope.openModal = function(image){
      $scope.actualImage = image;
      $scope.rightArrow = true;
      $scope.leftArrow = true;
      galleryIndex = $scope.fullGallery.indexOf(image);
      if(galleryIndex == 0){
        $scope.leftArrow = false;
      }
      if(($scope.fullGallery.length - 1) == galleryIndex){
        $scope.rightArrow = false;
      }
    }
      
    $scope.prevImg = function(){
      $scope.rightArrow = true;
      if(galleryIndex > 0){
        galleryIndex--;
        $scope.actualImage = $scope.fullGallery[galleryIndex];
      }
      if(galleryIndex == 0){
        $scope.leftArrow = 0;
      }
    }

    $scope.nextImg = function(){
      $scope.leftArrow = true;
      if(galleryIndex < ($scope.fullGallery.length - 1)){
        galleryIndex++;
        $scope.actualImage = $scope.fullGallery[galleryIndex];
      }
      if(galleryIndex == ($scope.fullGallery.length - 1)){
        $scope.rightArrow = false;
      }
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
          $scope.logoTransform = 'scale(0.8, 0.8)';
          $scope.cabecera.top = '0px';
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
        $scope.$apply();
      }
    if((document.getElementById('cuerpo1').getBoundingClientRect().top -50)  <= 0 & (document.getElementById('cuerpo1').getBoundingClientRect().top) >= -1000){
      $scope.actualBody = 2;
      $scope.$apply();
    } else if((document.getElementById('cuerpo1').getBoundingClientRect().top -50)  >= 0){
      $scope.actualBody = 1;
      $scope.$apply();
    }
    if((document.getElementById('cuerpo2').getBoundingClientRect().top -50)  <= 0){
      $scope.actualBody = 3;
      $scope.$apply();
    }
    for(var i = 0; i < document.getElementsByClassName('galleryBox').length; i++){
      if((document.getElementsByClassName('galleryBox')[i].getBoundingClientRect().top + 50) <= screen.height & screen.width > 768){
          angular.element(document.getElementsByClassName('galleryBox')[i]).addClass('appear');
      }
    }
  }
}]);
