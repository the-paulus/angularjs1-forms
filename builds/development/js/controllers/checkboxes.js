app.controller('CheckboxesController', ['$scope', function($scope) {
  $scope.message = '';
  $scope.numCBs = 0;

  $scope.submitStaticCBs = function() {
    $scope.message = 'Checkboxes ';
    for (var cb in $scope.checkboxes) {
      if ($scope.checkboxes.hasOwnProperty(cb)) {
        $scope.message += $scope.checkboxes[cb] + ' ';
      }
    }
    $scope.message += 'have been checked.';
  };

  $scope.submitDynamicCBs = function() {
    console.log($scope);
    $scope.dynamic_message = 'There are a total of ' + $scope.checkboxes
      .length + '. Checkboxes ';

    for (var cb in $scope.checkboxes) {
      if ($scope.checkboxes.hasOwnProperty(cb)) {
        $scope.dynamic_message += $scope.dynamicCheckboxes[cb] + ' '
      }
    }
    $scope.message += 'have been checked.';
  };

}]);
