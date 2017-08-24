angular.module('application').controller('homeCtrl',
  ['$scope', '$window', 'NgMap', '$state',  '$timeout',  function($scope, $window, NgMap, $state, $timeout){
    
    window.mobileAndTabletcheck = function() {
     var check = false;
     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
     return check;
   };
   $scope.sucursalInfoDiv;
    $scope.selectSucursal;
    $scope.mapCenter = "21.848025, -98.605808";
    $scope.telefonoMarginTop = null;
    $scope.mapSucursalDiv = '110px';
    $scope.whatsappMarginTop = null;
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

   $scope.mobile = window.mobileAndTabletcheck();
   console.log($scope.mobile);
    $scope.mostrarMenu = function (){
        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }

    $scope.displaySesionN = 'none';

    $scope.goMap = function(){
      console.log("click de sucursal")
      window.scrollTo(0,0);      
      $state.go('sucursales').then(function(){
        $window.location.reload();
        var top =  document.getElementById('map').getBoundingClientRect().top
        console.log(top);
          window.scrollTo(0, top);
         
        });
    }
    $scope.go = function(state){
        window.scrollTo(0, 0)
        if(state == 'sucursales'){
          $state.go(state).then(function(){
            $window.location.reload();
          })
        }else{
          $state.go(state);
        }
    }
    $scope.gotoRegist = function(){
        window.scrollTo(0,0);        
        $state.go('wallsCard').then(function(){
          var elementTop= document.getElementById('bounceInForm1s').getBoundingClientRect().top -300;
          window.scrollTo(0, elementTop);
        });
    }
     $scope.gotoLogin = function(){
        window.scrollTo(0,0);        
        $state.go('wallsCard').then(function(){
          var elementTop= document.getElementById('bounceInPointsForm1s').getBoundingClientRect().top +50;
          window.scrollTo(0, elementTop);
        });
    }
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    $scope.displaySesion = '0';
    $scope.displayNumber = '0';

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAHEDIPSO32Z4XxR71iW71oP29-B7Zh4Y";
    
    $scope.cabecera = {};
    $scope.cabecera.source = '/assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';
    
    $scope.sucursales = {
        bonampak : {
            nombre: 'WALL\'S BONAMPAK',
            shortName: 'BONAMPAK',
            direccion: 'SM 4 MZA 3 Plaza Atlantis, Av. Bonampak con Av. Kukulcán, Frente a Km 0, Entrada Zona Hotelera, Cancún, Quintana Roo, México.',
            telefono: '(998) 255 5569',
            whatsapp: '(998) 293 4177',
            y:'21.155173',
            x:'-86.821732',
            img: '/assets/img/sucursales/Bonampak.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/',
            twitter: null
        },
        torres: {
            nombre: 'WALL\'S LAS TORRES',
            shortName: 'TORRES',
            direccion: 'SM 510 MZA 9 LT 10 Y 12 Planta Alta, Plaza Bamboo, Cancún, Quintana Roo, México.',
            telefono: '(998) 251 0726',
            whatsapp: '(998) 293 4599',
            y: '21.137950',
            x: '-86.750601',
            img: '/assets/img/sucursales/LasTorres.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/',
            twitter: null
        },
        kabah: {
            nombre: 'WALL\'S KABAH',
            shortName: 'KABAH',
            direccion: 'SMZ 38 MZ 9 LT 1 al 15 Local #5 Av. Sabah, Plaza Real 10 (frente a UNID) Cancún, Quintana Roo, México.',
            telefono: '(998) 206 8098',
            whatsapp: '(998) 293 4931',
            y:'21.156974',
            x:'-86.847092',
            img: '/assets/img/sucursales/Kabah.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/',
            twitter: null
        },
        chetumal : {
            nombre: 'WALL\'S CHETUMAL',
            shortName: 'CHETUMAL',
            direccion: 'Bulevar Bahía #301, entre Av. Rafael E. Melgar y Emiliano Zapata, Chetumal.',
            telefono: '(983) 129 2705',
            whatsapp: '(998) 293 4162',
            y:'18.505009',
            x:'-88.281526',
            img: '/assets/img/sucursales/Chetumal.jpg',
            fb: 'https://www.facebook.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallschetumal/',
            twitter: null
        },
        isla: {
            nombre: 'WALL\'S ISLA MUJERES',
            shortName: 'ISLA MUJERES',
            direccion: 'Nicolás Bravo S/N Centro, Isla Mujeres.',
            contacto: 'Tel.  y WhatsApp. ',
            telefono: '877 0496',
            whatsapp: '(998) 117 1259',
            y: '21.258206',
            x: '-86.749551',
            img: '/assets/img/sucursales/Isla.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopisla/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_isla/',
            twitter: null
        },
        cozumel: {
            nombre: 'WALL\'S COZUMEL',
            shortName: 'COZUMEL',
            direccion: 'Plaza Leones, 30 Avenida esquina con 1 sur cozumel, Quintana Roo, México.',
            telefono: null,
            whatsapp: '(987) 101 0138',
            y:'20.505757',
            x:'-86.945043',
            img: '/assets/img/sucursales/Cozumel.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopczm/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_cozumel/',
            twitter: null
        },
        playaCentro: {
            nombre : 'WALL\'S PLAYA DEL CARMEN CENTRO',
            shortName: 'PLAYA DEL CARMEN CENTRO',
            direccion: 'SM. 56 MZA. 1 Lote 55, Av. Prolongación, Luis Donaldo Colosio, Fracc. Santa Fé, Playa del Carmen, México.',
            contacto: 'WhatsApp. (984) 187 6258',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/playacentro.jpg',
            fb: 'https://www.facebook.com/wallsplayacolosio/?ref=br_rs', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/',
            twitter: null
        }, 
        playa: {
            nombre: 'WALL\'S PLAYA DEL CARMEN',
            shortName: 'PLAYA DEL CARMEN',
            direccion: '15 Avenida norte, entre calle 8 y calle 10, Colonia centro, plaza pelícanos, Playa del Carmen, Quintana Roo, México.',
            telefono: '(984) 803 3742',
            whatsapp: '(984) 142 3333',
            y: '20.627448',
            x: '-87.074087',
            img: '/assets/img/sucursales/playa.png',
            fb: 'https://www.facebook.com/wallsbarbershopplayadelcarmen/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/',
            twitter: null
        },
        meridaPlazaArena: {
            nombre: 'WALL\'S MERIDA PLAZA ARENA',
            shortName: 'PLAZA ARENA',
            direccion: 'Av. Cámara de comercio #3276 por 50 y 52 Local 2 Benito Juarez Norte',
            contacto: 'WhatsApp. 998 293 4349',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Arena.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: null
        },
        meridaGalerias: {
            nombre: 'WALL\'S GALERIAS MERIDA',
            shortName: 'GALERIAS',
            direccion: 'Calle 3 #300 entre 24 y 60 Av. Revolución, Plaza Galerías Mérida, Yucatán, México.',
            contacto: 'WhatsApp. 998 293 4627',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Galerias.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: null
        },
        meridaUptown: {
            nombre: 'WALL\'S MERIDA UPTOWN',
            shortName: 'UPTOWN',
            direccion: 'Centro comercial Uptown Mérida, Calle 17 # 104 -A por calle 10 y calle 32-A Col. Vista alegre',
            contacto: 'WhatsApp. 999 304 7933',
            position: '8.000000, -85.0000000',
            img: '/assets/img/sucursales/Uptown.jpg',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: null
        },
        campeche: {
            nombre: 'WALL\'S CAMPECHE',
            shortName: 'CAMPECHE',
            direccion: 'Av. López Portillo #28, Plaza Kaniste Local 1, San Francisco, Campeche.',
            contacto: 'Tel. (981) 812 7975 y WhatsApp. (981) 107 2609',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Campeche.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopcamp/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_campeche/',
            twitter: null
        },
        veracruz: {
            nombre : 'WALL\'S BOCA DEL RIO',
            shortName: 'VERACRUZ BOCA DEL RIO',
            direccion: 'Paseo costa verde #583 interior 107 Plaza Marlyn, fraccionamiento costa verde esquina jacarandás.',
            telefono: '688 4491',
            whatsapp: '229 110 47 41',
            y: '19.166767',
            x: '-96.117888',
            img: '/assets/img/sucursales/Boca.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopbocadelrio/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_boca/',
            twitter: null
        },
        aguasCalientes: {
            nombre: 'WALL\'S AGUASCALIENTES',
            shortName: 'AGUASCALIENTES',
            direccion: 'Plaza Santa Fe, local 38, Av. Universidad #811, Bosques del prado sur, Aguascalientes, México.',
            telefono: '449 288 1015',
            whatsapp: '449 196 1237',
            y: '21.910993',
            x: '-102.311137',
            img: '/assets/img/sucursales/Aguascalienstes.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopags/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_ags/',
            twitter: null
        },
        tuxtla: {
            nombre: 'WALL\'S TUXTLA GTZ',
            shortName: 'TUXTLA GTZ',
            direccion: 'Boulevard Doctor Belisario Domínguez, Plaza Santa Elena Tuxtla, Gtz, Chiapas, México.',
            contacto: 'Tel. (961) 121 4081 y WhatsApp. (961) 243 1583 ',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/walls-tuxtla.png',
            fb: 'https://www.facebook.com/wallstuxtlagtz/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_tuxtlagtz/',
            twitter: null
        },
        queretaro: {
            nombre: 'WALL\'S QUERETARO',
            shortName: 'QUERETARO',
            direccion: 'Calle Camino Real de Carretas #139, Lomas de Carreta, Querétaro, México.',
            contacto: 'Tel. (442) 403 2574 y WhatsApp. (442) 466 2384',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Queretaro.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopmilenio3/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_qro/',
            twitter: null   
        },
        edoMx: {
            nombre: 'WALL\'S SATÉLITE',
            shortName: 'SATÉLITE',
            direccion: 'Calle Manuel E Izaguirre #4 Local C. Ciudad Satélite Naucalpan de Juárez, Estado de México.',
            contacto: 'Tel. 2155 4934',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Satelite.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopsatelite/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_satelite/?hl=es',
            twitter: null
        },
        cdMx: {
            nombre: 'WALL\'S LA ROMA',
            shortName: 'LA ROMA',
            direccion: 'Calle Cozumel esquina con Puebla, Colonia La Roma, Ciudad de México.',
            telefono: '7045 7224',
            whatsapp: '998 293 4626',
            y: '19.420320',
            x: '-99.171246',
            img: '/assets/img/sucursales/LaRoma.jpg',
            fb: 'https://www.facebook.com/wallsbarbershoplaroma/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_laroma/',
            twitter: null
        },
        guadalajara: {
            nombre: 'WALL\'S GUADALAJARA',
            shortName: 'GUADALAJARA',
            direccion: 'Av. Aviación 3000, San Juan de Ocotán, 45019 Zapopan, Jal.Guadalajara (México)',
            contacto: 'Tel. (044) 332 066 34 88',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Guadalajara.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopgdl/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_gdl/',
            twitter: null
        }
    };
    $scope.navBarBackground = 'red';
    var cuerpo2top = document.getElementById('cuerpo2').getBoundingClientRect().top;
    $scope.actualBody = 0;

    //static scenes values
    var cabeceraStaticWidth = 1440; 
    var body1StaticWidth = 1440;
    var fixedStaticWidth = 2000;

    //cabecera resize
    var cabeceraImageWidth = screen.width / cabeceraStaticWidth;
    var cabeceraHeight = 833 * cabeceraImageWidth;
    $scope.cabeceraHeight =  cabeceraHeight + 'px';
    //fondo-fixed resize

    var fixedImageWidth = screen.width / fixedStaticWidth;
    var fixedHeight = 1333 * fixedImageWidth;
    $scope.fixedHeight = fixedHeight + 'px';


    //body1 position & resize
    var body1ImageWidth = screen.width/ body1StaticWidth;
    var body1Height;
    if(screen.width <= 414){
      body1Height = 2300 * body1ImageWidth;
    }
    else{
      body1Height = 2000 * body1ImageWidth;
    }
    var body1Top = (cabeceraHeight/4) * 3;
    $scope.body1Top = body1Top + 'px';
    $scope.body1Height = body1Height + 'px';    
    
    //body 2 position & resize
    var body2Top = body1Height + cabeceraHeight + (cabeceraHeight/9) * 8;

    $scope.body2Top = body2Top + 'px';
    console.log($scope.body2Top);
    //body 3 position & resize
    var body3Top = body1Height + body2Top;
    $scope.body3Top = body3Top + 'px';

    /*
    //browser events
    $window.onresize = function(event) {
      $window.location.reload();
    }*/

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
    if(window.scrollY >= (body1Height/2)){
      $scope.actualBody = 1;
      $scope.$apply();
    } else if(window.scrollY <= (body1Height/2)){
      $scope.actualBody = 0;
      $scope.$apply();
    }
    if(window.scrollY >= cuerpo2top){
      $scope.actualBody = 2;
      console.log('cuerpo2');
      $scope.$apply();
    }
    else if(window.scrollY <= (cuerpo2top) & window.scrollY >= (body1Height/2) ){
      $scope.actualBody = 1;
      $scope.$apply();
    }
   }
}]);
