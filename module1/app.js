(function () {
'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject=["$scope"];
function LunchCheckController($scope) {
    $scope.message = "";


        $scope.tackle = function () {
            console.log("got eatables = " + $scope.eatables);
            if ($scope.eatables == null || $scope.eatables == "") {
                $scope.message = "Please Enter Data First!!";
            } else {
                var res = $scope.eatables.split(",");
                console.log("Got array length = " + res.length);
                if (res.length <= 3) {
                    $scope.message = "Enjoy!!";
                } else {
                    $scope.message = "Too Much!!";
            }

         }
      };
    }

})();
