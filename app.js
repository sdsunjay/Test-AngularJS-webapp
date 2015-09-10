// MODULE
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'view/main.html',
		controller: 'mainController'
	})
	.when('/second',{
		templateUrl: 'view/second.html',
		controller: 'secondController'
	})
});
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);
