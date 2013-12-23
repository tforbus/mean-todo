// Initializing modules to inject into the application.
angular.module('Todo.Controllers', []);
angular.module('Todo.Directives', []);
angular.module('Todo.Resources', ['ngResource']);

// Initializing the application with a dependency on routes and other modules.
angular.module('Todo', [
  'ui.router',
  'Todo.Controllers',
  'Todo.Directives',
  'Todo.Resources'
]);

// This array syntax is so Angular can deal with minification.
// Angular uses dependency injection, so the variable names actually matter.

// Using the UI-Router over the traditional Angular router gives you some nice 
// features. Now it's easy to have nested views, and you can reference URLs by 
// their name rather than needing to memorize the path for every route.
//
// github.com/angular-ui/ui-router
angular.module('Todo').config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/error');

  $stateProvider

    .state('index', {
      url: '/',
      templateUrl: '/app/views/index.html',
      controller: 'IndexCtrl',
      resolve: {
        injectedItems: function (TodoItems) {
          return TodoItems.query();
        }
      }
    })

    // You can link to this page by referencing the first parameter 
    // of the state. <a ui-sref='account'>Your Account</a>
    // Now you don't need to memorize routes.
    .state('account', {
      url: '/account',
      templateUrl: '/app/views/account.html',
      controller: 'AccountCtrl'
    })

    // For more information about this, check out this video:
    // egghead.io/lessons/angularjs-introduction-ui-router
    .state('account.details', {
      url: '/account/details',
      templateUrl: '/app/views/account-details.html',
      controller: 'AccountCtrl'
    });
}]);
