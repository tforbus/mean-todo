angular.module('Todo.Resources')

/**
 * A resource gives you a lot of nice methods for free.
 * It makes doing CRUD really easy if you've got a nice API.
 *
 * From the Angular Docs, a non-GET method is  only on the instances of 
 * the resource, so you could call something like instance.$save()
 * 
 * For more complicated API routes, check out the gist at 
 * https://gist.github.com/tforbus/7666751
 */
.factory('TodoItems', ['$resource', function ($resource) {
  return $resource('/api/todo/:id', {id: '@id'}, {
    'update': {method: 'PUT'},
    'delete': {method: 'DELETE'}
  });
}]);
