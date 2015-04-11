angular.module('startup.controllers', [])
  .controller('myController', function($scope,$http,$state) {
  	console.log("in controller");
  	$http.get(baseURL + 'listoverview').success(function(res) {
		//$scope.artwork = res;
		console.log(res);
		$scope.company_list = res;
		console.log('in home___________');
		if (res.status == 'false') {
			alert(res.message);
		} else {
		$scope.artwork=res;
		}

	}).error(function() {
		alert("Please check your internet connection or data source..");
	});

	$scope.companyDetails = function(companyid) {
		$http.post(baseURL + 'companyInfo',companyid).success(function(res) {
		//$scope.artwork = res;
		console.log(res);
		//$scope.company_list = res;
		console.log('in companyDetails');
		if (res.status == 'false') {
			alert(res.message);
		} else {
		$scope.artwork=res;
		}

	}).error(function() {
		alert("Please check your internet connection or data source..");
	});
		$state.go('details');
		alert(argument);

	};
  	/*$scope.showdetails=function(){
      
   //   $state.go('app.search_list_details');
      $scope.uploadUrl = 'www/templates/';
	$scope.artwork= { };

	
    }*/
  	
  });


