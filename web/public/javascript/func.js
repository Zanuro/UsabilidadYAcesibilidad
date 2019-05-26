/*
$(document).ready(function() {
	$(".dropdown-trigger").dropdown();
	$('.collapsible').collapsible();
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	  });
	$('.tabs').tabs();
});
*/
//document.addEventListener('DOMContentLoaded', function() {
//	var elems = document.querySelectorAll('.dropdown-trigger');
//	var instances = M.Dropdown.init(elems, options);
//});


//window.alert('otro');


firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log("User is signed in.");
		var list = document.getElementById("barra");   // Get the <ul> element with id="myList"
		list.removeChild(list.childNodes[7]);
		list.removeChild(list.childNodes[8]);
	} else {
		console.log("No user is signed in.");
		var list = document.getElementById("barra");   // Get the <ul> element with id="myList"
		list.removeChild(list.childNodes[5]); 
		list.removeChild(list.childNodes[10]);
	}
});

var logou = document.getElementById("logout");

logou.addEventListener("click", function (event) {
	firebase.auth().signOut().then(function() {
		window.alert("el usuario ha cerrado sesión");
		window.location="index.html";
	}).catch(function(error) {
		console.log(error);
	});	  
});
  

function count_element() {
	var count,count1,count2 = 0;
	count = document.getElementsByTagName('p').length;
	count1 = document.getElementsByTagName('a').length;
	count2 = document.getElementsByTagName('ul').length;

	return [count,count1,count2];
	windows.alert(count);
	windows.alert(count1);
	windows.alert(count2);
}

var productos = {

		"Productos": [
			{"Nombre" : "Platano", "Precio" : 1.0},
			{"Nombre" : "Pan", "Precio" : 1.5},
			{"Nombre" : "Hamburguesa", "Precio" : 2.3},
			{"Nombre" : "Agua", "Precio" : 0.8}
		],
		calcular_igic : function() {
			for( var i in productos.Productos){
				//console.log(productos.Productos[i].Nombre);
				console.log(`Precio antes de aplicarle IGIC: ${productos.Productos[i].Nombre} --> ${productos.Productos[i].Precio.toPrecision(3)} \n`);
				productos.Productos[i].Precio += productos.Productos[i].Precio * 0.065
				console.log(`Precio despues de aplicarle IGIC: ${productos.Productos[i].Nombre} --> ${productos.Productos[i].Precio.toPrecision(3)} \n`);
				//return(productos.Productos[i].Nombre);
			}
		}
};


function devolver_monedas(monedas,cantidad){

	if(cantidad >= monedas[2]["key"]){
		cantidad -= monedas[2]["key"];
		monedas[2]["value"] += 1;
		devolver_monedas(monedas,cantidad);
	}
	else if(cantidad < monedas[2]["key"] && cantidad >= monedas[1]["key"]){
		cantidad -= monedas[1]["key"];
		monedas[1]["value"] += 1;
		devolver_monedas(monedas,cantidad);
	}
	else if(cantidad < monedas[1]["key"] && cantidad >= monedas[0]["key"]){
		cantidad -= monedas[0]["key"];
		monedas[0]["value"] += 1;
		devolver_monedas(monedas,cantidad);
	}
	else if(cantidad == 0){
		console.log('No se puede devolver ningun cambio');
	}
	else if(cantidad < monedas[0]["key"]){
		console.log('No hay monedas para poder devolver');
	}
	return monedas;
}


function cambio_monedas(cantidad){

	var monedas = [{key: 1, value: 0},
				   {key: 2, value: 0},
				   {key: 5, value: 0}];

	console.log(`La cantidad es:  ${cantidad}`);
	monedas = devolver_monedas(monedas,cantidad);
	console.log('El cambio que se devuelve es: ')
	for( i in monedas){
		console.log(`${monedas[i]["value"]} monedas de ${monedas[i]["key"]}\n`);
	};
}


$("#boton_registro").click(function(){

const peticion_http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/comments?postId=49';


var id;
peticion_http.open("GET", url);

var nombres = [];
var emails = [];

peticion_http.onreadystatechange = function () {

	if(peticion_http.readyState == 4 && peticion_http.status == 200){
		console.log(peticion_http.responseText);

		//alert(peticion_http.responseText);

		var elementos = JSON.parse(peticion_http.responseText);

		for(var i in elementos){
			nombres.push(elementos[i].name);
			emails.push(elementos[i].email);
		}

		for(var i in nombres){
			$("#nombres").append(`${i} : ${nombres[i]}\n`);
			$("#email").append(`${i} : ${emails[i]}\n`);
		}
		//document.getElementById("").body=elementos.first;
	}
	else{
		console.error('No se ha cargado la pagina');
	}
}

peticion_http.send();
});

/*var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch){
    email.setCustomValidity("Dirección de correo erronea,por favor introduzca una direccion de correo valida!");
  }
  else{
	  email.setCustomValidity("")
  }
});*/

function buscar_titulo() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscar_autor() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');
  
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
	  a = li[i].getElementsByTagName("a")[0];
	  txtValue = a.textContent || a.innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	  } else {
		li[i].style.display = "none";
	  }
	}
  }