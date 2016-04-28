app.controller('myCtrl', function($scope) {
			var d = new Date();
    		var n = d.toUTCString();
		    $scope.time= n;