document.getElementById("auth").addEventListener('click',function(){
    var email=document.getElementById("mail").value;
    var password=document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    window.alert("usuario creado");    
})