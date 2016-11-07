app.controller('categoriesBookCtrl', ["$scope", "$stateParams", "dataItem", function ($scope, $stateParams, dataItem) {

    $scope.books = [];
    $scope.booksCat = [];
    dataItem.getAll().then(
        function (response) {
            $scope.categoryID = $stateParams.categoryID;
            $scope.allData = response.data;
            $scope.books = $scope.allData.books;
            var numberofBooks = $scope.books.length;
            for (var i = 0; i < numberofBooks; i++) {
                if ($scope.books[i].cat_id == $scope.categoryID) {
                    $scope.booksCat.push($scope.books[i]);
                }
                else{
                    console.log("book");
                }
            }
        },
        function (err) {});
}]);