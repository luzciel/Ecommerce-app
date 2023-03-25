## Para correr el proyecto

- Instalar dependencias: 

En la carpeta root de la aplicacion correr
```js
$ npm install
```

o si usas yarn.
```js
$ yarn install
```

Navegar al directorio front y volver a correr
```js
$ npm install
```

- Correr el proyecto: 
Volver a la carpeta root y correr el siguiente comando

```js
$ npm run dev
```
o si usas yarn.
```js
$ yarn start
```
Para visualizarlo en el navegador utilizar http://localhost:3000


### Herramientas usadas para resolver el problema

- Utilize Redux Toolkit, para mantener el estado global y hacer las llamadas a la API, esto ultimo empleando RTK Query.  
- Para el ranting emplee una libreria de npm llamada React-rating.
- Mantuve la info de los ítems en el carrito al recargar la página, usando el session store
- Los estilo fueron realizados solo con CSS y Saas como preprocesador.
