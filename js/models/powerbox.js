angular
  .module('power')
  .factory('Powerbox', Powerbox);

Powerbox.$inject = ['$resource', 'API'];
function Powerbox($resource, API) {

  return $resource(API + '/powerboxes/:id', null, { 
  'query': { method:'GET', url: API + '/powerboxes' },
  'post' : { method: 'POST', url: 'http://localhost:3000/api/send-sms/' }
  });

}