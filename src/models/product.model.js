// Script encargado de definir el modelo del servicio products

// importamos dependencias
import mongoose from "mongoose";


// Definimos modelo de datos
// name -> nombre de producto unico, de tipo String, sin espaciosn al inicio y al final, es requerido
// description -> descripcion de producto de tipo cadena sin espacios al inicio y al final
// price -> precio de tipo numerico y por defecto es 0

const productSchema = mongoose.Schema({
    id_product: {
        type: String,
        index: true,
        trim: true,
        require: true,
        unique: true
    },
    program_name: {
        type: String,
        require: true,
        trim:true
    },
    installation_date: {
        type: Date,
        require: true,
        default:Date.now
    },
    latitude: {
        type: Number,
        default:0
    },
    length: {
        type: Number,
        default:0
    },
    colonia: {
        type: String,
        require: true,
        trim: true
    },
    alcaldia: {
        type: String,
        require: true,
        trim: true
    }

}, {
    timestamo:true
})

// exportamos modelo/Schema como Product
export default mongoose.model('Product', productSchema)