# Proyecto de Pizzería Online

Proyecto de desarrollo de una aplicación de pedidos de pizzas en línea con autenticación de usuarios, gestión de pedidos y productos, utilizando microservicios y Node.js.

## Descripción

Este proyecto tiene como objetivo desarrollar una plataforma de pedidos de pizzas en línea. Utiliza microservicios para gestionar diferentes aspectos del sistema, incluyendo autenticación de usuarios, gestión de productos y pedidos.

## Dependencias

### Dependencias Generales

- **bcrypt:** Librería para el hashing de contraseñas.
- **body-parser:** Middleware para parsear datos del cuerpo de las solicitudes HTTP.
- **connect-mongo:** Conector para MongoDB utilizado para almacenar sesiones de Express.
- **cors:** Middleware para habilitar el intercambio de recursos entre diferentes dominios.
- **dotenv:** Módulo para cargar variables de entorno desde un archivo `.env`.
- **express:** Framework web para Node.js utilizado para el desarrollo de aplicaciones web y APIs.
- **jsonwebtoken:** Implementación de JSON Web Tokens (JWT) para autenticación.
- **mongoose:** ODM (Object-Document Mapping) para MongoDB.
- **passport:** Middleware para autenticación de usuarios en aplicaciones Node.js.
- **passport-jwt:** Estrategia de Passport para la autenticación mediante JSON Web Tokens (JWT).
- **swagger-jsdoc:** Herramienta para generar documentación de API a partir de comentarios en el código fuente.
- **swagger-ui-express:** Middleware para exponer la documentación de Swagger en Express.
- **uuid:** Generador de identificadores únicos.
- **winston:** Biblioteca de registro (logging) para Node.js.
- **winston-daily-rotate-file:** Transporte de registro diario para winston.

### devDependencies

- **@babel/eslint-parser:** Analizador de ESLint compatible con Babel.
- **eslint:** Herramienta de linting para JavaScript.
- **eslint-config-node:** Configuración de ESLint para proyectos Node.js.
- **eslint-config-prettier:** Configuración de ESLint para integración con Prettier.
- **eslint-plugin-node:** Plugin de ESLint con reglas específicas para entornos Node.js.
- **eslint-plugin-prettier:** Plugin de ESLint para integración con Prettier.
- **prettier:** Formateador de código JavaScript y otros lenguajes.

## Registro de Cambios

- **2024-03-28:** Inicio del proyecto.
- **2024-03-28:** Creación de la estructura básica del proyecto.
- **2024-03-29:** Implementación de rutas globales y creación del modelo de usuarios.
- **2024-03-30:** Actualización del modelo de usuarios.
- **2024-04-03:** Creación del modelo de productos y actualizaciones en los validadores.
- **2024-04-03:** Creación del microservicio de envío de correos electrónicos y actualización del enrutador.
- **2024-04-04:** Integración de ESLint, Prettier y actualización de dependencias.
- **2024-04-04:** Creación archivo README.md.


## Próximos Pasos

Aquí se enumeran algunas de las tareas pendientes y próximas funcionalidades que se planean implementar en el proyecto:

- [ ] Implementar y configurar passportJWT.
- [ ] Implementar rutas y controladores para la gestión de usuarios.
- [ ] Desarrollar las funcionalidades de autenticación de usuarios utilizando Passport.js.
- [ ] Crear las rutas y controladores para la gestión de productos.
- [ ] Integrar la funcionalidad de generación de pedidos y gestión del carrito de compras.
- [ ] Implementar envío de correos electrónicos de confirmación de pedidos.
- [ ] Mejorar la interfaz de usuario con estilos y componentes más atractivos.
- [ ] Añadir pruebas unitarias y de integración para garantizar la calidad del código.
- [ ] Documentar el proceso de instalación, configuración y uso en detalle.

¡Siéntete libre de agregar, modificar o eliminar elementos de esta lista según sea necesario para reflejar los próximos pasos en el desarrollo de tu proyecto!
