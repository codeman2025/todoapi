# Todo API & Live Demo

Welcome to the **Todo API** project — a lightweight RESTful API for managing todos, plus a clean, modern frontend demo.

Check out the live demo here:  
[https://codeman2025.github.io/todoapi](https://codeman2025.github.io/todoapi)

---

## Features

- Simple REST API for creating, listing, and deleting todos  
- Secure and minimal backend built with Express and CORS  
- Live frontend demo to interact with the API in real-time

---

## Using the API

Use the API directly via the hosted URL or your own deployment (if allowed).

### API Endpoints

| Method | Endpoint           | Description              | Request Body               |
|--------|--------------------|--------------------------|----------------------------|
| GET    | `/api/todos`       | Retrieve all todo items  | None                       |
| POST   | `/api/todos`       | Create a new todo item   | `{ "task": "Your task" }`  |
| DELETE | `/api/todos/:id`   | Delete a todo by its ID  | None                       |

---

## Example Frontend

Live demo at:  
[https://codeman2025.github.io/todoapi](https://codeman2025.github.io/todoapi)

The example site lets you:

- View current todos  
- Add new todos  
- Delete todos  

**Note:** The example is configured to use the hosted API URL. Update `API_BASE` inside `index.html` if needed.

---

## Deployment

You can deploy this backend if you have permission. Otherwise, use the hosted API.

---

## License & Usage Restrictions

This repository’s source code and backend are **not open for cloning, modification, or redistribution**.

You may use the hosted API and example frontend **as provided** for development and testing.

Unauthorized cloning, hosting, or modification of this codebase is strictly prohibited.

For licensing questions, please contact Lucas (codeman2025) on GitHub.

---

## Contributions & Feedback

Feel free to reach out with issues or suggestions!

---

Made with 💙 by Lucas (codeman2025)
