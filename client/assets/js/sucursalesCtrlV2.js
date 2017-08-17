angular.module('application').controller('sucursalesCtrlV2',
  ['$scope', '$window', 'NgMap', '$interval', '$timeout', '$state', function($scope, $window, NgMap, $interval, $timeout, $state){
    document.title = "Sucursales- Wall´s Barbershop";
    $scope.cabecera = {};
    $scope.displaySesionN = 'none';
    $scope.sucursalInfoDiv;
    $scope.selectSucursal;
    $scope.mapCenter = "23.848025, -98.605808";
    var actualMap;
    NgMap.getMap().then(function(map) {
        console.log('map', map);
        actualMap = map;
    });
    $scope.pruebaClick= function(marker, id){
        console.log(id);
        actualMap.showInfoWindow('info', id);
    }
    $scope.hideInfoDiv = function(marker, param, key){

        console.log(marker);
        $scope.sucursalInfoDiv = false;
        if(param){
            $scope.showInfoDiv(key);
        }
    }
    $scope.showInfoDiv =function(key){
        if(key){
            //console.log('centrando')
            $scope.selectSucursal = $scope.sucursales[key];
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
    $scope.sucursales = {
        bonampak : {
            nombre: 'WALL´S BARBERSHOP BONAMPAK',
            shortName: 'BONAMPAK',
            direccion: 'SM 4 MZA 3 Plaza Atlantis, Av. Bonampak con Av. Kukulcán, Frente a Km 0, Entrada Zona Hotelera, Cancún, Quintana Roo, México.',
            telefono: '(998) 255 5569',
            whatsapp: '(998) 293 4177',
            y:'21.155173',
            x:'-86.821732',
            img: '/assets/img/sucursales/Bonampak.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        torres: {
            nombre: 'WALL´S LAS TORRES',
            shortName: 'TORRES',
            direccion: 'SM 510 MZA 9 LT 10 Y 12 Planta Alta, Plaza Bamboo, Cancún, Quintana Roo, México.',
            telefono: '(998) 251 0726',
            whatsapp: '(998) 293 4599',
            y: '21.137950',
            x: '-86.750601',
            img: '/assets/img/sucursales/LasTorres.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        kabah: {
            nombre: 'WALL´S BARBERSHOP KABAH',
            shortName: 'KABAH',
            direccion: 'SMZ 38 MZ 9 LT 1 al 15 Local #5 Av. Sabah, Plaza Real 10 (frente a UNID) Cancún, Quintana Roo, México.',
            telefono: '(998) 206 8098',
            whatsapp: '(998) 293 4931',
            y:'21.156974',
            x:'-86.847092',
            img: '/assets/img/sucursales/Kabah.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        chetumal : {
            nombre: 'WALLS CHETUMAL',
            shortName: 'CHETUMAL',
            direccion: 'Bulevar Bahía #301, entre Av. Rafael E. Melgar y Emiliano Zapata, Chetumal.',
            telefono: '(983) 129 2705',
            whatsapp: '(998) 293 4162',
            y:'18.505009',
            x:'-88.281526',
            img: '/assets/img/sucursales/Chetumal.jpg',
            fb: 'https://www.facebook.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallschetumal/'
        },
        isla: {
            nombre: 'WALL´S BARBERSHOP ISLA MUJERES',
            shortName: 'ISLA MUJERES',
            direccion: 'Nicolás Bravo S/N Centro, Isla Mujeres.',
            contacto: 'Tel.  y WhatsApp. ',
            telefono: '877 0496',
            whatsapp: '(998) 117 1259',
            y: '21.258206',
            x: '-86.749551',
            img: '/assets/img/sucursales/Isla.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopisla/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_isla/'
        },
        cozumel: {
            nombre: 'WALL´S BARBERSHOP COZUMEL',
            shortName: 'COZUMEL',
            direccion: 'Plaza Leones, 30 Avenida esquina con 1 sur cozumel, Quintana Roo, México.',
            telefono: null,
            whatsapp: '(987) 101 0138',
            y:'20.505757',
            x:'-86.945043',
            img: '/assets/img/sucursales/Cozumel.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopczm/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_cozumel/'
        },
        playaCentro: {
            nombre : 'WALL´S BARBERSHOP PLAYA DEL CARMEN CENTRO',
            shortName: 'PLAYA DEL CARMEN CENTRO',
            direccion: 'SM. 56 MZA. 1 Lote 55, Av. Prolongación, Luis Donaldo Colosio, Fracc. Santa Fé, Playa del Carmen, México.',
            contacto: 'WhatsApp. (984) 187 6258',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/playacentro.jpg',
            fb: 'https://www.facebook.com/wallsplayacolosio/?ref=br_rs', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/'
        }, 
        playa: {
            nombre: 'WALL´S BARBERSHOP PLAYA DEL CARMEN',
            shortName: 'PLAYA DEL CARMEN',
            direccion: '15 Avenida norte, entre calle 8 y calle 10, Colonia centro, plaza pelícanos, Playa del Carmen, Quintana Roo, México.',
            telefono: '(984) 803 3742',
            whatsapp: '(984) 142 3333',
            y: '20.627448',
            x: '-87.074087',
            img: '/assets/img/sucursales/playa.png',
            fb: 'https://www.facebook.com/wallsbarbershopplayadelcarmen/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/'
        },
        meridaPlazaArena: {
            nombre: 'WALL´S MERIDA PLAZA ARENA',
            shortName: 'PLAZA ARENA',
            direccion: 'Av. Cámara de comercio #3276 por 50 y 52 Local 2 Benito Juarez Norte',
            contacto: 'WhatsApp. 998 293 4349',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Arena.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/'
        },
        meridaGalerias: {
            nombre: 'WALL´S GALERIAS MERIDA',
            shortName: 'GALERIAS',
            direccion: 'Calle 3 #300 entre 24 y 60 Av. Revolución, Plaza Galerías Mérida, Yucatán, México.',
            contacto: 'WhatsApp. 998 293 4627',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Galerias.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/'
        },
        meridaUptown: {
            nombre: 'WALL´S BARBERSHOP MERIDA UPTOWN',
            shortName: 'UPTOWN',
            direccion: 'Centro comercial Uptown Mérida, Calle 17 # 104 -A por calle 10 y calle 32-A Col. Vista alegre',
            contacto: 'WhatsApp. 999 304 7933',
            position: '8.000000, -85.0000000',
            img: '/assets/img/sucursales/Uptown.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/'
        },
        campeche: {
            nombre: 'WALLS CAMPECHE',
            shortName: 'CAMPECHE',
            direccion: 'Av. López Portillo #28, Plaza Kaniste Local 1, San Francisco, Campeche.',
            contacto: 'Tel. (981) 812 7975 y WhatsApp. (981) 107 2609',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Campeche.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopcamp/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_campeche/'
        },
        veracruz: {
            nombre : 'WALL´S BARBERSHOP BOCA DEL RIO',
            shortName: 'VERACRUZ BOCA DEL RIO',
            direccion: 'Paseo costa verde #583 interior 107 Plaza Marlyn, fraccionamiento costa verde esquina jacarandás.',
            contacto: 'Tel. 688 4491  y WhatsApp. 229 110 47 41',
            y: '19.166767',
            x: '-96.117888',
            img: '/assets/img/sucursales/Boca.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopbocadelrio/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_boca/'
        },
        aguasCalientes: {
            nombre: 'WALL´S BARBERSHOP AGUASCALIENTES',
            shortName: 'AGUASCALIENTES',
            direccion: 'Plaza Santa Fe, local 38, Av. Universidad #811, Bosques del prado sur, Aguascalientes, México.',
            telefono: '449 288 1015',
            whatsapp: '449 196 1237',
            y: '21.910993',
            x: '-102.311137',
            img: '/assets/img/sucursales/Aguascalienstes.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopags/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_ags/'
        },
        tuxtla: {
            nombre: 'WALL´S BARBERSHOP TUXTLA GTZ',
            shortName: 'TUXTLA GTZ',
            direccion: 'Boulevard Doctor Belisario Domínguez, Plaza Santa Elena Tuxtla, Gtz, Chiapas, México.',
            contacto: 'Tel. (961) 121 4081 y WhatsApp. (961) 243 1583 ',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/walls-tuxtla.png',
            fb: 'https://www.facebook.com/wallstuxtlagtz/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_tuxtlagtz/'
        },
        queretaro: {
            nombre: 'WALL´S BARBERSHOP QUERETARO',
            shortName: 'QUERETARO',
            direccion: 'Calle Camino Real de Carretas #139, Lomas de Carreta, Querétaro, México.',
            contacto: 'Tel. (442) 403 2574 y WhatsApp. (442) 466 2384',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Queretaro.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopmilenio3/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_qro/'     
        },
        edoMx: {
            nombre: 'WALL´S BARBERSHOP SATÉLITE',
            shortName: 'SATÉLITE',
            direccion: 'Calle Manuel E Izaguirre #4 Local C. Ciudad Satélite Naucalpan de Juárez, Estado de México.',
            contacto: 'Tel. 2155 4934',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Satelite.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopsatelite/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_satelite/?hl=es'
        },
        cdMx: {
            nombre: 'WALL´S BARBERSHOP LA ROMA',
            shortName: 'LA ROMA',
            direccion: 'Calle Cozumel esquina con Puebla, Colonia La Roma, Ciudad de México.',
            telefono: '7045 7224',
            whatsapp: '(045) 998 293 4626',
            y: '19.420320',
            x: '-99.171246',
            img: '/assets/img/sucursales/LaRoma.jpg',
            fb: 'https://www.facebook.com/wallsbarbershoplaroma/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_laroma/'
        },
        guadalajara: {
                nombre: 'WALL´S BARBERSHOP GUADALAJARA',
                shortName: 'GUADALAJARA',
                direccion: 'Av. Aviación 3000, San Juan de Ocotán, 45019 Zapopan, Jal.Guadalajara (México)',
                contacto: 'Tel. (044) 332 066 34 88',
                position: '16.800000, -85.0000000',
                img: '/assets/img/sucursales/Guadalajara.jpg',
                fb: 'https://www.facebook.com/wallsbarbershopgdl/', 
                instagram : 'https://www.instagram.com/wallsbarbershop_gdl/'
            }
    };

    $scope.mostrarMenu = function (){
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
          $scope.cabecera.fontColor = 'black';
          $scope.iconColor = '#333';
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
    }
}]);