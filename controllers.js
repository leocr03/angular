var pageApp = angular.module('pageApp', []).controller('modelBindCtrl', function($scope) {
	$scope.myName = "Leo";
});


pageApp.controller('repeatControllerCtrl', function($scope) {
	$scope.number1 = 0;
	$scope.number2 = 0;
	$scope.theResult = [];

	$scope.getResult = function() {
		var result=[
			{display:$scope.number1 + ' + ' + $scope.number2, result:$scope.number1 * 1 + $scope.number2 * 1},
			{display:$scope.number1 + ' - ' + $scope.number2, result:$scope.number1 - $scope.number2},
			{display:$scope.number1 + ' * ' + $scope.number2, result:$scope.number1 * $scope.number2},
			{display:$scope.number1 + ' / ' + $scope.number2, result:$scope.number1 / $scope.number2}];

		$scope.theResult = result;
	}
});

pageApp.controller('filterCtrl', function($scope) {
	$scope.personName = "";

	$scope.people = [
		{personName:'Leonardo', age:32},
		{personName:'Daniela', age:33},
		{personName:'Juliana', age:37},
		{personName:'Simone', age:50},
		{personName:'Neli', age:73}
	];
});

pageApp.controller('httpGetAjaxCtrl', function($scope, $http) {
	$http.get("myData.json")
		.success(function(response){
			$scope.people = response.records;
		});
});

pageApp.controller('repeatInTableCtrl', function($scope, $http) {
	$http.get("myData.json")
		.success(function(response){
			$scope.people = response.records;
		});
});

pageApp.controller('ngShowHideCtrl', function($scope) {

	$scope.n1 = 1;
	$scope.n2 = 1;
	$scope.isHigher = false;
	$scope.isLower = false;

	$scope.compareResult = function(){
		if (parseInt($scope.n1) < parseInt($scope.n2)) {
			$scope.isHigher = false;
			$scope.isLower = true;
		} else if (parseInt($scope.n1) === parseInt($scope.n2)) {
			$scope.isHigher = false;
			$scope.isLower = false;
		} else {
			$scope.isHigher = true;
			$scope.isLower = false;
		}
	};
});

pageApp.controller('ngClickCtrl', function($scope) {

	$scope.n1 = 0;
	$scope.doubleResult = 0;

	$scope.getDouble = function(){
		$scope.doubleResult = $scope.n1 * 2;
	};
});

pageApp.controller('validatorCtrl', function($scope) {

	$scope.username = 'An user';
	$scope.email = 'email@provider.com';
	$scope.age = 0;
});

pageApp.service('customSumAndDouble', function() {
    this.sumAndDouble = function (x, y) {
        return (parseInt(x) + parseInt(y)) * 2;
    }
});

pageApp.controller('myOwnServiceCtrl', function($scope, customSumAndDouble) {
   	$scope.theDouble = 0;
   	$scope.theNumber1 = 0;
   	$scope.theNumber2 = 0;

    $scope.getSumAndDouble = function() {
    	$scope.theDouble = customSumAndDouble.sumAndDouble($scope.theNumber1, $scope.theNumber2);
    }
});

