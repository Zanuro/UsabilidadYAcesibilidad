var myDatabase = firebase.database();
console.log("jeje");


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
