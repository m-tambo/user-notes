let notes = []

app.controller('notesCtrl', function($scope, $http, noteFactory) {
   console.log('___this is the notes page___')

   noteFactory.getNotes()
      .then ((obj) => {
         $scope.notes = obj
      })


})
