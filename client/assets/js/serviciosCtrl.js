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

    $scope.servicios = {
        servicio1 : {
            id1: 'foto-fila-1',
            img1: '/assets/img/DSC_0011.JPG',
            idT1: 'texto-fila-1',
            title1: 'corte de cabellos adultos',
            text1: 'Con él damos forma a tu cabello y te creamos un estilo propio y personal. Incluye facial exfoliante para rostro, maquina de vapor, secado y peinado.',
            title2: 'corte de cabello niños', 
            text2: 'Ejecutado por nuestros barberos con productos 100% profesionales, ideal para el cuidado del cabello de los mas jóvenes. Incluye secado y peinado.', 
            id2: 'foto-fila-2',
            img2: '/assets/img/DSC_0004.JPG',
            idT2: 'texto-fila-2',
            title3: 'corte de barba',
            text3: 'Recorte, arreglo y delineado de barba con maquina, tijeras y navaja. Incluye facial exfoliante para rostro y máquina de vapor.',
            title4: 'corte y barba', 
            text4: 'Le damos forma a tu cabello. Delineamos, recortamos y afeitamos tu barba con maquina, tijeras y navaja. Incluye facial exfoliante para rostro y máquina de vapor.',
            display1: true, 
            display2: true
        },
        servicio2 : {
            id1: 'foto-fila-3',
            img1: '/assets/img/DSC_1007.JPG',
            idT1: 'texto-fila-3',
            title1: 'delineado general',
            text1: 'Recorte, arreglo y delineado general de tu barba o bigote. Uso de navaja, tijeras y maquina. Incluye facial exfoliante para rostro y máquina de vapor.',
            title2: 'delineado de ceja', 
            text2: 'Delineado de ceja con navaja. Incluye facial exfoliante para rostro y máquina de vapor.(Opcional)', 
            id2: 'foto-fila-4',
            img2: '/assets/img/IMG_4943.JPG',
            idT2: 'texto-fila-4',
            title3: 'delineado de barba',
            text3: 'Delineado de Barba con Navaja, tijeras y maquina.',
            title4: 'afeitado de cabeza', 
            text4: 'Toalla caliente, aceite pre- shave de producto especializado, afeitado de cabeza y bálsamo after shave de producto especializado. Incluye facial para rostro y máquina de vapor.',
            display1: true, 
            display2: true 
        },
        servicio3 : {
            id1: 'foto-fila-5',
            img1: '/assets/img/DSC_0032.JPG',
            idT1: 'texto-fila-5',
            title1: 'afeitado de barba',
            text1: 'Afeitado a navaja y tijeras. Preparación con producto especializado y máquina de vapor, after-shave de producto especializado y masaje exfoliante facial.',
            title2: 'lavado de cabello', 
            text2: 'Lavado con agua tibia para abrir la cutícula y permitir que el champú penetre, limpie y deje sus nutrientes.',
            display1: true, 
            display2: false 
        }    
    }


    $window.onscroll = function(event){
    	//console.log(document.getElementById('foto-fila-1').getBoundingClientRect().top  + " - " + screen.height);
    	//console.log(document.getElementById('cuerpo1-servicios').getBoundingClientRect());
    	if((document.getElementById('foto-fila-1').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-1')).addClass('padding-slide-to-right');
    	}
        if((document.getElementById('foto-fila-2-resp').getBoundingClientRect().top - 50) <= screen.height){
            angular.element(document.querySelector('#foto-fila-2-resp')).addClass('padding-slide-to-right');
        }
        if((document.getElementById('foto-fila-4-resp').getBoundingClientRect().top - 50) <= screen.height){
            angular.element(document.querySelector('#foto-fila-4-resp')).addClass('padding-slide-to-right');
        }
    	if((document.getElementById('texto-fila-1').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-1')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('foto-fila-2').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-2')).addClass('margin-slide-to-right');
    	}
    	if((document.getElementById('texto-fila-2').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-2')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('foto-fila-3').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-3')).addClass('padding-slide-to-right');
    	}
    	if((document.getElementById('texto-fila-3').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-3')).addClass('slide-right-to-left2s');
    	}
    	if((document.getElementById('foto-fila-4').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-4')).addClass('margin-slide-to-right');
    	}
    	if((document.getElementById('texto-fila-4').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-4')).addClass('slide-left-to-right2s');
    	}
    	if((document.getElementById('foto-fila-5').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#foto-fila-5')).addClass('padding-slide-to-right');
    	}
    	if((document.getElementById('texto-fila-5').getBoundingClientRect().top - 50) <= screen.height){
    		angular.element(document.querySelector('#texto-fila-5')).addClass('slide-right-to-left2s');
    	}
    	/*if((document.getElementById('borde').getBoundingClientRect().top) <= 0){
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
    	}*/
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

	    if(document.getElementById('cuerpo2-servicios').getBoundingClientRect().top < 200)
	    {
	    	$scope.actualBody = 1;
            $scope.$apply();
	    	
	    } else if(document.getElementById('cuerpo2-servicios').getBoundingClientRect().top >= 50){
	    	$scope.actualBody = 0;
            $scope.$apply();
	    	
	    }
   }
}]);