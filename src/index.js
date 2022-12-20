// Script encargado de inicializar la funcion principal
// asignar el puerto 3000 y inicia el servidor
// Estabelce la conexion a base de datos

// dependencias
import app from "./app.js";
import { connectToDB } from "./utils/mongoose.js";

// funcion main

async function main() {
  await connectToDB();
  app.listen(3000);
  console.log("Server on port", 300);
}

main();
