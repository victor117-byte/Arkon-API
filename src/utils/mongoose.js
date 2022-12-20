// importamos mongoose
import mongoose from "mongoose";
// importamos variables de entorno
import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env["MONGODBLOCAL_URI"];


// funcion async que se ecarga de conectarse a una base de datos mongodb
// retorna MONGO_db conectado en caso de exito, si no retorna el error
export async function connectToDB() {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb Connected");
  } catch (error) {
    console.error(error);
  }
}

