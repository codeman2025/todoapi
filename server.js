/*
 * Todo API & Frontend
 * Copyright (c) 2025 Lucas (codeman2025)
 * All rights reserved.
 *
 * Use of this code is limited to accessing the hosted API and example frontend only.
 * Cloning, modification, or redistribution of this codebase is prohibited.
 */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to your To-Do API! Use /api/todos to get started.');
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json({ todos });
});

// Add a todo
app.post('/api/todos', (req, res) => {
  const task = req.body.task;
  if (typeof task !== 'string' || !task.trim()) {
    return res.status(400).json({ error: 'Task must be a non-empty string' });
  }
  const newTask = { id: Date.now(), task: task.trim() };
  todos.push(newTask);
  res.status(201).json(newTask);
});

// Delete a todo by id
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;
  todos = todos.filter(t => t.id !== id);
  if (todos.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted' });
});

// Update a todo by id
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newTaskText = req.body.task;
  if (typeof newTaskText !== 'string' || !newTaskText.trim()) {
    return res.status(400).json({ error: 'Task must be a non-empty string' });
  }
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Task not found' });
  }
  todo.task = newTaskText.trim();
  res.json(todo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`To-Do API live on port ${PORT}`));

