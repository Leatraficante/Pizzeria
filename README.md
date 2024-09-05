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
- **2024-04-05:** Implementación de rutas y controladores en el microservicio de auth.
- **2024-04-05:** Creación de archivo de servicio y repositorio en microservicio de auth.
- **2024-04-05:** Creación de archivo de custom exceptions y utils en carpeta de utils
- **2024-04-08:** Trabajo sobre el ms.auth en el service y repository (funciones de register y login). 
- **2024-05-28:** Implementación de JWT y PASSPORT en config > passport.js.
- **2024-05-28:** Funciones basicas del microservicio de auth (register, login, logout)
- **2024-05-31:** Correciones en el microservicio de auth (register, login, logout). Creacion del repository del ms.users, el ms.auth usa el repository de ms.users (eliminación del repository en ms.auth)
- **2024-06-03:** Correciones en el microservicio de auth (logout). Instalación de cookie-parser que era lo que estaba generando el error en el logout. 
- **2024-06-13:** Primeros trabajos en el microservicio de usuarios. Service y Repository. Correccion en ms de auth. Creacion de carpeta y archivo de testeos para realizar mas adelante.
- **2024-09-04:** Mejoras en el funcionamiento de logout. Pruebas con postman. 

## Próximos Pasos

Pendientes y próximas funcionalidades que se planean implementar en el proyecto:

- [ ] Implementar rutas y controladores para la gestión de usuarios. 
- [ ] Crear las rutas y controladores para la gestión de productos.
- [ ] Integrar la funcionalidad de generación de pedidos y gestión del carrito de compras.
- [ ] Implementar envío de correos electrónicos de confirmación de pedidos.
- [ ] Mejorar la interfaz de usuario con estilos y componentes más atractivos.
- [ ] Añadir pruebas unitarias y de integración para garantizar la calidad del código.
- [ ] Documentar el proceso de instalación, configuración y uso en detalle.

- [ ] Optimización de rendimiento: Identificar y mejorar áreas de la aplicación que pueden beneficiarse de mejoras de rendimiento.
- [ ] Seguridad: Implementar medidas adicionales de seguridad, como la validación de datos de entrada y la protección contra ataques de inyección.
- [ ] Internacionalización y localización: Incorporar soporte para múltiples idiomas y culturas.
- [ ] Escalabilidad: Diseñar la arquitectura de la aplicación para que sea escalable a medida que crece el número de usuarios.
- [ ] Monitoreo y registro: Configurar herramientas de monitoreo y registro para supervisar el rendimiento de la aplicación y registrar eventos relevantes.
- [ ] Documentación adicional: Agregar más detalles a la documentación del proyecto, como guías de contribución y guías de estilo de código.
- [ ] Feedback de usuarios: Recopilar y analizar comentarios de los usuarios para identificar áreas de mejora y nuevas características solicitadas.
- [ ] Refactorización de código: Revisar y refactorizar el código existente para mejorar la legibilidad y la mantenibilidad.
- [ ] Integraciones externas: Investigar y añadir integraciones con servicios externos que puedan mejorar la funcionalidad de la aplicación.
- [ ] Pruebas de usuario final: Realizar pruebas con usuarios finales para obtener retroalimentación sobre la usabilidad y la experiencia del usuario.

MEJORAS: 
- [ ] Funcionalidad para recuperar password