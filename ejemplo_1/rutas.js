// En este archivo vamos a definir todas las 
// rutas que manejada nuestra app, por ahora tenemos / y /tareas
var rutas = function(config){

	// Pagina principal
	config.get("/", function(req, res) {
		// Renderizamos la vista con /index.js
		// Ademas enviamos informacion para que la vista la use
		res.render("index", {
			"APP_TITULO" : config.get("APP_TITULO"),
			"str" : config.get("strings")
		});
	})

	// Cuando el usuario se autentica mostramos las tareas
	config.get("/tareas", function(req, res) {
		
	})
}
exports.rutas = rutas;