(function(app){

app.controller("dashboardCtrl",["$scope",dashboardCtrl])

function dashboardCtrl($scope)
{	
	// $(".al-title").prepend("Human Resource ");

	$scope.products=[
	{
		name:"Product A",
		yield:80,
		cycle:2,
		tOutput:100
	},
	{
		name:"Product B",
		yield:70,
		cycle:3,
		tOutput:180
	},
	{
		name:"Product C",
		yield:90,
			cycle:5,
	tOutput:130
	}]

}	

}(angular.module("BlurAdmin.pages.dashboard")));