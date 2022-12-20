**Pipeline Puntos de acceso Wifi en la Ciudad de México**

1. Descripción del proyecto
2. Tecnologías utilizadas
3. Acceso al proyecto
4. Ejemplos de peticiones

1.- Descripción del proyecto

Desarrollo de pipeline utilizando los datos de Puntos de acceso de la Ciuedad de México, con le propósito de ser consultados por medio de una API tipo Rest

Descripción de Repositorio

* En la carpeta actual se encuentran variables de entorno y archivos de configuración para DockerFile, Docker-Compose, package.json y readme
* assets -> Contiene el PDF de la descripción de la prueba técnica, Diagrama de solución en imagen y formato .excalidraw, Así como ejemplos de peticiones desde el cliente a la API
* db -> Contiene el conjunto de datos requeridos para ser almacenar en la base de datos
* SRC -> Esta carpeta contiene el código necesario para la API junto con su conexión a la Base de datos, definición de modelos y de peticiones.
  * controllers - Contiene los controladores (lógica) que debe de tener los endpoinds de la API y las funciones necesarias para la paginación y calculo de distancia entre dos puntos.
  * models - contiene el modelo/schema para la base de datos
  * routes - contiene las rutas a las que se puede consultar este servicio

2.- Tecnologías Utilizadas

Stack Tecnológico: NodeJS, Express, Mongodb, JavaScript

NodeJS: Entorno de servidor

Express: Framework de backend

* morgan: Middleware que registra en los logs las peticiones http que hace un cliente
* mongoose: Nos ayuda a escribir consultas a la base de datos mongodb
* cors: Obtener recursos desde un servidor

Mongodb: Base de datos no relacional

Javascript: Lenguaje principal del backend

5 .- Acceso al proyecto

Consideraciones:

1. Por defecto se requiere que se encuentre disponible el puerto 3000
2. Requiere la instalación de NodeJS, Docker y Docker-Compose
3. Validar la instalación de las dependencias del proyecto con el comando: npm install
4. El proyecto no inicializa con datos, requiere un proceso manual con un script

Instrucciones de ejecución

* Inicializar el proyecto Él proyecto se inicia al ejecutar el archivo Docker-Compose.yml, inicializando la base de datos y la API en el puerto 3000.
  * docker-compose up
* El contenedor api_rest deberá responder "Mongodb Connected" en el caso exitoso de conexión con la base de datos
  * De lo contrario validar las variables de entorno apuntando al contenedor mongo, con el link mongo entre api_rest y mongo en el docker-compose.yml
  * .env: mongodb://mongo/data
* Posteriormente deberá mandar un mensaje "Server on port 3000".
  * Validar que el servidor responda, consultando: http://localhost:3000/ping
  * responda "pong"
* Importar datos: Al terminar el levantamiento se debe abrir el contenedor mymongodb con bash con los siguientes comandos:
  * docker exec -it mymongodb bash
  * mongoimport --db data --collection='products' --file='./db/products_1.json' --jsonArray

5.- Ejemplos de peticiones

Endpoints de la API.

* *page y limit, no son obligatorios, por defecto muestra la pagina 1 y limite de 10 resultados*

1. peticion GET paginada
   http://localhost:3000/products?page=1&limit=3
2. peticion GET Colonia paginada
   http://localhost:3000/productsColonia/SANTO TOMAS?limit=10&page=1
3. peticion Get Producto por ID
   http://localhost:3000/productsID?id_product=Rubén Leñero
4. peticion GET Products cercanos a partir de un punto dado
   http://localhost:3000/productsCoordenada?lat=19.53974&len=-99.14251&page=1&limit=3

Autor: Hernandez Berrios Victor Andres
