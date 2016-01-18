angular.module('myApp', [])


.controller('todoController', ['$scope', function($scope){
	$scope.todos = [
		{'title':'Bulid a ToDo app', 'done':false}
	];
	
	$scope.addtodo = function(){
		$scope.todos.push({'title': $scope.newtodo, 'done':false})
		$scope.newtodo = ''
		
		console.log( 'p3ni5' );
	}
	
	$scope.clearList = function(){
		$scope.todos = $scope.todos.filter(function(val){
			return !val.done
		})
	}
}])


