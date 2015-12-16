angular
  .module('power')
  .factory('Power', Power);

Power.$inject = ['$resource', 'API'];
function Power($resource, API) {

  return $resource(API + '/powers', { id: '@_id'}, { 
    'random': { method:'GET', url: 'http://localhost:3000/api/powers/random/:tag' },
    'send' : { method: 'POST', url: 'http://localhost:3000/api/powers/send-sms/' }
  });

}
