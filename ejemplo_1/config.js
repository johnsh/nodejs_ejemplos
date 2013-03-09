// La funcion config, recibe como parametro las librerias incluidas en el 
// index
var config = function(libs) {
	// Se crea una nueva aplicacion.
	// Por medio de libs.express(), podemos acceder a la libreria
	var app = libs.express();

	// Variables de configuracion //

	// El framerwork Express permite establecer variables por medio del 
	// metodo set(clave, valor) y obtenerla con get(clave)

	// Es buena practica definir toda esta informacion en un solo lugar
	// De esa manera si necesitamos cambiar algo lo podemos hacer mas facil

	// Tambien es muy util si la aplicacion estara en varios idiomas.

	// En la version 1.1 Ubicaremos todos los String de la app en un archivo
	// Aparte

	app.set("APP_PUERTO", "3000");
	app.set("APP_VISTAS", "./vistas");
	app.set("APP_MOTOR_PLANTILLAS", "jade");
	app.set("APP_TITULO", "Tareas pendientes");
	app.set("APP_ARCHIVOS_ESTATICOS", "./public");

	// Tambien podemos setear una variable que contenga mas de un String.
	// Todo depende de las necesidades.

	app.set("strings",{
		"autenticacion" :  "Debe autenticarse para usar el sistema"
	});
	//////////////////////////////


	app.engine(".html", libs.cons.jade);

	// Establecemos el sistema de plantillas que usara nuestra app
	// en este caso jade.

	// por medio de app.get("APP_MOTOR_PLANTILLAS"),
	// obtenemos el motor de plantillas configurado en las variables

	app.set("view engine", app.get("APP_MOTOR_PLANTILLAS"));

	// Definimos la ubicacion de las plantillas
	app.set("views", app.get("APP_VISTAS"));	

	app.use( libs.express.static( app.get("APP_ARCHIVOS_ESTATICOS") ) )

	// Retornamos la app
	return app;
}
// Exportamos la funcion config para ser usada en el index
exports.config = config;

