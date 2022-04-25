// Importando librerías
const express = require('express')
const exphbs = require('express-handlebars')
//console.log(exphbs)
const path = require('path')
//console.log(path)
const app = express()
//console.log(app)
const PORT = process.envPORT || 3000
// Servidor a la escucha
app.listen(PORT, () => console.log(`Server ON PORT ${PORT}`))

// Se establece que el motro de plantillas sera handlebars
app.set('view engine', '.hbs')
// método “engine” para definir el objeto de configuración
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/components'),
    defaulLayout: "main",
    extname: ".hbs",
  })
)
// middlewares
//app.use(express.urlencoded({ extended: false }));

//Defino la carpeta publica
app.use(express.static(__dirname + '/public'))
//se importan los códigos fuente de nuestras dependencias desde la carpeta node_modules
app.use('/bootstrapCss', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/BootstrapJs', express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))

// Ruta raíz que  devuelve el array con los productos
app.get('/', (req, res) => {
  res.render('Dashboard', {
    productos: ['Banana', 'Cebollas', 'Lechuga', 'Papas','Pimenton','Tomate']
  })
})
