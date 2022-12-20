// App.js
// Script encargado de configurar el servidor y dar respuesta a las peticiones
// Dependencias
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Importamos rutas
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/product.routes.js";
// Preparamos el servidor con express
const app = express();


// app.disable('etag');     //Disable cache 304 code
app.use(cors());            //Open connection 
app.use(morgan("dev"));     //view logs in console
app.use(express.json());    //Body JSON


//linea que enruta los servicios 
app.use(indexRoutes);
app.use(productRoutes);


// Rutas fuera de alcance
app.use((req, res, next) => {
    res.status(404).send('No se encontro tu pagina')
    next()
});


export default app;
