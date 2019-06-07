

var myDatabase = firebase.database();

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

var bool_genero=false;
var bool_title=false,bool_autor=false,bool_agno=false,bool_isbn=false,bool_imagen=false;
var img_src;
var myObj ={ "autor0":"Don Winslow", "autor1": "Don Winslow", "autor2":"Matilde Asensi","autor3":"Madelaine Miller",
"autor4":"Dan Brown", "autor5": "Karl May", "autor6":"Leigh Bardugo","autor7":"Arturo Perez Reverte",
"autor8":"Jonathan Swift", "autor9": "Robert Bryndza", "autor10":"Robert Louis Stevenson","autor11":"Jack London",
"autor12":"Alexandre Dumas", "autor13": "Juan Gomez Jurado", "autor14":"Jo Nesbo","autor15":"Marcos Chicot",
"autor16":"Miguel de Cervantes", "autor17": "Frederick Forsyth"
};

  document.getElementById("submit").addEventListener('click',function(e){
    
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
    if (document.getElementById("imagen-libro").value === ""){
        document.getElementById("imagen-libro").style.borderColor="red";
        document.getElementById("alerta-imagen").innerHTML="Debe introducirse una imagen";
    }
    else {
        document.getElementById("imagen-libro").style.borderColor="green";
        document.getElementById("alerta-imagen").innerHTML="";

    }
    if(bool_genero==true && bool_title==true && bool_autor==true){
        alert('El libro se ha añadido con exito');
        var refDB = myDatabase.ref().child('libros');
        var refDC = refDB.child(document.getElementById("libro").value);
        
        //console.log(img_src);
        
        var obj={
            autor: document.getElementById("nombre").value,
            age: document.getElementById("agnos").value,
            genero: document.getElementById("genero").value,
            isbn: document.getElementById("isbn").value,
            imagen: img_src,
        };
        refDC.set(obj);
    }
        get_put_authors(document.getElementById("nombre").value);

})

document.getElementById("reset").addEventListener('click',function(){
    $('#reset').trigger("reset")
})



var fileReader = new FileReader();
var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

fileReader.onload = function (event) {
  var image = new Image();
  
  image.onload=function(){
      document.getElementById("img-libro").src=image.src;
      document.getElementById("img-libro").alt=document.getElementById("libro").value;
      /*
      var canvas=document.createElement("canvas");
      var context=canvas.getContext("2d");
      canvas.width=image.width/4;
      canvas.height=image.height/4;
      context.drawImage(image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          canvas.width,
          canvas.height
      );
      */
      //document.getElementById("upload-Preview").src = canvas.toDataURL();
  }
  image.src=event.target.result;

  img_src = event.target.result;
};

var loadImageFile = function () {
  var uploadImage = document.getElementById("imagen-libro");
  
  if (uploadImage.files.length === 0) { 
    return; 
  }
  
  var uploadFile = document.getElementById("imagen-libro").files[0];
  if (!filterType.test(uploadFile.type)) {
    alert("Please select a valid image."); 
    return;
  }
  
  fileReader.readAsDataURL(uploadFile);
}


function buscar_titulo() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-title');
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista-libros");
    li = ul.getElementsByTagName('li');
    
    console.log(li);

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      console.log(a);
      txtValue = a.textContent || a.innerText;
      txtValue = txtValue.replace("more_vert"," ");
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



  function buscar_autor() {

    get_put_authors("");
    var input, filter, ul, li, a, i, txtValue,nombre;
    input = document.getElementById('search-author');
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista-libros");
    li = ul.getElementsByTagName('li');


    //console.log(li);

    for (i = 0; i < li.length; i++) {
    
        nombre = 'autor' + i;
        console.log(nombre);
        txtValue = myObj[nombre];
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  function get_put_authors(input){

    if(input === ""){
        
        return myObj;
      
    }
    else {
      var count = Object.keys(myObj).length;
      var prop = "autor" + count;
      myObj[prop] = input;
    }
  }
  