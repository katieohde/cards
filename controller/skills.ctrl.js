angular.module('app.core').controller('skillsController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $http.get('/controller/json/skills.json').success(function (data) {
        $scope.skills = data;
    });
}]);