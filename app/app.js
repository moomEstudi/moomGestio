const firebaseConfig = {
    apiKey: "AIzaSyB18AEfz9T1ncXWG7gbdv_VO8pFXuJqnDM",
    authDomain: "moomgestio.firebaseapp.com",
    projectId: "moomgestio",
    storageBucket: "moomgestio.firebasestorage.app",
    messagingSenderId: "400919933515",
    appId: "1:400919933515:web:f35a7425821719350913ce"
  };

  // Inicialitza Firebase
firebase.initializeApp(firebaseConfig);

// Inicialització de l'aplicació AngularJS amb ngRoute i AngularFire
var app = angular.module('accountingApp', ['ngRoute', 'firebase']);

// Configuració de rutes
app.config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'AuthController'
      })
      .when('/expenses', {
        templateUrl: 'app/views/expenses.html',
        controller: 'ExpenseController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
  

app.run(['$rootScope', '$location', function($rootScope, $location) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $rootScope.user = user; // Desa l'usuari al $rootScope
      } else {
        $rootScope.user = null;
        if ($location.path() !== '/login') {
          $location.path('/login'); // Redirigeix si no està autenticat
        }
      }
    });
  }]);
  
  