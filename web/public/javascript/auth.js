
window.alert("d");
function register(){
    window.alert("de");
    //document.getElementById("aut").addEventListener('click',function(){
        window.alert("hg");
        var email=document.getElementById("mail").value;
        console.log(email);
        var password=document.getElementById("pass").value;
        console.log(password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            console.log("error");
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            // ...
        });
        window.alert("usuario creado");    
   // })
}

function signup(){
document.getElementById("signin").addEventListener('click',function(){
    var email=document.getElementById("mail").value;
    console.log(email);
    var password=document.getElementById("pass").value;
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
    });
})
}
