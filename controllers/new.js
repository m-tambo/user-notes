app.controller('newCtrl', function($scope, $http, $location) {
   $scope.addNote = function () {
      $location.path('/notes')
   }
})
