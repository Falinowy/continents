# Continents Backend

Spring Boot application for managing continents and countries data.

## Technologies
- **Java 21**
- **Spring Boot 3.3.4**
- **JPA / Hibernate**
- **Oracle Database**
- **Maven**
- **Lombok**

## Configuration
Before running, ensure you have an Oracle instance running and update `src/main/resources/application.properties` with your credentials:
```properties
spring.datasource.url=jdbc:oracle:thin:@localhost:1521/FREEPDB1
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Running the app
1. Go to the `backend` folder:
   ```bash
   cd backend
   ```
2. Build and run:
   ```bash
   mvn spring-boot:run
   ```

## Endpoints
- `GET /api/continents` - fetch all continents
- `POST /api/continents` - add new continent
- `GET /api/countries/region/{regionName}` - fetch countries by region (e.g., /api/countries/region/Europe)
- `POST /api/countries` - add custom country
