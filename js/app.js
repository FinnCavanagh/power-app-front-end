angular
  .module('power', ['angular-jwt', 'ngResource'])
  .constant('API', (function(){
    var domain = /localhost/.test(document.domain) ? 'localhost:3000' : 'send-power.herokuapp.com'
      return 'http://'+ domain + '/api'
  })() )
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

