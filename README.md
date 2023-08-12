# Ecommerce (carrito de compra)

![home_mobile](./front/public/images/home_mobile.png) 

![home product](./front/public/images/product_mobile.png)

## Descripción

Se requiere implementar un carrito de compras simple que traiga toda la info del API local, éste debe contar con las siguientes secciones:

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/minicart-example.png)
- No emplear "CSS frameworks" como Bootstrap, MUI, Semantic UI, etc. 
#### Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con el texto `Add item to cart`.
- Si no hay stock el `action button` debe deshabilitarse.
- Cada ítem en el carro debe tener un `action button` para remover el ítem del carro.
- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.
- Mostrar el rating y número de reviews en el PLP y PDP.
- Usar Redux para mantener el estado global.
- Mantener info de ítems en carrito al recargar la página.

### Herramientas

- Se utilizo Redux Toolkit, para mantener el estado global y hacer lass llamadas a la API, esto ultimo empleando RTK Query.  
- Para el ranting se empleo una libreria de npm llamada React-rating.
- Se mantuvo la info de los ítems en el carrito al recargar la página, usando el local storage
- Los estilo fueron realizados solo con CSS y Saas como preprocesador.
## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`

- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`