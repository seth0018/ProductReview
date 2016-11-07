var app = angular.module('MyApp', ['ui.bootstrap', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/categories');
    $stateProvider
        .state("categories", {
            templateUrl: 'templates/categories.html',
            url: '/categories',
            controller: 'categoriesCtrl'
            
        })
 .state('books', {
            templateUrl: 'templates/categoriesBook.html',
            url: '/categories/:categoryID',
            controller: 'categoriesBookCtrl'
        })
  .state('books.detail', {
            templateUrl: 'templates/listDetail.html',
            url: '/:bookID',
            controller: 'listDetailCtrl'
        })
    }])
        .factory('dataItem', function ItemsFactory($http) {
    return {
        getAll: function () {
            return $http({
                method: 'GET',
                url: 'data.json'
            });

        }
    }
})