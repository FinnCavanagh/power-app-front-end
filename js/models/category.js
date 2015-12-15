angular
  .module('power')
  .factory('Category', Category);

Category.$inject = ['$resource', 'API'];
function Category($resource, API) {

  return $resource(API + '/categories/:id', null, { 
  'query': { method:'GET', url: API + '/categories' }
  });

}