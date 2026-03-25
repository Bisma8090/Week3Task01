# Task Manager API
Task Manager API is a simple RESTful API built using Node.js and Express.js.
It allows users to perform CRUD operations on tasks such as creating, reading, updating, and deleting tasks.

The API stores data in memory (no database) and returns responses in a consistent JSON format.
Additional features include searching tasks by title and viewing task statistics.

---

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Search tasks by title
- Task statistics endpoint
- Swagger API documentation
- In-memory data storage (no database)

---

## Technologies Used

- Node.js
- Express.js
- UUID
- Swagger UI
- Swagger JSDoc
- Nodemon
- Postman

---

## Project Structure

task-manager-api
│
├── controllers
│ └── taskController.js
│
├── data
│ └── TasksData.js
│
├── middlewares
│ └── middleware.js
│
├── routes
│ └── taskRoutes.js
│
├── swagger.js
├── server.js
└── README.md


---
## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Bisma8090/devsquad26/tree/main/Week3Day1.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Week3Day1
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start 
   ```
   or
    ```bash
   npm run dev 
   ```

4. Server will start at:

    ```bash
   http://localhost:5000/api 
   ```
4. Swagger Documentation:

    ```bash
   http://localhost:5000/api-docs
   ```
## Sample Request

POST /api/tasks

### Request Body

```json
{
  "title": "Learn Express",
  "completed": false,
  "description": "Build a small Express project"
}
```

## Sample Response

```json
{
  "success": true,
  "data": {
    "id": "uuid-example",
    "title": "Learn Express",
    "completed": false,
    "description": "Build a small Express project"
  },
  "message": "Task created successfully"
}
```
## Testing with Postman

All endpoints were tested using **Postman**.  
A Postman collection can be exported and shared for easier API testing.
[Download Postman Collection](./TaskManager-API.postman_collection.json)
