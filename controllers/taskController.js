const tasks = require("../data/TasksData");
const { v4: uuidv4 } = require("uuid");

//  Get all tasks
exports.getAllTasks = (req, res) => {
  const { title } = req.query;

  if (title) {
    const filtered = tasks.filter(t =>
      t.title.toLowerCase().includes(title.toLowerCase())
    );

    return res.json({
      success: true,
      data: filtered,
      message: filtered.length ? "Tasks filtered by title" : "No tasks matched the search"
    });
  }

  res.json({
    success: true,
    data: tasks,
    message: "Tasks fetched successfully"
  });
};

//  Get task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.json({
    success: true,
    data: task,
    message: "Task fetched successfully"
  });
};

//  Create a new task
exports.createTask = (req, res) => {
  const { title, completed = false, description = "" } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      success: false,
      message: "Title is required and must be a string"
    });
  }

  if (typeof completed !== "boolean") {
    return res.status(400).json({
      success: false,
      message: "Completed must be boolean"
    });
  }

  const newTask = {
    id: uuidv4(),
    title,
    completed,
    description
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    data: newTask,
    message: "Task created successfully"
  });
};

//  Update a task
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const { title, completed, description } = req.body;

if (title !== undefined && typeof title !== "string") {
 return res.status(400).json({
 success:false,
 message:"Title must be string"
 });
}  if (completed !== undefined) task.completed = completed;
  if (description !== undefined) task.description = description;

  res.json({
    success: true,
    data: task,
    message: "Task updated successfully"
  });
};

//  Delete a task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const deleted = tasks.splice(index, 1)[0];

  res.json({
    success: true,
    data: deleted,
    message: "Task deleted successfully"
  });
};

//  Stats endpoint
exports.getStats = (req, res) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  res.json({
    success: true,
    data: {
      totalTasks: total,
      completedTasks: completed,
      pendingTasks: pending
    },
    message: "Tasks statistics"
  });
};