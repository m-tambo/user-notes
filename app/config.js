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
