// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html',
        controller: function($ionicHistory){
          $ionicHistory.clearHistory();
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
        }
      }
    }
  })

  .state('app.definiciones', {
    url: '/definiciones',
    views: {
      'menuContent': {
        templateUrl: 'templates/definiciones.html',
        controller: "defController"
      }
    }
  })

  .state('app.marco_legal_nacional', {
      url: '/marco_legal/nacional',
      views: {
        'menuContent': {
          templateUrl: 'templates/marco_legal/nacional.html',
          controller: function($ionicHistory){
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
              disableBack: true
            });
          }
        }
      }
    })

  .state('app.marco_legal_cedaw', {
      url: '/marco_legal/cedaw',
      views: {
        'menuContent': {
          templateUrl: 'templates/marco_legal/cedaw.html',
          controller: function($ionicHistory){
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
              disableBack: true
            });
          }
        }
      }
    })
  
  .state('app.marco_legal_belem', {
      url: '/marco_legal/belem',
      views: {
        'menuContent': {
          templateUrl: 'templates/marco_legal/belem.html',
          controller: function($ionicHistory){
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
              disableBack: true
            });
          }
        }
      }
    })
  
  .state('app.vias_denuncia', {
    url: '/vias_denuncia',
    views: {
      'menuContent': {
        templateUrl: 'templates/vias_denuncia.html',
        controller: 'viasDenunciaController'
      }
    }
  })

  .state('app.vias_denuncias', {
    url: '/vias_denuncia/:param',
    views: {
      'menuContent': {
        templateUrl: 'templates/vias_denuncia.html',
        controller: 'viasDenunciaController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
