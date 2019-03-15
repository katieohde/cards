angular.module('app.core').controller('employeesController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $scope.template = '/templates/resume.html';
    $scope.cat = "Resume";

}]);