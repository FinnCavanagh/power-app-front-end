angular
  .module('power')
  .factory('Power', Power);

Power.$inject = ['$resource', 'API'];
function Power($resource, API) {

  return $resource(API + '/powers', { id: '@_id'}, { 
    'random': { method:'GET', url: API + '/powers/random/:tag' },
    'send' : { method: 'POST', url: API + '/powers/send-sms/' }
  });

}
