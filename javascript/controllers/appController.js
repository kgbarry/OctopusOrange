angular.module("app", [])
    .controller("appController", [
        "$scope",
        function ($scope) {
            $scope.test = "Template";
        }
    ])
