var VennfinityApp = angular.module("VennfinityApp", []);

VennfinityApp.controller("VennfinityFun", ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data.json').success(function(data) {
            $scope.guitarVariable = data;
        });
    }
]);