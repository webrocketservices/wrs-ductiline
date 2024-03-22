## Ductiline Website

    Proyecto Web Responsivo con capacidades de CMS y
    secciones dinamicas para configuraciones al vuelo.

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

    - dist/: donde se genera la versión de producción del sitio a desplegarse.
    - public/: para los assets estáticos del sitio.
    - src/: directorio de trabajo
        - src/AppCustomTheme.tsx: Configuración del tema y componentes MUI.
        - src/App.tsx: Archivo index ade la aplicación.
        - src/components/: Componentes base del sistema
        - src/dynamicComponents/: Componentes que se cargan dinámicamente dependiendo la configuración del CMS.
        - src/firebase/: configuración de firebase.
        - src/pages/webiste: Componentes por cada página en el sitio.
        - src/redux/: Para contener los archivos necesarios para el state management de la página, por ahora solo contiene el de firebase para el CMS.
        - src/styles/: contiene los estilos estáticos de MUI CSS para el funcionamiento de la página.
        - src/types/: contiene todos los tipos de los objetos(datos) utilizados.

## Recomendaciones repositorio

    - development: versiones de produccion
    - feat/<tarea>: rama de trabajo de alguna caracteristica

## CLI:

    - Instalar todas las librerias y dependencias:
    ```npm install```
    - Correr el proyecto de manera local:
    ```npm run dev```
    - Crear una versión de producción del sitio:
    ```npm run build```

## Como hacer despliegue a producción del sitio:

1. Ejecutar el comando para tener los últimos cambios:
   ** npm run build **
2. **Subir al directorio** deseado donde se desplegara la página web como sitio html estático.
3. (opcional) Crear **archivo de variables de entorno .env **para configurar la conexión a la base de datos firebase que puede encontrar en la configuración de firebase > general > Web apps > Config.
4. (opcional) **Configurar base de datos** según los cambios necesarios.

---

Por <a href="https:webrocket.services">Saúl Sánchez @ WebRocketServices</a>
