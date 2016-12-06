function func1($scope){
    $scope.name="Gaston";
}

function func2($scope){
	$scope.name="Joe";
}

func1.$inject=['$scope'];
func2.$inject=['$scope'];

var app = angular.module("angle");

app.controller('myController1',func1);
app.controller('myController2',func2);

app.directive('personFav',function(){
	return {
		scope: {
			name: '@',
			personNickname: '@nickName',
			personColor: '@favColor',
			personCity: '@favCity'
		},
		controller:function($scope){
			console.log($scope.name);
			$scope.personNickname = '"'+$scope.personNickname+'"';
			console.log($scope.personNickname);
			console.log($scope.personColor);
			console.log($scope.personCity);

		},
		template: '<em>{{name}}</em><br><em>{{personNickname}}</em><br><em>{{personColor}}<br><em>{{personCity}}</em><br>'
	}
})