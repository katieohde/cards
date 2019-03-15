angular.module('app.core').controller('newsController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $http.get('/controller/json/news.json').success(function (data) {
        $scope.articles = data;
    });
}]);