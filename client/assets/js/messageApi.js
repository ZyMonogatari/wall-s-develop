angular.module('application')
.factory('$messageApi', function($http){
    var baseUrl = 'https://www.mr-barbas.com/php/';

    var post = function(url, body){
      body = body || {};
      return $http.post(baseUrl+url, body);
    }
    var get = function(url){
      return $http.get(baseUrl+url);
    }

    return {
      sendMessage : function(message){
       return get('sendMessage.php?name=' + message.name + '&email=' + message.email + '&empresa=' + message.empresa +
        '&address=' + message.address + '&phone=' + message.phone + '&state=' + message.state +'&why=' + message.why);
      }
    }
  });