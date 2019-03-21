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
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems, options);
});


$(".dropdown-trigger").click(function(){
	   alert("aham");
	 //$(".dropdown-trigger").dropdown();
},
function(){
  alert("Bye");
});


//window.alert('otro');

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
			for( var i in "Productos"){
				console.log(Productos[i].Nombre);
			}
		}
};

function devolver_monedas(cantidad){

	var tipo_monedas = [1,2,5];

	if(cantidad < tipo_monedas[2]){

	}
}