(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.output = "";

  $scope.checkIfTooMuch = function () {
    var lunchItems = $scope.lunchList.split (',').filter(function(el) {return el.length != 0});
    if (lunchItems.length > 0) {
      $scope.output = lunchItems.length <= 3 ? "Enjoy!" : "Too much!";
      return $scope.output;
    } else {
      return $scope.output = "Please enter data first";
    }
  };
}

})();
