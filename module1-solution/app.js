(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.foodList = '';
    $scope.outComeMessage = '';

    $scope.kek = function() {
      if (0 === $scope.foodList.length) {
        $scope.outcomeMessage = 'Please enter data first';
      } else if ($scope.foodList.split(',').length > 3) {
        $scope.outcomeMessage = 'Too much!';
      } else {
        $scope.outcomeMessage = 'Enjoy!';
      }
    }
  };
}());
