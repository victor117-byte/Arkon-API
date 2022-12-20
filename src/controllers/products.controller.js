// Script que contendra la logica de la API

// importamos modelo/Schema
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { getDistanceBetweenPoints } from "./distancia.2.puntos.js";
import { paginadaModel, paginadaJson } from "./products.paginated.js";
// import { json } from "express";



// Definicion de Consultar Paginada (GET) -> OK
export const getProducts = async (req, res) => {
  // Creamos constatntes page y limit
  const page  = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10

  // Respuesta apoyandonos de la funcion PaginadaModel
  const result = (await paginadaModel(Product,page,limit))
  res.json(result)
}

// Definicion consulta paginada por proximidad -> In progress 80%
export const productsCoordenada = async (req, res) => {
    // -> Datos de paginacion

  // Creamos constatntes page y limit
  const page  = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 3

  // constante con productos
  const products = await Product.find()

  // Definicion de parametro de orden
  let latitude1  = parseFloat(req.query.lat)
  let longitude1 = parseFloat(req.query.len)
  
  // Creacion de json agregando la distancia entre el punto dado
  const conjuntoDistancias = getDistanceBetweenPoints(products, latitude1, longitude1)
  

  // Ordenamiento de distancias de ascendente 
  let documentos = conjuntoDistancias.sort((a,b) => {
    if (a.distancia < b.distancia){
      return -1
    } else if (a.distancia > b.distancia){
      return 1
    } else {
      return 0
    }
  })

  // Paginacion de los documentos ordenados 
  console.log(documentos)
  const result = (await paginadaJson(documentos,page,limit))

  res.json(result)

}

// Definicion busqueda por id_product (GET) -> OK
export const productsID = async (req, res) => {
  const id = req.query.id_product
  console.log(req.query.id_product)
  Product.find({id_product:id}, async (error, doc) =>{
    if(error){
      res.json('Error')
    }else{
      // Respuesta
      // console.log(doc)
      const result = doc
      // console.log(result)
      res.json(result)
    }
  })
} 

// Definicion busqueda por Colonia (GET) -> OK
export const productsColonia = async (req, res) => {  
  // Creacion de constantes de los Parametro en la request
  const page  = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  console.log(req.params.Colonia)
  Product.find({colonia:req.params.Colonia}, async (error, documentos) =>{
    if(error){
      res.json('Error')
    }else{
      // Respuesta
      // console.log(documentos)
      const result = (await paginadaJson(documentos,page,limit))
      // console.log(result)
      res.json(result)
    }
  })
}



// -> crud

// // Definicion de creacion de producto (POST) -> OK
// export const createdProduct = async (req, res) => {
//     // cuerpo enviado por usuario
//     // console.log(req.body)
//     // almacenamos el body en constantes
//     const {
//         id_product,
//         program_name,
//         installation_date,
//         latitude,
//         length,
//         colonia,
//         alcaldia} = req.body

//     // Definimos la creacion del nuevo producto
//     const product = new Product({
//         id_product,
//         program_name,
//         installation_date,
//         latitude,
//         length,
//         colonia,
//         alcaldia
//     })
//     await product.save()
//     // Mensaje de respuesta
//     // res.json(product)
//     res.json('received:')
// }

// // Definicion de eliminar product (DELETE) 
// export const deleteProduct = async (req, res) => {

//   return res.send('received')

// }

// // Definicion Actualizar prodict (PUT) 
// export const updateProduct = async (req, res) => {

// }
