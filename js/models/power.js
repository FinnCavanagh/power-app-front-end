angular
  .module('power')
  .factory('Power', Power);

Power.$inject = ['$resource', 'API'];
function Power($resource, API) {

  return $resource(API + '/powers', { id: '@_id'}, { 
    'random': { method:'GET', url: 'http://send-power.herokuapp.com/api/powers/random/:tag' },
    'send' : { method: 'POST', url: 'http://send-power.herokuapp.com/api/powers/send-sms/' }
  });

}
