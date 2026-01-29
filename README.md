# Task Board Lite

Task Board Lite is a simple Kanban-style task management application built using **Spring Boot** for the backend and **React** for the frontend.  
The application allows users to create, update, delete, and manage tasks across different statuses with filtering support.

---

## 🚀 Features

- Create, edit, and delete tasks
- Kanban-style task board with three columns:
  - TODO
  - IN_PROGRESS
  - DONE
- Filter tasks by status and priority
- Modal-based task creation and editing
- RESTful APIs with proper validation and error handling
- Persistent data storage using PostgreSQL

---

## 🛠 Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

### Frontend
- React
- Axios
- HTML, CSS, JavaScript

### Database
- PostgreSQL

---

## 📂 Project Structure

Task_Board_Lite
│
├── taskboard
│ └── Spring Boot backend application
│
├── task-board-lite-frontend
│ └── React frontend application
│
├── screenshots
│ ├── task_panel.png
│ ├── task_create.png
│ └── task_edit.png
│
└── README.md


---

## ▶ How to Run the Project

### 🔹 Prerequisites
- Java 17 or higher
- Node.js (v16 or higher)
- PostgreSQL
- Maven

---

## ▶ Backend Setup (Spring Boot)

### 1️⃣ Create PostgreSQL Database and User

```sql
CREATE DATABASE task_board_lite;

CREATE USER task_user WITH PASSWORD 'task_pass';

GRANT ALL PRIVILEGES ON DATABASE task_board_lite TO task_user;

\c task_board_lite
GRANT ALL ON SCHEMA public TO task_user;


2️⃣ Configure application.properties

spring.datasource.url=jdbc:postgresql://localhost:5432/task_board_lite
spring.datasource.username=task_user
spring.datasource.password=task_pass

spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

3️⃣ Run Backend

From IDE (Eclipse / IntelliJ):

Open the taskboard project

Run as Spring Boot App

OR using terminal:

cd taskboard
mvn spring-boot:run


Backend will run at:

http://localhost:8080

▶ Frontend Setup (React)
1️⃣ Navigate to frontend folder
cd task-board-lite-frontend

2️⃣ Install dependencies
npm install

3️⃣ Start frontend application
npm start


Frontend will run at:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks?status=&priority=	Filter tasks
POST	/api/tasks	Create a task
PUT	/api/tasks/{id}	Update a task
DELETE	/api/tasks/{id}	Delete a task

📸 Screenshots

### Task Board Pannel
 ![Task Pannel]()

### Create Task
 ![Create Task]()

### Edit Task
 ![Edit Task]()

Create Task

Edit Task

🤖 AI Usage Disclosure

AI tools were used for initial guidance and boilerplate suggestions.
All code was reviewed, understood, modified, and tested manually.

⚖ Assumptions and Trade-offs

UI kept minimal to focus on core functionality

Drag-and-drop functionality not implemented due to time constraints

Authentication and authorization are out of scope

⏱ Future Improvements

Drag-and-drop task movement

Search tasks by title

Pagination for large task lists

User authentication and authorization

Improved UI and responsiveness
