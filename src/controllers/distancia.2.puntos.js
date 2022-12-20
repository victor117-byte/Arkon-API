// export const getDistanceBetweenPoints = (latitude1, longitude1, latitude2, longitude2, unit = 'miles') => {
//     let theta = longitude1 - longitude2;
//     let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
//         Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) +
//         Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
//     );
//     if (unit == 'miles') {
//         return console.log(Math.round(distance, 2));
//     } else if (unit == 'kilometers') {
//         return Math.round(distance * 1.609344, 2);
//     }
// }




export const getDistanceBetweenPoints = (products, latitude1, longitude1, unit = 'kilometers') => {
    // creacion de constantes
    const longitud = products.length
    let datset = []
    // Loop responsable de calculo de distancia y estructura de json
    for (var i = 0; i < longitud; i += 1){

        // variables para calculo
        const latitude2 = products[i].latitude;
        const longitude2 = products[i].length;
        const prod = (JSON.stringify(products[i]))

        // Formula de distancia
        let theta = longitude1 - longitude2;
        let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
            Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) +
            Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
        );
        if (unit == 'miles') {
            let dato_distancia = prod.slice(0,-1) + `,"distancia":` + Math.round(distance, 2) + "}"
            let products_json =  JSON.parse(dato_distancia)
            // console.log(products_json)
            
            datset.push(products_json)

        } else if (unit == 'kilometers') {

            let dato_distancia = prod.slice(0,-1) + `,"distancia":` + Math.round(distance * 1.609344, 2) + "}"
            let products_json =  JSON.parse(dato_distancia)
            // console.log(products_json)
            
            datset.push(products_json)
        }

    } return datset

}


