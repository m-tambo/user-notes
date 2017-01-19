let notes = []

app.controller('notesCtrl', function($scope, $http) {
   console.log('___this is the notes page___')

   $http.get('https://user-notes-exercise.firebaseio.com/.json')
   .then( function(info) {
      console.log(info)
      return info.data.list
   })
})
