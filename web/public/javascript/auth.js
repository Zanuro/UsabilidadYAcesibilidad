


function register(){
//if(document.getElementById("aut").addEventListener('click',function(){
    console.log("entra");
    console.log(document.getElementById("mail").value);
    console.log(document.getElementById("pass").value);
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("mail").value,document.getElementById("pass").value)
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

