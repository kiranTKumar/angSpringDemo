/*global angular*/

var foodMenuApp = angular.module("foodMenuApp",[])
		          .config(function($routeProvider){
			$routeProvider.when('/addMenuItem', {
				templateUrl:"addMenuItem.html",
				controller:'foodMenuController'
			});
		          });
foodMenuApp.controller("foodMenuController",function($scope){
	$scope.message="This is a mesage from scope";
});