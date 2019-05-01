var myDatabase = firebase.database();


document.getElementById("submit").addEventListener('click',function(){
    var generos=["comedia","aventura","policiaca","historia","ficcion","clasicos"];
    let bool;
    if(document.getElementById("libro").value === ""){
        document.getElementById("libro").style.borderColor="red";
        document.getElementById("libro")+="Rellena este campo";
    }
    else{
        document.getElementById("libro").style.borderColor="green";
    }
    if(document.getElementById("nombre").value === ""){
        document.getElementById("nombre").style.borderColor="red";
        document.getElementById("nombre").innerHTML="Rellena este campo";
    }
    else{
        document.getElementById("nombre").style.borderColor="green";
    }
    if (document.getElementById("genero").validity.patternMismatch){  
        bool=false;  
        document.getElementById("genero").style.borderColor="red";
    }  
    else {  
        document.getElementById("genero").style.borderColor="green";
        bool=true;
    }
    if(bool=true){
        var refDB = myDatabase.ref().child('libros');
        var refDC = refDB.child(document.getElementById("libro").value);
        var obj={
            autor: document.getElementById("nombre").value,
            age: document.getElementById("agnos").value,
            genero: document.getElementById("genero").value,
            isbn: document.getElementById("isbn").value,
        };
        refDC.set(obj);
    }
})

document.getElementById("change").addEventListener('click',function(){
    var generos=["comedia","aventura","policiaca","historia","ficcion","clasicos"];
    let bool;
    if(document.getElementById("libro").value === ""){
        document.getElementById("libro").style.borderColor="red";
    }
    else{
        document.getElementById("libro").style.borderColor="green";
    }
    if(document.getElementById("nombre").value === ""){
        document.getElementById("nombre").style.borderColor="red";
    }
    else{
        document.getElementById("nombre").style.borderColor="green";
    }
    if (document.getElementById("genero").validity.patternMismatch){  
        bool=false;  
        document.getElementById("genero").style.borderColor="red";
    }  
    else {  
        document.getElementById("genero").style.borderColor="green";
        bool=true;
    }
    if(bool=true){
        var refDB = myDatabase.ref().child('libros');
        var refDC = refDB.child(document.getElementById("libro").value);
        var obj={
            autor: document.getElementById("nombre").value,
            age: document.getElementById("agnos").value,
            genero: document.getElementById("genero").value,
            isbn: document.getElementById("isbn").value,
        };
        refDC.update(obj);
    }
})

function storeData(){
    var inputemail=document.getElementById("mail").value;
    var inputpass=document.getElementById("pass").value;
    var inputname=document.getElementById("name").value;
    var inputsurname=document.getElementById("surname").value;
   
    window.alert("jaja");
    firebase.auth().createUserWithEmailAndPassword(inputemail, inputpass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('usuario en uso'); 
      
    });
    var refDB = myDatabase.ref().child('Users');
    var refDC = refDB.child(document.getElementById("nombre_contacto").value);
    var obj={
        name: inputname,
        email: inputemail,
        surname: inputsurname 
    }
    refDC.set(obj);    
}
    
function signin(){
        var inputemail=document.getElementById("mail").value;
        var inputpass=document.getElementById("pass").value;
        
        firebase.auth().signInWithEmailAndPassword(inputemail, inputpass).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            if(errorMessage==''){alert('autenticacion correcta')}
            else{alert('autenticacion incorrecta');} 
            });
}