angular
  .module('power')
  .factory('Recipient', Recipient);

Recipient.$inject = ['$resource', 'API'];
function Recipient($resource, API) {

  return $resource(API + '/recipients/:id', null, {
    'query': { method:"GET", isArray: false}
  });
}