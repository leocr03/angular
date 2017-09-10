var app = angular.module('pageApp', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "index.html"
    }).when("/blue", {
        templateUrl : "public/routing/blue.htm"
    }).when("/green", {
        templateUrl : "public/routing/green.htm"
    }).when("/red", {
        templateUrl : "public/routing/red.htm"
    })
}]);

app.controller('modelBindCtrl', function($scope) {
	$scope.myName = "Leo";
});

app.controller('repeatControllerCtrl', function($scope) {
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

app.controller('filterCtrl', function($scope) {
	$scope.personName = "";

	$scope.people = [
		{personName:'Leonardo', age:32},
		{personName:'Daniela', age:33},
		{personName:'Juliana', age:37},
		{personName:'Simone', age:50},
		{personName:'Neli', age:73}
	];
});

app.controller('httpGetAjaxCtrl', function($scope, $http) {
	$http.get("myData.json")
		.success(function(response){
			$scope.people = response.records;
		});
});

app.controller('repeatInTableCtrl', function($scope, $http) {
	$http.get("myData.json")
		.success(function(response){
			$scope.people = response.records;
		});
});

app.controller('ngShowHideCtrl', function($scope) {

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

app.controller('ngClickCtrl', function($scope) {

	$scope.n1 = 0;
	$scope.doubleResult = 0;

	$scope.getDouble = function(){
		$scope.doubleResult = $scope.n1 * 2;
	};
});

app.controller('validatorCtrl', function($scope) {

	$scope.username = 'An user';
	$scope.email = 'email@provider.com';
	$scope.age = 0;
});

app.service('customSumAndDouble', function() {
    this.sumAndDouble = function (x, y) {
        return (parseInt(x) + parseInt(y)) * 2;
    }
});

app.controller('myOwnServiceCtrl', function($scope, customSumAndDouble) {
   	$scope.theDouble = 0;
   	$scope.theNumber1 = 0;
   	$scope.theNumber2 = 0;

    $scope.getSumAndDouble = function() {
    	$scope.theDouble = customSumAndDouble.sumAndDouble($scope.theNumber1, $scope.theNumber2);
    }
});

app.controller('myTimeCtrl', function($scope, $timeout, $interval) {
   	$scope.color1 = 'red';
   	$scope.color2 = 'green';
   	$scope.currentColor = $scope.color1;
   	$scope.timeoutInSeconds = 3000;
   	$scope.intervalInSeconds = 200;

    $scope.refreshTimeoutIntervalExample = function() {
    	var oldStyle = $scope.myStyle;
		$scope.myStyle = {'background-color':$scope.color1};
		var aux = {'background-color':$scope.color1};
		var myInterval;

		if(myInterval != null) {
			$interval.cancel(myInterval);
		}

		myInterval = $interval(function() {
			$scope.myStyle = ($scope.myStyle != aux)
			? aux
			: {'background-color': $scope.color2};
		}, $scope.intervalInSeconds);

		$timeout(function() {
			$interval.cancel(myInterval);
			$scope.myStyle = oldStyle;
		}, $scope.timeoutInSeconds);
    }
});

app.service('myFormatService', function() {
	this.myFormatFunc = function(x) {
		return "((" + x + "))";
	}
});

app.filter('myFormat', ['myFormatService', function(myFormatService) {
    return function(x) {
        return myFormatService.myFormatFunc(x);
    };
}]);

app.controller('customFormatCtrl', function($scope) {
	$scope.prefix = "";
	$scope.sufix = "";
	$scope.customFormatText = "";
	$scope.refreshCustomFormat = function() {
		$scope.customFormatText = $scope.prefix + "|" + $scope.sufix;
	}
});