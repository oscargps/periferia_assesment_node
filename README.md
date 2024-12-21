# Customer Service API - Node.js Version

Este proyecto es un servicio REST desarrollado con Node.js, TypeScript, Express y Sequelize para la gestión de clientes. Proporciona endpoints para crear, listar y obtener estadísticas de clientes.

## Requisitos Previos

- Node.js 18.x o superior
- MySQL 8.0 o superior
- npm o yarn
- Postman u otra herramienta para pruebas de API REST

## Configuración del Entorno

### 1. Base de Datos

1. Asegúrate de tener MySQL instalado y en ejecución en tu sistema
2. Crea la base de datos ejecutando:

```sql
CREATE DATABASE IF NOT EXISTS `periferia-customers`;

USE `periferia-customers`;

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    identity_document VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    date_of_birth DATE NOT NULL,
    time_zone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. Configuración de la Aplicación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
# o si usas yarn
yarn install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=periferia-customers
PORT=3001
```

### 3. Dependencias Principales

El proyecto utiliza las siguientes dependencias principales definidas en `package.json`:

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "debug": "^4.3.6",
    "dotenv": "^8.2.0",
    "express": "^4.18.2",
    "http-status": "^1.6.2",
    "mysql2": "^3.4.3",
    "sequelize": "^6.32.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.17",
    "nodemon": "^3.1.4",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  }
}
```

## Ejecutar la Aplicación

1. Para desarrollo:

```bash
# Usando npm
npm run dev

# Usando yarn
yarn dev
```
La aplicación estará disponible en `http://localhost:3001`

## Endpoints Disponibles

### 1. Crear nuevo cliente
- **URL**: `/api/customers/new`
- **Método**: POST
- **Body**:

```json
{
    "fullName": "John Doe",
    "identityDocument": "1234567890",
    "email": "john.doe@example.com",
    "dateOfBirth": "1990-01-01",
    "timeZone": "America/New_York"
}
```
- **Respuesta exitosa**: Status 201 (CREATED)

### 2. Obtener todos los clientes ordenados por nombre
- **URL**: `/api/customers/all`
- **Método**: GET
- **Respuesta**: Lista de clientes ordenada por nombre

### 3. Obtener clientes ordenados por edad
- **URL**: `/api/customers/allByAge`
- **Método**: GET
- **Respuesta**: Lista de clientes ordenada por edad

### 4. Obtener promedio de edad de clientes
- **URL**: `/api/customers/ageAverageCustomers`
- **Método**: GET
- **Respuesta**: 

```json
{
    "customerCount": 10,
    "averageAge": 35.5
}
```


## Pruebas con Postman

1. Importa la siguiente colección de Postman:
   - [Customer Service Collection](URL_de_tu_colección)

2. Prueba los endpoints en el siguiente orden:
   - Crear un nuevo cliente (POST)
   - Verificar la lista de clientes (GET /all)
   - Obtener la lista ordenada por edad (GET /allByAge)
   - Consultar el promedio de edad (GET /ageAverageCustomers)

## Pruebas con cURL

### Crear nuevo cliente

```bash
curl -X POST http://localhost:3001/api/customers/new \
-H "Content-Type: application/json" \
-d '{
    "fullName": "John Doe",
    "identityDocument": "1234567890",
    "email": "john.doe@example.com",
    "dateOfBirth": "1990-01-01",
    "timeZone": "America/New_York"
}'
```

### Obtener todos los clientes

```bash
curl http://localhost:3001/api/customers/all
```

### Obtener clientes ordenados por edad

```bash
curl http://localhost:3001/api/customers/allByAge
```

### Obtener promedio de edad

```bash
curl http://localhost:3001/api/customers/ageAverageCustomers
```

## Solución de Problemas Comunes

1. **Error de conexión a la base de datos**
   - Verifica que MySQL esté en ejecución
   - Confirma las credenciales en el archivo .env
   - Asegúrate de que el puerto de MySQL esté disponible

2. **Error al crear cliente**
   - Verifica que el email sea único
   - Asegúrate de que el documento de identidad sea único
   - Confirma el formato correcto de la fecha (YYYY-MM-DD)

## Scripts Disponibles

```json
{
  "scripts": {
    "dev": "set DEBUG=periferia:*  & nodemon ./src/index.ts"
  }
}
```

## Contribuir

1. Fork el repositorio
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
