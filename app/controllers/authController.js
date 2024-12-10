app.controller('AuthController', ['$scope', function($scope) {
    // Configuració del proveïdor d'autenticació
    var uiConfig = {
      signInSuccessUrl: '/', // URL on es redirigeix després de l'inici de sessió
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      tosUrl: '/terms-of-service', // URL dels termes del servei
      privacyPolicyUrl: '/privacy-policy' // URL de la política de privacitat
    };
  
    // Inicialitza FirebaseUI
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }]);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Usuari connectat:", user.email);
    } else {
      console.log("No hi ha cap usuari connectat.");
    }
  });  