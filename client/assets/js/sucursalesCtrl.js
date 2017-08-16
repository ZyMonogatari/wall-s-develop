angular.module('application').controller('sucursalesCtrl',
  ['$scope', '$window', 'NgMap', '$interval', '$timeout', '$state', function($scope, $window, NgMap, $interval, $timeout, $state){
    document.title = "Sucursales- Wall´s Barbershop";
    $scope.cabecera = {};
    $scope.displaySesionN = 'none';
    $scope.sucursalInfoDiv = true;
    $scope.hideInfoDiv = function(param){
        $scope.sucursalInfoDiv = false;
        if(param){
            $scope.showInfoDiv();
        }
    }
    $scope.showInfoDiv =function(){
        $timeout(function(){
            $scope.sucursalInfoDiv = true;
        }, 500);
        
    }
    var displayMenu = 'none';
    var mapObject;
    var select;
    $scope.mobil;
    var noSucursals = false;
    $scope.barPosition = "10.000000, -73.0000000";
    if(screen.width <= 768){
        $scope.menuPosition = "10.000000, -98.7000000";
        $scope.mobil = true;

    }
    if(screen.width <= 414){
        $scope.menuPosition = "10.000000, -98.7000000";
        $scope.mobil = true;

    }
    if(screen.width > 768){
        $scope.menuPosition = "32.400000, -96.6000000";
        $scope.mobil = false;
    }
    $scope.showMapMenu = false;
    $scope.sucursal = false;
    $scope.estadoSelect;
    $scope.mapPosition = "23.848025, -98.605808";
    $scope.layout = {};
    $scope.layout.height = '600px';
    $scope.layout.width = '1100px';
    $scope.mapZoom = 5;
    $scope.displayMenu = displayMenu ;
    $scope.cabecera.source = './assets/img/logo.png';
    $scope.cabecera.position = 'absolute';
    $scope.displaySesion = 'none';
    $scope.displayNumber = 'none';
    $scope.cabecera.fontColor = 'white';
    $scope.iconColor = 'white';
    $scope.actualMap = 'Cancún, Quintana Roo';
    $scope.estado3 = {};
    $scope.estado3.width = '80px';
    $scope.estado3.height = "110px";
    $scope.estado3.position = "15.100000, -78.500000";
    $scope.estado4 = {};
    $scope.estado4.width = '100px';
    $scope.estado4.height = "65px";
    $scope.estado5 = {};
    $scope.estado5.width = '114px';
    $scope.estado5.height = "90px";
    $scope.estado5.position = "14.500000, -82.360000";
    $scope.estado6 = {};
    $scope.estado6.width = '118px';
    $scope.estado6.height = "43px";
    $scope.estado6.position = "13.600000, -85.050000";
    $scope.estado7 = {};
    $scope.estado7.width = '135px';
    $scope.estado7.height = "104px";
    $scope.estado7.position = "10.100000, -84.500000";
    $scope.estado8 = {};
    $scope.estado8.width = '182px';
    $scope.estado8.height = "155px";
    $scope.estado8.position = "13.50000, -90.800000";
    $scope.estado9 = {};
    $scope.estado9.width = '161px';
    $scope.estado9.height = "87px";
    $scope.estado9.position = "11.50000, -90.700000";
    $scope.estado10 = {};
    $scope.estado10.width = '75px';
    $scope.estado10.height = "93px";
    $scope.estado10.position = "14.10000, -93.440000";
    $scope.estado11 = {};
    $scope.estado11.width = '150px';
    $scope.estado11.height = "80px";
    $scope.estado11.position = "12.10000, -96.830000";
    $scope.estado12 = {};
    $scope.estado12.width = '15px';
    $scope.estado12.height = "16px";
    $scope.estado12.position = "15.70000, -95.400000";
    $scope.estado13 = {};
    $scope.estado13.width = '70px';
    $scope.estado13.height = "60px";
    $scope.estado13.position = "14.80000, -96.100000";
    $scope.estado14 = {};
    $scope.estado14.width = '27px';
    $scope.estado14.height = "22px";
    $scope.estado14.position = "14.80000, -95.200000";
    $scope.estado15 = {};
    $scope.estado15.width = '30px';
    $scope.estado15.height = "20px";
    $scope.estado15.position = "15.80000, -94.000000";
    $scope.estado16 = {};
    $scope.estado16.width = '69px';
    $scope.estado16.height = "53px";
    $scope.estado16.position = "16.30000, -95.150000";
    $scope.estado17 = {};
    $scope.estado17.width = '55px';
    $scope.estado17.height = "50px";
    $scope.estado17.position = "16.80000, -96.400000";
    $scope.estado18 = {};
    $scope.estado18.width = '83px';
    $scope.estado18.height = "60px";
    $scope.estado18.position = "16.70000, -98.200000";
    $scope.estado19 = {};
    $scope.estado19.width = '137px';
    $scope.estado19.height = "105px";
    $scope.estado19.position = "18.40000, -97.200000";
    $scope.estado20 = {};
    $scope.estado20.width = '128px';
    $scope.estado20.height = "74px";
    $scope.estado20.position = "14.20000, -99.800000";
    $scope.estado21 = {};
    $scope.estado21.width = '37px';
    $scope.estado21.height = "32px";
    $scope.estado21.position = "15.00000, -103.100000";
    $scope.estado22 = {};
    $scope.estado22.width = '140px';
    $scope.estado22.height = "90px";
    $scope.estado22.position = "15.50000, -102.3300000";
    $scope.estado23 = {};
    $scope.estado23.width = '128px';
    $scope.estado23.height = "127px";
    $scope.estado23.position = "18.20000, -100.7000000";
    $scope.estado24 = {};
    $scope.estado24.width = '35px';
    $scope.estado24.height = "27px";
    $scope.estado24.position = "18.90000, -100.4000000";
    $scope.estado25 = {};
    $scope.estado25.width = '40px';
    $scope.estado25.height = "42px";
    $scope.estado25.position = "18.50000, -102.5000000";
    $scope.estado25 = {};
    $scope.estado25.width = '40px';
    $scope.estado25.height = "42px";
    $scope.estado25.position = "18.50000, -102.5000000";
    $scope.estado26 = {};
    $scope.estado26.width = '63px';
    $scope.estado26.height = "73px";
    $scope.estado26.position = "17.70000, -104.0000000";
    $scope.estado27 = {};
    $scope.estado27.width = '153px';
    $scope.estado27.height = "137px";
    $scope.estado27.position = "20.00000, -104.0000000";
    $scope.estado28 = {};
    $scope.estado28.width = '123px';
    $scope.estado28.height = "137px";
    $scope.estado28.position = "20.30000, -107.9000000";
    $scope.estado29 = {};
    $scope.estado29.width = '126px';
    $scope.estado29.height = "173px";
    $scope.estado29.position = "22.60000, -99.7000000";
    $scope.estado30 = {};
    $scope.estado30.width = '190px';
    $scope.estado30.height = "205px";
    $scope.estado30.position = "24.10000, -105.9000000";
    $scope.estado31 = {};
    $scope.estado31.width = '199px';
    $scope.estado31.height = "218px";
    $scope.estado31.position = "25.20000, -113.7000000";
    $scope.estado32 = {};
    $scope.estado32.width = '174px';
    $scope.estado32.height = "169px";
    $scope.estado32.position = "20.80000, -114.8000000";
    $scope.estado33 = {};
    $scope.estado33.width = '115px';
    $scope.estado33.height = "163px";
    $scope.estado33.position = "27.60000, -118.2000000";
    $scope.estado34 = {};
    $scope.estado34.width = '94px';
    $scope.estado34.height = "146px";
    $scope.estado34.position = "21.00000, -96.7000000";
    $scope.estado35 = {};
    $scope.estado35.width = '92px';
    $scope.estado35.height = "164px";
    $scope.estado35.position = "19.90000, -94.9000000";

    
    NgMap.getMap().then(function(map){
        mapObject = map;
        console.log(map);
    });
    
    $scope.return = function(){
        $scope.sucursal = false;
        $scope.actualSucursal = null;
    }
    $scope.selectCity = function(city){
        $scope.sucursalesColumna1 = {};
        $scope.sucursalesColumna2 = {};
        switch (city){
            case 'cancun':
                $scope.sucursalesColumna1['bonampak'] = columna1aux.bonampak;
                $scope.sucursalesColumna1['torres'] = columna1aux.torres;
                $scope.sucursalesColumna2['kabah'] = columna1aux.kabah;
            break;
            case 'isla':
                $scope.sucursalesColumna1['isla'] = columna1aux.isla;
            break;
            case 'playa':
                $scope.sucursalesColumna1['playa'] = columna1aux.playa;
                $scope.sucursalesColumna2['playaCentro'] = columna1aux.playaCentro;
            break;
            case 'cozumel':
                $scope.sucursalesColumna1['cozumel'] = columna1aux.cozumel;
            break;
            case 'chetumal':
                $scope.sucursalesColumna1['chetumal'] = columna1aux.chetumal;
            break;
        }
    }
    $scope.restoreZoom = function(){
        $scope.sucursalesColumna1 = columna1aux;
        $scope.sucursalesColumna2 = columna2aux;
        selectAux = select;
        $scope.estadoSelect = null;
        select = null;
        $scope.disappearMap(selectAux);
        $scope.barPosition = "10.000000, -73.0000000";
        if(screen.width <= 768){
            $scope.menuPosition = "10.000000, -98.7000000";
      
        }
        else{
            $scope.menuPosition = "32.400000, -96.6000000";
        }
        $scope.showMapMenu = false;
        $scope.sucursal = false;
        $scope.estadoSelect;
        $scope.mapPosition = "23.848025, -98.605808";
        $scope.layout = {};
        $scope.layout.height = '600px';
        $scope.layout.width = '1100px';
        $scope.mapZoom = 5;
        $scope.displayMenu = displayMenu ;
        $scope.cabecera.source = './assets/img/logo.png';
        $scope.cabecera.position = 'absolute';
        $scope.displaySesion = 'none';
        $scope.displayNumber = 'none';
        $scope.cabecera.fontColor = 'white';
        $scope.iconColor = 'white';
        $scope.actualMap = 'Cancún, Quintana Roo';
        $scope.estado3 = {};
        $scope.estado3.width = '80px';
        $scope.estado3.height = "110px";
        $scope.estado3.position = "15.100000, -78.500000";
        $scope.estado4 = {};
        $scope.estado4.width = '100px';
        $scope.estado4.height = "65px";
        $scope.estado5 = {};
        $scope.estado5.width = '114px';
        $scope.estado5.height = "90px";
        $scope.estado5.position = "14.500000, -82.360000";
        $scope.estado6 = {};
        $scope.estado6.width = '118px';
        $scope.estado6.height = "43px";
        $scope.estado6.position = "13.600000, -85.050000";
        $scope.estado7 = {};
        $scope.estado7.width = '135px';
        $scope.estado7.height = "104px";
        $scope.estado7.position = "10.100000, -84.500000";
        $scope.estado8 = {};
        $scope.estado8.width = '182px';
        $scope.estado8.height = "155px";
        $scope.estado8.position = "13.50000, -90.800000";
        $scope.estado9 = {};
        $scope.estado9.width = '161px';
        $scope.estado9.height = "87px";
        $scope.estado9.position = "11.50000, -90.700000";
        $scope.estado10 = {};
        $scope.estado10.width = '75px';
        $scope.estado10.height = "93px";
        $scope.estado10.position = "14.10000, -93.440000";
        $scope.estado11 = {};
        $scope.estado11.width = '150px';
        $scope.estado11.height = "80px";
        $scope.estado11.position = "12.10000, -96.830000";
        $scope.estado12 = {};
        $scope.estado12.width = '15px';
        $scope.estado12.height = "16px";
        $scope.estado12.position = "15.70000, -95.400000";
        $scope.estado13 = {};
        $scope.estado13.width = '70px';
        $scope.estado13.height = "60px";
        $scope.estado13.position = "14.80000, -96.100000";
        $scope.estado14 = {};
        $scope.estado14.width = '27px';
        $scope.estado14.height = "22px";
        $scope.estado14.position = "14.80000, -95.200000";
        $scope.estado15 = {};
        $scope.estado15.width = '30px';
        $scope.estado15.height = "20px";
        $scope.estado15.position = "15.80000, -94.000000";
        $scope.estado16 = {};
        $scope.estado16.width = '69px';
        $scope.estado16.height = "53px";
        $scope.estado16.position = "16.30000, -95.150000";
        $scope.estado17 = {};
        $scope.estado17.width = '55px';
        $scope.estado17.height = "50px";
        $scope.estado17.position = "16.80000, -96.400000";
        $scope.estado18 = {};
        $scope.estado18.width = '83px';
        $scope.estado18.height = "60px";
        $scope.estado18.position = "16.70000, -98.200000";
        $scope.estado19 = {};
        $scope.estado19.width = '137px';
        $scope.estado19.height = "105px";
        $scope.estado19.position = "18.40000, -97.200000";
        $scope.estado20 = {};
        $scope.estado20.width = '128px';
        $scope.estado20.height = "74px";
        $scope.estado20.position = "14.20000, -99.800000";
        $scope.estado21 = {};
        $scope.estado21.width = '37px';
        $scope.estado21.height = "32px";
        $scope.estado21.position = "15.00000, -103.100000";
        $scope.estado22 = {};
        $scope.estado22.width = '140px';
        $scope.estado22.height = "90px";
        $scope.estado22.position = "15.50000, -102.3300000";
        $scope.estado23 = {};
        $scope.estado23.width = '128px';
        $scope.estado23.height = "127px";
        $scope.estado23.position = "18.20000, -100.7000000";
        $scope.estado24 = {};
        $scope.estado24.width = '35px';
        $scope.estado24.height = "27px";
        $scope.estado24.position = "18.90000, -100.4000000";
        $scope.estado25 = {};
        $scope.estado25.width = '40px';
        $scope.estado25.height = "42px";
        $scope.estado25.position = "18.50000, -102.5000000";
        $scope.estado25 = {};
        $scope.estado25.width = '40px';
        $scope.estado25.height = "42px";
        $scope.estado25.position = "18.50000, -102.5000000";
        $scope.estado26 = {};
        $scope.estado26.width = '63px';
        $scope.estado26.height = "73px";
        $scope.estado26.position = "17.70000, -104.0000000";
        $scope.estado27 = {};
        $scope.estado27.width = '153px';
        $scope.estado27.height = "137px";
        $scope.estado27.position = "20.00000, -104.0000000";
        $scope.estado28 = {};
        $scope.estado28.width = '123px';
        $scope.estado28.height = "137px";
        $scope.estado28.position = "20.30000, -107.9000000";
        $scope.estado29 = {};
        $scope.estado29.width = '126px';
        $scope.estado29.height = "173px";
        $scope.estado29.position = "22.60000, -99.7000000";
        $scope.estado30 = {};
        $scope.estado30.width = '190px';
        $scope.estado30.height = "205px";
        $scope.estado30.position = "24.10000, -105.9000000";
        $scope.estado31 = {};
        $scope.estado31.width = '199px';
        $scope.estado31.height = "218px";
        $scope.estado31.position = "25.20000, -113.7000000";
        $scope.estado32 = {};
        $scope.estado32.width = '174px';
        $scope.estado32.height = "169px";
        $scope.estado32.position = "20.80000, -114.8000000";
        $scope.estado33 = {};
        $scope.estado33.width = '115px';
        $scope.estado33.height = "163px";
        $scope.estado33.position = "27.60000, -118.2000000";
        $scope.estado34 = {};
        $scope.estado34.width = '94px';
        $scope.estado34.height = "146px";
        $scope.estado34.position = "21.00000, -96.7000000";
        $scope.estado35 = {};
        $scope.estado35.width = '92px';
        $scope.estado35.height = "164px";
        $scope.estado35.position = "19.90000, -94.9000000";
    }
    $scope.selectSucursal = function(sucursal){
        console.log(sucursal);
        $scope.sucursal= true;
        $scope.actualSucursal = sucursales[sucursal];
        console.log($scope.actualSucursal);
    }
    $scope.selectState = function(state){
        $scope.noSucursals = false;
       $scope.sucursalesColumna1 = {};
       $scope.sucursalesColumna2 = {};
       switch (state){
        case 3:
            $scope.sucursalesColumna1['bonampak'] = columna1aux.bonampak;
            $scope.sucursalesColumna1['torres'] = columna1aux.torres;
            $scope.sucursalesColumna1['isla'] = columna1aux.isla;
            $scope.sucursalesColumna1['playa'] = columna1aux.playa;
            $scope.sucursalesColumna2['playaCentro'] = columna1aux.playaCentro;
            $scope.sucursalesColumna2['kabah'] = columna1aux.kabah;
            $scope.sucursalesColumna2['cozumel'] = columna1aux.cozumel;
            $scope.sucursalesColumna2['chetumal'] = columna1aux.chetumal;
           break;
        case 4:
            $scope.sucursalesColumna1['meridaUptown'] = columna2aux.meridaUptown;
            $scope.sucursalesColumna1['meridaGalerias'] = columna2aux.meridaGalerias;
            $scope.sucursalesColumna2['meridaPlazaArena'] = columna2aux.meridaPlazaArena;
           break;
        case 5:
            $scope.sucursalesColumna1['campeche'] = columna1aux.campeche;
           break;
        case 7:
            $scope.sucursalesColumna1['tuxtla'] = columna2aux.tuxtla;
           break;
        case 8:
            $scope.sucursalesColumna1['veracruz'] = columna2aux.veracruz;
           break;
        case 12:
            $scope.sucursalesColumna1['cdMx'] = columna2aux.cdMx;
           break;
        case 13:
            $scope.sucursalesColumna1['edoMx'] = columna2aux.edoMx;
           break;
        case 17:
            $scope.sucursalesColumna1['queretaro'] = columna2aux.queretaro;
           break;
        case 22:
            $scope.sucursalesColumna1['guadalajara'] = columna2aux.guadalajara;
           break;
        case 24:
            $scope.sucursalesColumna1['aguasCalientes'] = columna2aux.aguasCalientes;
           break;
           default:
                $scope.noSucursals = true;
            break;
       }
       


    }
    $scope.changePosition = function(position, state){
        $scope.disappearMap(state);
        $scope.mapZoom = 6;
        $scope.mapPosition = position;
        var actualState = select;
        $scope.selectState(state);
        $scope.disappearMap(actualState);
        if(position === "15.100000, -79.000000"){
            $scope.barPosition = "10.000000, -65.0000000";
            $scope.menuPosition = "21.60000, -76.7000000";
        }
        if(position === '15.100000, -84.000000'){
            $scope.barPosition = "10.000000, -72.0000000";
            $scope.menuPosition = "21.60000, -83.7000000";
        }
        if(position === '15.100000, -88.000000'){
            $scope.barPosition = "10.000000, -75.0000000";
            $scope.menuPosition = "21.60000, -86.7000000";

        }
        if(position === '20.100000, -90.000000'){
            $scope.barPosition = "15.000000, -76.0000000";
            $scope.menuPosition = "26.30000, -87.7000000";

        }
        if(position === '18.100000, -90.000000'){
            $scope.barPosition = "12.000000, -76.0000000";
            $scope.menuPosition = "23.60000, -87.7000000";

        }
         if(position === '18.100000, -93.000000'){
            $scope.barPosition = "14.000000, -79.0000000";
            $scope.menuPosition = "25.40000, -90.8000000";

        }
         if(position === '20.100000, -93.000000'){
            $scope.barPosition = "16.000000, -79.0000000";
            $scope.menuPosition = "27.20000, -90.8000000";

        }
         if(position === '23.100000, -98.000000'){
            $scope.barPosition = "16.800000, -84.0000000";
            $scope.menuPosition = "28.00000, -95.8000000";
        }
        if(position === '26.100000, -98.000000'){
            $scope.barPosition = "20.000000, -84.0000000";
            $scope.menuPosition = "30.90000, -95.8000000";

        }
        if(position === '30.100000, -105.000000'){
            $scope.barPosition = "24.000000, -91.0000000";
            $scope.menuPosition = "34.50000, -102.8000000";

        }
        if(position === '25.100000, -105.000000'){
            $scope.barPosition = "19.000000, -91.0000000";
            $scope.menuPosition = "30.00000, -102.7000000";

        }
        if(position === '32.100000, -109.000000'){
            $scope.barPosition = "26.000000, -95.0000000";
            $scope.menuPosition = "36.30000, -106.8000000";
        }
         if(position === '25.100000, -90.000000'){
            $scope.barPosition = "19.000000, -76.0000000";
            $scope.menuPosition = "30.00000, -87.8000000";
        }
        if(position === '22.100000, -87.000000'){
            $scope.barPosition = "16.000000, -73.0000000";
            $scope.menuPosition = "27.20000, -84.8000000";
        }
        
        $scope.layout.height = '1250px';
        $scope.layout.width = '2200px';
        $scope.estado3.width = '153px';
        $scope.estado3.height = "225px";
        $scope.estado3.position = "15.200000, -78.500000";
        $scope.estado4.width = '192px';
        $scope.estado4.height = "139px";
        $scope.estado5.width = '232px';
        $scope.estado5.height = "172px";
        $scope.estado5.position = "14.800000, -82.40000";
        $scope.estado6.width = '220px';
        $scope.estado6.height = "73px";
        $scope.estado6.position = "14.000000, -85.050000";
        $scope.estado7.width = '265px';
        $scope.estado7.height = "200px";
        $scope.estado7.position = "10.500000, -84.500000";
        $scope.estado8.width = '361px';
        $scope.estado8.height = "310px";
        $scope.estado8.position = "13.70000, -90.800000";
        $scope.estado9.width = '325px';
        $scope.estado9.height = "175px";
        $scope.estado9.position = "11.60000, -90.800000";
        $scope.estado10.width = '156px';
        $scope.estado10.height = "175px";
        $scope.estado10.position = "14.40000, -93.480000";
        $scope.estado11.width = '292px';
        $scope.estado11.height = "146px";
        $scope.estado11.position = "12.40000, -96.870000";
        $scope.estado12.width = '23px';
        $scope.estado12.height = "23px";
        $scope.estado12.position = "15.90000, -95.450000";
        $scope.estado13.width = '132px';
        $scope.estado13.height = "112px";
        $scope.estado13.position = "15.00000, -96.150000";
        $scope.estado14.width = '51px';
        $scope.estado14.height = "41px";
        $scope.estado14.position = "15.00000, -95.400000";
        $scope.estado15.width = '68px';
        $scope.estado15.height = "33px";
        $scope.estado15.position = "16.00000, -93.950000";
        $scope.estado16.width = '126px';
        $scope.estado16.height = "99px";
        $scope.estado16.position = "16.66000, -95.150000";
        $scope.estado17.width = '108px';
        $scope.estado17.height = "89px";
        $scope.estado17.position = "17.20000, -96.600000";
        $scope.estado18.width = '162px';
        $scope.estado18.height = "118px";
        $scope.estado18.position = "16.90000, -98.200000";
        $scope.estado19.width = '270px';
        $scope.estado19.height = "195px";
        $scope.estado19.position = "18.69000, -97.300000";
        $scope.estado20.width = '252px';
        $scope.estado20.height = "145px";
        $scope.estado20.position = "14.40000, -99.700000";
        $scope.estado21 = {};
        $scope.estado21.width = '74px';
        $scope.estado21.height = "48px";
        $scope.estado21.position = "15.40000, -103.100000";
        $scope.estado22.width = '277px';
        $scope.estado22.height = "190px";
        $scope.estado22.position = "15.60000, -102.330000";
        $scope.estado23.width = '235px';
        $scope.estado23.height = "250px";
        $scope.estado23.position = "18.40000, -100.7000000";
        $scope.estado24.width = '71px';
        $scope.estado24.height = "45px";
        $scope.estado24.position = "19.18000, -100.4000000";
        $scope.estado25.width = '83px';
        $scope.estado25.height = "90px";
        $scope.estado25.position = "18.68000, -102.5000000";
        $scope.estado26.width = '128px';
        $scope.estado26.height = "139px";
        $scope.estado26.position = "18.10000, -104.0000000";
        $scope.estado27.width = '315px';
        $scope.estado27.height = "280px";
        $scope.estado27.position = "20.18000, -104.0500000";
        $scope.estado28.width = '255px';
        $scope.estado28.height = "290px";
        $scope.estado28.position = "20.30000, -107.9000000";
        $scope.estado29.width = '265px';
        $scope.estado29.height = "340px";
        $scope.estado29.position = "22.90000, -99.7000000";
        $scope.estado30.width = '373px';
        $scope.estado30.height = "410px";
        $scope.estado30.position = "24.30000, -105.9800000";
        $scope.estado31 = {};
        $scope.estado31.width = '398px';
        $scope.estado31.height = "435px";
        $scope.estado31.position = "25.40000, -113.7000000";
        $scope.estado32.width = '332px';
        $scope.estado32.height = "342px";
        $scope.estado32.position = "21.00000, -114.8000000";
        $scope.estado33.width = '230px';
        $scope.estado33.height = "330px";
        $scope.estado33.position = "27.80000, -118.2500000";
        $scope.estado34.width = '179px';
        $scope.estado34.height = "300px";
        $scope.estado34.position = "21.00000, -96.6000000";
        $scope.estado35.width = '192px';
        $scope.estado35.height = "340px";
        $scope.estado35.position = "19.90000, -94.9000000";
         $timeout(function(){
            $scope.estadoSelect = state;
            $scope.appearMap(state);
            $scope.openMapMenu();
            select = state;
            $scope.disappearMap(actualState);
        },650);
        

    }

    $scope.go = function(state){
        window.scrollTo(0, 0)
        $state.go(state);
    }
    $scope.appearMap = function(id){
        console.log('mouse enter');
        mapObject.customMarkers[id].el.style.opacity ='1';
        console.log(id);
        /*console.log(map.customMarkers);
        mapObject.customMarkers[id].el.className = mapObject.customMarkers[id].el.className + ' appear1S';
        mapObject.customMarkers[id].el.childNodes[1].className = mapObject.customMarkers[id].el.childNodes[1].className + ' appear1S';
        mapObject.customMarkers[id].el.childNodes[1].childNodes[1].className = '';
        //console.log(map.customMarkers[id].el.childNodes[1].childNodes[1]);*/
    }
    $scope.disappearMap = function(id){
        //console.log('mouse leave');
        //console.log(mapObject.customMarkers);
        //console.log(map.customMarkers);
        if(select != id){
            console.log('desaparecer estado', id);
            mapObject.customMarkers[id].el.className =  '';
            mapObject.customMarkers[id].el.childNodes[1].className ='';
            mapObject.customMarkers[id].el.childNodes[1].childNodes[1].className = '';
            mapObject.customMarkers[id].el.style.opacity ='0';
        }
        /*mapObject.customMarkers[id].el.className = mapObject.customMarkers[id].el.className + ' disapepar';
        mapObject.customMarkers[id].el.childNodes[1].className = mapObject.customMarkers[id].el.childNodes[1].className + ' disapepar';
        mapObject.customMarkers[id].el.childNodes[1].childNodes[1].className = mapObject.customMarkers[id].el.childNodes[1].childNodes[1].className + 'disapepar';*/
        //console.log(mapObject.customMarkers[id].el.childNodes[1].childNodes[1]);
    }
    var unselectMap = function(){
        mapObject.customMarkers[select].el.className =  '';
        mapObject.customMarkers[select].el.childNodes[1].className ='';
        mapObject.customMarkers[select].el.childNodes[1].childNodes[1].className = '';
        mapObject.customMarkers[select].el.style.opacity ='0';
    }
    $scope.openMapMenu = function(e, key, state){
        $scope.showMapMenu = true;
        console.log('menu')
        $scope.actualMap = state;
        NgMap.getMap().then(function(map){
            console.log(map.customMarkers[38]);

             map.customMarkers[38].el.className = map.customMarkers[38].el.className + ' appear';
             map.customMarkers[38].el.childNodes[2].className = map.customMarkers[38].el.childNodes[2].className + ' prueba';

           
        });
        console.log('open');;
    }
    if(screen.width <= 768){ 
      $scope.openMapMenu();
    }
    $scope.closeMapMenu = function(e, key, state){
        console.log('crrar')
        $scope.actualMap = state;
        $scope.showMapMenu = false;
        $scope.sucursal = false;
       // angular.element(document.querySelector('#sucursal-map-menu')).addClass('appepar');
    }
    $scope.appearItem = function(item){
      angular.element(document.querySelector('#' + item)).removeClass('disappear1S');
      angular.element(document.querySelector('#' + item)).addClass('appear1S');
    }
    $scope.disappearItem = function(item){
      angular.element(document.querySelector('#' + item)).addClass('disappear1S');
    }
    angular.element(document.querySelector('#texto1')).addClass('slide-right-to-left-enter');
    angular.element(document.querySelector('#texto1-movil')).addClass('appear');
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAHEDIPSO32Z4XxR71iW71oP29-B7Zh4Y";
    var sucursales = {};
    sucursales = {
        bonampak : {
            nombre: 'WALL´S BARBERSHOP BONAMPAK',
            shortName: 'BONAMPAK',
            direccion: 'SM 4 MZA 3 Plaza Atlantis, Av. Bonampak con Av. Kukulcán, Frente a Km 0, Entrada Zona Hotelera, Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 255 5569 y WhatsApp. (998) 293 4177',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Bonampak.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        torres: {
            nombre: 'WALL´S LAS TORRES',
            shortName: 'TORRES',
            direccion: 'SM 510 MZA 9 LT 10 Y 12 Planta Alta, Plaza Bamboo, Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 251 0726 y WhatsApp. (998) 293 4599',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/LasTorres.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        kabah: {
            nombre: 'WALL´S BARBERSHOP KABAH',
            shortName: 'KABAH',
            direccion: 'SMZ 38 MZ 9 LT 1 al 15 Local #5 Av. Sabah, Plaza Real 10 (frente a UNID) Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 206 8098 y WhatsApp. (998) 293 4931',
            position: '8.000000, -85.0000000',
            img: '/assets/img/sucursales/Kabah.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        chetumal : {
            nombre: 'WALLS CHETUMAL',
            shortName: 'CHETUMAL',
            direccion: 'Bulevar Bahía #301, entre Av. Rafael E. Melgar y Emiliano Zapata, Chetumal.',
            contacto:  'Tel. (983) 129 2705 y WhatsApp. (998) 293 4162',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Chetumal.jpg',
            fb: 'https://www.facebook.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallschetumal/'
        },
        isla: {
            nombre: 'WALL´S BARBERSHOP ISLA MUJERES',
            shortName: 'ISLA MUJERES',
            direccion: 'Nicolás Bravo S/N Centro, Isla Mujeres.',
            contacto: 'Tel. 877 0496 y WhatsApp. (998) 117 1259',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Isla.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopisla/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_isla/'
        },
        cozumel: {
            nombre: 'WALL´S BARBERSHOP COZUMEL',
            shortName: 'COZUMEL',
            direccion: 'Plaza Leones, 30 Avenida esquina con 1 sur cozumel, Quintana Roo, México.',
            contacto: 'WhatsApp. (987) 101 0138',
            position: '16.800000, -85.0000000',
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
            contacto: 'Tel. (984) 803 3742 y WhatsApp. (984) 142 3333',
            position: '16.800000, -85.0000000',
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
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Boca.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopbocadelrio/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_boca/'
        },
        aguasCalientes: {
            nombre: 'WALL´S BARBERSHOP AGUASCALIENTES',
            shortName: 'AGUASCALIENTES',
            direccion: 'Plaza Santa Fe, local 38, Av. Universidad #811, Bosques del prado sur, Aguascalientes, México.',
            contacto: 'Tel. 449 288 1015 y WhatsApp. 449 196 1237',
            position: '16.800000, -85.0000000',
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
            contacto: 'Tel. 7045 7224 y WhatsApp. (045) 998 293 4626',
            position: '16.800000, -85.0000000',
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


/////////////////////////////////////////////////////////////////
    $scope.sucursalesColumna1 = {
        bonampak : {
            nombre: 'WALL´S BARBERSHOP BONAMPAK',
            shortName: 'BONAMPAK',
            direccion: 'SM 4 MZA 3 Plaza Atlantis, Av. Bonampak con Av. Kukulcán, Frente a Km 0, Entrada Zona Hotelera, Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 255 5569 y WhatsApp. (998) 293 4177',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Bonampak.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        torres: {
            nombre: 'WALL´S LAS TORRES',
            shortName: 'TORRES',
            direccion: 'SM 510 MZA 9 LT 10 Y 12 Planta Alta, Plaza Bamboo, Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 251 0726 y WhatsApp. (998) 293 4599',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/LasTorres.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        kabah: {
            nombre: 'WALL´S BARBERSHOP KABAH',
            shortName: 'KABAH',
            direccion: 'SMZ 38 MZ 9 LT 1 al 15 Local #5 Av. Sabah, Plaza Real 10 (frente a UNID) Cancún, Quintana Roo, México.',
            contacto: 'Tel. (998) 206 8098 y WhatsApp. (998) 293 4931',
            position: '8.000000, -85.0000000',
            img: '/assets/img/sucursales/Kabah.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/'
        },
        chetumal : {
            nombre: 'WALLS CHETUMAL',
            shortName: 'CHETUMAL',
            direccion: 'Bulevar Bahía #301, entre Av. Rafael E. Melgar y Emiliano Zapata, Chetumal.',
            contacto:  'Tel. (983) 129 2705 y WhatsApp. (998) 293 4162',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Chetumal.jpg',
            fb: 'https://www.facebook.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallschetumal/'

        },
         isla: {
            nombre: 'WALL´S BARBERSHOP ISLA MUJERES',
            shortName: 'ISLA MUJERES',
            direccion: 'Nicolás Bravo S/N Centro, Isla Mujeres.',
            contacto: 'Tel. 877 0496 y WhatsApp. (998) 117 1259',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Isla.jpg',
            fb: 'https://www.instagram.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_isla/'

        },
         cozumel: {
            nombre: 'WALL´S BARBERSHOP COZUMEL',
            shortName: 'COZUMEL',
            direccion: 'Plaza Leones, 30 Avenida esquina con 1 sur cozumel, Quintana Roo, México.',
            contacto: 'WhatsApp. (987) 101 0138',
            position: '16.800000, -85.0000000',
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
            contacto: 'Tel. (984) 803 3742 y WhatsApp. (984) 142 3333',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/playa.png',
            fb: 'https://www.facebook.com/wallsbarbershopplayadelcarmen/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/'
        },
        campeche: {
            nombre: 'WALLS CAMPECHE',
            shortName: 'CAMPECHE',
            direccion: 'Av. López Portillo #28, Plaza Kaniste Local 1, San Francisco, Campeche.',
            contacto: 'Tel. (981) 812 7975 y WhatsApp. (981) 107 2609',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Campeche.jpg',
            fb: 'https://www.instagram.com/wallsbarbershop_playa/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_campeche/'
        }
    };
    $scope.sucursalesColumna2 = {
        veracruz: {
            nombre : 'WALL´S BARBERSHOP BOCA DEL RIO',
            shortName: 'BOCA DEL RIO',
            direccion: 'Paseo costa verde #583 interior 107 Plaza Marlyn, fraccionamiento costa verde esquina jacarandás.',
            contacto: 'Tel. 688 4491  y WhatsApp. 229 110 47 41',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Boca.jpg',
            fb: '', 
            instagram : ''
        },
        aguasCalientes: {
            nombre: 'WALL´S BARBERSHOP AGUASCALIENTES',
            shortName: 'AGUASCALIENTES',
            direccion: 'Plaza Santa Fe, local 38, Av. Universidad #811, Bosques del prado sur, Aguascalientes, México.',
            contacto: 'Tel. 449 288 1015 y WhatsApp. 449 196 1237',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Aguascalienstes.jpg',
            fb: 'https://www.facebook.com/wallsbarbershopbocadelrio/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_boca/'
        },
        tuxtla: {
            nombre: 'WALL´S BARBERSHOP TUXTLA GTZ',
            shortName: 'TUXTLA',
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
            contacto: 'Tel. 7045 7224 y WhatsApp. (045) 998 293 4626',
            position: '16.800000, -85.0000000',
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
                fb: 'https://www.facebook.com/wallsbarbershoplaroma/', 
                instagram : 'https://www.instagram.com/wallsbarbershop_laroma/'
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
        }
    };
    var columna1aux = $scope.sucursalesColumna1
    var columna2aux = $scope.sucursalesColumna2

    /*
    $scope.sucursalesColumna1.cancun = sucursales.cancun;
    $scope.sucursalesColumna1.chetumal = sucursales.chetumal.chetumal;
    $scope.sucursalesColumna1.isla = sucursales.isla.isla;
    $scope.sucursalesColumna1.cozumel = sucursales.cozumel.cozumel;
    $scope.sucursalesColumna1.playaCentro = sucursales.playa.playaCentro;
    $scope.sucursalesColumna1.playa = sucursales.playa.playa;
    $scope.sucursalesColumna1.campeche = sucursales.campeche.campeche;
    $scope.sucursalesColumna1.merida = sucursales.merida;
    var sucursalesSeccion3  = {};
    sucursalesSeccion3.columna1 = {};
    sucursalesSeccion3.columna2 = {};
    sucursalesSeccion3.columna1.veracruz = sucursales.veracruz.veracruz;
    sucursalesSeccion3.columna1.aguasCalientes = sucursales.aguasCalientes.aguasCalientes;
    sucursalesSeccion3.columna1.tuxtla = sucursales.tuxtla.tuxtla;
    sucursalesSeccion3.columna1.queretaro = sucursales.queretaro.queretaro;
    sucursalesSeccion3.columna2.cdMx = sucursales.cdMx.cdMx;
    sucursalesSeccion3.columna2.edoMx = sucursales.cdMx.edoMx;
    sucursalesSeccion3.columna2.guadalajara = sucursales.guadalajara.guadalajara
    /*$scope.sucursalesSeccion1 = sucursalesSeccion1;
    $scope.sucursalesSeccion2 = sucursalesSeccion2;
    $scope.sucursalesSeccion3 = sucursalesSeccion3;
    $scope.seccion1Show = 'none';
    $scope.seccion2Show = 'none';
    $scope.seccion3Show = 'inithial';

    $scope.sucursales = sucursales.cancun;*/
    
    $scope.mostrarMenu = function (){
            console.log($scope.displayMenu);

        if($scope.displayMenu == 'initial'){
            $scope.displayMenu = 'none';
        }
        else{
            $scope.displayMenu = 'initial';
        }
    }
    $scope.cambiarSucursalDesktop = function(e, key, state){
        $scope.actualMap = state;
        NgMap.getMap().then(function(map) {
            for (var i in map.customMarkers[2]) {
                map.customMarkers[i].el.className = 'disappear'
            }
        });
        $timeout(function(){
            $scope.sucursales = sucursales[key];
        },1200);
    }
    $scope.mostrarSucursalMovil = function(table){
        //angular.element(document.querySelector('#sucursal-movil')).addClass('disappear');
        //$timeout(function(){ 
            if(table == 1){
                $scope.seccion1Show = 'inithial';
                $scope.cerrarSucursalMovil(2);
                $scope.cerrarSucursalMovil(3);
            }
            if(table == 2){
                $scope.seccion2Show = 'inithial';
                $scope.cerrarSucursalMovil(3);
                $scope.cerrarSucursalMovil(1);
            }
            if(table == 3){
                $scope.seccion3Show = 'inithial';
                $scope.cerrarSucursalMovil(2);
                $scope.cerrarSucursalMovil(1);

            }
            //angular.element(document.querySelector('#sucursal-movil')).removeClass('disappear');
            //angular.element(document.querySelector('#sucursal-movil')).addClass('appear');
            //angular.element(document.querySelector('#sucursal-movil')).removeClass('appear');
        //},1200);
    }
    $scope.cerrarSucursalMovil = function(table){
        //angular.element(document.querySelector('#sucursal-movil')).addClass('disappear');
        //$timeout(function(){ 
            if(table == 1){
                $scope.seccion1Show = 'none';
            }
            if(table == 2){
                $scope.seccion2Show = 'none';
            }
            if(table == 3){
                $scope.seccion3Show = 'none';
            }
            //angular.element(document.querySelector('#sucursal-movil')).removeClass('disappear');
            //angular.element(document.querySelector('#sucursal-movil')).addClass('appear');
            //angular.element(document.querySelector('#sucursal-movil')).removeClass('appear');
        //},1200);
    }
    var i = 0;
    var cambiarTexto = function(){
        if(i == 0){
            angular.element(document.querySelector('#texto1')).addClass('slide-right-to-left-exit');
            angular.element(document.querySelector('#texto2')).removeClass('slide-right-to-left-exit');
            angular.element(document.querySelector('#texto2')).removeClass('slide-right-to-left-enter');
            angular.element(document.querySelector('#texto2')).addClass('slide-right-to-left-enter'); 
            
            angular.element(document.querySelector('#texto1-movil')).removeClass('appepar');
            angular.element(document.querySelector('#texto1-movil')).addClass('disappear');
            angular.element(document.querySelector('#texto2-movil')).removeClass('disapepar');
            angular.element(document.querySelector('#texto2-movil')).addClass('appear');
            i++;
        }
        else
        {
            i = 0;
            angular.element(document.querySelector('#texto2')).addClass('slide-right-to-left-exit');
            angular.element(document.querySelector('#texto1')).removeClass('slide-right-to-left-exit');
            angular.element(document.querySelector('#texto1')).removeClass('slide-right-to-left-enter');
            angular.element(document.querySelector('#texto1')).addClass('slide-right-to-left-enter');

            angular.element(document.querySelector('#texto2-movil')).removeClass('appear');
            angular.element(document.querySelector('#texto2-movil')).addClass('disapepar');
            angular.element(document.querySelector('#texto1-movil')).removeClass('appear');
            angular.element(document.querySelector('#texto1-movil')).removeClass('disappear');
            angular.element(document.querySelector('#texto1-movil')).addClass('appear'); 
        }
    }
    
    $interval(cambiarTexto, 9600);
    
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