# 🐱 Random Cat Generator
![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-violet)
<img align="right" alt="License MIT" src="https://img.shields.io/badge/LICENSE-MIT-green" /> <br/><br/>
<img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img alt="css3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
<img alt="javascript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
<br/><br/>
![Vista previa del generador de gatitos aleatorios modo claro](https://github.com/CrisCorreaS/random-cat-generator/blob/main/img/visualizaci%C3%B3n/generador-vista-clara.png)

Este generador de gatitos aleatorios ha sido creado por **[Cristina Correa](https://www.linkedin.com/in/cristina-correa-segade/)**

## 👀 Vista Previa

### ➡️ **Demo desplegada en GitHub Pages:** **[Haz click aquí](https://criscorreas.github.io/random-cat-generator/)**

#### Vista del generador de gatitos aleatorios
- **Modo Claro**
![Vista previa del generador de gatitos aleatorios modo claro](https://github.com/CrisCorreaS/random-cat-generator/blob/main/img/visualizaci%C3%B3n/generador-vista-clara.png)

- **Modo Oscuro**
![Vista previa del generador de gatitos aleatorios modo oscuro](https://github.com/CrisCorreaS/random-cat-generator/blob/main/img/visualizaci%C3%B3n/generador-vista-oscura.png)

### Funcionalidades:
 1️⃣ **Creación de imágenes de gatitos aleatorios**:
  - Crea imágenes de gatitos en tiempo real.
    
 ![Vista previa de las funcionalidades del conversor](https://github.com/CrisCorreaS/random-cat-generator/blob/main/video/feature1.gif)

 2️⃣ **Interfaz con modo claro y oscuro**:
  - La página tiene una versión clara y una versión oscura, las cuales se pueden cambiar desde el botón superior derecho.
    
 ![Vista previa de las funcionalidades del conversor](https://github.com/CrisCorreaS/random-cat-generator/blob/main/video/feature2.gif)

## 🌱 Características

- **Generación de Fotos de Gatitos Random**: Utiliza una API para obtener fotos de gatitos aleatorias y las muestra en la página web.
- **Contador de Gatitos Vistos**: Lleva un registro del número de gatitos que el usuario ha visto en la sesión actual o en general.
- **Botón de Actualización**: Permite al usuario actualizar la foto actual de manera manual haciendo clic en un botón de actualización o de "refresh".
- **Modo Claro/Oscuro**: Ofrece la opción de cambiar entre un tema de diseño claro y uno oscuro para adaptarse a las preferencias de los usuarios.
- **Interfaz de Usuario Intuitiva**: Diseña una interfaz de usuario fácil de usar y navegar para que los usuarios puedan interactuar sin problemas con la aplicación.
- **Conexión a una API**: Conexión con ajax y jQuery a [The Cat API](https://thecatapi.com/) que devuelve datos en formato json.
 
## 🛠️ Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- [The Cat API](https://api.thecatapi.com/v1/images/search)

## 🤖 API
- Al acceder a la [API de The Cat API](https://thecatapi.com/), obtenemos fotos de varios gatitos. La API tiene una versión gratuíta y una de pago, por lo que en mi caso, únicamente utilizo las funciones gratuitas. Un ejemplo de la llamada a la API sería haciendo "https://api.thecatapi.com/v1/images/search" lo cual nos devuelve:
 ```
[{"id":"10j","url":"https://cdn2.thecatapi.com/images/10j.jpg","width":500,"height":335}]
 ```

## 🔎💡 Información
> [!IMPORTANT]
> - Este es un proyecto para principiantes. No se requieren conocimientos avanzados de HTML, CSS o JavaScript, pero sí saber cómo hacer conexiones a apis y las bases de jQuery.
> - Está desarrollado utilizando JavaScript con jQuery. Sin embargo, si estás buscando un poco más de desafío, ¡siéntete libre de explorar la posibilidad de integrar un framework!
> - **Nivel de dificultad del proyecto:** 🔴⭕⭕⭕⭕⭕⭕⭕⭕⭕ (1 sobre 10)

> [!TIP]
> A la hora de desarrollar el proyecto, te pueden venir bien los siguientes recursos:
> - [API de Obtención de Gatitos](https://thecatapi.com/)
> - CSS
>    - [Manz.Dev Lenguaje CSS](https://lenguajecss.com/css/)
> - JavaScript:
>    - [Manz.Dev Lenguaje Javascript](https://lenguajejs.com/javascript/)
>    - [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
> - jQuery:
>    - [Documentación Oficial de jQuery](https://jquery.com/)
>    - [Curso de jQuery - Didacticode](https://didacticode.com/curso/curso-de-jquery/)
> - Font Awesome
>    - [Font Awesome Get Started](https://fontawesome.com/docs/web/setup/get-started)
>    - [Font Awesome Documentation](https://fontawesome.com/v5/docs/web/reference-icons/)

## 📓 Cómo Usar

1. Descarga o clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

¡Y eso es todo! Ahora cualquier persona puede usar un generador de gatitos aleatorios desde un dispositivo.

## ✨ Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el generador de gatitos aleatorios existente, como agregar más contenido o mejorar el diseño, no dudes en enviar tus pull requests. También puedes sugerir nuevas funcionalidades o brindar retroalimentación para hacer que este proyecto sea aún mejor.
