// Script encargado de las rutas de cada producto/servicio de la API
// importamos routes
import { Router } from "express";


// importamos funciones
import {
     getProducts,
     // createdProduct,
     // updateProduct,
     // deleteProduct,
     productsID,
     productsColonia,
     productsCoordenada
} from "../controllers/products.controller.js"

// inicializamos router
const router = Router()



// Definicion get product por id_product  -> OK
router.get('/productsID', productsID)

// Definicion get products por Colonia -> OK
router.get('/productsColonia/:Colonia', productsColonia)

// Definicion get ordenamiento por proximidad -> 80%
router.get('/productsCoordenada', productsCoordenada)



// -> Router CRUD
// Definicion GET products -> OK
router.get('/products', getProducts) //-> GET Paginado

// // Definicion POST creacion de producto -> OK
// router.post('/products', createdProduct)

// // Definicion DELETE eliminar producto
// router.delete('/products', deleteProduct)

// // Definicion PUT actualizar producto
// router.put('/products', updateProduct)


// -> Exportamos Router
export default router