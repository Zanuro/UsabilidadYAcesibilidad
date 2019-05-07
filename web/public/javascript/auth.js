


function register(){
//if(document.getElementById("aut").addEventListener('click',function(){
    console.log("entra");
    console.log(document.getElementById("mail").value);
    console.log(document.getElementById("pass").value);
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("mail").value,document.getElementById("pass").value)
      .then(function(Success){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
            
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });
        })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        window.alert(errorMessage);
        // ...
      });
      window.location="index.html";
}

function signin(){
//if(document.getElementById("signin").addEventListener('click',function(){
    var email=document.getElementById("mail").value;
    console.log(email);
    var password=document.getElementById("pass").value;
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(Success){
        window.location="index.html"
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ...
        console.log(errorCode);
      });
    
}

