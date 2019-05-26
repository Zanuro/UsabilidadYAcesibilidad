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
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



  function buscar_autor() {

    myObj = { "autor0":"Don Wislow", "autor1": "Don Wislow", "autor2":"Matilde Asensi","autor3":"Madelaine Miller",
              "autor4":"Dan Brown", "autor5": "Karl May", "autor6":"Leigh Bardugo","autor7":"Arturo Perez Reverte",
              "autor8":"Jonathan Swift", "autor9": "Robert Bryndza", "autor10":"Robert Louis Stevenson","autor11":"Jack London",
              "autor12":"Alexandre Dumas", "autor13": "Juan Gomez Jurado", "autor14":"Jo Nesbo","autor15":"Marcos Chicot",
              "autor16":"Miguel de Cervantes", "autor17": "Frederick Forsyth"
    };
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