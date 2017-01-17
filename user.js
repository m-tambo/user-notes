console.log('User Notes exercise')

const app = angular.module('userNotes', ['ng-Route'])

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
         controller: 'mainCtrl',
         templateUrl: 'partials/register.html'
      })
      .otherwise({
         redirectTo: '/login'
      })
})


// ______controllers______

app.controller('loginCtrl', function($scope) {

})

app.controller('newCtrl', function($scope) {

})

app.controller('notesCtrl', function($scope) {
   console.log('___this is the notes page___')

   $http.get('')
   .then( () => {

   })
})

app.controller('mainCtrl', function($scope) {

})
