# Student Management System

## Project Overview

The Student Management System is a full-stack web application developed to manage student records. It allows users to add, view, update, and delete student information through a simple and user-friendly interface.

The application uses React for the frontend, Spring Boot for the backend, and MySQL for database management.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios (if used for API requests)

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- MySQL

### Tools
- Visual Studio Code
- IntelliJ IDEA / Eclipse (as applicable)
- Postman
- Git and GitHub

## Features

- Display all student records.
- Add new student details.
- Update existing student information.
- Delete student records.
- Connect the React frontend with the Spring Boot backend.
- Store and manage student data using MySQL.

## Project Structure

```text
Student-Management-System/
│
├── frontend/
│   └── newReact/
│
├── backend/
│   └── demo/
│
├── .gitignore
└── README.md
```

## Backend Setup

1. Open the backend project in your Java IDE.
2. Create a MySQL database named `student_db`.
3. Configure your database username and password in `application.properties`.
4. Make sure MySQL is running.
5. Run the Spring Boot application.

Backend URL:

`http://localhost:8082`

## Frontend Setup

1. Open the frontend folder in Visual Studio Code.
2. Open the terminal.
3. Install the required dependencies:

```bash
npm install
```

4. Start the React application:

```bash
npm run dev
```

Frontend URL:

`http://localhost:5175`

## API Operations

The application supports the following CRUD operations:

- GET – Display student records.
- POST – Add a new student.
- PUT – Update student details.
- DELETE – Delete a student record.

## Learning Outcomes

- Learned how to develop a full-stack application.
- Practiced React components and state management.
- Implemented REST APIs using Spring Boot.
- Connected a backend application with a MySQL database.
- Performed CRUD operations.
- Tested APIs using Postman.
- Learned Git and GitHub for source code management.

## Author

**Divya Borse**

BCA Graduate | Java Full Stack Learner

## Project Status

Completed as a Java Full Stack mini-project.
