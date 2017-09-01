angular.module('application').controller('serviciosCtrl',
  ['$scope', '$window', '$state', function($scope, $window, $state){
    document.title = "Servicios - Wall´s Barbershop";
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
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
	var cuerpoAbsoluteTop;
    var cuerpo1TopInicial = document.getElementById('cuerpo1-servicios').getBoundingClientRect().top;

  	$scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.actualBody = 0;
    $scope.cuerpo1 = {};
    $scope.cuerpo1.position = 'absolute';
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';
    $window.onscroll = function(event){
    	//console.log(document.getElementById('foto-fila-1').getBoundingClientRect().bottom + " - " + screen.height);
    	console.log(document.getElementById('cuerpo-absolute').getBoundingClientRect().bottom + " - " + document.getElementById('cuerpo-absolute').getBoundingClientRect().top);
    	//console.log(document.getElementById('cuerpo1-servicios').getBoundingClientRect());
    	if((document.getElementById('foto-fila-1').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-1')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('texto-fila-1').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-1')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('foto-fila-2').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-2')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('texto-fila-2').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-2')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('foto-fila-3').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-3')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('texto-fila-3').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-3')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('foto-fila-4').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-4')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('texto-fila-4').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-4')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('foto-fila-5').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-5')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('texto-fila-5').getBoundingClientRect().bottom - 700) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-5')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('borde').getBoundingClientRect().top) <= 0){
    		if(!cuerpoAbsoluteTop){
    			cuerpoAbsoluteTop = document.getElementById('cuerpo-absolute').getBoundingClientRect().top;
    		}
    		console.log("Top: " + cuerpoAbsoluteTop);
    		$scope.cuerpo1.position = 'fixed';
    		if(screen.width >= 800){
    			$scope.cuerpo1.top = '100px';
    		}
    		else{
    			$scope.cuerpo1.top = '0px';
    		}
	      	$scope.$apply();

    	}
    	if((cuerpoAbsoluteTop - 10) <= document.getElementById('cuerpo-absolute').getBoundingClientRect().top){
    		$scope.cuerpo1.position = 'absolute';
    		$scope.cuerpo1.top = cuerpo1TopInicial;
	      	$scope.$apply();
    	}
	    if(document.getElementById('cabecera-walls-logo').getBoundingClientRect().top <= 0){
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
	    if(window.scrollY >= 1600)
	    {
	    	$scope.actualBody = 1;
	    	$scope.cuerpo1.display = 'none'
	    	$scope.$apply();
	    } else if(window.scrollY <= 1600){
	    	$scope.actualBody = 0;
	    	$scope.cuerpo1.display = 'initial'
	    	$scope.$apply();
	    }
   }
}]);