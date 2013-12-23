angular.module('Todo.Controllers').controller('IndexCtrl', 
    ['$scope', 'TodoItems', 'injectedItems',
    function ($scope, TodoItems, injectedItems) {

  $scope.message = 'Hey, here\'s the stuff you need to do!';
  $scope.newTodo = {
      descroption : '',
      isDone : false
  };
  $scope.todos = injectedItems;


  $scope.addTodo = function() {
    var dbItem = TodoItems.save({}, $scope.newTodo);
    $scope.todos.push(dbItem);
    $scope.newTodo = {};
  };


  $scope.remove = function(index) {
    $scope.todos.splice(index, 1);
  };

}]);
