# 🚀 Mini Compliance Tracker

A simple full-stack web application to manage compliance tasks for multiple clients.
Built as an end-to-end working product with a focus on usability and clean structure.

---

## ✨ Features

* 👥 View list of clients
* 📋 View tasks for a selected client
* ➕ Add new compliance tasks
* 🔄 Update task status (Pending → Completed)
* 🔍 Filter tasks by status and category
* 🔴 Highlight overdue tasks clearly
* 📊 Dashboard stats (Total / Pending / Overdue)

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS

**Backend**

* Spring Boot
* Spring Data JPA

**Database**

* MySQL

---

## 📂 Project Structure

```
Mini Compliance Tracker/
│
├── backend/        # Spring Boot application
├── frontend/       # React + Tailwind UI
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend (Spring Boot)

1. Navigate to backend folder

```
cd backend
```

2. Configure MySQL in `application.properties`

```
spring.datasource.url=jdbc:mysql://localhost:3306/compliance_tracker
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

3. Run the application

* Using IDE (Run main class)
  OR

```
mvn spring-boot:run
```

👉 Backend runs on: `http://localhost:8080`

---

### 🔹 Frontend (React)

1. Navigate to frontend folder

```
cd frontend
```

2. Install dependencies

```
npm install
```

3. Start development server

```
npm run dev
```

👉 Frontend runs on: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | /clients           | Get all clients      |
| POST   | /clients           | Add single client    |
| POST   | /clients/bulk      | Add multiple clients |
| GET    | /tasks/client/{id} | Get tasks for client |
| POST   | /tasks/client/{id} | Create task          |
| PUT    | /tasks/{id}/status | Update task status   |

---

## 📌 Assumptions

* Clients are pre-seeded using API (Postman)
* Authentication is not implemented (out of scope)
* Focus is on task tracking functionality

---

## ⚖️ Trade-offs

* Kept UI simple and clean instead of overly complex
* No authentication to keep development within time constraints
* Filtering handled via backend APIs for better structure

---

## 🌟 Future Improvements

* User authentication (JWT / OAuth)
* Search and sorting
* Role-based access
* Notifications for overdue tasks
* Docker deployment

---

## 📷 Demo

(Add your deployed link here after hosting)

---

## 👨‍💻 Author

Rajat Patle

---

## 💡 Note

This project was built within a limited time frame with a focus on delivering a working end-to-end solution.
