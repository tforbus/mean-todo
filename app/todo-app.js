// Initializing modules to inject into the application.
angular.module('Todo.Controllers', []);
angular.module('Todo.Directives', []);
angular.module('Todo.Services', []);
angular.module('Todo.Resources', ['ngResource']);

// Initializing the application with a dependency on routes and other modules.
angular.module('Todo', [
  'ngRoute',
  'Todo.Controllers',
  'Todo.Directives',
  'Todo.Services',
  'Todo.Resources'
]);

// This array syntax is so Angular can deal with minification.
// Angular uses dependency injection, so the variable names actually matter.
angular.module('Todo').config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    // Angular routes are separate from Express routes.
    .when('/', {
      templateUrl: '/app/views/index.html',
      controller: 'IndexCtrl',

      // We can get all the todo items BEFORE the page loads.
      // You still have to inject the values into the controller.
      resolve: {
        injectedItems: function (TodoItems) {
          return TodoItems.query();
        }
      }
    });
}]);
