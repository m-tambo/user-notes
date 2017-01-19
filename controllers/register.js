
app.controller('registerCtrl', function($scope, $location) {

   $scope.submit = function () {
      $location.path('/notes')
   }

})
