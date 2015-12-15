angular
  .module('power')
  .factory('Power', Power);

Power.$inject = ['$resource', 'API'];
function Power($resource, API) {

  return $resource(API + '/powers', { id: '@_id'}, { 
  'random': { method:'GET', url: 'http://localhost:3000/api/powers/random/:tag' }
  });

  // return $resource(API + '/powers/:id', null, {
  //   'authorize' : { method: "POST", url: API + '/login' },
  //   'join' : { method: "POST", url: API + '/register' },
  //   'query': {method:"GET", isArray: false}
  // });



}