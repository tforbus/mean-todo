angular.module('Todo.Directives')

.directive('todo', function (TodoItems) {
  return {

    // Restrict the todo-item directive to be an attribute on the markup.
    restrict: 'A',

    // This directive's isolate scope has a property called 'item', 
    // which is passed by a parameter called todo (in this case, the name of 
    // the directive).
    //
    // When you give a directive an isolate scope, you can put the directive 
    // on the page multiple times without conflicts.
    //
    // Something neat is the shorthand version of the bindings.
    // I want onRemove and index to bind to the attributes of the same name, 
    // so there's no need to specify it out fully.
    //
    // '=' is similar to referencing the same object
    // '&' binds to functions
    // '@' treats the value literally (like passing in a string or something)
    scope: {
      item: '=todo',
      onRemove: '&',
      index: '@'
    },

    // Directives can have their own controllers so you don't have to 
    // put methods on the actual controllers (if it makes sense).
    controller: function($scope) {
      $scope.markDone = function() {
        $scope.item.isDone = true;
        TodoItems.update({id: $scope.item._id}, $scope.item);
      };

      // In the view for the directive, when the user clicks the Remove 
      // button, call the function handed down to the directive (onRemove), 
      // and then do some other stuff.
      $scope.remove = function() {
        $scope.onRemove($scope.index);
        TodoItems.delete({id: $scope.item._id}, $scope.item);
      };
    },

    // The template to use for this directive, if any.
    // The HTML from this template will be injected on the page where ever
    // you put <div todo='someItem'></div>
    // This is just a nice way to DRY.
    templateUrl: '/app/templates/todo-item.html'
  };
});
