angular.module('application')
.factory('$dbApi', function($http){
    var baseUrl = 'http://www.wallsbarbershop.com.mx/php/';

    var post = function(url, body){
      body = body || {};
      return $http.post(baseUrl+url, body);
    }
    var get = function(url){
      return $http.get(baseUrl+url);
    }

    return {
      registUser : function(regist){
       return get('insertForm.php?name=' + regist.name + '&lastname=' + regist.lastname + '&email=' + regist.email + '&birthday=' + regist.birthday +
        '&sucursal=' + regist.sucursal + '&phone=' + regist.phone + '&state=' + regist.state +'&card=' + regist.card + '&password=' + regist.password);
      },
      getClientData : function(clientData){
        return get('getClientInfo.php?cardMail=' + clientData.cardMail + '&password=' + clientData.password);
      },
      insertConcursantesMexicano : function(concursante){
        return get('InsertConcursantesMexicanoQueSeRespeta.php?name=' + concursante.name + 
          '&age=' + concursante.age + '&phone=' + concursante.phone + '&email=' 
          + concursante.email + '&ciudad=' + concursante.ciudad + '&medio=' 
          +concursante.medio + '&sucursal=' + concursante.sucursal);
      },
      checkEmail : function(email){
        return get('emailCheckerMexicano.php?email=' + email);
      },
      updatePass : function(params){
        return get('updatePass.php?email=' + params.email + '&newPass=' + params.pass + '&card=' + params.card);
      }
    }
  });