# Rentique 

**Rentique** is a fashion rental platform built to promote sustainable fashion, allowing users to browse and rent premium outfits and accessories through an intuitive web interface.

---

##  Project Purpose

Aligned with circular fashion principles and UN SDG 12 (Responsible Consumption), Rentique helps reduce single-use garment waste by enabling users to rent items for special occasions.

---

##  Current Features

- Clean frontend built with **React** (via Vite) with categories for Men/Women → Western, Ethnic, Accessories  
- Modern responsive UI: 3D-style product cards, hover effects, dark/light mode toggle, wishlist animation, and “Rent Now” buttons 
- Designer collaboration via “Sell With Us” form 
- **Spring Boot** backend with **MySQL** integration serving RESTful APIs  

---

##  Tech Stack

| Layer     | Technologies                        |
|-----------|-------------------------------------|
| Frontend  | React, Vite, JavaScript, HTML5, CSS3, Tailwind (or custom CSS), Font Awesome, Google Fonts |
| Backend   | Spring Boot (Java), MySQL, Maven |
| DevOps    | Docker, Docker Compose, GitHub Actions |
| Build     | npm (frontend), Maven (backend) |


---

##  Quick Start (Dockerized)

The easiest way to run Rentique locally is via Docker Compose:

```bash
docker-compose up --build
```
This will automatically spin up the MySQL database, Spring Boot backend, and React frontend.

---

##  Quick Start (Manual)

### Prerequisites
- Node.js & npm  
- Java 17+ & Maven 
- MySQL server

### 1. Clone the repo
```bash
git clone https://github.com/Kesav2k04/Rentique.git
cd Rentique
```

### 2. Run Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Run Backend
- Ensure MySQL is running and accessible.
- Configure DB credentials in `backend/src/main/resources/application.properties`.
- Build and start:
```bash
cd backend
./mvnw spring-boot:run
```

---

 Roadmap

 JWT Authentication & Role-based Access Control
 Dummy Payment Integration for checkout
 Order history, booking management
 Admin / Designer dashboards for inventory control

---


 API Status

Base: /api/products – list, details, search
Wishlist: /api/wishlist – add/remove/view
Designer Form: /api/designers – submission endpoint

---


 Contributing

Fork this repo 
Create a feature branch 
Implement and commit with descriptive messages
Push and open a Pull Request
Please follow code style conventions and add tests when applicable.

---


 License

Copyright © 2025 Kesav Kumar J

This project is made publicly visible for educational and professional demonstration purposes only.
Any form of copying, modification, distribution, or use — in full or part — without explicit written permission from the author is strictly prohibited.
For inquiries or collaboration, please contact kesavk659@gmail.com.

---


 Author

Kesav Kumar J
B.Tech IT @ Sri Krishna College of Technology
Full-Stack Developer & Cloud Enthusiast
