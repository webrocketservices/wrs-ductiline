## Ductiline Website

    Proyecto Web Responsivo con capacidades de CMS y secciones dinamicas para configuraciones al vuelo.

## Techs:

    - Vite builder.
    - React TS: Framework del proyecto con Typescript.
    - Mui5: librería de componentes UI.
    - Animate.css: Librería para animaciones de la UI.
    - Firebase: base de datos como CMS.

## Requerimientos entorno de desarrollo local:

    - NodeJS >= 16
    - NPM >= 9.6
    - ReactJS con Typescript
    - (opcionales) Prettier y esLint

## Requerimientos web de producción:

    - Servidor con capacidad de ejecutar HTML y JS estático.

## Configuración del proyecto:

    -

## Vite CLI:

    - Correr el proyecto de manera local:
    **npm run dev**
    - Crear una versión de producción del sitio:
    **npm run build**

## Como hacer despliegue a producción del sitio:

1.- Ejecutar el comando para tener los últimos cambios:
**npm run build**
2.- **Subir al directorio** deseado donde se desplegara la página web como sitio html estático.
3.- (opcional) Crear **archivo de variables de entorno .env **para configurar la conexión a la base de datos firebase que puede encontrar en la configuración de firebase > general > Web apps > Config.
4.- (opcional) **Configurar base de datos** según los cambios necesarios.

Por <a href="https:webrocket.services">Saúl Sánchez @ WebRocketServices</a>
