angular.module('application').controller('wallsCardCtrl',
  ['$scope', '$window', '$state', '$dbApi', 'FoundationApi', '$messageApi', function($scope, $window,  $state, $dbApi, FoundationApi, $messageApi){
  	$scope.screenHeight = '720px';
  	console.log($scope.screenHeight);
  	$scope.displaySesionN = 'none';
    angular.element(document.querySelector('#selloBounce2s')).addClass('bounceIn2s');
    angular.element(document.querySelector('#fadeInLeftIcon2s')).addClass('fadeInLeft2s');
    angular.element(document.querySelector('#fadeInRight2sIcon')).addClass('fadeInRight2s');
	$scope.step1 = true;
	$scope.cabecera = {};
    $scope.passMissMatch;
    $scope.codeMissMatch;
    $scope.passwordRecovery = {};
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
          

    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
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
    $scope.sendPasswordCode = function(){
    	$scope.passwordSpinner = true;
    	$scope.step1 = false;
    	$messageApi.sendPasswordCode($scope.clientData.cardMail).then(function(response){
    		$scope.passwordSpinner = false;
    		console.log(response);
    		if(response.data != 'error'){
    			$scope.passwordRecovery.code = response.data.code;
                $scope.passwordRecovery.card = response.data.num;
                $scope.passwordRecovery.email = response.data.email;
    			$scope.step2 = true;
    		}
    		else{
    			$scope.step3 = true;
    		}
    	});
    }
    $scope.passwordCompare = function(){

    	if($scope.passwordRecovery.pass != $scope.passwordRecovery.pass2){
            $scope.passwordRepit = 'red 2px solid';    
            $scope.passMissMatch = true;    
        }
        else{
            $scope.passwordRepit = '';
            $scope.passMissMatch = false;    
        }
    }

    $scope.changePassword = function(){
        if($scope.passwordRecovery.code != $scope.passwordRecovery.userCode){
            $scope.recoveryCode = 'red 2px solid';
            $scope.codeMissMatch = true;
        }
        else{
            $scope.recoveryCode = '';
            $scope.codeMissMatch = true;
        }
        if($scope.passwordRecovery.pass == $scope.passwordRecovery.pass2 & $scope.passwordRecovery.code == $scope.passwordRecovery.userCode){
            $dbApi.updatePass($scope.passwordRecovery);
            $scope.closeRecoveryPass();
            FoundationApi.publish('main-notifications', { title: 'Cambiado', content: 'contraseña cambiada correctamente', color: '#7A7A7A', image: './assets/img/icono-navajas-walls-min.png', autoclose : '3000'});
        }
    }
    $scope.closeRecoveryPass = function(){
        $scope.passwordRecovery = {};
        $scope.step1 = true;
        $scope.step2 = false;
        $scope.step3 = false;
        FoundationApi.publish('password-recovery-modal', 'close');
    }
    $scope.scrollToRegist = function(){
        var elementTop = document.getElementById('bounceInForm1s').getBoundingClientRect().top - 200;
        window.scrollTo(0, elementTop);
    }
     $scope.scrollToPoints = function(){
        var elementTop = document.getElementById('bounceInPointsForm1s').getBoundingClientRect().top;
        window.scrollTo(0, elementTop);
    }


	$scope.clientInfoError = false;
	$scope.clientData = {};
	$scope.regist = {};
	$scope.sucursales = [];
	$scope.clientInfo;
	$scope.loadSucursal = function(){
		switch($scope.regist.state){
			case '1':
				$scope.sucursales = [{nombre : 'WALL´S BARBERSHOP AGUASCALIENTES',
										id: '24'}];
				break;
			case '14':
				$scope.sucursales = [{nombre : 'WALL´S BARBERSHOP GUADALAJARA',
										id: '23'}];
				break;
			case '15':
				$scope.sucursales = [{nombre : 'WALL´S BARBERSHOP SATELITE',
										id: '25'}];
				break;
			case '22':
				$scope.sucursales = [{nombre : 'WALL´S BARBERSHOP QUERETARO' , id : '20'}];
				break;
			case '9':
				$scope.sucursales = [{nombre : 'WALL´S BARBERSHOP LA ROMA', id: '21'}];
				break;
			case '30':
				$scope.sucursales = [{nombre: 'WALL´S BARBERSHOP BOCA DEL RIO', id: '9'}];
				break;
			case '5':
				$scope.sucursales = [{nombre: 'WALL´S BARBERSHOP TUXTLA GTZ', id: '18'}];
				break;
			case '4':
				$scope.sucursales = [{nombre: 'WALLS CAMPECHE', id: '11'}];
				break;
			case '31':
				$scope.sucursales = [{nombre: 'WALL´S MERIDA PLAZA ARENA', id: '15'}, {nombre:'WALL´S GALERIAS MERIDA', id: '16'}, {nombre: 'WALL´S BARBERSHOP MERIDA UPTOWN', id: '17'}];
				break;
			case '23':
				$scope.sucursales = [{nombre: 'WALLS CHETUMAL', id: '14'}, {nombre: 'WALL´S BARBERSHOP PLAYA DEL CARMEN CENTRO', id: '13'}, 
				{nombre: 'WALL´S BARBERSHOP PLAYA DEL CARMEN', id: '7'}, {nombre: 'WALL´S BARBERSHOP COZUMEL', id: '5'},
				{nombre: 'WALL´S BARBERSHOP ISLA MUJERES', id: '10'}, {nombre: 'WALL´S BARBERSHOP BONAMPAK', id: '1'}, {nombre: 'WALL´S LAS TORRES', id: '2'},
				{nombre: 'WALL´S BARBERSHOP KABAH', id: '12'}];
				break;
		};
	}
	$scope.sendRegist = function(){
		$dbApi.registUser($scope.regist).then(function(response){
			if(response.data == 'exito'){
				FoundationApi.publish('main-notifications', { title: '¡Registrado!', content: 'Registrado correctamente', color: '#7A7A7A', image: './assets/img/icono-navajas-walls-min.png', autoclose : '3000'});
				$scope.regist = {};
				$scope.scrollToPoints();
			}else{
				FoundationApi.publish('main-notifications', { title: 'Error', content: 'cuenta ya registrada', color: '#7A7A7A', image: './assets/img/icono-navajas-walls-min.png', autoclose : '3000'});
			}
		});
	}
	$scope.getClientData = function(){
		$scope.clientInfo = null;
		$scope.clientInfoError = null;
		FoundationApi.publish('pointsModal', 'open');
		$dbApi.getClientData($scope.clientData).then(function(clientData){
			if(clientData.data){
				$scope.clientInfo = clientData.data;
			}
			else{
				$scope.clientInfoError = true;
			}
			
		});
	}

	$window.onscroll = function(event){
		/*if(document.getElementById('cabeceraDiv').getBoundingClientRect().top <= 0 & window.scrollY >= 50){
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
	      }*/
		if((document.getElementById('bounceIn1sMembrecia').getBoundingClientRect().top + 00) <= screen.height){
        	angular.element(document.querySelector('#bounceIn1sMembrecia')).addClass('bounceIn1s');
    	}
		if((document.getElementById('fadeInLeftIcons1s').getBoundingClientRect().top + 100) <= screen.height){
        	angular.element(document.querySelector('#fadeInLeftIcons1s')).addClass('fadeInLeft1s');
        	angular.element(document.querySelector('#fadeInRightIcons1s')).addClass('fadeInRight1s');
    	}
    	if((document.getElementById('bounceInCard1s').getBoundingClientRect().top + 100) <= screen.height){
        	angular.element(document.querySelector('#bounceInCard1s')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('bounceInRegistraText1s').getBoundingClientRect().top +100) <= screen.height){
        	angular.element(document.querySelector('#bounceInRegistraText1s')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('bounceInRegistraText1s').getBoundingClientRect().top +200) <= screen.height){
        	angular.element(document.querySelector('#bounceInForm1s')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('bounceInPointsForm1s').getBoundingClientRect().top +100) <= screen.height){
        	angular.element(document.querySelector('#bounceInPointsForm1s')).addClass('bounceIn1s');
    	}
    	if((document.getElementById('fadeInLeftBigText2s').getBoundingClientRect().top +00) <= screen.height){
        	angular.element(document.querySelector('#fadeInLeftBigText2s')).addClass('fadeInLeftBig2s');
    	}
	}
 }]);