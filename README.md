# Rentique 👗

**Rentique** is a fashion rental platform built to promote sustainable fashion, allowing users to browse and rent premium outfits and accessories through an intuitive web interface.

---

## 🌱 Project Purpose

Aligned with circular fashion principles and UN SDG 12 (Responsible Consumption), Rentique helps reduce single-use garment waste by enabling users to rent items for special occasions.

---

## 🧩 Current Features

- Clean frontend built with **React** (via Vite) with categories for Men/Women → Western, Ethnic, Accessories  
- Modern responsive UI: 3D-style product cards, hover effects, dark/light mode toggle, wishlist animation, and “Rent Now” buttons 
- Designer collaboration via “Sell With Us” form 
- **Spring Boot** backend with **MySQL** integration serving RESTful APIs  

---

## 🛠️ Tech Stack

| Layer     | Technologies                        |
|-----------|-------------------------------------|
| Frontend  | React, Vite, JavaScript, HTML5, CSS3, Tailwind (or custom CSS), Font Awesome, Google Fonts |
| Backend   | Spring Boot (Java), MySQL, Maven |
| Testing   | TBD |
| Build     | npm (frontend), Maven/Gradle (backend) |


---

## 🚀 Quick Start

### Prerequisites
- Node.js & npm  
- Java 11+ & Maven or Gradle  
- MySQL server

### 1. Clone the repo
git clone https://github.com/Kesav2k04/Rentique.git
cd Rentique

### 2. Run Frontend
cd client
npm install
npm run dev

### 3. Run Backend
- Ensure MySQL is running and accessible.
- Configure DB credentials in server/src/main/resources/application.properties.
- Build and start:
cd server
./mvnw spring-boot:run
- Default API port: http://localhost:8080.

---

🎯 Roadmap

🔒 JWT Authentication & Role-based Access Control

🧱 Containerization & Deployment (Docker, CI/CD pipelines)

💳 Dummy Payment Integration for checkout

📦 Order history, booking management

🎨 Admin / Designer dashboards for inventory control


---


📋 API Status

Base: /api/products – list, details, search

Wishlist: /api/wishlist – add/remove/view

Designer Form: /api/designers – submission endpoint
(JWT-protected routes will be enabled when implemented)


---


🤝 Contributing

Fork this repo 📁

Create a feature branch 
-- git checkout -b feature/xyz

Implement and commit with descriptive messages

Push and open a Pull Request

Please follow code style conventions and add tests when applicable.


---


📄 License

Copyright © 2025 Kesav Kumar J

This project is made publicly visible for educational and professional demonstration purposes only.
Any form of copying, modification, distribution, or use — in full or part — without explicit written permission from the author is strictly prohibited.
For inquiries or collaboration, please contact kesavk659@gmail.com.



---


👤 Author

Kesav Kumar J
B.Tech IT @ Sri Krishna College of Technology
Full-Stack Developer & Cloud Enthusiast


---


💡 Note: JWT authentication and deployment (Docker/CI) are not yet implemented; will be added soon as backend matures.


