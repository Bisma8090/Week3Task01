const { v4: uuidv4 } = require("uuid");

let tasks = [
  {
    id: uuidv4(),
    title: "Build a Mini Express Blog",
    completed: false,
    description: "Create a small blog app using Express.js to practice routing, middleware, and handling JSON data. Add a few posts and try editing them dynamically."
  },
  {
    id: uuidv4(),
    title: "Design an Animated Portfolio",
    completed: false,
    description: "Design your personal portfolio website using CSS animations and transitions. Showcase your projects creatively and add hover effects for interactivity."
  },
  {
    id: uuidv4(),
    title: "Explore AI or Web3 Trends",
    completed: true,
    description: "Read a trending article on AI or Web3 technology. Summarize key takeaways and note how it can be applied to a small project."
  },
  {
    id: uuidv4(),
    title: "Solve 5 Challenging JS Problems",
    completed: false,
    description: "Practice coding problems on HackerRank, LeetCode, or Codewars. Focus on problem-solving, algorithms, and edge cases."
  },
  {
    id: uuidv4(),
    title: "Experiment with a Node.js Module",
    completed: true,
    description: "Pick a Node.js module like axios, fs-extra, or nodemailer, and create a tiny project to understand its functionality practically."
  },
  {
    id: uuidv4(),
    title: "Create a Mini Game (HTML/CSS/JS)",
    completed: false,
    description: "Build a fun mini-game like Tic-Tac-Toe, Snake, or Memory Game. Include score tracking, simple animations, and user interaction."
  },
  {
    id: uuidv4(),
    title: "Master Advanced CSS Layouts",
    completed: true,
    description: "Watch tutorials on Grid and Flexbox. Recreate a complex layout from scratch to understand responsive design deeply."
  },
  {
    id: uuidv4(),
    title: "Automate a Repetitive Task",
    completed: false,
    description: "Write a small JavaScript script to automate boring tasks like file renaming, sending emails, or formatting data."
  },
  {
    id: uuidv4(),
    title: "Fetch Real-Time Data from an API",
    completed: true,
    description: "Use fetch or axios to get live data from a public API and display it dynamically on a webpage."
  },
  {
    id: uuidv4(),
    title: "Deploy a Mini Project Online",
    completed: false,
    description: "Take a small project and deploy it live using Vercel or Netlify. Share the link and check if it works on mobile and desktop."
  }
];

module.exports = tasks;