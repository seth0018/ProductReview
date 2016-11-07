app.controller('categoriesCtrl', ["$scope", "$stateParams", "dataItem", function ($scope, $stateParams, dataItem) {
    dataItem.getAll().then(
        function (response) {
            $scope.dataJson = response.data;
            console.log($scope.dataJson);
        },
        function (err) {
        	console.log("Error" + err);
        });

}])