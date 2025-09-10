# Aplicación Bookstore

Una aplicación completa de librería construida con **Spring Boot** (backend) y **React** (frontend), conectada a **PostgreSQL** en Railway.

# Funcionalidades
- Gestión de libros (título, autor, precio, URL de portada, URL del archivo)
- Usuarios y roles (USER / ADMIN)
- Pedidos y elementos de pedidos (orders y order items)
- Endpoints REST para operaciones CRUD


# Estructura del Proyecto
- `src/main/java/com/example/bookstore/model` → Entidades JPA
- `src/main/java/com/example/bookstore/repository` → Repositorios Spring Data JPA
- `src/main/java/com/example/bookstore/controller` → Controladores REST
- `src/main/resources/application.properties` → Configuración de la base de datos y Spring Boot

# Base de Datos
Tablas:
- `book` → id, title, author, price, cover_url, file_url
- `user` → id, username, email, password, role
- `order` → id, user_id, total_price, status
- `order_item` → id, order_id, book_id, quantity, price

Base de datos alojada en **PostgreSQL de Railway**.


## Variables de Entorno
- `DATABASE_URL` → Cadena de conexión PostgreSQL (proporcionada por Railway)


## Ejecutando el Proyecto
1. Configura la variable de entorno `DATABASE_URL`.
2. Ejecuta el backend Spring Boot: `mvn spring-boot:run` o desde tu IDE.
3. Ejecuta el frontend React (paso posterior).


## Notas
- Solo utiliza libros de dominio público o archivos de ejemplo.
- El backend maneja libros y pedidos, el frontend interactúa mediante la API REST.
