      angular.module(‘app’, []);

  // create the todo controller module
  
  angular.module(‘app’).controller(‘todoController’ , [‘$scope’, function($scope)  {
     $scope.sort = ‘priority’;
			$scope.newTodo = { } ;
         $scope.todos = [
{ text: “A low priority item”, priority: “3” }
 ];  
$scope.addTodo = function () {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = { };
};
			$scope.getToDoClass = function(todo) {
			Switch(todo.priority) {
				case “1”: return  ‘danger’;
				case “2”’: return ‘warning’;
				case “3”: return ‘info’;
}
};
} ] );   
