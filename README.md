# DSI SEMINARIO DCU
Realizar la lectura del documento: "La fábula del diseñador centrado en el usuario" (https://www.userfocus.co.uk/fable/index.html)
 
1.Definir las tareas que se llevarán a cabo en la fase de investigación y diseño conceptual de la aplicación "Club de Lectura".
	Observar varios diseños de aplicaciones similares para tener una idea de la interfaz de usuario que les gusta.
	Identificar a los usuarios y sus problemas. Entender para quien se diseña el producto y su ambiente de trabajo.(cultura de la empresa).
	Soportar las necesidades de todas las personas.
	Perfiles de usuarios
	Que motiva al usuario para seguir utilizando la app
	Tareas críticas (priorizar aquellas tareas que respondan a las necesidades del usuario),investigar con los usuarios para enfocar el trabajo a las metas.
	
2.Definir en el documento los personajes y perfiles de usuario que vayan a usar tu producto y la especificación de requisitos.

Tipos de Usuario
	
    Manager: Usuario único con todos los privilegios y acceso a todo movimiento de cada administrador creado.
    Administrador: Usuario con todos los privilegios sobre el SAS y a cargo de toda la gestión y administración de su zona.
    Supervisor: Usuario a cargo de un administrador, puede crear sesiones y gestionar moderadores y usuarios.
    Moderador: Usuario a cargo de sus propias salas asignadas con capacidad
    Participante: Usuario con capacidad para visualizar las sesiones a la que ha asistido.

	

# Practica-Introduccion al protocolo HTTP.

Entra en las páginas: http://www.gobiernodecanarias.org/istac/api/ https://www3.gobiernodecanarias.org/istac/api/operations/v1.0/operations?limit=5 y utiliza los navegadores Chrome y Firefox para resolver las siguientes cuestiones:

Realiza un informe en el que indiques:

1.Qué peticiones desencadena la consulta.<br />
	
	En la pagina 1 se realiza una peticion de tipo HTTP GET para la api/,a partir de esta se generan todas las demas peticiones HTTP GET(istac.css,logo_stac.jpg,logo_edatos.jpg), y luego devolvera la respuesta con los datos pedidos a estas peticiones.<br />
	En la pagina 2 se realiza una peticion de tipo HTTP GET a operations?limit=5 que contendra todo lo que aparece en el contenido es decir codigo "XML", y luego una peticion GET a data:image/svg+xml, para obtener la imagen svg de la flecha que se utiliza al desplegar el codigo XML.<br />
	
2.¿Qué tipo de petición estás realizando? <br />
	
	En la pagina 1 se realiza una peticion de tipo GET para obtener los datos de la página.<br />
	En la pagina 2 se realiza una peticion de tipo GET para obtener la estructura XML,y a partir de esta se obtendra un svg relacionado con el código.<br />
	
3.Qué código de estatus devuelve.<br />
	
	En la pagina 1 :la peticion a api/ devuelve el valor 200 OK pero cuando se recarga la recupera de la caché que devuelve Not Modified(304),la peticion al fichero .css y las imagenes primero devuelven found(302) y luego las respuestas a estas peticiones devuelven otra peticion de OK con valor 200.<br />
	En la pagina 2 :las dos peticiones tanto a la obtencion del xml como la imagen svg del xml devuelven el valor 200 de OK.<br />
	
4.Qué DNS tiene el servidor.<br />
	
	En la primera pagina: www.gobiernodecanarias.org <br />
	En la segunda pagina: www3.gobiernodecanarias.org <br />

5.Qué IP tiene tiene el servidor.<br />
	
	En la primera pagina: 93.188.137.123:80 para la peticion del fichero que desencadena las demas peticiones,las respuestas con el codigo de css y las images se obtienen del 93.188.137.123:443,mientras que el font-awesome.min.css se obtiene del 104.19.195.151:443.<br />
	En la segunda pagina: 93.188.137.126:443 para la obtencion del xml y del svg del xml.<br />
	
6.¿La página tiene alguna cookie?, ¿Cuáles?.<br />
	
	La primera pagina: Si,tiene una que se llama __cfduid con un valor de: ddf3600caeb2240e1fb273d9dd964ac231545067476, con dominio:.cloudflare.com,y expiry date es 17-12-2019, con la ruta: /istac/api/structural-resources, tamaño de 51 bytes. <br />
	La segunda pagina: tiene tres, la primera se llama __gat con valor 1, la segunda _ga con un array de cuatro elementos con valor "GA1", "2", "1641980567" y "1544664951", y la tercera se llama _gid y su contenido es otro array de tamaño cuatro con los valores  "GA1" ,  “2”,  "1270768101" y  "1544664951".<br />


7.¿Qué idioma acepta?.<br />
	
	En la pagina 1: en-US,en;q=0.9,es;q=0.8,es decir se acepta el ingles de Estados Unidos con un nivel de 'aceptacion' de 0.9(con un orden de preferencia superior/peso) pero tambien el espanol al 0.8(tambien aceptado aunque tiene un orden de preferencia menor que el ingles). <br />
	En la pagina 2: en-US,en;q=0.5,se acepta el ingles de Estados Unidos con un peso de 0.5, es decir tiene una preferencia superior a los otros.<br />
8.Alguna línea de código JavaScript. <br />
	
	La pagina original no tiene funcionalidades de Javascript, pero si pulsamos sobre los titulos se realizan peticiones de jquery y js como esta:
  
   	'window.SwaggerTranslator = {

   		 _words:[],

   		 translate: function(sel) {
    		  var $this = this;
      		  sel = sel || '[data-sw-translate]';

     		 $(sel).each(function() {
       		   $(this).html($this._tryTranslate($(this).html()));

        	   $(this).val($this._tryTranslate($(this).val()));
       		   $(this).attr('title', $this._tryTranslate($(this).attr('title')));
      		   });
    		 },

   		 _tryTranslate: function(word) {
      		     return this._words[$.trim(word)] !== undefined ? this._words[$.trim(word)] : word;
    		 },

    		learn: function(wordsMap) {
		    this._words = wordsMap;
   		 }
 	 };'
   	La segunda pagina no tiene funcionalidades propias de javascript.<br />
9.Alguna línea de código CSS que se aplique. <br />
	
	Primera pagina:
    	  .section h2 a {
       	  color: #999999;
       	  font-size: 18px;
       	  text-decoration: none;} <br />
	Segunda pagina:estilo aplicado a la clase "html-tag":
	  .html-tag {
             color: rgb(136, 18, 128);} <br />
10.Alguna línea de código HTML que se aplique. <br />
 	
	Primera pagina: <a href="http://www.gobiernodecanarias.org/istac/api/structural-resources/v1.0/#/" alt="API de recursos estructurales">API de recursos estructurales</a>
	Segunda pagina: <span class="html-tag">
        	"<operations:operation"
		<span class="html-attribute">
		<span class="html-attribute-name">kind></span>
			"=""
	  		<span class="html-attribute-value">
	        		statisticalOperation#operation</span>
				"""
	   		</span>
	    		">"
	   	</span> 
