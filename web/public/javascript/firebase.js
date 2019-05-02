var myDatabase = firebase.database();

var bool_genero=false;
var bool_title=false,bool_autor=false,bool_agno=false,bool_isbn=false;

document.getElementById("submit").addEventListener('click',function(){
    
    var generos=["Comedia","Aventura","Policiaca","Historia","Ficcion","Clasicos"];
    if(document.getElementById("libro").value === ""){
        document.getElementById("libro").style.borderColor="red";
        document.getElementById("alerta-title").innerHTML="Aqui se debe rellenar con el titulo del libro";
        bool_title=false;
    }
    else{
        document.getElementById("libro").style.borderColor="green";
        document.getElementById("alerta-title").innerHTML="";
        bool_title=true;

    }
    if(document.getElementById("nombre").value === ""){
        document.getElementById("nombre").style.borderColor="red";
        document.getElementById("alerta-autor").innerHTML="Aqui se debe rellenar con el autor del libro";
        bool_autor=false;
    }
    else{
        document.getElementById("nombre").style.borderColor="green";
        document.getElementById("alerta-autor").innerHTML="";
        bool_autor=true;

    }
    if (document.getElementById("agnos").value === "" || document.getElementById("agnos").value < "1900" || document.getElementById("agnos").value > "2019"){
        document.getElementById("agnos").style.borderColor="red";
        document.getElementById("alerta-agno").innerHTML="No se ha introducido un valor o bien el valor es mayor que 2019 o menor que 1900";
    }
    else{
        document.getElementById("agnos").style.borderColor="green";
        document.getElementById("alerta-agno").innerHTML= " ";

    }
    if (!generos.includes(document.getElementById("genero").value)){  
        bool_genero=false;  
        document.getElementById("genero").style.borderColor="red";
        document.getElementById("alerta-genero").innerHTML="Los generos disponibles son: Comedia Aventura Policiaca Historia Ficcion Clasicos";
    }  
    else {  
        document.getElementById("genero").style.borderColor="green";
        bool_genero=true;
        document.getElementById("alerta-genero").innerHTML= " ";
    }
    if (document.getElementById("isbn").value.length != 13){
        document.getElementById("isbn").style.borderColor="red";
        document.getElementById("alerta-isbn").innerHTML="Debe introducirse un ISBN de exactamente 13 cifras";
    }
    else {
        document.getElementById("isbn").style.borderColor="green";
        document.getElementById("alerta-isbn").innerHTML="";

    }
    if(bool_genero==true && bool_title==true && bool_autor==true){
        alert('El libro se ha añadido con exito');
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

document.getElementById("reset").addEventListener('click',function(){
    $('#reset').trigger("reset")
})
document.getElementById("change").addEventListener('click',function(){
    var generos=["comedia","aventura","policiaca","historia","ficcion","clasicos"];
    var bool;
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
    if(bool==true){
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