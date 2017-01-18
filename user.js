console.log('User Notes exercise')

const app = angular.module('userNotes', ['ngRoute'])

app.config(function($routeProvider) {
   $routeProvider
      .when('/login', {
         controller: 'loginCtrl',
         templateUrl: 'partials/login.html'
      })
      .when('/new', {
         controller: 'newCtrl',
         templateUrl: 'partials/new.html'
      })
      .when('/notes', {
         controller: 'notesCtrl',
         templateUrl: 'partials/notes.html'
      })
      .when('/register', {
         controller: 'registerCtrl',
         templateUrl: 'partials/register.html'
      })
      .otherwise({
         redirectTo: '/login'
      })
})


// ______controllers______

app.controller('loginCtrl', function($scope, $location) {
   $scope.submit = function () {
      $location.path('/notes')
      console.log('go')
      // if(firebase.auth().currentUser !== null)
   }
})

app.controller('newCtrl', function($scope, $http, $location) {
   $scope.addNote = function () {
      $location.path('/notes')
   }
})

app.controller('notesCtrl', function($scope, $http) {
   console.log('___this is the notes page___')

   $http.get('https://user-notes-exercise.firebaseio.com/.json')
   .then( function(data) {
      console.log(data)
   })
})

app.controller('registerCtrl', function($scope) {

})
