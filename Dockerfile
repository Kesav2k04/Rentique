FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY backend/. .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

ENV PORT=8080

EXPOSE 8080

CMD ["java", "-jar", "target/RentiqueProj-0.0.1-SNAPSHOT.jar"]
