
var config = {
    apiKey: "AIzaSyCGk645y7ZSl-e1sUHio8DRiN4ytvkMXnU",
    authDomain: "webua1819.firebaseapp.com",
    databaseURL: "https://webua1819.firebaseio.com",
    projectId: "webua1819",
    storageBucket: "webua1819.appspot.com",
    messagingSenderId: "28657746169"
};
 
firebase.initializeApp(config);

function register(){
//if(document.getElementById("aut").addEventListener('click',function(){
    console.log("entra");
    console.log(document.getElementById("mail").value);
    console.log(document.getElementById("pass").value);
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("mail").value,document.getElementById("pass").value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        window.alert(errorMessage);
        // ...
    });
}

function signin(){
//if(document.getElementById("signin").addEventListener('click',function(){
    var email=document.getElementById("mail").value;
    console.log(email);
    var password=document.getElementById("pass").value;
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ...
        console.log(errorCode);
    });
}

