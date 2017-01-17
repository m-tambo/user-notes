console.log('User Notes exercise')

lett app = angular.module('userNotes', ['ng-Route'])

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
         controller: 'mainCtrl',
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
