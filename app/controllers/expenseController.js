app.controller('ExpenseController', ['$scope', 'FirebaseService', function($scope, FirebaseService) {
    $scope.expenses = FirebaseService.getExpenses();
  
    $scope.addExpense = function() {
      if ($scope.expense) {
        $scope.expenses.$add({
          description: $scope.expense.description,
          amount: $scope.expense.amount,
          date: $scope.expense.date
        });
        $scope.expense = {}; // Reseteja el formulari
      }
    };
  }]);
  app.controller('ExpenseController', ['$scope', function($scope) {
    $scope.logout = function() {
      firebase.auth().signOut().then(function() {
        console.log('Sessió tancada');
      });
    };
  }]);
    