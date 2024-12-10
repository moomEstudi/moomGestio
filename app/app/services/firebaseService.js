app.factory('FirebaseService', ['$firebaseArray', function($firebaseArray) {
    var dbRef = firebase.database().ref(); // Referència a la base de dades
  
    return {
      getExpenses: function() {
        return $firebaseArray(dbRef.child('expenses')); // Retorna la llista de despeses
      }
    };
  }]);

    