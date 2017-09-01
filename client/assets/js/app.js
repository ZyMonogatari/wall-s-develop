(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    //Facebook
    'facebook',
    //maps
    'ngMap',
    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
  .config(function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('1791808034167547');
    })
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

  function config($urlProvider, $locationProvider, $stateProvider) {
    $urlProvider.otherwise('/');
    $stateProvider.state('wblog', {
            url: "/wblog",
            //templateUrl: 'wblog/index.php'
            controller: 'blogCtrl'
        })  
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    //$locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
