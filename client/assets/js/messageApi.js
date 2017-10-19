angular.module('application')
.factory('$messageApi', function($http){
    var baseUrl = 'http://www.wallsbarbershop.com.mx/php/';

    var post = function(url, body){
      body = body || {};
      return $http.post(baseUrl+url, body);
    }
    var get = function(url){
      return $http.get(baseUrl+url);
    }

    return {
      sendMessage : function(message){
        console.log(message);

       return get('sendMessage.php?name=' + message.name + '&phone=' + message.phone + '&state=' + message.state +'&why=' + message.why + '&email=' + message.email + '&empresa=' + message.empresa + '&address=' + message.address);
      },
      sendEmailMexicano : function(email){
        return get('mexicano_que_se_respeta_mailer.php?email=' + email);
      },
      sendPasswordCode : function(cardMail){
        return get('passwordRecovery.php?cardMail=' + cardMail);
      }
    }
  });