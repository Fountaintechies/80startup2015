angular.module('startup.controllers', [])
  .controller('myController', function($scope) {
  	console.log("in controller");



  	$scope.showdetails=function(unit){
      unitdetailservice.data=unit;
      $state.go('app.search_list_details');
      $scope.uploadUrl = 'www/templates/';
	$scope.artwork= { };

	$http.get(baseURL + 'getoverview').success(function(res) {
		//$scope.artwork = res;
		console.log(res);
		console.log('in home___________');
		if (res.status == 'false') {
			alert(res.message);
		} else {
		$scope.artwork=res;
		}

	}).error(function() {
		alert("Please check your internet connection or data source..");
	});
    }
  	
  });


