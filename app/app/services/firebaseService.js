app.factory('FirebaseService', ['$firebaseArray', function($firebaseArray) {
    var dbRef = firebase.database().ref(); // Referència a la base de dades
  
    return {
      getExpenses: function() {
        return $firebaseArray(dbRef.child('expenses')); // Retorna la llista de despeses
      }
    };
  }]);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Usuari connectat:", user.email);
    } else {
      console.log("No hi ha cap usuari connectat.");
    }
  });
    