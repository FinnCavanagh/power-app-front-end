angular
  .module('power', ['angular-jwt', 'ngResource'])
  .constant('API', 'http://send-power.herokuapp.com/api')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });


