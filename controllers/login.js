app.controller('loginCtrl', function($scope, $location) {
   $scope.submit = function () {
      $location.path('/notes')
      console.log('go')
      // if(firebase.auth().currentUser !== null)
   }
})
