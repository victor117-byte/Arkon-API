export const paginadaModel = async(model,page,limit) => {

    // Creamos indices deacuerdo al req
    const startIndex = (page - 1 ) * limit
    const endIndex = page  * limit

    // inicializamos variable de respuesta
    const res_pag_products = {}
    
    // Condicionamos next, en caso de que el index final sea menor a la longitud del modelo(respuesta)
    // muestre la siguiente pag
    if (endIndex < await model.countDocuments().exec()) {
      
      res_pag_products.next ={
        page:page + 1,
        limit: limit
      }
    }

    // Condicionamos previous en caso de no tener ninguno
    if (startIndex > 0) {
      
      res_pag_products.previous ={
        page:page - 1,
        limit: limit
      }
    }

    // Asignamos index a la respuesta
    res_pag_products.res_pag_products =  await model.find().limit(limit).skip(startIndex).exec()
    // console.log(res_pag_products)
    return (res_pag_products)
}

export const paginadaJson = async(model,page,limit) => {

    // Creamos indices deacuerdo al req
    const startIndex = (page - 1 ) * limit
    const endIndex = page  * limit

    // inicializamos variable de respuesta
    const res_pag_products = {}
    
    // Condicionamos next, en caso de que el index final sea menor a la longitud del modelo(respuesta)
    // muestre la siguiente pag
    if (endIndex < await model.length) {
      
      res_pag_products.next ={
        page:page + 1,
        limit: limit
      }
    }

    // Condicionamos previous en caso de no tener ninguno
    if (startIndex > 0) {
      
      res_pag_products.previous ={
        page:page - 1,
        limit: limit
      }
    }

    // Asignamos index a la respuesta
    res_pag_products.res_pag_products =  await model.slice(startIndex, endIndex)
    // console.log(res_pag_products)
    return (res_pag_products)
}  