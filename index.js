import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"
import dotenv from 'dotenv'

dotenv.config({path: "variables.env"})

const app = express();

//Conectar a la base de datos
db.authenticate()
  .then(() => {
    console.log('BDD Conected');
  })
  .catch(error => console.log(error))


//Definimos el puerto y host
//El process.env.PORT sera el puerto asignado para cuando se le haga el deploy y 4000 es para el desarrollo
const port = process.env.PORT || 4000;
const host = process.env.HOST || "0.0.0.0"

//Habilitamos las vistas con pug (Template Engine)
app.set("view engine", "pug");

//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date()

  res.locals.actualYear = year.getFullYear() //Asi declaramos las variables para usarla en las vistas
  res.locals.siteName = "Tramora"

  next(); //Usamos el next para seguir ejecutando el codigo, de lo contrario se quedaria en la variable y no cargaria la pagina
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))

//Definimos la carpeta con los archivos estaticos
app.use(express.static("public"))

//Agregamos lasss rutas a nuestra app principal
app.use("/", router);




app.listen(port, host, () => {
  console.log(`The server is running on port ${port}`);
})
