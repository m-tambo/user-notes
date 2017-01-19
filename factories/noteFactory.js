app.factory('noteFactory', function ($http) {
   return {
      getNotes : () => {
         return $http.get('https://user-notes-exercise.firebaseio.com/.json')
         .then( function(info) {
            console.log(info)
            return info.data.user1a
         })
      }
   }
})
