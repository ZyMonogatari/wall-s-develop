angular.module('application')
.factory('$sharedData', function(){
    var sucursales = {
        bonampak : {
            nombre: 'WALL\'S BONAMPAK',
            shortName: 'BONAMPAK - CANCUN',
            direccion: 'SM 4 MZA 3 Plaza Atlantis, Av. Bonampak con Av. Kukulcán, Frente a Km 0, Entrada Zona Hotelera, Cancún, Quintana Roo, México.',
            telefono: '(998) 255 5569',
            whatsapp: '(998) 293 4177',
            y:'21.155173',
            x:'-86.821732',
            img: '/assets/img/sucursales/Bonampak.jpg',
            imgMobile: '/assets/img/sucursales/BonampackMobile.png', 
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallsbarbershop/',
            twitter: 'https://twitter.com/WallsBarbershop', 
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Wall's+Barbershop/@21.1551969,-86.823983,17z/data=!4m8!1m2!2m1!1swalls+barbershop!3m4!1s0x8f4c29558c0027d9:0x84ea5f1878ed84fd!8m2!3d21.1551969!4d-86.8217943?hl=es"

        },
        studio : {
            nombre: 'WALL\'S Studio',
            shortName: 'STUDIO - CANCUN',
            direccion: 'Km 1.5 Zona hotelera, Av Bonampak, Plaza Maria Town Center, Cancún, México',
            telefono: null,
            whatsapp: null,
            y:'21.160825',
            x:'-86.807894',
            img: '/assets/img/logo-walls-negro-completo.jpg',
            imgMobile: '/assets/img/sucursales/BonampackMobile.png', 
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallsbarbershop/',
            twitter: 'https://twitter.com/WallsBarbershop', 
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Walls+Studio/@21.1608309,-86.8084412,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zMjHCsDA5JzM3LjciTiA4NsKwNDgnMzAuOCJX!3b1!8m2!3d21.160463!4d-86.808552!3m4!1s0x8f4c2eb3697f486b:0x4784fb7511378598!8m2!3d21.1608297!4d-86.807894?hl=es"
        },
        /*torres: {
            nombre: 'WALL\'S LAS TORRES',
            shortName: 'TORRES - CANCUN',
            direccion: 'SM 510 MZA 9 LT 10 Y 12 Planta Alta, Plaza Bamboo, Cancún, Quintana Roo, México.',
            telefono: '(998) 251 0726',
            whatsapp: '(998) 293 4599',
            y: '21.137950',
            x: '-86.750601',
            img: '/assets/img/sucursales/LasTorres.jpg',
            imgMobile: '/assets/img/sucursales/TorresMobile.png',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false
        },
        kabah: {
            nombre: 'WALL\'S KABAH',
            shortName: 'KABAH - CANCUN',
            direccion: 'SMZ 38 MZ 9 LT 1 al 15 Local #5 Av. Sabah, Plaza Real 10 (frente a UNID) Cancún, Quintana Roo, México.',
            telefono: '(998) 206 8098',
            whatsapp: '(998) 293 4931',
            y:'21.156974',
            x:'-86.847092',
            img: '/assets/img/sucursales/Kabah.jpg',
            fb: 'https://www.facebook.com/Walls-Barbershop-Cancun-334978173601237/', 
            instagram : 'https://www.instagram.com/wallscancun/',
            twitter: null,
            select: false
        },*/
        chetumal : {
            nombre: 'WALL\'S CHETUMAL',
            shortName: 'CHETUMAL',
            direccion: 'Bulevar Bahía #301, entre Av. Rafael E. Melgar y Emiliano Zapata, Chetumal.',
            telefono: '(983) 129 2705',
            whatsapp: '(998) 293 4162',
            y:'18.505009',
            x:'-88.281526',
            img: '/assets/img/sucursales/Chetumal.jpg',
            imgMobile: '/assets/img/sucursales/ChetumalMobil.png',
            fb: 'https://www.facebook.com/wallschetumal/', 
            instagram : 'https://www.instagram.com/wallschetumal/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
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
            imgMobile: '/assets/img/sucursales/IslaMobile.png',
            fb: 'https://www.facebook.com/wallsbarbershopisla/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_isla/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
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
            imgMobile: '/assets/img/sucursales/CozumelMobil.png',
            fb: 'https://www.facebook.com/wallsbarbershopczm/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_cozumel/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
        },
        /*playaCentro: {
            nombre : 'WALL\'S PLAYA DEL CARMEN CENTRO',
            shortName: 'PLAYA DEL CARMEN CENTRO',
            direccion: 'SM. 56 MZA. 1 Lote 55, Av. Prolongación, Luis Donaldo Colosio, Fracc. Santa Fé, Playa del Carmen, México.',
            telefono: null,
            whatsapp: '(984) 187 6258',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/playacentro.jpg',
            imgMobile: '/assets/img/sucursales/PlayaCentroMobile.png',
            fb: 'https://www.facebook.com/wallsplayacolosio/?ref=br_rs', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false
        },*/ 
        playa: {
            nombre: 'WALL\'S PLAYA DEL CARMEN',
            shortName: 'PLAYA DEL CARMEN',
            direccion: '15 Avenida norte, entre calle 8 y calle 10, Colonia centro, plaza pelícanos, Playa del Carmen, Quintana Roo, México.',
            telefono: '(984) 803 3742',
            whatsapp: '(984) 142 3333',
            y: '20.627448',
            x: '-87.074087',
            img: '/assets/img/sucursales/playa.png',
            imgMobile: '/assets/img/sucursales/PlayaMobil.png',
            fb: 'https://www.facebook.com/wallsbarbershopplayadelcarmen/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_playa/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
        },
        meridaPlazaArena: {
            nombre: 'WALL\'S MERIDA PLAZA ARENA',
            shortName: 'PLAZA ARENA - MERIDA',
            direccion: 'Av. Cámara de comercio #3276 por 50 y 52 Local 2 Benito Juarez Norte',
            telefono: null, 
            whatsapp: '998 293 4349',
            position: '25.000000, -85.0000000',
            img: '/assets/img/sucursales/Arena.jpg',
            imgMobile: '/assets/img/sucursales/ArenaMobile.png',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
        },
        meridaGalerias: {
            nombre: 'WALL\'S GALERIAS MERIDA',
            shortName: 'GALERIAS -MERIDA',
            direccion: 'Calle 3 #300 entre 24 y 60 Av. Revolución, Plaza Galerías Mérida, Yucatán, México.',
            telefono: null,
            whatsapp: '998 293 4627',
            y: '21.039816',
            x: '-89.631272',
            img: '/assets/img/sucursales/Galerias.jpg',
            imgMobile: '/assets/img/sucursales/GaleriasMobile.png',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Wall's+Barbershop+%7C+Plaza+Galer%C3%ADas/@21.0396247,-89.6314835,20z/data=!4m5!3m4!1s0x0:0x9a2f4c9f5b5269f5!8m2!3d21.0398182!4d-89.6312767?hl=es"
        },
        meridaUptown: {
            nombre: 'WALL\'S MERIDA UPTOWN',
            shortName: 'UPTOWN - MERIDA',
            direccion: 'Centro comercial Uptown Mérida, Calle 17 # 104 -A por calle 10 y calle 32-A Col. Vista alegre',
            whatsapp: '999 304 7933',
            position: '8.000000, -85.0000000',
            img: '/assets/img/sucursales/Uptown.jpg',
            imgMobile: '/assets/img/sucursales/UptownMobil.png',
            fb: 'https://www.facebook.com/wallsmerida/', 
            instagram : 'https://www.instagram.com/wallsmerida/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
        },
        campeche: {
            nombre: 'WALL\'S CAMPECHE',
            shortName: 'CAMPECHE',
            direccion: 'Av. López Portillo #28, Plaza Kaniste Local 1, San Francisco, Campeche.',
            telefono: '(981) 812 7975',
            whatsapp: '(981) 107 2609',
            y:'19.826351',
            x:'-90.551480',
            img: '/assets/img/sucursales/Campeche.jpg',
            imgMobile: '/assets/img/sucursales/CampecheMobile.png',
            fb: 'https://www.facebook.com/wallsbarbershopcamp/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_campeche/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
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
            imgMobile: '/assets/img/sucursales/BocaMobile.png',
            fb: 'https://www.facebook.com/wallsbarbershopbocadelrio/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_boca/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false, 
            mapsUrl: "https://www.google.com/maps/place/Wall's+Barbershop/@19.1667629,-96.1184343,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zMTnCsDEwJzAwLjQiTiA5NsKwMDcnMDQuNCJX!3b1!8m2!3d19.166767!4d-96.117888!3m4!1s0x85c34125ac7deeab:0x39bafc08d7ef2bc9!8m2!3d19.1667616!4d-96.1178871?hl=es"
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
            imgMobile: '/assets/img/sucursales/AguascalientesMobil.png',
            fb: 'https://www.facebook.com/wallsbarbershopags/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_ags/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Walls+Barbershop+Aguascalientes/@21.9109955,-102.3122313,18z/data=!4m13!1m7!3m6!1s0x0:0x0!2zMjHCsDU0JzM5LjYiTiAxMDLCsDE4JzQwLjEiVw!3b1!8m2!3d21.910993!4d-102.311137!3m4!1s0x8429eefcbae022f1:0x2993e4055fae25b1!8m2!3d21.910991!4d-102.311138?hl=es"
        },
        tuxtla: {
            nombre: 'WALL\'S TUXTLA GTZ',
            shortName: 'TUXTLA GTZ',
            direccion: 'Boulevard Doctor Belisario Domínguez, Plaza Santa Elena Tuxtla, Gtz, Chiapas, México.',
            telefono: '(961) 121 4081',
            whatsapp: '(961) 243 1583',
            y: '16.754618',
            x: '-93.141328',
            img: '/assets/img/sucursales/Tuxtla.png',
            imgMobile: '/assets/img/sucursales/TuxtlaMobile.png',
            fb: 'https://www.facebook.com/wallstuxtlagtz/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_tuxtlagtz/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Walls+Barbershop+Chiapas/@16.7546197,-93.1418861,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zMTbCsDQ1JzE2LjUiTiA5M8KwMDgnMjguOCJX!3b1!8m2!3d16.754586!4d-93.141342!3m4!1s0x85ecd903bc18c1bf:0x8f99d664b7a33fcb!8m2!3d16.7546184!4d-93.1413389?hl=es"
        },
        queretaro: {
            nombre: 'WALL\'S QUERETARO',
            shortName: 'QUERETARO',
            direccion: 'Calle Camino Real de Carretas #139, Lomas de Carreta, Querétaro, México.',
            telefono: '(442) 403 2574',
            whatsapp: '(442) 466 2384',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Queretaro.jpg',
            imgMobile: '/assets/img/sucursales/QueretaroMobil.png',
            fb: 'https://www.facebook.com/wallsbarbershopmilenio3/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_qro/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#" 
        },
        edoMx: {
            nombre: 'WALL\'S SATÉLITE',
            shortName: 'SATÉLITE',
            direccion: 'Calle Manuel E Izaguirre #4 Local C. Ciudad Satélite Naucalpan de Juárez, Estado de México.',
            telefono: '2155 4934',
            y: '19.513473',
            x: '-99.232874',
            img: '/assets/img/sucursales/Satelite.jpg',
            imgMobile: '/assets/img/sucursales/SateliteMobil.png',
            fb: 'https://www.facebook.com/wallsbarbershopsatelite/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_satelite/?hl=es',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Wall's+Barbershop+Sat%C3%A9lite/@19.5135999,-99.2325953,17z/data=!4m5!3m4!1s0x85d202d7ca0fff9d:0xc850cf778127cad8!8m2!3d19.513484!4d-99.232877?hl=es"
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
            imgMobile: '/assets/img/sucursales/RomaMobile.png',
            fb: 'https://www.facebook.com/wallsbarbershoplaroma/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_laroma/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "https://www.google.com/maps/place/Wall's+Barbershop+-+La+Roma/@19.4204178,-99.1712646,17z/data=!4m5!3m4!1s0x85d1ff489acefedb:0xf0b09206c511c898!8m2!3d19.4203243!4d-99.1712487?hl=es"
        },
        guadalajara: {
            nombre: 'WALL\'S GUADALAJARA',
            shortName: 'GUADALAJARA',
            direccion: 'Av. Aviación 3000, San Juan de Ocotán, 45019 Zapopan, Jal.Guadalajara (México)',
            telefono: '(044) 332 066 34 88',
            position: '16.800000, -85.0000000',
            img: '/assets/img/sucursales/Guadalajara.jpg',
            imgMobile: '/assets/img/sucursales/GuadalajaraMobile.png',
            fb: 'https://www.facebook.com/wallsbarbershopgdl/', 
            instagram : 'https://www.instagram.com/wallsbarbershop_gdl/',
            twitter: 'https://twitter.com/WallsBarbershop',
            select: false,
            mapsUrl: "#"
        }
    };
    return {
      getSucursales : function(){
       return sucursales;
      }
    }
  });